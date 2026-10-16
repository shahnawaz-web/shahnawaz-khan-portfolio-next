/**
 * One-off migration tool: converts the original static index.html into JSX components.
 * Markup, class names and text are preserved verbatim; only what React requires is changed
 * (class -> className, inline handlers -> data-attributes, <script> removed, void tags closed...).
 *
 * usage: node scripts/migration/convert-index.mjs <path-to-original-index.html>
 */
import fs from 'fs';
import path from 'path';
import { parseDocument } from 'htmlparser2';
import * as DomUtils from 'domutils';

const SRC = process.argv[2];
const OUT = path.resolve('components');
let html = fs.readFileSync(SRC, 'utf8');
const BLOG = process.argv[3] === 'blog';
if (BLOG) {
  html = html.replace(/ onclick="\{renderBlog\(\d\)\}"/g, '');
  // Replace the hard-coded 'Must Read' list with a placeholder swapped for a data-driven component afterwards
  html = html.replace(/<ul class="space-y-4">[\s\S]*?<\/ul>/, '<div data-placeholder="must-read"></div>');
}
const doc = parseDocument(html, { lowerCaseTags: false, lowerCaseAttributeNames: false, decodeEntities: true });

const VOID = new Set(['area','base','br','col','embed','hr','img','input','link','meta','source','track','wbr']);
const ATTR_MAP = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', colspan: 'colSpan', rowspan: 'rowSpan',
  maxlength: 'maxLength', minlength: 'minLength', autocomplete: 'autoComplete', readonly: 'readOnly',
  srcset: 'srcSet', fetchpriority: 'fetchPriority', crossorigin: 'crossOrigin', referrerpolicy: 'referrerPolicy',
  datetime: 'dateTime', allowfullscreen: 'allowFullScreen', frameborder: 'frameBorder', autofocus: 'autoFocus',
  enctype: 'encType', novalidate: 'noValidate', spellcheck: 'spellCheck', contenteditable: 'contentEditable',
  'accept-charset': 'acceptCharset', inputmode: 'inputMode', usemap: 'useMap', playsinline: 'playsInline',
};
const BOOL = new Set(['disabled','checked','selected','required','readOnly','multiple','hidden','autoFocus','open','noValidate','allowFullScreen','playsInline','controls','autoplay','loop','muted','async','defer']);
const SVG_KEBAB = /^(stroke|fill|clip|text|font|stop|flood|lighting|marker|color|shape|pointer|dominant|alignment|baseline|letter|word|writing|vector|enable|image|paint|glyph|unicode|vert|horiz|overline|underline|strikethrough|panose|stemv|stemh|x-height|cap-height|accent-height|ascent|descent|alphabetic|mathematical|ideographic|hanging|v-|slope|units-per-em|rendering|stdDeviation)/;

function camel(s){ return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase()); }
function cssProp(p){ return p.startsWith('--') ? p : camel(p); }
function styleObj(str){
  const entries = str.split(';').map(s => s.trim()).filter(Boolean).map(s => {
    const i = s.indexOf(':'); return [s.slice(0,i).trim(), s.slice(i+1).trim()];
  });
  return '{{' + entries.map(([k,v]) => `${JSON.stringify(cssProp(k))}: ${JSON.stringify(v)}`).join(', ') + '}}';
}
const needsBraces = v => /["&\\{}]|\n/.test(v) && !(/^[^"&\\{}\n]*$/.test(v));
function attrValue(v){
  if (/["&\\{}<>\n]/.test(v)) return `{${JSON.stringify(v)}}`;
  return `"${v}"`;
}

const flags = { Link: false };
const HANDLERS = [
  [/^toggleServiceCard\(this\)$/, () => ['data-action', 'toggle-service']],
  [/^toggleDropdown\(\)$/, () => ['data-action', 'toggle-dropdown']],
  [/^closeModal\(\)$/, () => ['data-action', 'close-project-modal']],
  [/^closeGithubModal\(\)$/, () => ['data-action', 'close-github-modal']],
  [/^openModal\((\d+)\)$/, m => ['data-open-project', m[1]]],
  [/^openGithubModal\('(.*)'\)$/, m => ['data-github-project', m[1]]],
];

function href(v){
  if (v === '') return '/';
  v = v.replace(/^\/?(src\/pages\/)?index\.html/, '/');
  if (v === '#') return '#';
  if (v.startsWith('#')) return '/' + v;
  if (/case-studies-and-blogs\.html$/.test(v)) return '/blog';
  return v;
}
const isInternal = h => h.startsWith('/') && !h.startsWith('//') && !/\.[a-z0-9]{2,5}($|[?#])/i.test(h);

function attrs(node, tag){
  const out = [];
  for (const [rawName, rawVal] of Object.entries(node.attribs)) {
    let name = rawName, val = rawVal;
    if (name.startsWith('on')) {
      let done = false;
      for (const [re, fn] of HANDLERS) { const m = val.match(re); if (m) { const [n, v] = fn(m); out.push(`${n}=${attrValue(v)}`); done = true; break; } }
      if (!done) throw new Error('Unhandled inline handler: ' + name + '=' + val);
      continue;
    }
    if (name === 'style') { out.push(`style=${styleObj(val)}`); continue; }
    if (tag === 'img' && name === 'src' && val === '') continue;
    if (tag === 'a' && name === 'href') val = href(val);
    if (name === 'xlink:href') name = 'xlinkHref';
    else if (name === 'xmlns:xlink') name = 'xmlnsXlink';
    else if (ATTR_MAP[name]) name = ATTR_MAP[name];
    else if (!/^(aria-|data-)/.test(name) && name.includes('-')) name = camel(name);
    if ((tag === 'input') && name === 'value') name = 'defaultValue';
    if ((tag === 'input') && name === 'checked') name = 'defaultChecked';
    if (BOOL.has(name) || name === 'defaultChecked') { if (val === '' || val === name || val === 'true') { out.push(name); continue; } }
    if (val === '' && !/^(alt|value|defaultValue|href|content|placeholder|title)$/.test(name) ) { out.push(`${name}=""`); continue; }
    out.push(`${name}=${attrValue(val)}`);
  }
  if (/(^|\s)(author-card|skill-item|typewrite|swiper)(\s|$)/.test(node.attribs.class || '')) out.push('suppressHydrationWarning');
  if (node.attribs.id === 'menuToggle') out.push('aria-expanded="false"', 'aria-controls="navMenu"', 'aria-label="Toggle navigation menu"');
  if (node.attribs['data-action'] === 'toggle-dropdown' || /toggleDropdown/.test(node.attribs.onclick || '')) out.push('aria-haspopup="true"', 'aria-expanded="false"');
  return out.length ? ' ' + out.join(' ') : '';
}

function text(t, isFirst, isLast){
  let s = t.replace(/\s+/g, ' ');
  if (s === ' ') return (isFirst || isLast) ? '' : '{" "}';
  const needs = /^ | $|[{}<>&\u00a0]/.test(s) || /[^\x20-\x7e]/.test(s) && false;
  if (/^ | $|[{}<>&\u00a0]/.test(s)) return `{${JSON.stringify(s).replace(/\u00a0/g, '\\u00a0')}}`;
  return s;
}

let anchorDepth = 0;
function node(n, depth, parentTag, idx, siblings){
  if (n.type === 'comment' || n.type === 'directive') return '';
  if (n.type === 'text') {
    const el = siblings.filter(x => x.type !== 'comment');
    const pos = el.indexOf(n);
    const out = text(n.data, pos === 0, pos === el.length - 1);
    return out ? out : '';
  }
  if (n.type === 'script') return '';
  if (n.type === 'style') {
    const css = DomUtils.textContent(n.children);
    return `<style dangerouslySetInnerHTML={{ __html: ${JSON.stringify(css)} }} />`;
  }
  if (n.type !== 'tag') return '';
  let tag = n.name;
  if (tag === 'link') return ''; // body-level <link rel=preload> (broken relative path) — React hoists these and breaks hydration
  if (tag === 'script') return '';
  if (tag === 'style') {
    const css = DomUtils.textContent(n.children);
    return `<style dangerouslySetInnerHTML={{ __html: ${JSON.stringify(css)} }} />`;
  }
  let open = tag, close = tag;
  let a = attrs(n, tag);
  const nestedAnchor = tag === 'a' && anchorDepth > 0; // invalid HTML (<a> in <a>): browsers repaired it, React cannot
  if (nestedAnchor) { open = close = 'span'; a = a.replace(/ (href|target|rel|download)=("[^"]*"|\{[^}]*\})/g, '').replace(/ download(?= |$)/g, ''); }
  if (tag === 'a' && !nestedAnchor && n.attribs.href !== undefined) {
    const h = href(n.attribs.href);
    if (isInternal(h)) { flags.Link = true; open = close = 'Link'; }
  }
  if (VOID.has(tag)) return `<${open}${a} />`;
  if (tag === 'textarea') {
    const v = DomUtils.textContent(n.children);
    return `<textarea${a}${v ? ` defaultValue=${attrValue(v)}` : ''} />`;
  }
  if (tag === 'a') anchorDepth++;
  const kids = n.children.map((c, i) => node(c, depth + 1, tag, i, n.children)).join('');
  if (tag === 'a') anchorDepth--;
  if (!kids.trim()) return `<${open}${a}></${close}>`;
  return `<${open}${a}>${kids}</${close}>`;
}

function pretty(jsx){
  // light formatting: break between tags so files stay diffable (whitespace-safe: only inserts newlines between ">" and "<")
  return jsx.replace(/></g, '>\n<');
}

function write(name, el, extraImports = ''){
  flags.Link = false;
  let jsx = node(el, 0, null, 0, [el]);
  if (name === 'HeroSection') jsx = jsx.replace(/loading="lazy"/g, 'loading="eager"'); // above-the-fold / LCP image must not be lazy
  const imports = (flags.Link ? "import Link from 'next/link'\n" : '') + extraImports;
  const body = pretty(jsx);
  const file = `${imports}${imports ? '\n' : ''}export default function ${name}() {\n  return (\n${body}\n  )\n}\n`;
  const dir = ['Header','Footer'].includes(name) ? 'layout' : 'home';
  fs.writeFileSync(path.join(OUT, dir, name + '.jsx'), file);
  return { name, bytes: file.length, dir };
}

const body = DomUtils.findOne(e => e.name === 'body', doc.children, true);
if (BLOG) {
  const aside = DomUtils.findOne(e => e.name === 'aside', doc.children, true);
  const li = DomUtils.findAll(e => e.name === 'section' && /py-20/.test(e.attribs.class || '') && /0e101b/.test(e.attribs.class || ''), doc.children)[0];
  const w = (name, el) => {
    flags.Link = false;
    let jsx = pretty(node(el, 0, null, 0, [el]));
    jsx = jsx.replace('<div data-placeholder="must-read">\n</div>', '<MustRead />').replace('<div data-placeholder="must-read"></div>', '<MustRead />');
    const imports = (flags.Link ? "import Link from 'next/link'\n" : '') + (jsx.includes('<MustRead') ? "import MustRead from './MustRead'\n" : '');
    fs.writeFileSync(path.join(OUT, 'blog', name + '.jsx'), `${imports}\nexport default function ${name}() {\n  return (\n${jsx}\n  )\n}\n`);
    console.log(name, jsx.length);
  };
  w('BlogSidebar', aside); w('LinkedInConnect', li);
  process.exit(0);
}
const kids = body.children.filter(c => c.type === 'tag');
const hero = kids.find(k => k.attribs.class === 'hero');
const header = hero.children.find(c => c.name === 'header');
const home = hero.children.find(c => c.name === 'section');
const main = kids.find(k => k.name === 'main');
const footer = kids.find(k => k.name === 'footer');
const projectModal = kids.find(k => k.attribs.id === 'projectModal');
const githubModal = kids.find(k => k.attribs.id === 'githubModal');

const mainNames = ['About','AboutStats','Projects','Skills','SkillsStats','Services','ProcessIntro','ProcessSteps','ServicesCta','Faq','Testimonials','TrustBadges','BlogCta','Contact'];
const mainKids = main.children.filter(c => c.type === 'tag');
if (mainKids.length !== mainNames.length) throw new Error('main child count changed: ' + mainKids.length);

const report = [];
report.push(write('Header', header));
report.push(write('HeroSection', home));
mainKids.forEach((el, i) => report.push(write(mainNames[i], el)));
report.push(write('Footer', footer));
report.push(write('ProjectModal', projectModal));
report.push(write('GithubModal', githubModal));
console.table(report);

// Validates blog slugs (unique) and every internal link/anchor in the built HTML. Run after `npm run build`.
import fs from 'fs'
import path from 'path'
import { blogs } from '../data/blogs.js'

const slugs = blogs.map((b) => b.slug)
if (new Set(slugs).size !== slugs.length) { console.error('Duplicate blog slugs'); process.exit(1) }
const root = path.resolve('.next/server/app')
const routes = new Set(['/', '/about', '/services', '/projects', '/skills', '/contact', '/blog', ...slugs.map((s) => `/blog/${s}`)])
let bad = 0
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]))
for (const f of walk(root).filter((f) => f.endsWith('.html') && !f.includes('_not-found'))) {
  const html = fs.readFileSync(f, 'utf8')
  for (const m of html.matchAll(/<a [^>]*href="([^"]+)"/g)) {
    const h = m[1]
    if (!h.startsWith('/') || h.startsWith('//')) continue
    const [p, hash] = h.split('#')
    const route = p === '' ? '/' : p
    if (/\.[a-z0-9]{2,5}$/i.test(route)) { if (!fs.existsSync(path.join('public', route))) { console.error('missing file', h, 'in', f); bad++ } continue }
    if (!routes.has(route.replace(/\/$/, '') || '/')) { console.error('broken link', h, 'in', path.relative(root, f)); bad++ }
  }
}
console.log(bad ? `${bad} broken link(s)` : `OK – ${routes.size} routes, ${slugs.length} unique slugs, no broken internal links`)
process.exit(bad ? 1 : 0)

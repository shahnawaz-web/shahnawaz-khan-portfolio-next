# Migration report

## Backup / inventory
Original upload left untouched (`shahnawaz-khan-portfolio-main.zip`). Inventory: 1 homepage (14 sections + header/hero/footer + 2 project modals + terms/privacy modals), 1 blog reader page, 4 blog posts, ~assets copied unchanged to `public/assets`, resume PDF.

## Routes
`/` `/about` `/services` `/projects` `/skills` `/contact` `/blog` `/blog/{secure-business-website-online, web-journey, performance-optimization, custom-web-app-vs-wordpress}` + 404, `robots.txt`, `sitemap.xml`. No `/experience` (no such content exists). Redirects: `/index.html`, `/src/pages/case-studies-and-blogs.html`, `/case-studies-and-blogs.html`, old `#blog-N` links → article URLs.

## Verified (production build, headless Chromium)
- `next build` OK, 16 pages; `next lint` clean; `npm run check:links` OK (11 routes, unique slugs, no broken internal links).
- No hydration/console errors on /, /about, /services, /projects, /skills, /contact, /blog, article page.
- 31/32 scripted checks passed; the 32nd was a test-harness artefact (same-document hash navigation) and the legacy URL redirect was confirmed in a fresh page.
  Covered: light default with OS dark, theme toggle + persistence, FAQ accordion, service cards, project filter, project/GitHub/terms modals, Esc, slider, form validation, form POST (Formspree **mocked** – no real message sent), mobile menu (touch), no horizontal overflow at 390px, blog card → article, likes, legacy redirects.
- Bundle: 103 kB shared first-load JS, ~106 kB on home.

## NOT verified
- Lighthouse/Core Web Vitals: tool failed to run in the sandbox – no scores claimed.
- Side-by-side screenshots vs original: not done (original loaded icons from CDNs unreachable here). Markup/classes/text are converted programmatically, but please eyeball it.
- Real Formspree delivery; dark-mode visual review of every section; tablet widths.

## Differences from the original (please review)
1. Theme: light by default; class-based dark mode (original followed the OS; its toggle script never ran – `tailwind` undefined error).
2. Contact form: validate → POST to Formspree → success/error. Original ran a fake 2s success plus placeholder EmailJS (non-functional). EmailJS dropped.
3. Not ported because they never worked in the original: `nav-active-logic.js` (syntax error), typewriter/skill-item code (no matching elements), Isotope/Bootstrap JS (unused).
4. `fonts/inter.woff2` was a 0-byte file → removed broken `@font-face`; the site was already rendering the system font.
5. Nested `<a>` inside `<a>` (Contact cards) → inner ones are `<span>` (React cannot hydrate invalid nesting).
6. Structured data: kept Person, ProfessionalService, WebSite, OfferCatalog, FAQPage; **removed** `aggregateRating` (4.9/30 reviews – not backed by on-page reviews), fake `SearchAction`, hash-fragment BreadcrumbList. Added BlogPosting + BreadcrumbList per article. Restore aggregateRating in `data/home-schemas.json` if you can substantiate it.
7. OG/Twitter images pointed at LinkedIn/X profile URLs → now `/assets/images/profile/shahnawaz-khan-web-developer.webp`. Canonical domain defaults to `https://shahnawaz-nazar.com` (the sitemap in the original used `yourdomain.com`) – set `NEXT_PUBLIC_SITE_URL`.
8. Blog dates: `data/blogs.js` used as source of truth (sidebar had different, stale dates). Article links `/index.html#contact` → `/#contact` (link target only; wording untouched).
9. New `/blog` listing page (cards styled from existing blog tokens); Must-Read sidebar is now real links.
10. Added: skip link, focus-visible outlines, reduced-motion rules, tap feedback on touch, aria attributes on menu toggle, hidden H1 on subpages, security headers, hero image eager-loaded.
11. Kept `<img>` instead of `next/image` to guarantee identical rendering; `no-img-element` rule disabled. Converting hero/blog images to `next/image` is the next performance step.
12. Pre-existing, unchanged: newsletter "Subscribe" box has no backend; some project "code" links are placeholders; testimonial names/quotes are as in the original – please confirm they are real; dedicated pages duplicate homepage sections (as requested), which can dilute SEO.

## Deployment
Node ≥ 18.18, `npm ci && npm run build && npm start`, env vars in `.env.example`. Meta Pixel ID kept (set `NEXT_PUBLIC_META_PIXEL_ID=` empty to disable).

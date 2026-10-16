# Shahnawaz Khan – Portfolio (Next.js)

Next.js 15 (App Router) + React 19 + Tailwind CSS v4, JavaScript only.

```bash
npm install
cp .env.example .env.local   # optional, defaults are the values from the original site
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
npm run lint
npm run check:links          # after build: validates slugs + internal links
```

Deploy on Vercel (zero-config) or any Node 18.18+ host. Set `NEXT_PUBLIC_SITE_URL` to the final domain.

- Blog data: `data/blogs.js` (add an article = add an object; slug must be unique). Projects modal data: `data/projects.js`.
- Homepage sections: `components/home/*` (converted 1:1 from the original `index.html`; `scripts/migration/` holds the converter).
- Behaviour (menu, theme, FAQ, filters, modals, slider, contact form): `components/SiteBehaviors.jsx`.

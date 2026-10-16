import { SITE_URL } from '@/lib/site'
import { getAllPosts } from '@/lib/blog'

export default function sitemap() {
  const posts = getAllPosts()
  const latest = posts.map((p) => p.dateISO).sort().at(-1)
  const pages = [['/', 1.0], ['/about', 0.8], ['/projects', 0.9], ['/skills', 0.7], ['/services', 0.9], ['/blog', 0.9], ['/contact', 0.7]]
  return [
    ...pages.map(([path, priority]) => ({ url: SITE_URL + path, lastModified: latest, priority })),
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.dateISO, priority: 0.8 })),
  ]
}

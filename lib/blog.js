import { blogs } from '@/data/blogs'

export function getAllPosts() { return blogs }
export function getPost(slug) { return blogs.find((b) => b.slug === slug) }
export function getAdjacent(slug) {
  const i = blogs.findIndex((b) => b.slug === slug)
  return { prev: i > 0 ? blogs[i - 1] : null, next: i >= 0 && i < blogs.length - 1 ? blogs[i + 1] : null }
}
/** Plain-text description derived from the article's own first paragraph (nothing invented). */
export function describe(post, max = 158) {
  const m = post.content.match(/<p[^>]*>([\s\S]*?)<\/p>/)
  const t = (m ? m[1] : post.content).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  return t.length > max ? t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…' : t
}

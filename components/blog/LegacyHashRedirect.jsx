'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { blogs } from '@/data/blogs'

/** Old reader URLs looked like /case-studies-and-blogs.html#blog-2 — send them to the article's own URL. */
export default function LegacyHashRedirect() {
  const router = useRouter()
  useEffect(() => {
    const m = window.location.hash.match(/^#blog-(\d+)$/)
    const post = m && blogs.find((b) => b.id === Number(m[1]))
    if (post) router.replace(`/blog/${post.slug}`)
  }, [router])
  return null
}

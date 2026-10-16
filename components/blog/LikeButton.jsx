'use client'
import { useEffect, useState } from 'react'

const parse = (s) => { const n = parseFloat(s); if (!s) return 0; if (/M/i.test(s)) return Math.floor(n * 1e6); if (/k/i.test(s)) return Math.floor(n * 1e3); return parseInt(s) || 0 }
const fmt = (c) => (c >= 1e6 ? (c / 1e6).toFixed(1) + 'M' : c >= 1e3 ? (c / 1e3).toFixed(1) + 'k' : String(c))

export default function LikeButton({ id, initial }) {
  const [likes, setLikes] = useState(initial)
  const [liked, setLiked] = useState(false)
  useEffect(() => {
    try {
      setLikes(localStorage.getItem(`blog_${id}_likes`) || initial)
      setLiked(localStorage.getItem(`blog_${id}_liked`) === 'true')
    } catch {}
  }, [id, initial])
  const toggle = () => {
    const next = fmt(parse(likes) + (liked ? -1 : 1))
    setLikes(next); setLiked(!liked)
    try { localStorage.setItem(`blog_${id}_likes`, next); localStorage.setItem(`blog_${id}_liked`, String(!liked)) } catch {}
  }
  return (
    <span className="flex items-center gap-2">
      <button type="button" onClick={toggle} aria-pressed={liked} aria-label={liked ? 'Unlike this article' : 'Like this article'} className="flex items-center gap-1 hover:scale-110 transition-transform duration-300">
        <i className={liked ? 'bi-heart-fill text-red-500' : 'bi-heart text-blue-500'}></i>
      </button>
      <span>{likes}</span><span>likes</span>
    </span>
  )
}

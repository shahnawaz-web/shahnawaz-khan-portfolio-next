import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function MustRead() {
  return (
    <ul className="space-y-4">
      {getAllPosts().map((b) => (
        <li key={b.slug} className="flex border-b pb-4 hover:cursor-pointer">
          <Link href={`/blog/${b.slug}`} className="shrink-0" aria-label={b.title}>
            <img src={b.mainImg} alt={b.title} className="w-20 h-16 object-cover rounded" loading="lazy" decoding="async" />
          </Link>
          <div className="ml-4">
            <b className="block text-sm">{b.category}</b>
            <span className="block capitalize">
              <Link href={`/blog/${b.slug}`} className="hover:text-blue-500">{b.title}</Link>
            </span>
            <span className="block text-xs text-gray-500"><i className="bi-clock text-blue-500 mr-1"></i> {b.date}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

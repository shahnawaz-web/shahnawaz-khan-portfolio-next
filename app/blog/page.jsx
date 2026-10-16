import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import LegacyHashRedirect from '@/components/blog/LegacyHashRedirect'
import { SubPage } from '@/components/home/HomeSections'
import { getAllPosts, describe } from '@/lib/blog'
import { pageMetadata, SITE_URL } from '@/lib/site'
import { breadcrumb } from '@/lib/schema'

export const metadata = pageMetadata({
  title: 'Blog & Insights – Web Development Articles',
  description: 'Explore my latest articles on web development, JavaScript(ES6+), React, and modern UI practices. Each blog is written to help you learn, grow, and build better web experiences.',
  path: '/blog',
})

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <SubPage>
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Blog', name: 'Shahnawaz Khan – Case Studies & Insights', url: `${SITE_URL}/blog`, blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE_URL}/blog/${p.slug}`, datePublished: p.dateISO })) }} />
      <LegacyHashRedirect />
      <section id="blog" className="py-10">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-500">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">Blog</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1a3263] dark:text-white">View Case Studies &amp; Blogs</h1>
          <p className="mt-4 max-w-3xl text-lg text-[#1B3C53] dark:text-white/60">Explore my latest articles on web development, JavaScript(ES6+), React, and modern UI practices. Each blog is written to help you learn, grow, and build better web experiences.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((p, i) => (
              <article key={p.slug} className="group rounded-xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500 transition-all duration-300 overflow-hidden">
                <Link href={`/blog/${p.slug}`} className="block" aria-label={p.title}>
                  <img src={p.mainImg} alt={p.title} width="1200" height="630" loading={i < 2 ? 'eager' : 'lazy'} decoding="async" className="w-full h-56 object-cover" />
                </Link>
                <div className="p-5">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-sm font-semibold">{p.category}</span>
                  <h2 className="mt-3 text-xl font-bold text-blue-500 dark:text-white group-hover:text-blue-600 transition">
                    <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{describe(p, 140)}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span><i className="bi bi-person-circle text-blue-500 mr-1"></i>{p.author} · <time dateTime={p.dateISO}>{p.date}</time></span>
                    <Link href={`/blog/${p.slug}`} className="text-blue-500 font-semibold hover:underline">Read article →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SubPage>
  )
}

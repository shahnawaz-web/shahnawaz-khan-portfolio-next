import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import LikeButton from '@/components/blog/LikeButton'
import BlogSidebar from '@/components/blog/BlogSidebar'
import LinkedInConnect from '@/components/blog/LinkedInConnect'
import { SubPage } from '@/components/home/HomeSections'
import { getAllPosts, getPost, getAdjacent, describe } from '@/lib/blog'
import { pageMetadata, SITE_URL, SITE_NAME } from '@/lib/site'
import { breadcrumb } from '@/lib/schema'

export const dynamicParams = false
export function generateStaticParams() { return getAllPosts().map((p) => ({ slug: p.slug })) }

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const img = { url: post.mainImg, alt: post.title }
  const m = pageMetadata({
    title: post.title, description: describe(post), path: `/blog/${post.slug}`, type: 'article',
    extra: { publishedTime: post.dateISO, authors: [post.author], section: post.category, images: [img] },
  })
  m.twitter.images = [post.mainImg]
  return m
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const { prev, next } = getAdjacent(slug)
  const url = `${SITE_URL}/blog/${post.slug}`
  return (
    <SubPage>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: describe(post),
        image: SITE_URL + post.mainImg, datePublished: post.dateISO, articleSection: post.category,
        author: { '@type': 'Person', name: post.author, url: SITE_URL }, publisher: { '@type': 'Person', name: SITE_NAME, url: SITE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      }} />
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }])} />
      <section id="blog" className="py-10 ">
        <div className="container mt-[50px] mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-500">Home</Link> <span aria-hidden="true">/</span>{' '}
            <Link href="/blog" className="hover:text-blue-500">Blog</Link> <span aria-hidden="true">/</span>{' '}
            <span aria-current="page">{post.category}</span>
          </nav>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3" id="blog-content" data-blog-id={post.id}>
              <article>
                <div className="mb-5">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-sm font-semibold">{post.category}</span>
                </div>
                <header className="mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-green-500 dark:text-white">{post.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-2"><i className="bi bi-person-circle text-blue-500"></i>{post.author}</span>
                    <span className="flex items-center gap-2"><i className="bi bi-calendar3 text-blue-500"></i><time dateTime={post.dateISO}>{post.date}</time></span>
                    <LikeButton id={post.id} initial={post.likes} />
                  </div>
                </header>
                <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl">
                  <img src={post.mainImg} alt={post.title} width="1200" height="630" loading="eager" fetchPriority="high" decoding="async" className="w-full h-auto max-h-[550px] object-cover" />
                </div>
                <div className="blog-content prose prose-lg dark:prose-invert max-w-none prose-headings:text-blue-500 prose-a:text-blue-500 prose-img:rounded-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
                <nav aria-label="Previous and next articles" className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {prev ? (
                      <Link href={`/blog/${prev.slug}`} rel="prev" className="group p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500 transition-all duration-300">
                        <span className="text-sm font-semibold text-blue-500">← PREVIOUS POST</span>
                        <h3 className="mt-2 font-semibold text-blue-500 dark:text-white group-hover:text-blue-600 group-hover:underline transition">{prev.title}</h3>
                        <span className="text-xs text-gray-500">{prev.date}</span>
                      </Link>
                    ) : <span />}
                    {next ? (
                      <Link href={`/blog/${next.slug}`} rel="next" className="group p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500 transition-all duration-300 md:text-right">
                        <span className="text-sm font-semibold text-blue-500">NEXT POST →</span>
                        <h3 className="mt-2 font-semibold text-blue-500 dark:text-white group-hover:text-blue-600 group-hover:underline transition">{next.title}</h3>
                        <span className="text-xs text-gray-500">{next.date}</span>
                      </Link>
                    ) : <span />}
                  </div>
                </nav>
              </article>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
      <LinkedInConnect />
    </SubPage>
  )
}

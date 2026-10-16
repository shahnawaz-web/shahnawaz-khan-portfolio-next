import Link from 'next/link'

export const metadata = { title: 'Page not found', robots: { index: false, follow: false } }

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      <p className="text-green-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-3">Error 404</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-[#1a3263] dark:text-white">Page not found</h1>
      <p className="mt-4 max-w-xl text-[#1B3C53] dark:text-white/70 text-lg">The page you are looking for does not exist or has been moved.</p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link href="/" className="bg-transparent hover:bg-green-600 border border-green-500 text-green-500 hover:text-white font-medium px-8 rounded-[2em] py-3 transition-all duration-500">Back to Home</Link>
        <Link href="/blog" className="bg-transparent hover:bg-blue-600 border border-blue-500 text-blue-500 hover:text-white font-medium px-8 rounded-[2em] py-3 transition-all duration-500">Read the Blog</Link>
      </div>
    </main>
  )
}

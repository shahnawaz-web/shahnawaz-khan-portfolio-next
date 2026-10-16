'use client'

export default function Error({ reset }) {
  return (
    <main id="main-content" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold text-[#1a3263] dark:text-white">Something went wrong</h1>
      <p className="mt-4 text-[#1B3C53] dark:text-white/70">An unexpected error occurred. Please try again.</p>
      <button type="button" onClick={() => reset()} className="mt-8 border border-green-500 text-green-500 hover:bg-green-600 hover:text-white font-medium px-8 rounded-[2em] py-3 transition-all duration-500">Try again</button>
    </main>
  )
}

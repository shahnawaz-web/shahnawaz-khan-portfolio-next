import Link from 'next/link'

export default function BlogCta() {
  return (
<div className="flex flex-col justify-center items-center mt-20 gap-3 px-3" id="case-studies-and-blog">
<h2 className="text-[#1a3263] dark:text-white text-3xl font-extrabold text-center">{" View Case Studies & Blogs "}</h2>{" "}<p className="text-[#1B3C53] text-lg dark:text-white/60 w-full sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] text-center">{" Explore my latest articles on web development, JavaScript(ES6+), React, and modern UI practices. Each blog is written to help you learn, grow, and build better web experiences. "}</p>{" "}<Link href="/blog">
<button type="button" className="bg-transparent hover:bg-green-600 border border-green-500 hover:border-white text-green-500 hover:text-white text-lg font-bold px-8 rounded-[2em] py-3 my-4 transition-all duration-300 group hover:scale-[1.01]">
<span>{"View Case Studies & Blogs"}</span>
</button>
</Link>
</div>
  )
}

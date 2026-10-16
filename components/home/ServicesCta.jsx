import Link from 'next/link'

export default function ServicesCta() {
  return (
<div className="flex flex-col justify-center items-center my-20 gap-3 px-5 sm:px-5 md:px-7 lg:px-10 xl:px-16">
<h3 className="dark:text-white text-[#1a3263] text-4xl font-bold">{" Ready to Turn Your Idea Into a Live Product? "}</h3>{" "}<p className="dark:text-white text-[18px] text-[#1B3C53]">{" Tell me about your project - I'll reply within 24 hours with next steps, not a sales pitch. "}</p>{" "}<Link href="/#contact">
<button type="button" className="bg-transparent hover:bg-green-600 border border-green-500 hover:border-white text-green-500 hover:text-white font-medium px-8 rounded-[2em] py-3 mt-4 transition-all duration-300 group hover:scale-[1.01]">
<span className="">Let's Work Together</span>{" "}<i className="bi bi-box-arrow-up-right transition-all duration-500 group-hover:translate-x-1">
</i>
</button>
</Link>
</div>
  )
}

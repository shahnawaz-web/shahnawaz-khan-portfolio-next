import Link from 'next/link'

export default function HeroSection() {
  return (
<section id="home" className="relative overflow-hidden bg-linear-to-br bg-[#d1dde9] dark:bg-[#050505] dark:text-white">{" "}<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute z-10 -top-25 -left-25 w-75 h-75 bg-blue-500/20 blur-3xl rounded-full">
</div>{" "}<div className="absolute z-10 -bottom-25 -right-25 w-75 h-75 bg-green-500/20 blur-3xl rounded-full">
</div>
</div>{" "}{" "}<Link href="/#contact" className="relative top-25 left-13 block z-10">
<button type="button" className="bg-green-600/10 font-[14px] rounded-3xl text-green-500 w-auto py-2.5 border border-green-500 hover:bg-green-600 hover:text-white transition-all duration-500 mb-6 hover:scale-[1.02] px-4">{" Available for Remote projects worldwide "}<img src="/assets/images/icons/worldwide.webp" alt="" className="h-5 inline" />
</button>
</Link>{" "}<div className="relative max-w-9xl mx-auto px-6 lg:px-12 bg-[#d1dde9] dark:bg-[#050505] py-16 md:py-20 flex flex-col-reverse lg:flex-row items-center gap-10">{" "}<div className="flex-1 text-center lg:text-left">{" "}<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-[#223e71] dark:text-white">{" Full-Stack Developer "}<br />{" "}<span className="text-green-500  sm:text-4xl   lg:text-[2.8rem] font-[5rem] inline-block my-3">{" Building Revenue-Ready Web & SaaS Products"}<br />
</span>
</h1>{" "}{" "}<p className="mt-4 text-[#0d4b71] dark:text-[#f7fafc] text-[16px] sm:text-lg max-w-full mx-auto lg:mx-0">{" I build fast, secure, and scalable digital products that help businesses attract customers, improve operations, and grow online. "}</p>{" "}{" "}{" "}{" "}<div className="text-[#1b3c53] dark:text-white flex flex-row flex-wrap font-medium gap-5 justify-center sm:justify-center md:justify-center lg:justify-normal xl:justify-normal my-3">
<div className="text-[13px]">
<strong>
<i className="bi bi-code-slash text-[16px] text-green-500 ">
</i>{" Clean Code "}</strong>
</div>{" "}<div className="text-[13px]">
<strong>
<i className="bi bi-palette text-[16px] text-green-500 ">
</i>{" Modern Design "}</strong>
</div>{" "}<div className="text-[13px]">
<strong>
<i className="bi bi-backpack4 text-[16px] text-green-500 ">
</i>{" Scalable Backend "}</strong>
</div>{" "}<div className="text-[13px]">
<strong>
<i className="bi bi-lightning-charge text-[16px] text-green-500">
</i>{" Fast Performance "}</strong>
</div>
</div>{" "}{" "}<div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
<Link href="/#contact" className="px-6 py-3 border-none bg-[#ffaa1a] hover:bg-[#e69500] transition-all duration-300 text-white rounded-[2em] font-medium shadow-lg hover:scale-[1.03]">
<span className="transition-all duration-500 pr-2">Start Your Project</span>{" "}<i className="bi bi-download transition-all duration-500 group-hover:translate-y-0.5 inline-block">
</i>
</Link>{" "}<Link href="/#projects" className="px-6 py-3 border border-green-500 text-[#16A34A] hover:bg-[#16A34A] hover:text-white rounded-[2em] shadow-[2px_2px_0px_rgb(32_170_100)] hover:shadow-[-2px_-2px_0px_rgb(255_255_255)] font-medium transition duration-300 hover:scale-[1.03]">{" See My Work"}<i className="bi bi-box-arrow-up-right transition-all duration-500 group-hover:translate-x-1">
</i>
</Link>
</div>{" "}{" "}<p className="mt-4 text-[16px] text-[#1b3c53] dark:text-[#f7fafc]">
<i className="bi bi-check2-circle text-green-600 text-lg pr-1">
</i>{" Available for Freelance & Full-Time Opportunities "}</p>
</div>{" "}{" "}<div className="flex-1 flex justify-center align-items-start relative hover:rotate-y-180 transition-all duration-1000 hover:scale-105">{" "}<div className="top-4 absolute  w-65 h-65 bg-green-500/20 blur-3xl rounded-full">
</div>{" "}{" "}<div className="floating w-95 h-95  border-2  hover:border-white hover:bg-white/10 shadow-[8px_8px_0px_green-600] hover:shadow-[8px_8px_0px_blue-600] overflow-hidden group transition-all duration-500 hover:scale-[1.02] mt-3" style={{"--s": "95px", "/* size of the corners */\n  border": "8px solid #4CAF50", "mask": "conic-gradient(#000 0 0) content-box,\n    conic-gradient(at var(--s) var(--s),#0000 75%,#000 0) \n    0 0/calc(100% - var(--s)) calc(100% - var(--s))"}}>{" "}<img src="/assets/images/profile/shahnawaz-profile-jecket-transparent.webp" alt="Shahnawaz Khan Web Developer profile" width="100%" height="100%" className=" object-cover" fetchPriority="high" loading="eager" decoding="async" />
</div>
</div>
</div>
</section>
  )
}

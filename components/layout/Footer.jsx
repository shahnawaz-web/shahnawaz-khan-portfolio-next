import Link from 'next/link'

export default function Footer() {
  return (
<footer className="footer relative border   pt-14 px-5 sm:px-5 md:px-7 lg:px-10 xl:px-16 border-t bg-[#1A3263] dark:bg-transparent border-blue-400/20">{" "}<div className="absolute inset-0 pointer-events-none">
<div className="floating absolute top-0 left-0 w-75 h-75 bg-blue-500/20 blur-3xl rounded-full">
</div>{" "}<div className="floating absolute bottom-0 right-0 w-75 h-75 bg-green-500/20 blur-3xl rounded-full">
</div>
</div>{" "}<div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center justify-between gap-10 py-6">{" "}<div className="text-white w-full md:w-1/3 space-y-6">
<div className="flex text-white cursor-pointer group items-center gap-2">
<span className="bg-transparent hover:bg-green-600  text-green-600 hover:text-white border border-green-600 duration-500 w-10 h-10 rounded flex justify-center items-center hover:scale-[1.02]">
<i className="bi bi-code-slash text-white-50">
</i>
</span>{" "}<h3 className="font-bold text-[18px] duration-500 text-green-600 group-hover:text-green-700">
<Link href="/">Shahnawaz Khan</Link>
</h3>
</div>{" "}<p className="text-white text-[15px]">{" I'm a passionate full stack developer with 4+ years of experience building scalable web applications... "}</p>{" "}<ul className="flex flex-col gap-3 text-white text-[15px]">
<li className="hover:text-green-600 hover:underline group duration-200 relative cursor-pointer">
<a href="mailto:shahnawazkhan.webdev@gmail.com" className="flex duration-500 hover:text-green-600 hover:underline">
<span className="bg-transparent hover:bg-green-600  text-green-600 hover:text-white border border-green-600  w-6 h-6 me-2 rounded flex justify-center items-center text-sm duration-500 hover:scale-[1.02]">
<i className="bi bi-envelope">
</i>
</span>{" shahnawazkhan.webdev@gmail.com"}</a>{" "}<div className={"tooltip absolute top-[-30px] right-[-260px] -translate-x-1/2 mb-3\n           hidden group-hover:block\n        w-[250px] text-xs text-white text-center\n           bg-transparent shadow-[-2px_2px_0px_rgb(32_170_100)]\n           px-3 py-2 rounded-lg  z-50"}>{"Click on Email or Icon to "}<span className="text-green-500 text-bold">Discuss Project</span>
</div>
</li>{" "}<li className="hover:text-green-600 hover:underline group relative duration-200 cursor-pointer">
<a href="tel:+923077242548" className="flex duration-500">
<span className="bg-transparent hover:bg-green-600  text-green-600 hover:text-white border border-green-600 w-6 h-6 me-2 rounded flex justify-center items-center text-sm duration-500 hover:scale-[1.02]">
<i className="bi bi-telephone">
</i>
</span>{" +92 307 7242548 "}</a>{" "}<div className={"tooltip absolute top-[-30px] right-[-260px] -translate-x-1/2 mb-3\n           hidden group-hover:block\n        w-[250px] text-xs text-white text-center\n           bg-transparent shadow-[-2px_2px_0px_rgb(32_170_100)]\n           px-3 py-2 rounded-lg z-50"}>{"Click on Contact or Icon to "}<span className="text-green-500 text-bold">Discuss Project</span>
</div>
</li>{" "}<li className="text-white hover:text-green-600 hover:underline group relative duration-200 cursor-pointer">
<a href="https://wa.me/923077242548?text=Hello%20Shahnawaz%20Khan%2C%20I%E2%80%99m%20interested%20in%20discussing%20a%20professional%20website%20project%20for%20my%20business." target="_blank" className="whatsapp-btn flex duration-500" rel="noopener noreferrer">
<span className="bg-transparent hover:bg-green-600  text-green-600 hover:text-white border border-green-600 hover:border-white w-6 h-6 me-2 rounded flex justify-center items-center text-sm duration-500 hover:scale-[1.02]">
<i className="bi bi-whatsapp">
</i>
</span>{" Chat on WhatsApp "}</a>{" "}<div className={"tooltip absolute top-[-30px] right-[-260px] -translate-x-1/2 mb-3\n           hidden group-hover:block\n        w-[270px] text-xs text-white text-center\n           bg-transparent shadow-[-2px_2px_0px_rgb(32_170_100)]\n           px-3 py-2 rounded-lg z-50"}>{"Click on WhatsApp or Icon to "}<span className="text-green-500 text-bold">Discuss Project</span>
</div>
</li>{" "}<li className="text-white hover:text-green-600 hover:underline group relative duration-200 cursor-pointer">
<a href={"https://www.google.com/maps/place/MarkDev+Software+House+-+Faisal+Colony,+Bahawalpur/@29.4015012,71.6962027,16.88z/data=!4m6!3m5!1s0x393b91031251b00d:0x755f3eca845642c5!8m2!3d29.401571!4d71.696292!16s%2Fg%2F11xsrd_56p?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"} target="_blank" rel="noopener noreferrer" className="flex duration-500">
<span className="bg-transparent hover:bg-green-600  text-green-600 hover:text-white border border-green-600 w-6 h-6 me-2 rounded flex justify-center items-center text-sm duration-500 hover:scale-[1.02]">
<i className="bi bi-geo-alt">
</i>
</span>{" MarkDev, Faisal Colony, Bahawalpur, Punjab, Pakistan "}</a>{" "}<div className={"tooltip absolute top-[-30px] right-[-260px] -translate-x-1/2 mb-3\n           hidden group-hover:block\n        w-[250px] text-xs text-white text-center\n           bg-transparent shadow-[-2px_2px_0px_rgb(32_170_100)]\n           px-3 py-2 rounded-lg z-50"}>{"Click on Icon or Address to "}<span className="text-green-500 text-bold">Open Map</span>
</div>
</li>
</ul>
</div>{" "}{" "}<div className="w-full md:w-1/4 flex flex-col items-start sm:items-start md:items-start lg:items-center xl:items-center">
<h3 className="text-xl text-white font-bold mb-6">Quick Links</h3>{" "}<ul className="text-white flex flex-col gap-4">
<li className="hover:text-green-500 duration-200 cursor-pointer">
<Link href="/">Home</Link>
</li>{" "}<li className="hover:text-green-500 hover:underline duration-200 cursor-pointer">
<Link href="/#about">About Me</Link>
</li>{" "}<li className="hover:text-green-500 hover:underline duration-200 cursor-pointer">
<Link href="/#projects">My Projects</Link>
</li>{" "}<li className="hover:text-green-500 hover:underline duration-200 cursor-pointer">
<Link href="/#services">My Services</Link>
</li>{" "}<li className="hover:text-green-500 hover:underline duration-200 cursor-pointer">
<Link href="/#case-studies-and-blog">View Case Study</Link>
</li>{" "}<li className="hover:text-green-500 hover:underline duration-200 cursor-pointer">
<Link href="/blog">Read Article</Link>
</li>{" "}<li className="hover:text-green-500 hover:underline duration-200 cursor-pointer">
<Link href="/#contact">Contact Me</Link>
</li>
</ul>
</div>{" "}{" "}<div className="w-full md:w-1/3 flex flex-col items-start">
<h3 className="text-xl text-white/80 font-bold mb-3">Connect</h3>{" "}{" "}<div className="flex flex-row gap-3 pb-3">{" "}<div className="bg-transparent cursor-pointer hover:bg-black border border-green-600 hover:border-none  w-9 h-8 rounded-md flex justify-center items-center duration-500 group hover:scale-[1.02]">
<a href="https://github.com/shahnawaz-web" target="_blank" rel="noopener noreferrer">
<i className="bi bi-github text-green-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>{" "}{" "}<div className="bg-transparent cursor-pointer border border-green-600 hover:border-none hover:bg-blue-500 w-9 h-8 rounded-md flex justify-center items-center duration-300 hover:scale-[1.02] group">
<a href="https://pk.linkedin.com/in/shahnawaz-khan-webdeveloper" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-linkedin-in text-green-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>{" "}{" "}<div className="bg-transparent cursor-pointer border border-green-600 hover:border-none hover:bg-red-600 w-9 h-8 rounded-md flex justify-center items-center duration-300 hover:scale-[1.02] group">
<a href="https://pin.it/5rx8KtOhW" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-square-pinterest text-green-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>{" "}{" "}<div className="bg-transparent cursor-pointer border border-green-600 hover:border-none hover:bg-black w-9 h-8 rounded-md flex justify-center items-center duration-300 hover:scale-[1.02] group">
<a href="https://x.com/shahnawaz_code" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-x text-green-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>{" "}{" "}<div className="bg-transparent cursor-pointer border border-green-600 hover:border-none hover:bg-blue-600 w-9 h-8 rounded-md flex justify-center items-center duration-300 hover:scale-[1.02] group">
<a href="https://www.facebook.com/share/1CLwVdrvQq/" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-facebook text-green-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>{" "}{" "}<div className="bg-transparent cursor-pointer border border-green-600 hover:border-none hover:bg-pink-600 w-9 h-8 rounded-md flex justify-center items-center duration-300 hover:scale-[1.02] group">
<a href="https://www.instagram.com/shahnawazkhan.dev?igsh=MWw2aXU1eGI0dTAzNw==" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-instagram text-green-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>
</div>{" "}<h3 className="text-xl text-white font-bold mb-4">{" Let’s Work Together "}</h3>{" "}<p className="text-white text-[14px] w-full md:w-[80%] mb-3">{" I build modern, responsive, and high-performance websites that help businesses grow. Let’s turn your idea into a real digital product. "}</p>{" "}<Link href="/#contact" className="nav-link">
<button className=" bg-green-600 text-white border border-green-600  duration-500 px-7 py-2.5 w-75 rounded font-medium text-[16px] hover:scale-[1.02]" aria-label="Start Your Project">{" Start Your Project "}</button>
</Link>
</div>
</div>{" "}{" "}<div className="border-t border-blue-400/10 text-white/70 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center lg:items-center xl:items-center justify-center lg:justify-between xl:justify-between gap-4 py-6">
<p className="text-[14px] text-center lg:text-left xl:text-left">{" © 2025 "}<span className="text-green-600 font-medium">
<Link href="/">Shahnawaz Khan</Link>
</span>{". All rights reserved. "}</p>{" "}<Link href="/">
<button type="button" className="px-4 py-2 me-6 flex justify-center items-center bg-transparent hover:bg-green-600  text-green-600 hover:text-white border border-green-600 font-semibold rounded transition-all duration-500 hover:scale-[1.02]">{" Back to Home "}<i className="bi bi-arrow-up-short text-2xl">
</i>
</button>
</Link>
</div>{" "}{" "}<button id="scrollTopBtn" className={"fixed bottom-6 right-1 cursor-pointer hidden h-12 w-12 rounded-full\n  bg-blue-600 text-white\n  border border-blue-600\n  flex items-center justify-center\n  shadow-[0_6px_20px_rgba(37,99,235,0.5)]\n  transition-all duration-300\n  text-xl hover:scale-105 hover:bg-blue-700\n  focus:outline-none focus:ring-2 focus:ring-blue-400"} aria-label="Scroll to top">
<i className="bi bi-arrow-up">
</i>
</button>{" "}{" "}<a href="https://wa.me/923077242548?text=Hello%20Shahnawaz%20Khan%2C%20I%E2%80%99m%20interested%20in%20discussing%20a%20professional%20website%20project%20for%20my%20business." target="_blank" className="whatsapp-btn flex duration-500" rel="noopener noreferrer">
<span className="fixed right-1 bottom-50">
<span className="absolute flex h-full w-full rounded-full bg-green-600 hover:bg-green-500 duration-500 hover:scale-[1.02] opacity-75 animate-ping">
</span>{" "}<span className={"relative bg-green-600 text-white border border-white \n           w-10 h-10 rounded-full flex justify-center items-center text-lg"}>
<i className="bi bi-whatsapp">
</i>
</span>
</span>
</a>{" "}</footer>
  )
}

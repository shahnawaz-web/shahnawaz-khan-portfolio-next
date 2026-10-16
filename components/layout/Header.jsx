import Link from 'next/link'

export default function Header() {
  return (
<header id="header" className="fixed top-0 left-0 w-full z-50 bg-[rgba(209_221_233/0.9)] dark:bg-[#000000]  dark:text-white transition duration-300 py-4 px-4 sm:px-4 md:px-7 lg:px-10 xl:px-16 border-b border-blue-300/20">
<div className="flex justify-between items-center w-full">{" "}<div className="flex cursor-pointer group items-center gap-2">
<span className="bg-transparent hover:bg-[#e69500]   text-[#e69500] hover:text-white dark:hover:text-white border border-[#e69500] hover:border-white duration-500 w-10 h-10 rounded flex justify-center items-center">
<i className="bi bi-code-slash">
</i>
</span>{" "}<h3 className="font-bold text-[18px] duration-500 group-hover:text-[#fbbc05] ">
<Link href="/" className="block nav-link px-3 py-2 rounded-md transition-all duration-300 hover:scale-[1.02] md:hover:scale-100 hover:bg-[#e69500]  text-[#e69500]  dark:text-[#e69500]  hover:text-white md:hover:bg-transparent md:hover:text-[#e69500] ">{" Shahnawaz Khan "}</Link>
</h3>
</div>{" "}{" "}<button type="button" id="menuToggle" className="md:hidden bg-transparent dark:hover:bg-blue-600  dark:text-blue-600 dark:hover:text-white border dark:border-blue-600 dark:hover:border-white text-[28px] w-10 h-10 flex items-center justify-center rounded focus:outline-none" aria-expanded="false" aria-controls="navMenu" aria-label="Toggle navigation menu">
<i className="bi bi-list">
</i>
</button>{" "}{" "}<nav id="navMenu" className="hidden md:flex flex-col md:flex-row gap-6 md:gap-8 absolute md:static left-0 top-20 w-full md:w-auto bg-[rgba(209_221_233/0.9)] dark:bg-[#0f0f0f]/90 md:bg-transparent px-9 md:px-0 py-6 md:py-0 transition-all items-center">
<ul className="text-white flex flex-col md:flex-row md:items-center gap-6 md:gap-3 font-medium text-[14px] md:text-[18px] w-full md:w-auto">
<li className="relative transition-all duration-300 md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-0.5 md:after:bg-blue-500 md:after:scale-x-0 md:hover:after:scale-x-100 md:after:transition-transform">
<Link href="/" className="block nav-link px-3 py-2 rounded-md transition-all duration-300 hover:scale-[1.02] md:hover:scale-100 text-[#0d4b71]  dark:text-white hover:text-green-500 dark:hover:text-blue-500 md:hover:bg-transparent md:hover:text-blue-500">{" Home "}</Link>
</li>{" "}<li className="relative transition-all duration-300 md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-0.5 md:after:bg-blue-500 md:after:scale-x-0 md:hover:after:scale-x-100 md:after:transition-transform">
<Link href="/#about" className="block nav-link px-3 py-2 rounded-md transition-all duration-300 hover:scale-[1.02] md:hover:scale-100  text-[#0d4b71] dark:text-white hover:text-green-500 dark:hover:text-blue-500 md:hover:bg-transparent md:hover:text-blue-500">{" About "}</Link>
</li>{" "}<li className="relative transition-all duration-300 md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-0.5 md:after:bg-blue-500 md:after:scale-x-0 md:hover:after:scale-x-100 md:after:transition-transform">
<Link href="/#projects" className="block nav-link px-3 py-2 rounded-md transition-all duration-300 hover:scale-[1.02] md:hover:scale-100  text-[#0d4b71] hover:text-green-500 md:hover:bg-transparent md:hover:text-blue-500">{" Projects "}</Link>
</li>{" "}<li className="relative transition-all duration-300 md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-0.5 md:after:bg-blue-500 md:after:scale-x-0 md:hover:after:scale-x-100 md:after:transition-transform">
<Link href="/#services" className="block nav-link px-3 py-2 rounded-md transition-all duration-300 hover:scale-[1.02] md:hover:scale-100  text-[#0d4b71] hover:text-green-500 md:hover:bg-transparent md:hover:text-blue-500  active:ring-blue-600 ">{" Services "}</Link>
</li>{" "}<li className="relative">
<button data-action="toggle-dropdown" className="flex items-center gap-1 py-2  font-medium text-[#0d4b71] dark:text-white hover:text-green-500  dark:hover:text-blue-500 focus:outline-none" aria-haspopup="true" aria-expanded="false">{" Insights "}<i className="fa-solid fa-angle-down">
</i>{" "}</button>{" "}<ul id="dropdownMenu" className="absolute top-4  left-0 mt-2 w-50 dark:bg-[#0f0f0f]/90 rounded-md shadow-lg hidden z-50">{" "}<li>
<Link href="/blog" className="block px-4 py-2 text-sm rounded text-[#0d4b71]  hover:text-green-500 dark:hover:bg-blue-500 ">{" Case Studies & Insights "}</Link>
</li>
</ul>
</li>{" "}{" "}<li className="relative transition-all duration-300 md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-0.5 md:after:bg-blue-500 md:after:scale-x-0 md:hover:after:scale-x-100 md:after:transition-transform">
<Link href="/#contact" className="block nav-link px-3 py-2 rounded-md transition-all duration-300 hover:scale-[1.02] md:hover:scale-100  text-[#0d4b71]  hover:text-green-500 md:hover:bg-transparent md:hover:text-blue-500">{" Contact "}</Link>
</li>
</ul>{" "}<button id="theme-toggle" type="button" aria-label="Toggle dark mode" className="p-2 rounded-lg bg-[#0d4b71] dark:bg-gray-800 transition hover:cursor-pointer">{" "}{" "}<svg id="sun-icon" className="w-6 h-6 text-yellow-500 hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="5">
</circle>{" "}<path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42">
</path>
</svg>{" "}{" "}<svg id="moon-icon" className="w-6 h-6 text-black/80 dark:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
<path d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z">
</path>
</svg>
</button>{" "}<div className="mt-6 md:mt-0 w-full md:w-auto">
<Link href="/#contact" className="nav-link">
<button className="bg-transparent hover:bg-green-600  text-green-500 hover:text-white border border-green-500  shadow-[2px_2px_0px_rgb(32_170_100)] hover:shadow-[-2px_-2px_0px_rgb(255_255_255)] duration-500 px-7 py-2.5 w-full rounded-[2em] font-medium text-[16px]">{" Work With Me "}</button>
</Link>
</div>
</nav>
</div>
</header>
  )
}

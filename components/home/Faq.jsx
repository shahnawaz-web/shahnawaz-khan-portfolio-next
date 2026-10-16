import Link from 'next/link'

export default function Faq() {
  return (
<section className="img-gredient relative py-16 px-5 sm:px-5 md:px-7 lg:px-10 xl:px-16 bg-[#dee7f7] dark:bg-gray-950 transition-colors duration-300">{" "}<div className="absolute inset-0 pointer-events-none">
<div className="floating absolute top-0 left-0 w-75 h-75 bg-blue-500/20 blur-3xl rounded-full">
</div>{" "}<div className="floating absolute bottom-0 right-0 w-75 h-75 bg-green-500/20 blur-3xl rounded-full">
</div>
</div>{" "}<div className="max-w-5xl mx-auto px-4">{" "}<div className="text-center mb-12">
<p className="text-green-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-3">{" How Can I Help You? "}</p>{" "}<h2 className="text-2xl md:text-4xl sm:text-3xl font-bold text-[#1a3263] dark:text-white leading-tight">{" Frequently Asked Questions "}</h2>
</div>{" "}{" "}<div className="space-y-4 rounded-2xl" id="faq-container">{" "}<div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
<button className="faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">
<h3 className="text-xl md:text-lg sm:text-md font-semibold text-gray-900 dark:text-white">{" What does a typical web development project include? "}</h3>{" "}<span className="faq-icon relative w-5 h-5 flex-shrink-0">
<span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 dark:bg-white transition">
</span>{" "}<span className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 dark:bg-white transition faq-vertical">
</span>
</span>
</button>{" "}<div className="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-lg md:text-base sm:text-sm">{" A typical project with me includes discovery and planning, UI/UX design, front-end and back-end development, CMS integration, QA testing, deployment, hosting setup, performance optimization, security improvements, and analytics integration - scoped to what your project actually needs. "}</div>
</div>
</div>{" "}{" "}<div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
<button className="faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">
<h3 className="text-xl md:text-lg sm:text-md font-semibold text-gray-900 dark:text-white">{" How do I determine the right type of website for my business? "}</h3>{" "}<span className="faq-icon relative w-5 h-5 flex-shrink-0">
<span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 dark:bg-white">
</span>{" "}<span className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 dark:bg-white faq-vertical transition">
</span>
</span>
</button>{" "}<div className="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-lg md:text-base sm:text-sm">{" I start by understanding your business goals. If you need leads, I'll usually recommend a conversion-focused business website. If you sell products, an e-commerce platform makes more sense. I'll help you land on the right solution based on your growth plans and budget. "}</div>
</div>
</div>{" "}{" "}<div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
<button className="faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">
<h3 className="text-xl md:text-lg sm:text-md font-semibold text-gray-900 dark:text-white">{" Will my website be mobile responsive? "}</h3>{" "}<span className="faq-icon relative w-5 h-5 flex-shrink-0">
<span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 dark:bg-white">
</span>{" "}<span className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 dark:bg-white faq-vertical transition">
</span>
</span>
</button>{" "}<div className="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-lg md:text-base sm:text-sm">{" Yes. I build every website with a fully responsive layout, so it works smoothly on mobile phones, tablets, laptops, and large desktop screens. "}</div>
</div>
</div>{" "}{" "}<div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
<button className="faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">
<h3 className="text-xl md:text-lg sm:text-md font-semibold text-gray-900 dark:text-white">{" How much does a project cost? "}</h3>{" "}<span className="faq-icon relative w-5 h-5 flex-shrink-0">
<span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 dark:bg-white">
</span>{" "}<span className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 dark:bg-white faq-vertical transition">
</span>
</span>
</button>{" "}<div className="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-lg md:text-base sm:text-sm">{" Pricing varies based on project requirements, features, and complexity. After discussing your goals, I'll provide a transparent quote with no hidden costs. "}</div>
</div>
</div>{" "}{" "}<div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
<button className="faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">
<h3 className="text-xl md:text-lg sm:text-md font-semibold text-gray-900 dark:text-white">{" Will I own the source code? "}</h3>{" "}<span className="faq-icon relative w-5 h-5 flex-shrink-0">
<span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 dark:bg-white">
</span>{" "}<span className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 dark:bg-white faq-vertical transition">
</span>
</span>
</button>{" "}<div className="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-lg md:text-base sm:text-sm">{" Yes. Once the project is completed and payment terms are met, you'll receive full ownership of the source code and project assets. "}</div>
</div>
</div>{" "}{" "}<div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
<button className="faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">
<h3 className="text-xl md:text-lg sm:text-md font-semibold text-gray-900 dark:text-white">{" Do you provide maintenance after launch? "}</h3>{" "}<span className="faq-icon relative w-5 h-5 flex-shrink-0">
<span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 dark:bg-white">
</span>{" "}<span className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 dark:bg-white faq-vertical transition">
</span>
</span>
</button>{" "}<div className="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-lg md:text-base sm:text-sm">{" Yes. I offer ongoing maintenance, bug fixes, performance optimization, security updates, and feature enhancements based on your needs. "}</div>
</div>
</div>{" "}{" "}<div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
<button className="faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">
<h3 className="text-xl md:text-lg sm:text-md font-semibold text-gray-900 dark:text-white">{" How do I optimize websites for SEO and performance? "}</h3>{" "}<span className="faq-icon relative w-5 h-5 flex-shrink-0">
<span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 dark:bg-white">
</span>{" "}<span className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 dark:bg-white faq-vertical transition">
</span>
</span>
</button>{" "}<div className="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-lg md:text-base sm:text-sm">{" I optimize websites using clean code, optimized images, lazy loading, proper heading structure, schema markup, semantic HTML, fast hosting, and Core Web Vitals best practices - to improve both search rankings and loading speed. "}</div>
</div>
</div>{" "}{" "}<div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
<button className="faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">
<h3 className="text-xl md:text-lg sm:text-md font-semibold text-gray-900 dark:text-white">{" Why should I choose you? "}</h3>{" "}<span className="faq-icon relative w-5 h-5 flex-shrink-0">
<span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 dark:bg-white">
</span>{" "}<span className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 dark:bg-white faq-vertical transition">
</span>
</span>
</button>{" "}<div className="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-lg md:text-base sm:text-sm">
<span className="text-green-500 font-medium">You can expect:</span>{" "}<ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
<li>Custom solutions tailored to your business needs</li>{" "}<li>Clean, maintainable, and scalable code</li>{" "}<li>Responsive, SEO-friendly, and mobile-first websites</li>{" "}<li>Transparent communication throughout the project</li>{" "}<li>On-time delivery with reliable project management</li>{" "}<li>Long-term technical support and maintenance</li>{" "}<li>Performance, security, and user experience as top priorities</li>
</ul>
</div>
</div>
</div>{" "}{" "}<div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all duration-300">
<button className="faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5" aria-expanded="false">
<h3 className="text-xl md:text-lg sm:text-md font-semibold text-gray-900 dark:text-white">{" Still have questions? "}</h3>{" "}<span className="faq-icon relative w-5 h-5 flex-shrink-0">
<span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 dark:bg-white">
</span>{" "}<span className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 dark:bg-white faq-vertical transition">
</span>
</span>
</button>{" "}<div className="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-lg md:text-base sm:text-sm">{" Whether you're planning a new website, improving an existing application, or building a custom web solution, I'm here to help. "}<br />{" "}<b>Let's discuss your project and turn your ideas into a fast, scalable, and user-friendly web application.</b>{" "}<br />{" "}<Link href="/#contact" className="nav-link">
<button className="bg-transparent hover:bg-green-600  text-green-500 hover:text-white border border-green-500  duration-500 px-7 py-2.5 w-full rounded-[2em] font-medium text-[16px]">{" Let's Build Something Amazing "}</button>
</Link>
</div>
</div>
</div>
</div>
</div>
</section>
  )
}

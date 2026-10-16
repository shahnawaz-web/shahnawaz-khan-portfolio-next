import MustRead from './MustRead'

export default function BlogSidebar() {
  return (
<aside className="w-full md:w-1/3">
<div className="ml-0 md:ml-6 space-y-10">{" "}<div className={" author-card animated-border w-[100%] profile-box opacity-0 translate-y-6 transition-all duration-700\n            flex items-start flex-col justify-center \n            bg-black/60 backdrop-blur-xl border border-white/10\n            hover:border-blue-400/40 hover:shadow-xl rounded-lg"} suppressHydrationWarning>{" "}<img src="/assets/images/insigts-case-studies/shahnawaz-khan-reading-vogue-with-confidence.webp" alt="Shahnawaz Khan reading Vogue" className={"w-full h-[50%]  object-cover\n             ring-2 ring-white/10 rounded-lg"} fetchPriority="high" loading="lazy" decoding="async" />{" "}{" "}<div className="flex-1 text-center px-7.5  rounded-lg">
<h3 className="text-xl font-bold my-2">
<a href="./index.html" className="hover:text-blue-500 fw-bolder">Shahnawaz Khan</a>
</h3>{" "}{" "}<p className="text-sm text-blue-600 mb-2">{" Full Stack Web Developer "}</p>{" "}{" "}<p className=" text-gray-300 text-sm text-center">{"Welcome to my PortFolio. Turning Ideas Into Scalable Digital Solutions That Deliver Real Business Results. Helping Businesses, Startups & Entrepreneurs Build, Grow & Scale Online."}</p>
</div>{" "}{" "}<div className={"flex flex-row top-7.5 animated-border relative  bg-black/30 backdrop-blur-xl border border-white/10\n            hover:border-blue-400/40 hover:shadow-xl  justify-content-center gap-3 mx-auto p-3 rounded-lg"}>{" "}<div className="bg-transparent cursor-pointer hover:bg-black border border-blue-600 hover:border-white w-9 h-8 rounded-md flex justify-center items-center duration-500 group hover:scale-[1.02]">
<a href="https://github.com/shahnawaz-web" target="_blank" rel="noopener noreferrer">
<i className="bi bi-github text-blue-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>{" "}{" "}<div className="bg-transparent cursor-pointer border border-blue-600 hover:border-white hover:bg-blue-500 w-9 h-8 rounded-md flex justify-center items-center duration-300 hover:scale-[1.02] group">
<a href="https://pk.linkedin.com/in/shahnawaz-khan-webdeveloper" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-linkedin-in text-blue-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>{" "}{" "}<div className="bg-transparent cursor-pointer border border-blue-600 hover:border-white hover:bg-black w-9 h-8 rounded-md flex justify-center items-center duration-300 hover:scale-[1.02] group">
<a href="https://x.com/shahnawaz_code" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-x text-blue-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>{" "}{" "}<div className="bg-transparent cursor-pointer border border-blue-600 hover:border-white hover:bg-blue-600 w-9 h-8 rounded-md flex justify-center items-center duration-300 hover:scale-[1.02] group">
<a href="https://www.facebook.com/share/1CLwVdrvQq/" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-facebook text-blue-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>{" "}{" "}<div className="bg-transparent cursor-pointer border border-blue-600 hover:border-white hover:bg-pink-600 w-9 h-8 rounded-md flex justify-center items-center duration-300 hover:scale-[1.02] group">
<a href="https://www.instagram.com/shahnawazkhan.dev?igsh=MWw2aXU1eGI0dTAzNw==" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-instagram text-blue-600 group-hover:text-white duration-500 text-md">
</i>
</a>
</div>
</div>
</div>{" "}{" "}{" "}<div>
<h5 className="border-b-2 border-blue-500 pb-2 mb-4 font-semibold">Must Read</h5>{" "}<MustRead />
</div>{" "}{" "}{" "}{" "}<div className=" rounded p-6 text-center">{" "}<div className={"max-w-3xl mx-auto flex flex-col sm:flex-col items-center gap-6\n             bg-[#141b2c]/60 animated-border border border-blue-500 hover:border-blue-600 hover:shadow-[2px_2px_0px_rgba(37,99,235)] rounded-xl px-8 py-5 my-16 duration-300 transition-all hover:scale-[1.003]"}>{" "}<img src="/assets/images/insigts-case-studies/WebDev-insite-logo.webp" alt="WebDev Insight Newsletter" className="w-24 h-24 rounded-full border-4 border-blue-500/40 object-cover" fetchPriority="high" loading="lazy" decoding="async" />{" "}{" "}<div className="flex-1 text-center sm:text-left">
<h3 className="text-xl font-semibold text-white">{" 📰 WebDev Insight "}</h3>{" "}<p className="text-sm text-blue-400 mt-1">{" Practical, developer-first content "}</p>{" "}<p className="text-sm text-gray-400 mt-3 leading-relaxed">{" Subscribe to my LinkedIn Newsletter to get the latest articles, tips, and trends in web development and product thinking delivered straight to your inbox. "}</p>
</div>{" "}{" "}<a href="https://www.linkedin.com/newsletters/%25F0%259F%2593%25B0-webdev-insight-7387577168291086337/" target="_blank" className={"inline-flex items-center gap-2 px-5 py-3 rounded-lg\n               bg-blue-600 hover:bg-blue-700 text-white font-medium transition"}>
<i className="bi bi-linkedin">
</i>{" View LinkedIn NewsLetter "}</a>
</div>
</div>{" "}{" "}<div className=" rounded p-6">
<h5 className="border-b-2 border-white/10 pb-2 mb-4 font-semibold">Newsletter</h5>{" "}<h5 className="font-bold mb-2">Subscribe to my Newsletter</h5>{" "}<p className="text-sm mb-3">Subscribe to get my best new stories straight into your inbox!</p>{" "}<input type="text" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" placeholder="Enter Your Email..." />{" "}<h6 className="mb-0 mt-3 text-center uppercase">
<a className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600" href="#">Subscribe</a>
</h6>
</div>{" "}{" "}<section className="py-20 bg-[#0e101b]">
<div className="max-w-6xl mx-auto px-4">{" "}<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-bold text-white">{" Let’s Connect on LinkedIn "}</h2>{" "}<p className="mt-4 text-gray-400 max-w-2xl mx-auto">{" Follow my professional journey, projects, and insights on web development, product thinking, and modern technologies. "}</p>
</div>{" "}{" "}<div className={"max-w-3xl mx-auto flex flex-col sm:flex-col items-center gap-6\n             bg-[#141b2c]/60 animated-border border border-blue-500 hover:border-blue-600 hover:shadow-[2px_2px_0px_rgba(37,99,235)] rounded-xl px-8 py-5 my-16 duration-300 transition-all hover:scale-[1.003]"}>{" "}{" "}<img src="/assets/images/insigts-case-studies/shahnawaz-khan-linkedin-profile.webp" alt="Shahnawaz Khan LinkedIn Profile" fetchPriority="high" loading="lazy" decoding="async" className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover" />{" "}{" "}<div className="flex-1 text-center sm:text-left">
<h3 className="text-xl font-semibold text-white">{" Shahnawaz Khan "}</h3>{" "}<p className="text-sm text-blue-400 mt-1">{" Developer • Mentor • Creator "}</p>{" "}<p className="text-sm text-gray-400 mt-3 leading-relaxed">{" I help businesses and individuals turn ideas into modern, user-friendly, high-performance and scalable websites using Modern web technologies. "}</p>{" "}{" "}<div className="flex justify-center sm:justify-start gap-6 mt-4 text-sm text-gray-300">
<span>💼 Open to Opportunities</span>{" "}<span>🌍 Remote / On-site</span>
</div>
</div>{" "}{" "}<a href="https://pk.linkedin.com/in/shahnawaz-khan-webdeveloper?trk=profile-badge" target="_blank" className={"inline-flex items-center gap-2 px-5 py-3 rounded-lg\n               bg-blue-600 hover:bg-blue-700 text-white font-medium transition"}>
<i className="bi bi-linkedin">
</i>{" View LinkedIn "}</a>
</div>
</div>
</section>
</div>
</aside>
  )
}

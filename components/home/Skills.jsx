export default function Skills() {
  return (
<section id="skills" className="dark:bg-[#0B0F13] overflow-hidden relative xl:pb-10 px-5 sm:px-5 md:px-7 lg:px-10 xl:px-16">{" "}<div className="absolute inset-0 pointer-events-none">
<div className="floating absolute top-0 left-0 w-75 h-75 bg-blue-500/20 blur-3xl rounded-full">
</div>{" "}<div className="floating absolute bottom-0 right-0 w-75 h-75 bg-green-500/20 blur-3xl rounded-full">
</div>
</div>{" "}<div className="flex justify-center items-center flex-col gap-4 space-y-4 pt-20 pb-14">
<h2 className="relative text-4xl sm:text-3xl text-[#1a3263] dark:text-white font-bold after:absolute after:left-20 after:-bottom-5 after:w-[40%] after:h-1 after:bg-green-600 dark:after:bg-blue-600">{" My "}<span className="text-green-600 dark:text-blue-500">Skills</span>
</h2>{" "}<h3 className="dark:text-white/80 text-[#1B3C53] text-[21px] font-bold mx-auto text-center">{" Technical Skills, Tools & Expertise "}</h3>{" "}<p className="dark:text-white/80 text-[#1B3C53] text-[19px] mx-auto text-center">{" The stack I use to ship production-grade products, not just the frameworks I've tried once. "}</p>
</div>{" "}{" "}<div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-6 text-white">{" "}<div className="bg-[#d3e3fd]/60 dark:bg-[#141b2c]/60 hover:bg-[#d3e3fd] p-6 rounded-xl hover:shadow-[2px_2px_0px_#1a3263]  dark:hover:shadow-[2px_2px_0px_rgba(37,99,235)] border border-blue-600 hover:border-blue-700 transition-all duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-[#1a3263]  dark:bg-blue-600 rounded-lg flex items-center justify-center text-xl">
<i className="bi bi-palette text-green-100">
</i>
</div>{" "}<h2 className="text-xl font-bold text-[#1a3263] dark:text-white">Frontend</h2>
</div>{" "}{" "}<h3 className="text-[#fbbc05] dark:text-white font-semibold mb-4">Core</h3>{" "}<div className="flex flex-wrap gap-4">{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<i className="fa-brands fa-html5 text-[#dd4b25] text-2xl">
</i>
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">HTML5</span>{" "}{" "}<div className="absolute bottom-[120%] w-50 left-50 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300">
<div className="bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">{" HTML5 - Semantic & Accessibility "}</div>{" "}{" "}<div className="w-3 h-3 bg-[#0f172a] border-r border-b border-blue-600 absolute left-1/2 -translate-x-1/2 top-7.5 -mt-1" style={{"transform": "rotate(45deg)"}}>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<i className="fa-brands fa-css3-alt text-blue-600 dark:text-blue-500 text-2xl">
</i>
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">CSS3</span>{" "}<div className="absolute bottom-[120%] w-55 left-50 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300">
<div className="bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg">{" CSS3 - Layout & Responsive Design "}</div>{" "}<div className="w-3 h-3 bg-[#0f172a] border-r border-b border-blue-600 absolute left-1/2 -translate-x-1/2 top-7.5 -mt-1" style={{"transform": "rotate(45deg)"}}>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<i className="fa-brands fa-js text-[#dd9c25] text-2xl">
</i>
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">JavaScript</span>{" "}<div className="absolute bottom-[120%] w-50 left-50 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300">
<div className="bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg">{" JavaScript - Logic & Interactivity "}</div>{" "}<div className="w-3 h-3 bg-[#0f172a] border-r border-b border-blue-600 absolute left-1/2 -translate-x-1/2 top-7.5 -mt-1" style={{"transform": "rotate(45deg)"}}>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="/assets/images/icons/skills/vs-code-icon.webp" className="h-7 w-7" alt="VS Code" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">VS Code</span>{" "}<div className="absolute bottom-[120%] w-74 left-50 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300">
<div className="bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg">{" VS Code - Integrated Development Environment "}</div>{" "}<div className="w-3 h-3 bg-[#0f172a] border-r border-b border-blue-600 absolute left-1/2 -translate-x-1/2 top-7.5 -mt-1" style={{"transform": "rotate(45deg)"}}>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="/assets/images/icons/skills/chrome-devTools-icon.webp" alt="Chrome DevTools" className="h-7 w-7" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">DevTools</span>{" "}<div className="absolute bottom-[120%] w-70 left-50 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300">
<div className="bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg">{" Chrome DevTools - Debugging & Performance "}</div>{" "}<div className="w-3 h-3 bg-[#0f172a] border-r border-b border-blue-600 absolute left-1/2 -translate-x-1/2 top-7.5 -mt-1" style={{"transform": "rotate(45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<h3 className="text-[#fbbc05] dark:text-white font-semibold mb-4">Advanced</h3>{" "}<div className="flex flex-wrap gap-4">{" "}<div className="relative group flex flex-col items-center">{" "}<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">TypeScript</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-58 text-center">{" Type-safe, maintainable applications "}{" "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<i className="fa-brands fa-react text-cyan-400 text-2xl">
</i>
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">React</span>{" ` "}{" "}<div className="absolute bottom-[120%] w-50 left-50 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300">
<div className="bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg">{" React - Component-Based UI "}</div>{" "}{" "}<div className="w-3 h-3 bg-[#0f172a] border-r border-b border-blue-600 absolute left-1/2 -translate-x-1/2 top-7.4 -mt-1" style={{"transform": "rotate(45deg)"}}>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" fetchPriority="high" loading="lazy" decoding="async" className="w-6 h-6 bg-white rounded-full p-1" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Next.js</span>{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-54 text-center">{" SSR, SEO & production-grade apps "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="TailwindCSS" className="w-6 h-6" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Tailwind</span>{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-44 text-center">{" Utility-first responsive UI "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap5" className="w-6 h-6" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Bootstrap5</span>{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-44 text-center">{" Responsive UI framework "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>
</div>
</div>{" "}{" "}<div className="bg-[#d3e3fd]/60 dark:bg-[#141b2c]/60 hover:bg-[#d3e3fd] p-6 rounded-xl hover:shadow-[2px_2px_0px_#1a3263]  dark:hover:shadow-[2px_2px_0px_rgba(37,99,235)] border border-blue-600 hover:border-blue-700 transition-all duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-[#1a3263] dark:bg-blue-600 rounded-lg flex items-center justify-center text-xl">
<i className="bi bi-code-slash text-green-100">
</i>
</div>{" "}<h2 className="text-xl font-bold text-[#1a3263] dark:text-white">Backend</h2>
</div>{" "}{" "}<h3 className="text-[#fbbc05] dark:text-white font-semibold mb-4">Core</h3>{" "}<div className="flex flex-wrap gap-5">{" "}<div className="relative group flex flex-col items-center">{" "}<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" fetchPriority="high" loading="lazy" decoding="async" className="w-6 h-6" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Node.js</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-44 text-center">{" Server-side runtime & APIs "}{" "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Express.js</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-44 text-center">{" REST API architecture "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<i className="bi bi-diagram-3 text-xl text-blue-400">
</i>
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">REST APIs</span>{" "}<div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-48 text-center">{" Client-server communication "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>
</div>{" "}{" "}<h3 className="text-[#fbbc05] dark:text-white font-semibold mb-4">Advanced</h3>{" "}<div className="flex flex-wrap gap-5">{" "}<div className="relative group flex flex-col items-center">{" "}<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" className="w-6 h-6" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">GraphQL</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-44 text-center">{" API query language "}{" "}<div className={"absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 \n          bg-[#0f172a] border-l border-b border-blue-600"} style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="Socket.io" fetchPriority="high" loading="lazy" decoding="async" className="w-6 h-6 invert" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Socket.io</span>{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-48 text-center">{" Real-time communication "}<div className={"absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 \n          bg-[#0f172a] border-l border-b border-blue-600 "} style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<i className="bi bi-shield-lock text-blue-400 text-xl">
</i>
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">JWT</span>{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="tooltip bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-48 text-center">{" Authentication tokens "}<div className={"absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 \n          bg-[#0f172a] border-l border-b border-blue-600 "} style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>
</div>
</div>
</div>{" "}<div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-6 text-white">{" "}<div className="bg-[#d3e3fd]/60 dark:bg-[#141b2c]/60 hover:bg-[#d3e3fd] p-6 rounded-xl hover:shadow-[2px_2px_0px_#1a3263]  dark:hover:shadow-[2px_2px_0px_rgba(37,99,235)] border border-blue-600 hover:border-blue-700 transition-all duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-[#1a3263] dark:bg-blue-600 rounded-lg flex items-center justify-center text-xl">
<i className="bi bi-database text-green-100">
</i>
</div>{" "}<h2 className="text-xl font-semibold text-[#1a3263] dark:text-white/70">Database</h2>
</div>{" "}{" "}<div className="flex flex-wrap gap-5">{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">MongoDB</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-55 text-center">{" Schema-flexible NoSQL database "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" fetchPriority="high" loading="lazy" decoding="async" className="w-6 h-6" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">PostgreSQL</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-70 text-center">{" Advanced relational database (complex queries) "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">MySQL</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-48 text-center">{" Structured relational database "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-6 h-6" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Firebase</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-60 text-center">{" Real-time DB, auth & backend services "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>
</div>
</div>{" "}{" "}<div className="bg-[#d3e3fd]/60 dark:bg-[#141b2c]/60 hover:bg-[#d3e3fd] p-6 rounded-xl hover:shadow-[2px_2px_0px_#1a3263]  dark:hover:shadow-[2px_2px_0px_rgba(37,99,235)] border border-blue-600 hover:border-blue-700 transition-all duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-[#1a3263] dark:bg-blue-600 rounded-lg flex items-center justify-center text-xl">
<i className="bi bi-wrench-adjustable text-green-100">
</i>
</div>{" "}<h2 className="text-xl font-bold text-[#1a3263] dark:text-white">{"Tools & Platforms"}</h2>
</div>{" "}<div className="flex flex-wrap gap-5">{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Git</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-40 text-center">{" Version control system "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 invert" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">GitHub</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-56 text-center">{" Code hosting & team collaboration "}<div className={"absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 \n          bg-[#0f172a] border-l border-b border-blue-600"} style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" alt="Vercel" className="w-6 h-6 rounded-full" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Vercel</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-56 text-center">{" Fast deployment for frontend apps "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" className="w-6 h-6 rounded-full" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Netlify</span>{" "}{" "}<div className="absolute bottom-[120%] left-50 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-56 text-center">{" Fast deployment for frontend apps "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="/assets/images/icons/skills/vite-icon.png" alt="Vite" className="h-7 w-7" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Vite</span>{" "}{" "}<div className="absolute bottom-[120%] w-50 left-48 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300">
<div className="bg-[#0f172a] w-60 border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg">{" Vite - Next Generation Frontend Tooling "}</div>{" "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>{" "}{" "}<div className="relative group flex flex-col items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#1a3263] dark:border-blue-600 bg-[#1a3263] dark:bg-[#0f172a] hover:bg-blue-600/10 transition duration-300 cursor-pointer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" fetchPriority="high" loading="lazy" decoding="async" className="w-6 h-6" />
</div>{" "}<span className="text-xs mt-2 font-semibold text-[#20aa64] dark:text-white/70">Webpack</span>{" "}{" "}<div className="absolute bottom-[120%] left-46 -translate-x-1/2 hidden group-hover:block z-50">
<div className="relative bg-[#0f172a] border border-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg w-56 text-center">{" JavaScript module bundler "}<div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f172a] border-l border-b border-blue-600" style={{"transform": "rotate(-45deg)"}}>
</div>
</div>
</div>
</div>
</div>
</div>
</div>{" "}</section>
  )
}

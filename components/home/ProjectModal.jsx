export default function ProjectModal() {
  return (
<div id="projectModal" className="fixed inset-0 z-999 hidden items-center justify-center bg-black/70 backdrop-blur-sm">{" "}<div className="relative w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f172a] border border-white/10 shadow-xl">{" "}<div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
<h2 id="modalTitle" className="text-white text-xl font-bold">{" Project Title "}</h2>{" "}<button data-action="close-project-modal" className="w-8  rounded-lg border border-red-600 text-red-600 text-2xl">✕</button>
</div>{" "}{" "}<div className="p-6">
<img id="modalImage" alt="project image" className="w-full h-[260px] object-cover rounded-xl" fetchPriority="high" loading="lazy" decoding="async" />
</div>{" "}{" "}<div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6">{" "}<div>
<h3 className="text-white font-semibold my-3 text-2xl">Description</h3>{" "}<p id="modalDesc" className="text-white/70 text-lg leading-relaxed">
</p>{" "}<h3 className="text-white font-semibold my-4 text-2xl">{" Technologies Used "}</h3>{" "}<div id="modalFeatures" className="flex flex-wrap gap-2">
</div>
</div>{" "}{" "}<div>
<h3 className="text-white font-semibold mb-3">Project Links</h3>{" "}<div className="flex flex-col gap-3">
<a id="modalLive" href="#" target="_blank" className="bg-green-500 text-white text-center py-3 rounded-lg font-medium hover:bg-green-600 transition">{" View Live Demo "}</a>{" "}<button id="modalCode" className="border border-green-500 text-green-500 text-center py-3 rounded-lg font-medium hover:bg-green-500 hover:text-white transition">{" View Source Code "}</button>{" "}<h3 className="text-white font-semibold my-3 text-2xl">{" Category Used "}</h3>{" "}<span id="modalCategory" className="flex justify-center items-center px-3 w-45 py-1.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 border border-blue-500">
</span>{" "}<div className="text-right">
<button data-action="close-project-modal" className={"px-5 py-2 w-45  rounded-lg border border-red-600 text-red-600 font-medium\n         hover:bg-red-600 hover:text-white\n         transition-all duration-300 cursor-pointer"}>{" Cancel "}</button>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

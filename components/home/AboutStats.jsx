export default function AboutStats() {
  return (
<div className={"relative py-14 px-5 sm:px-6 md:px-7 lg:px-10 xl:px-16\ngrid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4\ngap-8\nbg-[#1A3263] dark:bg-transparent\nhover:scale-y-[1.02]\nhover:shadow-[2px_2px_0px_#20aa64]\ndark:hover:shadow-[2px_2px_0px_rgba(37,99,235,1)]\ntransition-all duration-500"}>{" "}<div className="absolute inset-0 pointer-events-none">
<div className="floating absolute top-0 left-0 w-75 h-75 bg-blue-500/20 blur-3xl rounded-full">
</div>{" "}<div className="floating absolute bottom-0 right-0 w-75 h-75 bg-green-500/20 blur-3xl rounded-full">
</div>
</div>{" "}<div className="p-2 group space-y-2 flex justify-center items-center flex-col hover:shadow-[2px_2px_0px_#4CAF50] dark:hover:shadow-[2px_2px_0px_rgba(37,99,235)] transition-all duration-500 hover:scale-[1.03]  border border-green-500 dark:border-blue-600/50 dark:hover:border-blue-600 rounded-lg py-8">
<div className="bg-[#1a2333]/60 border border-green-500 dark:border-blue-600 text-green-500 dark:text-blue-600 hover:border-white hover:text-white group-hover:bg-green-500 dark:group-hover:bg-blue-600 group-hover:text-white group-hover:border-white transition-all duration-500 w-18 h-18 mb-4 flex justify-center items-center rounded-xl ">
<i className="bi bi-award text-[30px]">
</i>
</div>{" "}<h3 className="text-white text-4xl font-bold group-hover:text-green-500 dark:group-hover:text-blue-500">{" 25+ "}</h3>{" "}<p className="text-white/80 font-medium text-center text-[18px]">{" Projects shipped to production "}</p>
</div>{" "}<div className="p-2 group space-y-2 flex justify-center items-center flex-col hover:shadow-[2px_2px_0px_#4CAF50] dark:hover:shadow-[2px_2px_0px_rgba(37,99,235)] transition-all duration-500 hover:scale-[1.03]  border border-green-500 dark:border-blue-600/50 dark:hover:border-blue-600 rounded-lg py-8">
<div className="bg-[#1a2333]/60 border border-green-500 dark:border-blue-600 text-green-500 dark:text-blue-600 hover:border-white hover:text-white group-hover:bg-green-500 dark:group-hover:bg-blue-600 group-hover:text-white group-hover:border-white transition-all duration-500 w-18 h-18 mb-4 flex justify-center items-center rounded-xl ">
<i className="bi bi-people text-[30px]">
</i>
</div>{" "}<h3 className="text-white text-4xl font-bold group-hover:text-green-500 dark:group-hover:text-blue-500">{" 15+ "}</h3>{" "}<p className="text-white/80 font-medium text-center text-[18px]">{"Businesses served across web & SaaS"}</p>
</div>{" "}<div className="p-2 group space-y-2 flex justify-center items-center flex-col hover:shadow-[2px_2px_0px_#4CAF50] dark:hover:shadow-[2px_2px_0px_rgba(37,99,235)] transition-all duration-500 hover:scale-[1.03]  border border-green-500 dark:border-blue-600/50 dark:hover:border-blue-600 rounded-lg py-8">
<div className="bg-[#1a2333]/60 border border-green-500 dark:border-blue-600 text-green-500 dark:text-blue-600 hover:border-white hover:text-white group-hover:bg-green-500 dark:group-hover:bg-blue-600 group-hover:text-white group-hover:border-white transition-all duration-500 w-18 h-18 mb-4 flex justify-center items-center rounded-xl ">{" "}<i className="fa-solid fa-handshake-angle text-[30px]">
</i>
</div>{" "}<h3 className="text-white text-4xl font-bold group-hover:text-green-500 dark:group-hover:text-blue-500">{" 24/7 "}</h3>{" "}<p className="text-white/80 font-medium text-center text-[18px]">Technical Support</p>
</div>{" "}<div className="p-2 group space-y-2 flex justify-center items-center flex-col hover:shadow-[2px_2px_0px_#4CAF50] dark:hover:shadow-[2px_2px_0px_rgba(37,99,235)] transition-all duration-500 hover:scale-[1.03]  border border-green-500 dark:border-blue-600/50 dark:hover:border-blue-600 rounded-lg py-8">
<div className="bg-[#1a2333]/60 border border-green-500 dark:border-blue-600 text-green-500 dark:text-blue-600 hover:border-white hover:text-white group-hover:bg-green-500 dark:group-hover:bg-blue-600 group-hover:text-white group-hover:border-white transition-all duration-500 w-18 h-18 mb-4 flex justify-center items-center rounded-xl ">
<i className="bi bi-clock text-[30px]">
</i>
</div>{" "}<h3 className="text-white text-4xl font-bold group-hover:text-green-500 dark:group-hover:text-blue-500">{" 4+ "}</h3>{" "}<p className="text-white/80 font-medium text-center text-[18px]">Years of Industry Experience</p>
</div>
</div>
  )
}

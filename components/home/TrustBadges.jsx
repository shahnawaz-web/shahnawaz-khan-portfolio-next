export default function TrustBadges() {
  return (
<div className=" px-6 py-14 box-content  bg-[#1A3263] dark:bg-transparent hover:shadow-[2px_2px_0px_#20aa64]  dark:hover:shadow-[2px_2px_0px_rgba(37,99,235)] transition-all duration-500 hover:scale-y-[1.02]">
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 pb-2">
<div className="p-2 group space-y-2 flex justify-center items-center flex-col transition-all duration-500 hover:scale-[1.03] cursor-pointer">
<h3 className="text-green-500 dark:text-blue-500 text-3xl font-bold">Fast</h3>{" "}<p className="text-white/80 font-medium text-2xl">{" Performance "}</p>
</div>{" "}<div className="p-2 group space-y-2 flex justify-center items-center flex-col transition-all duration-500 hover:scale-[1.03] cursor-pointer">
<h3 className="text-green-500 dark:text-blue-500 text-3xl font-bold">Secure</h3>{" "}<p className="text-white/80 font-medium text-2xl">{" Development"}</p>
</div>{" "}<div className="p-2 group space-y-2 flex justify-center items-center flex-col transition-all duration-500 hover:scale-[1.03] cursor-pointer">
<h3 className="text-green-500 dark:text-blue-500 text-3xl font-bold">SEO</h3>{" "}<p className="text-white/80 font-medium text-2xl">{" Optimized "}</p>
</div>{" "}<div className="p-2 group space-y-2 flex justify-center items-center flex-col transition-all duration-500 hover:scale-[1.03]">
<h3 className="text-green-500 dark:text-blue-500 text-3xl font-bold">Client</h3>{" "}<p className="text-white/80 font-medium text-2xl">{" Focused "}</p>
</div>
</div>
</div>
  )
}

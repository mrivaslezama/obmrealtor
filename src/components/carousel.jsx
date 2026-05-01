// --- SUB-COMPONENTS ---

function PropertyCarousel() {
  return (
    <div className="py-12 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Properties</h2>
        <el-carousel className="relative group" loop>
          <div className="overflow-hidden rounded-xl">
            <el-carousel-items className="flex gap-4">
              {properties.map((prop) => (
                <el-carousel-item key={prop.id} className="min-w-[300px] flex-none w-full md:w-1/3">
                  <div className="bg-white/5 rounded-xl overflow-hidden ring-1 ring-white/10">
                    <img src={prop.image} alt={prop.title} className="h-48 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white">{prop.title}</h3>
                      <p className="text-indigo-400 font-bold">{prop.price}</p>
                    </div>
                  </div>
                </el-carousel-item>
              ))}
            </el-carousel-items>
          </div>
          <button command="prev" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full text-white z-10 hover:bg-white/20">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button command="next" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full text-white z-10 hover:bg-white/20">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </el-carousel>
      </div>
    </div>
  );
}
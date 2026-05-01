function MainNavbar() {
  return (
    <el-navbar className="bg-gray-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" 
            alt="Logo" 
            className="h-8 w-auto" 
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-x-8">
          <a href="#" className="text-sm font-medium text-white hover:text-indigo-400 transition">Product</a>
          <a href="#" className="text-sm font-medium text-white hover:text-indigo-400 transition">Features</a>
          <a href="#" className="text-sm font-medium text-white hover:text-indigo-400 transition">Marketplace</a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-x-4">
          <button className="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400">
            Log in
          </button>
        </div>
      </div>
    </el-navbar>
  );
}

function Header(props) {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 px-4 py-4 shadow-lg shadow-black/20 backdrop-blur-xl">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-8">

          {/* Logo / Title */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
              T
            </div>

            <h1 className="text-xl font-bold tracking-tight text-white">
              {props.tittal || "Text Converter"}
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-2 sm:flex">

            <a
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              Home
            </a>

            <a
              href="/about"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              About
            </a>

          </div>
        </div>

        {/* Right Side Search */}
        <form className="hidden items-center gap-2 sm:flex">

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search..."
              className="w-48 rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30 active:scale-95"
          >
            Search
          </button>

        </form>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xl text-gray-300 transition hover:bg-white/10 sm:hidden"
        >
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Header;





import { useState } from "react";

function Header(props) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b px-4 py-4 shadow-lg backdrop-blur-xl transition-all duration-300 ${
        darkMode
          ? "border-white/10 bg-slate-950/90 shadow-black/20"
          : "border-gray-200 bg-white/90 shadow-gray-200/50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-8">

          {/* Logo / Title */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
              T
            </div>

            <h1
              className={`text-xl font-bold tracking-tight transition-colors ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {props.tittal || "Text Converter"}
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-2 sm:flex">

            <a
              href="/"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                darkMode
                  ? "text-gray-300 hover:bg-white/10 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Home
            </a>

            <a
              href="/about"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                darkMode
                  ? "text-gray-300 hover:bg-white/10 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              About
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <form className="hidden items-center gap-2 sm:flex">

            <div className="relative">
              <span
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                🔍
              </span>

              <input
                type="text"
                placeholder="Search..."
                className={`w-48 rounded-xl border py-2.5 pl-10 pr-3 text-sm outline-none transition-all duration-300 ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10"
                    : "border-gray-200 bg-gray-100 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                } focus:ring-2 focus:ring-blue-500/20`}
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30 active:scale-95"
            >
              Search
            </button>

          </form>

          {/* Dark / Light Mode Switch */}
          <button
            onClick={toggleMode}
            aria-label="Toggle dark and light mode"
            className={`relative flex h-10 w-20 items-center rounded-full border p-1 transition-all duration-300 ${
              darkMode
                ? "border-white/10 bg-slate-800"
                : "border-gray-200 bg-gray-200"
            }`}
          >
            {/* Sliding Circle */}
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm shadow-md transition-transform duration-300 ${
                darkMode
                  ? "translate-x-10 bg-slate-950 text-yellow-300"
                  : "translate-x-0 bg-white text-orange-500"
              }`}
            >
              {darkMode ? "🌙" : "☀️"}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`rounded-lg border px-3 py-2 text-xl transition sm:hidden ${
              darkMode
                ? "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            ☰
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Header;


function Header(props){
  return (
    <nav className="flex items-center justify-between bg-gray-100 px-4 py-3">
      
      {/* Left Side */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <h1 className="text-lg font-normal text-gray-700">
          {props.tittal}
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-4">
          <a
            href="/"
            className="text-sm text-gray-600 hover:text-black"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-sm text-gray-600 hover:text-black"
          >
            About
          </a>
        </div>
      </div>

      {/* Right Side Search */}
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="w-40 rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="rounded border border-gray-500 px-3 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white"
        >
          Search
        </button>
      </form>

    </nav>
  );
}

export default Header;


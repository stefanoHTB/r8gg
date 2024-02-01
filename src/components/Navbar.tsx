import ToggleColor from "./ToggleColor";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 dark:bg-black p-3 fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/public/logoob.png" alt="Logo" className="h-11 w-11 mr-2" />
          <div className="text-white font-bold text-xl">/ R8gg</div>
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/about" className="text-white">
            About
          </a>
          <a href="/links" className="text-white">
            Links
          </a>
        </div>
        <div>
          <ToggleColor />
        </div>

        <div className="md:hidden">
          <button className="text-white">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

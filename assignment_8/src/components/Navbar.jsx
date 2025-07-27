import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-white/8 shadow-sm" : "bg-white "
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-2xl font-bold text-violet-600">
            TechStore
          </span>
        </a>

        {/* Desktop Search */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-64 px-4 py-2 pl-10 rounded-lg border text-sm border-gray-300 bg-gray-100 focus:ring-violet-500 focus:border-violet-500"
          />
          <svg
            className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
            />
          </svg>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 md:order-2">
          <a href="#" className="relative text-gray-700 text-xl">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 text-xs bg-violet-600 text-white px-1.5 py-0.5 rounded-full">
              2
            </span>
          </a>
          <a
            href="#"
            className="text-sm px-4 py-1.5 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
          >
            Login
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="w-full md:hidden mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 mb-4 rounded-lg border text-sm border-gray-300 bg-gray-100 focus:ring-violet-500 focus:border-violet-500"
            />
            <ul className="flex flex-col gap-2 text-gray-700 font-medium">
              <li>
                <a href="#" className="block px-4 py-2 hover:text-violet-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-violet-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-violet-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-violet-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700 md:order-1">
          <a href="#" className="hover:text-violet-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-violet-600 transition">
            Products
          </a>
          <a href="#" className="hover:text-violet-600 transition">
            About
          </a>
          <a href="#" className="hover:text-violet-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-2xl font-bold text-blue-600 dark:text-white">
            TechStore
          </span>
        </a>

        {/* Desktop Search */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-64 px-4 py-2 pl-10 rounded-lg border text-sm border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <svg
            className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 dark:text-gray-300"
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
          <a
            href="#"
            className="relative text-gray-700 dark:text-gray-300 text-xl"
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
              2
            </span>
          </a>
          <a
            href="#"
            className="text-sm px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Login
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-white focus:outline-none"
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

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="w-full md:hidden mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 mb-4 rounded-lg border text-sm border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <ul className="flex flex-col gap-2 text-gray-700 dark:text-white font-medium">
              <li>
                <a href="#" className="block px-4 py-2 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-white md:order-1">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Products
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

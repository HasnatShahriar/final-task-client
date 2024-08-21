import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
         My Product
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <div className="relative group">
            <button className="text-gray-300 hover:text-white">
              Services
            </button>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white text-gray-800 rounded-lg shadow-lg group-hover:block">
              <Link
                to="/service1"
                className="block px-4 py-2 hover:bg-gray-200">
                Service 1
              </Link>
              <Link
                to="/service2"
                className="block px-4 py-2 hover:bg-gray-200">
                Service 2
              </Link>
              <Link
                to="/service3"
                className="block px-4 py-2 hover:bg-gray-200">
                Service 3
              </Link>
            </div>
          </div>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-8 6h8"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4 space-y-2">
        <Link to="/" className="block text-gray-300 hover:text-white">
          Home
        </Link>
        <Link to="/about" className="block text-gray-300 hover:text-white">
          About
        </Link>
        <div className="relative">
          <button className="block text-gray-300 hover:text-white">
            Services
          </button>
          <div className="mt-2 w-full bg-white text-gray-800 rounded-lg shadow-lg">
            <Link
              to="/service1"
              className="block px-4 py-2 hover:bg-gray-200">
              Service 1
            </Link>
            <Link
              to="/service2"
              className="block px-4 py-2 hover:bg-gray-200">
              Service 2
            </Link>
            <Link
              to="/service3"
              className="block px-4 py-2 hover:bg-gray-200">
              Service 3
            </Link>
          </div>
        </div>
        <Link to="/contact" className="block text-gray-300 hover:text-white">
          Contact
        </Link>
      </div>

      {/* Login Button */}
      <div className="text-right mt-4 md:mt-0">
        <Link to="/login" className="text-gray-300 hover:text-white">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

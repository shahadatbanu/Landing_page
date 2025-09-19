import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Solutions", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
          <span className="font-bold text-lg text-gray-800">Company'or</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="relative cursor-pointer hover:text-blue-600 transition group"
            >
              {link}
              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-gradient-to-r from-gray-500 to-indigo-500 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Login
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navLinks.map((link, idx) => (
            <p
              key={idx}
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
            >
              {link}
            </p>
          ))}
          <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

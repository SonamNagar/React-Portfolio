import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10 transition-colors">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
            S
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Sonam Nagar
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Frontend Developer
            </p>
          </div>

        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-900 dark:text-white">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-blue-400 transition duration-300 hover:scale-105"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">

          {/* Theme Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${
              darkMode
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-gray-900 text-white hover:bg-black"
            }`}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white/5 dark:bg-black/30 backdrop-blur-xl border-t border-white/10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-900 dark:text-white hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
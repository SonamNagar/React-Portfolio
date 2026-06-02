import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            S
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Sonam Nagar
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Frontend Developer
            </p>
          </div>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link
              className="hover:text-blue-500 transition"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-blue-500 transition"
              to="/about"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-blue-500 transition"
              to="/skills"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-blue-500 transition"
              to="/project"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-blue-500 transition"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Theme Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${
            darkMode
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-gray-800 text-white hover:bg-black"
          }`}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
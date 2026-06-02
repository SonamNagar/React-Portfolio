
import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* NAME */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Sonam Nagar
          </h2>
          <p className="text-gray-300 mt-3 text-sm leading-relaxed">
            Frontend & WordPress Developer focused on building clean,
            responsive and modern web applications using React and Tailwind CSS.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#project" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <p className="text-gray-300">📍 Indore, Madhya Pradesh</p>

          <p className="text-gray-300 mt-2">
            📧 sonamnagar115@gmail.com
          </p>

          <p className="text-gray-300 mt-2">
            📞 +91 7067414199
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400 text-sm">
        © 2026 Sonam Nagar — All Rights Reserved
      </div>

    </footer>
  )
}

export default Footer
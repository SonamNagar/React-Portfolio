import React from "react";
import gif from "../assets/gif.gif";

const Footer = () => {
  return (
    <footer className="relative text-white mt-16 overflow-hidden">

      {/* 🔥 BACKGROUND GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${gif})` }}
      />

      {/* 🔥 LIGHT DARK OVERLAY (LESS DARK = MORE CLEAR GIF) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">

        {/* NAME */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Sonam Nagar
          </h2>

          <p className="text-gray-200 mt-3 text-sm leading-relaxed">
            Frontend & WordPress Developer focused on building clean,
            responsive and modern web applications using React and Tailwind CSS.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-200">
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

          <p className="text-gray-200">📍 Indore, Madhya Pradesh</p>
          <p className="text-gray-200 mt-2">📧 sonamnagar115@gmail.com</p>
          <p className="text-gray-200 mt-2">📞 +91 7067414199</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 text-center text-gray-300 text-sm py-5 border-t border-white/10 mt-8">
        © 2026 Sonam Nagar — All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;
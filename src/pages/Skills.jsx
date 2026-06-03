import React from "react";
import react from "../assets/react.png";
import htmllogo from "../assets/html.jpg";
import javascriptlogo from "../assets/js.avif";
import CSSlogo from "../assets/css.jpg";

const Skills = () => {
  return (
    <section className="relative min-h-screen px-6 md:px-16 py-16 overflow-hidden text-white">

      {/* 🔥 MAIN GLASS CONTAINER (HOME STYLE) */}
      <div className="bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400">
          Technical Skills
        </h1>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* FRONTEND BOX */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:scale-105 hover:-translate-y-2 transition duration-300">

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Frontend Developer
            </h2>

            <ul className="space-y-3 text-gray-200">
              <li>✔ HTML5</li>
              <li>✔ CSS (Flexbox, Grid, Responsive Design)</li>
              <li>✔ JavaScript</li>
              <li>✔ DOM Manipulation</li>
              <li>✔ Web Animation (CSS & JS)</li>
              <li>✔ React JS</li>
            </ul>

          </div>

          {/* REACT BOX */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:scale-105 transition">

            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={react}
                alt="React"
                className="relative w-32 md:w-40 animate-bounce"
              />
            </div>

            <p className="mt-4 text-xl font-semibold text-white">
              React
            </p>

          </div>

        </div>

        {/* ADDITIONAL SKILLS */}
        <h2 className="text-3xl font-bold text-center mt-16 mb-10 text-blue-400">
          Additional Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* HTML */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 hover:-translate-y-2 transition">

            <div className="flex items-center gap-3 mb-4">
              <img
                src={htmllogo}
                alt="HTML"
                className="w-10 h-10 rounded-full"
              />
              <h3 className="text-xl font-semibold text-white">
                HTML5
              </h3>
            </div>

            <ul className="space-y-2 text-gray-200 text-sm">
              <li>✔ Semantic markup</li>
              <li>✔ Forms & Tables</li>
              <li>✔ SEO-friendly Structure</li>
              <li>✔ Accessibility Basics</li>
            </ul>

          </div>

          {/* CSS */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 hover:-translate-y-2 transition">

            <div className="flex items-center gap-3 mb-4">
              <img
                src={CSSlogo}
                alt="CSS"
                className="w-10 h-10 rounded-full"
              />
              <h3 className="text-xl font-semibold text-white">
                CSS
              </h3>
            </div>

            <ul className="space-y-2 text-gray-200 text-sm">
              <li>✔ Flexbox & Grid</li>
              <li>✔ Responsive Design</li>
              <li>✔ Animations</li>
              <li>✔ Pixel Perfect UI</li>
            </ul>

          </div>

          {/* JAVASCRIPT */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 hover:-translate-y-2 transition">

            <div className="flex items-center gap-3 mb-4">
              <img
                src={javascriptlogo}
                alt="JavaScript"
                className="w-10 h-10 rounded-full"
              />
              <h3 className="text-xl font-semibold text-white">
                JavaScript
              </h3>
            </div>

            <ul className="space-y-2 text-gray-200 text-sm">
              <li>✔ ES6+ Features</li>
              <li>✔ DOM Manipulation</li>
              <li>✔ Event Handling</li>
              <li>✔ Logic Building</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;
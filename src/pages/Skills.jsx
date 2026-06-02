import React from 'react'
import react from '../assets/react.png'
import htmllogo from '../assets/html.jpg'
import javascriptlogo from '../assets/js.avif'
import CSSlogo from '../assets/css.jpg'

const Skills = () => {
  return (
    <>
      <div className="px-6 md:px-16 py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white animate-fadeIn overflow-hidden">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-600">
          Technical Skills
        </h1>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Frontend Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:scale-105 hover:-translate-y-2 transition duration-300">

            <h2 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-white">
              Frontend Developer
            </h2>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>✔ HTML5</li>
              <li>✔ CSS (Flexbox, Grid, Responsive Design)</li>
              <li>✔ JavaScript</li>
              <li>✔ DOM Manipulation</li>
              <li>✔ Web Animation (CSS & JS)</li>
              <li>✔ React JS</li>
            </ul>

          </div>

         {/* React Box */}
<div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:scale-105 transition">

  <img
    src={react}
    alt="React"
    className="w-32 md:w-40 animate-bounce drop-shadow-2xl"
  />

  <p className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
    React
  </p>

</div>

        </div>

        {/* ADDITIONAL SKILLS */}
        <h2 className="text-3xl font-bold text-center mt-16 mb-10 text-blue-500">
          Additional Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* HTML */}
          <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition duration-300">

            <div className="flex items-center gap-3 mb-4">
              <img
                src={htmllogo}
                alt="HTML"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold hover:text-blue-500 transition">
                HTML5
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>✔ Semantic markup</li>
              <li>✔ Forms & Tables</li>
              <li>✔ SEO-friendly Structure</li>
              <li>✔ Accessibility Basics</li>
            </ul>

          </div>

          {/* CSS */}
          <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition duration-300">

            <div className="flex items-center gap-3 mb-4">
              <img
                src={CSSlogo}
                alt="CSS"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold hover:text-blue-500 transition">
                CSS
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>✔ Flexbox & Grid</li>
              <li>✔ Responsive Design</li>
              <li>✔ Animations</li>
              <li>✔ Pixel Perfect UI</li>
            </ul>

          </div>

          {/* JavaScript */}
          <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition duration-300">

            <div className="flex items-center gap-3 mb-4">
              <img
                src={javascriptlogo}
                alt="JavaScript"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold hover:text-blue-500 transition">
                JavaScript
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>✔ ES6+ Features</li>
              <li>✔ DOM Manipulation</li>
              <li>✔ Event Handling</li>
              <li>✔ Logic Building</li>
            </ul>

          </div>

        </div>

      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
        `}
      </style>
    </>
  )
}

export default Skills
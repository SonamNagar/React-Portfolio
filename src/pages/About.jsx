import React from 'react'
import reactIcon from '../assets/react.svg'

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div
          className="space-y-6 opacity-0 animate-[fadeInLeft_1s_ease-out_forwards]"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a Frontend Developer who enjoys building modern, fast and
            responsive web applications. My goal is to create clean UI designs
            and smooth user experiences using React.js and Tailwind CSS.
          </p>

          {/* Highlight Box */}
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition duration-300">
            <p className="text-gray-700 dark:text-gray-300">
              🚀 I focus on performance, UI design, and reusable components for
              scalable applications.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition duration-300">
              Download CV
            </button>

            <button className="px-6 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="flex flex-col items-center space-y-6 opacity-0 animate-[fadeInRight_1s_ease-out_0.3s_forwards]"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={reactIcon}
              alt="React"
              className="relative w-40 md:w-52 animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-2 gap-4 w-full">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Git"
            ].map((skill, i) => (
              <div
                key={i}
                className="p-3 text-center rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:scale-110 hover:-translate-y-1 transition duration-300 font-medium text-gray-700 dark:text-gray-200"
              >
                {skill}
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-80px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(80px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

    </section>
  )
}

export default About
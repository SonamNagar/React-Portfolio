import React from 'react'
import calculator from '../assets/calculator.png'
import DigitalClock from '../assets/digital.webp'
import weather from '../assets/weather.png'
import Destiny from '../assets/library.jpg'
import { useNavigate } from "react-router-dom"

export default function Project() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Calculator",
      image: calculator,
      path: "/calculator",
    },
    {
      title: "Digital Clock",
      image: DigitalClock,
      path: "/clock",
    },
    {
      title: "Weather App",
      image: weather,
      path: "/weather",
    },
    {
      title: "Destiny",
      image: Destiny,
      path: "/destiny",
    },
  ];

  return (
    <>
      <div className="px-6 md:px-16 py-16 bg-white dark:bg-gray-900 overflow-hidden animate-fadeIn">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600">
          Projects
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-3 mb-12 max-w-2xl mx-auto">
          Some of the work I have built using React, JavaScript and modern UI design.
        </p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center space-y-4">

                <h2 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-500 transition">
                  {project.title}
                </h2>

                <button
                  className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition duration-300"
                  onClick={() => navigate(project.path)}
                >
                  View Project
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Animation */}
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

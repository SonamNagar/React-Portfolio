import React from "react";
import reactIcon from "../assets/react.svg";

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden text-white">

      {/* 🔥 SAME HOME STYLE GLASS CONTAINER */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h1 className="text-5xl font-bold text-white">
            About <span className="text-blue-400">Me</span>
          </h1>

          <p className="text-gray-200 leading-relaxed text-lg">
            I am a Frontend Developer who enjoys building modern, fast and
            responsive web applications. My goal is to create clean UI designs
            and smooth user experiences using React.js and Tailwind CSS.
          </p>

          {/* HIGHLIGHT BOX */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-gray-200">
               I focus on performance, UI design, and reusable components for
              scalable applications.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">

            <button className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition hover:scale-105">
              Download CV
            </button>

            <button className="px-6 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition hover:scale-105">
              Contact Me
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center space-y-6">

          {/* GLOW EFFECT */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={reactIcon}
              alt="React"
              className="relative w-44 md:w-56 animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>

          {/* SKILLS GRID */}
          <div className="grid grid-cols-2 gap-4 w-full">

            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map(
              (skill, i) => (
                <div
                  key={i}
                  className="p-3 text-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition text-gray-200"
                >
                  {skill}
                </div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
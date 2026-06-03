import React from "react";
import portfolio from "../assets/portfolio.png";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gif from "../assets/gif.gif";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* 🔥 BACKGROUND GIF (CLEAR VISIBILITY) */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${gif})` }}
      />

      {/* 🔥 VERY LIGHT OVERLAY (ONLY FOR TEXT READABILITY) */}
      <div className="fixed inset-0 bg-black/10 -z-10"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO SECTION (PURE TRANSPARENT - NO BLUR ISSUE) */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 m-6 rounded-2xl bg-white/5 border border-white/10 shadow-2xl">

          {/* LEFT SIDE */}
          <motion.div
            className="md:w-1/2 space-y-5"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hi, I'm <span className="text-blue-400">Sonam Nagar</span>
            </h1>

            <h3 className="text-xl md:text-2xl text-gray-200">
              Frontend Developer | React Developer
            </h3>

            <p className="text-gray-200 leading-relaxed">
              I build responsive and interactive web applications using React,
              JavaScript, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">

              <button
                className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition hover:scale-105"
                onClick={() => navigate("/project")}
              >
                View Projects
              </button>

              <button className="px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition hover:scale-105">
                Download Resume
              </button>

              <button
                className="px-5 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition hover:scale-105"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </button>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="md:w-1/2 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={portfolio}
              alt="Portfolio"
              className="w-72 md:w-96 rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </motion.div>

        </div>

        {/* OTHER SECTIONS */}
        <About />
        <Skills />
        <Project />
        <Contact />

      </div>
    </div>
  );
}
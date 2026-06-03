import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import About from './pages/About'

import Calculator from './pages/Calculator'
import Clock from './pages/Clock'
import WeatherApp from './pages/WeatherApp'
import DestinyProject from "./pages/Destiny";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import gif from "./assets/gif.gif";

export default function App() {
  return (
    <div className="relative min-h-screen">

      {/* BACKGROUND GIF */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${gif})` }}
      />

      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/30 -z-10"></div>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

          {/* 🔥 IMPORTANT FIX (MISSING ROUTES ADDED) */}
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/clock' element={<Clock />} />
          <Route path='/weather' element={<WeatherApp />} />
          <Route path='/destiny' element={<DestinyProject />} />

          <Route path='*' element={<h1 className="text-white text-center mt-20">404 Not Found</h1>} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}
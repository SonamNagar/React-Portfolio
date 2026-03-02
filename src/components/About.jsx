import React from 'react'
import './About.css'
import reactimage from '../assets/reactimage.png'
const About = () => {
  return (
    <div>
     <div className="about-container">
        <div className="about-leftbox">
          <h1>About Me</h1>
          <img src={reactimage} alt="React" />
          <div className="about-btn-container">
            <button>HTML</button>
            <button>CSS</button>
            <button>JS</button>
            <button>REACT</button>
          </div>
        </div>
        <div className="about-rightbox">
          <p>
            Hi, I’m a passionate React Frontend Developer who loves turning ideas into interactive web experiences.
            I specialize in building responsive and dynamic applications using HTML, CSS, JavaScript, and React.js.
            From API-based Weather Apps to reusable UI components, I focus on clean design, smooth user experience, and optimized performance.
            I enjoy learning new technologies and constantly improving my development skills to build modern and impactful web applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

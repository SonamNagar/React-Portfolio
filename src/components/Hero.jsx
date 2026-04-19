import React from 'react';
import portfolioImage from '../assets/portfolioImage.jpg';
import './Hero.css';
import reactimage from '../assets/reactimage.png'
import weatherproject from '../assets/weatherproject.png';
import digitalclock from '../assets/digitalclock.webp';
import news from '../assets/news.png'
import calcu from '../assets/calcu.webp';
import react from '../assets/react.svg'
import htmllogo from '../assets/htmllogo.png'
import javascriptlogo from '../assets/javascriptlogo.png'
import CSSlogo from '../assets/CSSlogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <>
    <div className="hero-container">
      {/* Left text box */}
      <div className="hero-leftbox">
        <h1>
          Hi, I'm <span className="hero-highlight">Sonam Nagar</span>
        </h1>
     
        <h3>Frontend Developer | React Developer</h3>
        <p>
          I build responsive and interactive web applications
          using React, JavaScript, and modern web technologies.
        </p>
        <div className="hero-btns">
          <button className="hero-btn">View Projects</button>
          <button className="hero-btn">Download Resume</button>
          <button className="hero-btn">Contact Me</button>
        </div>
      </div>

      {/* Right image box */}
      <div className="hero-rightbox">
        <img src={portfolioImage} alt="Portfolio" />
      </div>
    </div>
    <br />
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
          <br />
           <div className="project-container">
                <div className="project-card">
                  <h1>Weather App Project</h1>
                  <img src={weatherproject} alt="" />
                  <button>View Project</button>
                </div>
          
                <div className="project-card">
                  <h1>Digital Clock Project</h1>
                  <img src={digitalclock} alt="" />
                  <button >View Project</button>
                </div>
          
                <div className="project-card">
                  <h1>News App Project</h1>
                  <img src={news} alt="" />
                  <button >View Project</button>
                </div>
          
                <div className="project-card">
                  <h1>Calculator Project</h1>
                  <img src={calcu} alt="" />
                  <button >View Project</button>
                </div>
              </div>
              <br />
                  <div className='containerskills'>
                     
                      <h1>Technical Skills</h1>
                
                    <div className="skills1">
                      <h2>Frontend Developer</h2>
                      <div className="html">
                        <div>Html:5</div>
                        <div>CSS(Flexbox,Grid,Responsive Design)</div>
                        <div>JavaScript</div>
                        <div>DOM manipulation</div>
                        <div>Web animation (CSS&JS)</div>
                      </div>
                    </div>
                    <div className="skills2">
                      <img src={react} alt="" />
                      
                      <p>React</p>
                     
                    </div>
                  </div>
                  <br />
                <div className="additionalskills">
                  <h1>Additional Skills</h1>
                  <div className="add1">
                     <div className="html">
                      <img src={htmllogo} alt="" />
                      <p>HTML5</p>
                     </div>
                     <div className="para">
                      <p>Well-structured and semantic markup</p>
                      <p>Effective use of forms,tables,and multimedia elements</p>
                      <p>Semantic and maintainable HTML architecture</p>
                      <p>Accessibility and SEO optimization</p>
                     </div>
                  </div>
                   <div className="add2">
                     <div className="html2">
                      <img src={CSSlogo} alt="" />
                      <p>CSS</p>
                     </div>
                     <div className="para2">
                      <p>CSS used for styling,layout control,and making websites responsive.</p>
                      <p>Creative responsive,Using Flexbox,and Grid.</p>
                      <p>CSS expert in responsive layouts , animation,and pixel-perfect UI design.</p>
                      <p>Accessibility and SEO optimization</p>
                     </div>
                  </div>
                   <div className="add3">
                     <div className="html3">
                      <img src={javascriptlogo} alt="" />
                      <p>JavaScript</p>
                     </div>
                     <div className="para3">
                      <p>JavaScript(ES6+)FOR interactive UI,DOM manipulation,and logic building.</p>
                      <p>Add functionality and interactivity to websites.</p>
                      <p>DOM manipulation, events,animation,and clean logic.</p>
                      <p>Accessibility and SEO optimization</p>
                     </div>
                  </div>
                </div>
                <br />
                 <section className="contact-container">
        <div className="contact-leftbox">
          <h3>Get In Touch</h3>

          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:sonamnagar115@gmail.com">sonamnagar115@gmail.com</a>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+917067414199">+91 7067414199</a>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Indore, Madhya Pradesh, India</span>
          </div>
        </div>

        <form className="contact-form" >
          <h3>Contact Me</h3>
          <input type="text" name="name" placeholder="Your Name"  required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Phone Number"  />
          <input type="text" name="subject" placeholder="Subject"  />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <footer class="footer">
  <div class="footer-content">
    <h2 class="footer-name">Sonam Nagar</h2>

       <p class="footer-role">
      Frontend & WordPress Developer focused on building clean and responsive web interfaces.
    </p>

    <ul class="footer-links">
       <li><a href="#asideo">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#project">project</a></li>
            <li><a href="#Skills">Skills</a></li>
          
    </ul>

    <p class="footer-copy">
      © 2026 Sonam Nagar — Crafted for modern web experiences.
    </p>
  </div>
</footer>
    </>
  );
};

export default Hero;
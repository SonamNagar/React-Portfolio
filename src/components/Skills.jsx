import React from 'react'
import react from '../assets/react.svg'
import htmllogo from '../assets/htmllogo.png'
import javascriptlogo from '../assets/javascriptlogo.png'
import CSSlogo from '../assets/CSSlogo.png'
import './Skills.css'
const Skills = () => {
  return (
    <>
 
    <div className="containerskills">
      <h1>Technical Skills</h1>

      <div className="skills-wrapper">
        {/* Frontend Skills Box */}
        <div className="skills1">
          <h2>Frontend Developer</h2>
          <div className="html">
            <div>HTML5</div>
            <div>CSS (Flexbox, Grid, Responsive Design)</div>
            <div>JavaScript</div>
            <div>DOM Manipulation</div>
            <div>Web Animation (CSS & JS)</div>
          </div>
        </div>

        {/* React Box */}
        <div className="skills2">
          <img src={react} alt="React Logo" />
          <p>React</p>
        </div>
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
</>
  )
}

export default Skills

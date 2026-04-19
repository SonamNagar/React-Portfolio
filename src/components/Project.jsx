import React from 'react';
import weatherproject from '../assets/weatherproject.png';
import digitalclock from '../assets/digitalclock.webp';
import news from '../assets/news.png'
import calcu from '../assets/calcu.webp';
import './Project.css';
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="project-container">
      <div className="project-card">
        <h1>Weather App Project</h1>
        <img src={weatherproject} alt="" />
        <button onClick={() => handleClick('/weather')}>View Project</button>
      </div>

      <div className="project-card">
        <h1>Digital Clock Project</h1>
        <img src={digitalclock} alt="" />
        <button onClick={() => handleClick('/clock')}>View Project</button>
      </div>

      <div className="project-card">
        <h1>News App Project</h1>
       <img src={news} alt="" />
        <button onClick={() => handleClick('/cafe')}>View Project</button>
      </div>

      <div className="project-card">
        <h1>Calculator Project</h1>
        <img src={calcu} alt="" />
        <button onClick={() => handleClick('/calculator')}>View Project</button>
      </div>
    </div>
  );
}

export default Project;

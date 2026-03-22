import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  
  return (
    <div className='navbar-container'>
      <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
       <li><NavLink to='/project'>Project</NavLink></li>
        <li><NavLink to='/skills'>Skills</NavLink></li>
       <li><NavLink to='/contact'>Contact</NavLink></li>
    
      </ul>

    </div>
  )
}

export default Navbar

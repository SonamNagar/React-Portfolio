
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import WeatherApp from './components/WeatherApp'
import Clock from './components/Clock' 

import Calculator from './components/Calculator'
import News from './components/News';


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:'/about',
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:'/project',
      element:
      <div>
        <Navbar/>
        <Project/>
      </div>
    },
      {
      path:'/skills',
      element:
      <div>
        <Navbar/>
        <Skills/>
      </div>
    },
     {
      path:'/contact',
      element:
      <div>
        <Navbar/>
        <Contact/>
      </div>
    },   
     
      {
      path:'/weather',
      element:
      <div>
        <Navbar/>
        <WeatherApp/>
      </div>
    }, 
      {
      path:'/clock',
      element:
      <div>
        <Navbar/>
        <Clock/>
      </div>
    },
      {
      path:'/cafe',
      element:
      <div>
        <Navbar/>
        <News/>
      </div>
    },
      {
      path:'/calculator',
      element:
      <div>
        <Navbar/>
        <Calculator/>
      </div>
    },
  ]
)
function App() {
  return (
        <RouterProvider router={router} />
  )
}
export default App

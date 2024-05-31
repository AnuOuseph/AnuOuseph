/* eslint-disable no-unused-vars */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { useState } from 'react';
library.add(fab);

function App() {
 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <Navbar isOpen={isOpen} toggleMenu={toggleMenu}/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App

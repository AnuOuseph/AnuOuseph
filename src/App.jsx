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
library.add(fab);

function App() {
 

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App

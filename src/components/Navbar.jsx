/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDownload, faXmark} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const URL = "http://localhost:5173/Anu-Ouseph.pdf"
    const downloadFile = (url)=>{
      fetch(url).then(response=>response.blob())
      .then((blob)=>{
        const blobUrl = window.URL.createObjectURL(new Blob([blob]))
        const filename = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = blobUrl
        aTag.setAttribute('download',filename)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        })
      }
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-full fixed top-0 left-0 bg-white overflow-x-hidden flex justify-between py-4 px-10'>
      <div className='flex items-center'>
        <a href="https://github.com/AnuOuseph" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='py-2 ' icon={['fab', 'github']}  size="md" />
        </a>
        <a href="https://www.linkedin.com/in/anuouseph/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='py-2 px-4' icon={['fab', 'linkedin']}  size="md" /> 
        </a>
        <a href="https://www.linkedin.com/in/anuouseph/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='py-2 px-0' icon={['fab', 'twitter']}  size="md" /> 
        </a>
        <button onClick={()=>{downloadFile(URL)}} className='btn'><FontAwesomeIcon className='py-2 px-4' icon={faDownload}  size="sm" /></button>
        {/* <p className='text-sm font-medium'>Resume.</p>  */}
      </div>
      <button className="bg-white px-4 py-2 rounded" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <div className="bg-white shadow-lg rounded md:w-[30%] w-[100%] min-h-screen bg-white fixed top-0 right-0 p-5" style={{ maxHeight: '100vh' }}>
          <div className='text-end px-5'>
            <FontAwesomeIcon icon={faXmark} className='cursor-pointer' onClick={toggleMenu}/>
          </div>
        <div className='px-5 bg-white flex items-center justify-center h-[90vh]'>
          <ul className='decoration-none flex flex-col items-center font-medium px-5 py-4' >
            <li className='px-4 py-4 text-xl md:text-3xl'><Link activeClass="active"
              to="home" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500} 
            >
              <button>Home</button>
          </Link>
            </li>
            <li className='px-4 py-4 text-xl md:text-3xl'><Link activeClass="active"
              to="about" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500} 
            >
              <button>About</button>
              </Link>
            </li>
            <li className='px-4 py-4 text-xl md:text-3xl'><Link activeClass="active"
              to="projects" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500} 
            >
              <button>Projects</button>
              </Link>
            </li>
            <li className='px-4 py-4 text-xl md:text-3xl'><Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500} 
            >
              <button>Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      )}
    </div>
  )
}

export default Navbar

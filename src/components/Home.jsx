/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Home() {
  return (
    <div className='px-20 py-20'>
      <div className='flex grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='bg-white flex md:justify-end'>
            <div>
            <p className='text-6xl py-4'><b>Mern Stack <br/> Developer</b></p>
            <p className='text-sm py-2'>Hi, I'm Anu Ouseph, A passionate Full Stack Developer, <br/> based in Kerala, India.</p>
            <a href="https://github.com/AnuOuseph" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='py-2 ' icon={['fab', 'github']} size="xl" />
            </a>
            <a href="https://www.linkedin.com/in/anuouseph/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='py-2 px-2' icon={['fab', 'linkedin']} size="xl" /> 
            </a>
            </div>
        </div>
        <div className='bg-white'>
            <img className='w-3/4' src="../../Picsart.png" alt="" />
        </div>
      </div>
      <div className='flex items-center justify-center bg-white'>
        <p className='px-2'><b>Tech Stack </b> | </p>
        <ul className='flex items-center'>
            <li className='w-10 px-2'>
                <img src="../../mongo-icon.png" alt="" />
            </li>
            <li className='w-10 px-2'>
                <img src="../../js.png" alt="" />
            </li>
            <li className='w-12 px-2'>
                <img src="../../node-icon.png" alt="" />
            </li>
            <li className='w-10 px-2'>
                <img src="../../react-icon.png" alt="" />
            </li>
            <li className='w-10 px-2'>
                <img src="../../html.png" alt="" />
            </li>
            <li className='w-10 px-2'>
                <img src="../../css-icon.png" alt="" />
            </li>
            <li className='w-10 px-2'>
                <img src="../../bs-icon.png" alt="" />
            </li>
            <li className='w-10 px-2'>
                <img src="../../tail-icon.png" alt="" />
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Home

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function Home() {
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
  return (
    <div className='md:px-20 md:py-20 px-10 py-32 h-screen flex items-center justify-center' id='home'>
      <div className='flex justify-center items-center'>
        <div className='bg-white flex justify-center flex-col'>
            <div className=''>
                <p className='md:text-4xl text-2xl py-4 font-medium'>Hey, I'm Anu <span className="blog-title-emoji" style={{ transform: 'scaleX(-1)' }} >👋</span> <br /> <span className='md:text-5xl text-3xl '><b>Full Stack Developer</b></span></p>
                
                <p className='text-md py-1'>Hi, I'm Anu Ouseph, Experienced Full Stack Developer from India, <br/> with 2 years of expertise in React, Node, Express, MongoDb. </p>
                {/* <div className='flex items-center'>
                   // text gradient bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text
                    <a href="https://github.com/AnuOuseph" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='py-2 ' icon={['fab', 'github']} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/anuouseph/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='py-2 px-2' icon={['fab', 'linkedin']} size="xl" /> 
                    </a>
                    
                    <button onClick={()=>{downloadFile(URL)}} className='btn'><FontAwesomeIcon className='py-2 px-2' icon={faDownload} size="lg" /></button>
                    <p className='text-sm font-medium'>Resume.</p>
                     <img src="../../Picsart.png" alt="" /> 
                </div> */}
            </div>
            <div className='md:flex items-center justify-start bg-white'>
                <p className='md:px-0 py-2'><b className='text-sm md:text-md'>Tech Stack : </b></p>
                <ul className='flex items-center'>
                    <li className='md:w-10 w-8 px-2'>
                        <img src="../../mongo-icon.png" alt="" />
                    </li>
                    <li className='md:w-10 w-8 px-2'>
                        <img src="../../js.png" alt="" />
                    </li>
                    <li className='md:w-12 w-8 px-2'>
                        <img src="../../node-icon.png" alt="" />
                    </li>
                    <li className='md:w-10 w-8 px-2'>
                        <img src="../../react-icon.png" alt="" />
                    </li>
                    <li className='md:w-10 w-8 px-2'>
                        <img src="../../html.png" alt="" />
                    </li>
                    <li className='md:w-10 w-8 px-2'>
                        <img src="../../css-icon.png" alt="" />
                    </li>
                    <li className='md:w-10 w-8 px-2'>
                        <img src="../../bs-icon.png" alt="" />
                    </li>
                    <li className='md:w-10 w-8 px-2'>
                        <img src="../../tail-icon.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home

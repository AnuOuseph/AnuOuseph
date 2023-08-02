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
    <div className='md:px-20 md:py-20 px-10 py-32' id='home'>
      <div className='flex grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='bg-white flex md:justify-end justify-center'>
            <div className=''>
                <p className='md:text-6xl text-5xl py-4'><b>Mern Stack <br/> Developer</b></p>
                <p className='text-sm py-2'>Hi, I'm Anu Ouseph, A passionate Full Stack Developer, <br/> based in Kerala, India.</p>
                <div className='flex items-center'>
                    <a href="https://github.com/AnuOuseph" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='py-2 ' icon={['fab', 'github']} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/anuouseph/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='py-2 px-2' icon={['fab', 'linkedin']} size="xl" /> 
                    </a>
                    
                    <button onClick={()=>{downloadFile(URL)}} className='btn'><FontAwesomeIcon className='py-2 px-2' icon={faDownload} size="lg" /></button>
                    <p className='text-sm font-medium'>Resume.</p>
                    
                </div>
            </div>
        </div>
        <div className='bg-white'>
            <img className='md:w-3/4' src="../../Picsart.png" alt="" />
        </div>
      </div>
      <div className='flex items-center justify-center bg-white'>
        <p className='md:px-2'><b className='text-sm md:text-md'>Tech Stack </b> | </p>
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
  )
}

export default Home

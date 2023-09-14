/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function Projects() {
  return (
    <div className='w-full h-auto bg-white flex justify-center py-20' id='projects'>
     <div>
        <p className='text-md text-orange-600 font-bold md:py-4 py-8 text-center'>PROJECTS</p>
        <div className='md:flex md:items-center'>
            <div className='pr-4'>
                <img className='md:w-[31rem] mx-2 border border-black border-b-4 border-r-4 ' src="../../tn.jpg" alt="" />
            </div>
            <div className='md:w-96 px-4 py-6 md:py-0'>
                <p className='text-lg font-bold'>Gemma | E-Commerce</p>
                <p className='text-sm text-gray-800'>Gemma is an online store that allows customers to Login/ Signup and browse through multiple categories of jewelries, pick out products, add to wishlist, cart and then complete the purchase. </p>
                <p className='text-sm pt-4'><b>Tech Used </b>| Handlebars, Css, Bootstrap, Node Js, Express Js, MongoDb, Ajax, Toastify, Cloudinary, AWS</p>
                <p className='text-sm font-bold pt-4'>Demo Account:</p>
                <p className='text-sm'>Email: <span className='font-medium'>demo@gmail.com</span></p>
                <p className='text-sm'>Password: <span className='font-medium'>Demo@111</span></p>
                <div className='flex items-center pt-4'>
                    <div className='flex items-center pr-4'>
                        <p className='pr-1'>Code</p>
                        <a href="https://github.com/AnuOuseph/Gemma" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='py-2 ' icon={['fab', 'github']} size="lg" /></a>
                    </div>
                    <div className='flex items-center pr-4'>
                        <p className='pr-1'>Live Demo </p>
                        <a href="https://gemmajewel.online/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    </div>
                </div>
            </div>
        </div>

        <div className='md:flex md:items-center mt-4'>
            <div className='pr-4'>
                <img className='md:w-[31rem] mx-2 border border-black border-b-4 border-r-4 ' src="../../ixia.jpg" alt="" />
            </div>
            <div className='md:w-96 px-4 py-6 md:py-0'>
                <p className='text-lg font-bold'>Ixia | Social Media</p>
                <p className='text-sm text-gray-800'>Ixia is a social media website design using react and scss, it allows users to upload images and make friends. It is a responsive design with darkmode functionality.  </p>
                <p className='text-sm pt-4'><b>Tech Used </b>| React.js, Scss</p>
                <div className='flex items-center pt-4'>
                    <div className='flex items-center pr-4'>
                        <p className='pr-1'>Code</p>
                        <a href="https://github.com/AnuOuseph/Social_Media_Application" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='py-2 ' icon={['fab', 'github']} size="lg" /></a>
                    </div>
                    <div className='flex items-center pr-4'>
                        <p className='pr-1'>Live Demo </p>
                        <a href="https://ixia.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    </div>
                </div>
            </div>
        </div>

        <div className='md:flex md:items-center mt-8'>
            <div className='pr-4'>
                <img className='md:w-[31rem] mx-2 border border-black border-b-4 border-r-4 ' src="../../netflix.jpg" alt="" />
            </div>
            <div className='w-96 px-2 py-6 md:py-0'>
                <p className='text-lg font-bold'>Netflix | Clone</p>
                <p className='text-sm text-gray-800'>React Js for building the frontend, Axios for making HTTP requests and TMDB API for retrieving movie and TV show data</p>
                <p className='text-sm pt-4'><b>Tech Used </b>| React, Bootstrap, TMDB, Axios </p>
                <div className='flex items-center pt-4'>
                    <div className='flex items-center pr-4'>
                        <p className='pr-1'>Code</p>
                        <a href="https://github.com/AnuOuseph/Gemma" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='py-2 ' icon={['fab', 'github']} size="lg" /></a>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Projects

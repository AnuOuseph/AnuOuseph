/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function Projects() {
    const data = [
        {id: 1001, title: 'GEMMA E-COMMERCE', image: '../../tn.jpg', tech: ['Handlebars', 'bootstrap', 'mongodb', 'node', 'express']},
        {id: 1002, title: 'Biztox crm', image: '../../crm.png', tech: ['react', 'mongodb', 'node', 'express']},
        {id: 1003, title: 'ixia social media', image: '../../ixia.jpg', tech: ['scss', 'react']},
        {id: 1004, title: 'Biztox crm', image: '../../crm.png', tech: ['react', 'mongodb', 'node', 'express']},
    ]
  return (
    <div className='w-full h-auto bg-white flex justify-center py-20'  id='projects'>
     <div >
        <p className='text-lg text-orange-600 font-bold md:py-4 py-8 text-start'> SELECTED PROJECTS</p>
        <div className='md:flex md:items-center md:my-5 p-5 border'>
            <div className='pr-4'>
                <img className='md:w-[26rem] w-[20rem] mx-2 border border-black border-b-4 border-r-4 ' src="../../tn.jpg" alt="" />
            </div>
            <div className='md:w-[43rem] w-[20rem] px-4 py-6 md:py-0'>
                <div className='flex justify-between items-center py-2'>
                    <p className='text-lg font-bold'>Gemma | E-Commerce</p>
                    <div className='flex items-center md:pr-4'>
                        <p className='pr-1 font-bold text-sm'>Source Code</p>
                        <a href="https://github.com/AnuOuseph/Gemma" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='py-0 text-orange-700' icon={['fab', 'github']} size="lg" /></a>
                    </div>
                </div>
                <p className='text-sm text-gray-800'>Gemma is an online store that allows customers to Login/ Signup and browse through multiple categories of jewelries, pick out products, add to wishlist, cart and then complete the purchase. </p>
                <p className='text-sm pt-2'><b>Tech Used </b>| Handlebars, Css, Bootstrap, Node.js, Express.js, MongoDb, Ajax, Toastify, Cloudinary</p>
                <p className='text-sm pt-2'><b>Deployment </b>| AWS (EC2) </p>
            </div>
        </div>

        <div className='md:flex md:items-center md:my-5 p-5 border'>
            <div className='pr-4'>
                <img className='md:w-[26rem] w-[20rem] mx-2 border border-black border-b-4 border-r-4 ' src="../../crm.png" alt="" />
            </div>
            <div className='md:w-[43rem] w-[20rem] px-2 py-6 md:py-0'>
                <div className='flex justify-between items-center py-2'>
                    <p className='text-lg font-bold'>Hive | CRM</p>
                    <div className='flex items-center'>
                        <div className='flex items-center pr-4'>
                            <p className='pr-1 font-bold text-sm'>Source Code</p>
                            <a href="https://github.com/AnuOuseph/TN_Dashboard" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='py-0 text-orange-700' icon={['fab', 'github']} size="lg" /></a>
                        </div>
                        <div className='flex items-center md:pr-4'>
                            <p className='pr-1 font-bold text-sm'>Live Demo </p>
                            <a href="https://biz-crm-ao.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='text-orange-700' icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                </div>
                <p className='text-sm text-gray-800'>A Customer Relationship Management system designed to enhance and streamline interactions with clients, improve communication, and optimize overall customer satisfaction</p>
                <p className='text-sm pt-2'><b>Tech Used </b>| React.js, Node.js, Express.js, MongoDb, Redux, Axios, Tailwind CSS, Chart Js, JWT, Toastify</p>
                <p className='text-sm pt-2'><b>Deployment </b>| Frontend: Netlify, Backend: Render</p>
            </div>
        </div>

        <div className='md:flex md:items-center md:my-5 p-5 border'>
            <div className='pr-4'>
                <img className='md:w-[26rem] w-[20rem] mx-2 border border-black border-b-4 border-r-4 ' src="../../ixia.jpg" alt="" />
            </div>
            <div className='md:w-[43rem] w-[20rem] px-4 py-6 md:py-0'>
                <div className='flex justify-between items-center py-2'>
                    <p className='text-lg font-bold'>Ixia | Social Media</p>
                    <div className='flex items-center'>
                        <div className='flex items-center pr-4'>
                            <p className='pr-1 font-bold text-sm'> Source Code</p>
                            <a href="https://github.com/AnuOuseph/Social_Media_Application" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='py-0 text-orange-700' icon={['fab', 'github']} size="lg" /></a>
                        </div>
                        <div className='flex items-center md:pr-4'>
                            <p className='pr-1 font-bold text-sm'>Live Demo </p>
                            <a href="https://ixia.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='text-orange-700' icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                </div>
                <p className='text-sm text-gray-800'>Ixia is a social media website design using react and scss, it allows users to upload images and make friends. It is a responsive design with darkmode functionality.  </p>
                <p className='text-sm pt-2'><b>Tech Used </b>| React.js, SCSS, Context API</p>
                <p className='text-sm pt-2'><b>Deployment </b>| Frontend: Vercel</p>
            </div>
        </div>

        <div className='md:flex md:items-center md:my-5 p-5 border'>
            <div className='pr-4'>
                <img className='md:w-[26rem] w-[18rem] mx-2 border border-black border-b-4 border-r-4 ' src="../../netflix.jpg" alt="" />
            </div>
            <div className='w-[43rem] w-[18rem] px-2 py-6 md:py-0'>
                <div className='flex justify-between items-center py-2'>
                    <p className='text-lg font-bold'>Netflix | Clone</p>
                    <div className='flex items-center'>
                        <div className='flex items-center pr-4'>
                            <p className='pr-1 font-bold text-sm'>Source Code</p>
                            <a href="https://github.com/AnuOuseph/Netflix_Clone" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='py-0 text-orange-700' icon={['fab', 'github']} size="lg" /></a>
                        </div>
                        <div className='flex items-center md:pr-4'>
                            <p className='pr-1 font-bold text-sm'>Live Demo </p>
                            <a href="https://netflix-teal-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='text-orange-700' icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                </div>
                <p className='text-sm text-gray-800'> Netflix Clone using React Js for building the frontend, Axios for making HTTP requests and TMDB API for retrieving movie and TV show data.</p>
                <p className='text-sm pt-2'><b>Tech Used </b>| React.js, Bootstrap, TMDB, Axios </p>
                <p className='text-sm pt-2'><b>Deployment </b>| Frontend: Vercel</p>
            </div>
        </div>

        
     </div>
    </div>
  )
}

export default Projects

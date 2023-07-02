/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function Projects() {
  return (
    <div className='w-full h-auto bg-white flex justify-center py-20'>
     <div>
        <p className='text-md text-orange-600 font-bold py-4'>PROJECTS</p>
        <div className='flex items-center'>
            <div className='pr-4 '>
                <img className='w-96 border border-black border-b-4 border-r-4' src="../../tn.jpg" alt="" />
            </div>
            <div className='w-96 px-2'>
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
     </div>
    </div>
  )
}

export default Projects

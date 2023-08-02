/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className='w-full h-auto py-20 bg-white flex items-center justify-center' id='contact'>
        <div>
            <p className='text-md text-center text-orange-600 font-bold py-6'>CONTACT</p>
            <div className='md:flex'>
                <div className='border px-10 py-2 mr-4 my-2 md:my-0 flex items-center'>
                    <FontAwesomeIcon className='py-2 px-2' size="lg" icon={faLocationDot} />
                    <p>Kerala, India</p>
                </div>
                <div className='border px-10 py-2 mr-4 my-2 md:my-0 flex items-center'>
                    <FontAwesomeIcon className='py-2 px-2' size="lg" icon={faEnvelope} />
                    <p>anuouseph04@gmail.com</p>
                </div>
                <div className='border px-10 py-2 mr-4 my-2 md:my-0 flex items-center'>
                    <FontAwesomeIcon className='py-2 px-2' icon={['fab', 'linkedin']} size="lg" />
                    <a href="https://www.linkedin.com/in/anuouseph/" target="_blank" rel="noopener noreferrer">AnuOuseph</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact

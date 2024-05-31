/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className='bg-black w-full h-24 flex items-center justify-center text-white'>
      <div className='md:text-sm text-xs md:px-10 px-4 font-light'>
        <p>Copyright 2023. All Rights Reserved.</p>
      </div>
      <div className='flex md:px-10 px-4'>
        <a href="https://github.com/AnuOuseph" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='py-2 px-2 ' icon={['fab', 'github']} size="md" />
        </a>
        <a href="https://www.linkedin.com/in/anuouseph/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='py-2 px-2' icon={['fab', 'linkedin']} size="md" /> 
        </a>
        <a href="https://x.com/anu_ouseph" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='py-2 px-2' icon={['fab', 'twitter']} size="md" /> 
        </a>
      </div>
    </div>
  )
}

export default Footer

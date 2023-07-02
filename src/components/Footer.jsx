/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className='bg-black w-full h-24 flex items-center justify-center text-white'>
      <div className='text-sm px-10 font-light'>
        <p>Copyright 2023. All Rights Reserved.</p>
      </div>
      <div className='flex px-10'>
        <a href="https://github.com/AnuOuseph" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='py-2 px-2 ' icon={['fab', 'github']} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/anuouseph/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='py-2 px-2' icon={['fab', 'linkedin']} size="lg" /> 
        </a>
        <a href="https://twitter.com/anu_ouseph" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='py-2 px-2' icon={['fab', 'twitter']} size="lg" /> 
        </a>
      </div>
    </div>
  )
}

export default Footer

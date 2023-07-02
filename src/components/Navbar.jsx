/* eslint-disable no-unused-vars */
import React from 'react'

function Navbar() {
  return (
    <div className='w-full fixed top-0 left-0 bg-white flex justify-between py-4 px-10'>
      <div>
        <p className='text-lg font-semibold'>Anu Ouseph.</p>
      </div>
      <div>
        <ul className='decoration-none flex font-medium'>
            <li className='px-2 text-sm'>Home</li>
            <li className='px-2 text-sm'>About</li>
            <li className='px-2 text-sm'>Projects</li>
            <li className='px-2 text-sm'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

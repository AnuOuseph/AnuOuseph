/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
  return (
    <div className='w-full h-auto bg-white flex justify-center items-center sm:items-center' id='about'>
      <div className='flex flex-col sm:flex-row justify-center items-center md:my-40'>
        <div className='md:w-1/6 w-3/6 md:px-4'>
            <img className='rounded-2xl mb-6 md:mb-0' src="../../ME.jpg" alt="" />
        </div>
        <div className='md:w-1/3 text-justify px-4'>
            <p className='text-sm text-center md:text-start text-orange-600 font-bold pb-2'>ABOUT ME</p>
            <p className='text-lg text-center md:text-start pb-2'>A dedicated MERN Stack Developer</p>
            <p className='text-sm text-gray-600'>As a skilled MERN stack developer with a passion for creating efficient and user-friendly web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in building end-to-end solutions that deliver seamless user experiences. I thrive in collaborative environments and approach challenges with a strong problem-solving mindset. My dedication to staying updated with industry trends ensures that my work aligns with the latest best practices. Let's collaborate and bring your ideas to life!</p>
        </div>
      </div>
    </div>
  )
}

export default About

/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className='w-full fixed top-0 left-0 bg-white overflow-x-hidden flex justify-between py-4 px-10'>
      <div>
        <p className='md:text-lg text-sm font-semibold'>Anu Ouseph.</p>
      </div>
      <div>
        <ul className='decoration-none flex font-medium'>
          <li className='px-2 text-xs md:text-sm'><Link activeClass="active"
                    to="home" // ID of the target component you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-70} // Offset value to adjust the scroll position (optional)
                    duration={500} // Duration of the scroll animation in milliseconds
                  >
                    <button>Home</button>
                </Link>
          </li>
          <li className='px-2 text-xs md:text-sm'><Link activeClass="active"
                    to="about" // ID of the target component you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-70} // Offset value to adjust the scroll position (optional)
                    duration={500} // Duration of the scroll animation in milliseconds
                  >
                    <button>About</button>
                </Link>
          </li>
          <li className='px-2 text-xs md:text-sm'><Link activeClass="active"
                    to="projects" // ID of the target component you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-70} // Offset value to adjust the scroll position (optional)
                    duration={500} // Duration of the scroll animation in milliseconds
                  >
                    <button>Projects</button>
                </Link>
          </li>
          <li className='px-2 text-xs md:text-sm'><Link activeClass="active"
                    to="contact" // ID of the target component you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-70} // Offset value to adjust the scroll position (optional)
                    duration={500} // Duration of the scroll animation in milliseconds
                  >
                    <button>Contact</button>
                </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { PiFacebookLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Contactme = () => {
  return (
    <div className=' flex flex-row h-max justify-center items-center gap-5 bg-black m-15 rounded-md p-10' >
        <div className='flex flex-col mr-20 mb-10 items-stretch ' > 
          <h1 className='text-4xl md:text-4xl font-bold text-white' >Get in touch</h1>
          <h3 className='text-xl font-semibold text-white ' >I'd Love to hear from you</h3>
          <div className='flex flex-row gap-5 justify-center' >
            <IoLogoInstagram  color='white' />
            <PiFacebookLogoLight color='white'  />
            <CiLinkedin color='white' />
            <FaGithub  color='white' />
          </div>
        </div>
        <form className='flex flex-col gap-4 justify-center items-start mt-20 mr-25 w-200 '  >
          <label htmlFor="firstName" className='text-white' >First Name</label>
          <input type="text" name="firstName" id="" className='bg-white' />
          <label htmlFor="email" className='text-white' >Email</label>
          <input type="email" name="email" id="" className='bg-white' />
        </form>
        
    </div>
  )
}

export default Contactme
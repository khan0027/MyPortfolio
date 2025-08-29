import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { PiFacebookLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Contactme = () => {
  return (
    <div className=' flex flex-row flex-wrap h-300 justify-around items-center gap-5 bg-black m-15 rounded-md p-10 ' >
        <div className='flex flex-col   items-stretch gap-5  ' > 
          <h1 className='text-4xl md:text-4xl font-bold text-white' >Get in touch</h1>
          <h3 className='text-xl font-semibold text-white ' >I'd Love to hear from you</h3>
          <div className='flex flex-row gap-5 mt-60 justify-center' >
            <IoLogoInstagram  size={30}  color='white' className='cursor-pointer' />
            <PiFacebookLogoLight size={30}  color='white' className='cursor-pointer' />
            <CiLinkedin size={30}  color='white' className='cursor-pointer' />
            <FaGithub  size={30}  color='white' className='cursor-pointer' />
          </div>
        </div>
        <form className=' h-120 w-100 items-center flex flex-col gap-2 '  >
          <label htmlFor="firstName" className='text-white mr-35 mt-5 ' >First Name</label>
          <input type="text" name="firstName" id="" className='bg-white h-10 rounded-md w-60 ' />
          <label htmlFor="lastName" className='text-white mr-35 ' >Last Name</label>
          <input type="text" name="lastName" id="" className='bg-white w-60 h-10 rounded-md ' />
          <label htmlFor="email" className='text-white mr-43 ' >Email</label>
          <input type="email" name="email" id="" className='bg-white w-60 h-10 rounded-md ' />
          <label htmlFor="message" className='text-white mr-35 ' >Message</label>
          <input type="text" name="message" id="" className='bg-white h-40 rounded-md w-60  ' />
          <button type="submit" className='bg-white w-60 rounded-md h-10 mt-5  mb-5 ' >Send</button>

        </form>
        
    </div>
  )
}

export default Contactme
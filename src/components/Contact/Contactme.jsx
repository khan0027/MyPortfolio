import React from 'react'

const Contactme = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-5 ' >
        <div>

        </div>
        <div className='flex flex-col items-center  w-120 bg-black gap-3 p-2  ' >
            <form className='flex flex-col items-center' >
                <label className='font-semibold text-xl text-white ' >Contact Me</label>

                <label for="name" className='text-white'  >Name</label>
                <input type="text" name="name" id="" placeholder='Enter Name' className='bg-white w-80 p-3 ' />
                
                <label for="email" className='text-white'  >E-mail</label>
                <input type="email" name="email" id="" placeholder='Enter Email' className='bg-white w-80 p-3 ' />
                
                <label for="message" className='text-white'  >Message</label>
                <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Message' className='bg-white w-80 p-3 ' ></textarea>
                
                <input type="submit" value="Send" id="" className='text-white bg-blue-300 '/>
            </form>   
        </div>
    </div>
  )
}

export default Contactme
import React from 'react'
import myImage from '../../assets/myImage.png'


const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-center gap-10 p-10 md:p-20'>
        
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-5xl font-bold flex leading-normal tracking-tighter' >
                Hello' this is Md Saqulain
            </h1>
            <p className='text-sm md:text-2xl tracking-tight ' >
                I'm final year engineering student and a Frontend Developer
            </p>
            <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg 
                md:py-2 md:px-4 hover:opacity-85 hover:scale-105 font-semibold rounded-3xl
                bg-[#465679] duration-300
            ' >
                Contact Me
            </button>
            
        </div>
        <div className='' >
            <img src={myImage} alt="My Image" className='md:w-80 md:h-80 md:rounded-full max-sm:w-0 max-sm:h-0 ' />
        </div>

    </div>
  )
}

export default Home
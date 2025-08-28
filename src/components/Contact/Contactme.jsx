import React from 'react'

const Contactme = () => {
  return (
    <div className=' flex flex-row h-100 justify-evenly gap-5 ' >
        <div>
          <h1 className='text-4xl md:text-4xl font-bold text-white' >Contact Me</h1>
        </div>
        <form className='flex flex-col gap-2'  >
          <input type = "text" className='bg-white' />
          <input type = "email" className='bg-white' />
        </form>
        
    </div>
  )
}

export default Contactme
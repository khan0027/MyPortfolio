import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='bg-zinc-950 h-400 ' >
        <Navbar />
        <Outlet />
    </div>
  )
}

export default RootLayout
import React from 'react'
import { FaCss3,FaReact,FaHtml5,FaJs,FaNode } from 'react-icons/fa'
import { SiMongodb,SiExpress,SiRedux } from 'react-icons/si'
import {TbBinaryTree} from 'react-icons/tb'
import { BsPcDisplay } from "react-icons/bs";


const Experience = () => {
  return (
    <div id='Experience'  className='p-10 md:p-24 ' >
        <h1 className='text-4xl md:text-4xl font-bold text-white' >Skills</h1>
        <div className='flex flex-wrap items-center justify-around' >
          <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 ' >
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl' >
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl' >
              <FaCss3 color="#264de4" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl' >
              <FaJs color="#F7DF1E" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl' >
              <FaReact color="#61DAFB" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl' >
              <SiMongodb color="#3FA037" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl' >
              <SiExpress color="#FFA500" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl' >
              <FaNode color="#3FA037" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl' >
              <SiRedux color="#764abc" size={50} />
            </span>
          </div>

          <div  >
          <div className='flex  gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ' >
            <TbBinaryTree  size={50} color="#fff"  /> 
            <span className='text-white text-2xl md:text-3xl '>
              Data Structure and Algorithm
            </span>
          </div>
          <div className='flex  gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ' >
            <BsPcDisplay  size={50} color="#fff"  /> 
            <span className='text-white text-2xl md:text-3xl '>
              Operating System
            </span>
          </div>
          <div className='flex  gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ' >
            <BsPcDisplay  size={50} color="#fff"  /> 
            <span className='text-white text-2xl md:text-3xl '>
              Operating System
            </span>
          </div>
          <div className='flex  gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ' >
            <BsPcDisplay  size={50} color="#fff"  /> 
            <span className='text-white text-2xl md:text-3xl '>
              Operating System
            </span>
          </div>
          </div>
        </div>  
    </div>
  )
}

export default Experience
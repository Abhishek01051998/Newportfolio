import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'

type Props = {}

function Project({}: Props) {
    const projects=[1,2]
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:2
    }}
     className=' flex flex-col relative h-screen  text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className=' absolute top-24 uppercase tracking-[20px] text-white text-2xl px'>Projects</h3>
    <div className=' relative w-full flex  overflow-y-hidden overflow-x-scroll  snap-x snap-mandatory z-20 scrollbar scrollbar-track-red-100 srcollbar-opacity-20 scrollbar-thumb-red-600 '>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
    </div>
    
    
    <div className=' w-full absolute top-[30%] bg-zinc-800 left-0 h-[500px] -skew-y-12'></div>
    
    </motion.div>
  )
}

export default Project
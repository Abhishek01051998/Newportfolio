import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import ExperienceCard2 from './ExperienceCard2'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}

    className=' flex flex-col relative h-screen overflow-hidden text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
    <h3 className=' absolute top-5 uppercase tracking-[20px] text-white text-2xl px'>Experience</h3>
    <div className=' w-full flex space-x-7   overflow-x-scroll p-5 snap-x snap-mandatory  scrollbar-track-red-100 srcollbar-opacity-20 scrollbar-thumb-red-600'>
        {/*Experience */}
        <ExperienceCard />
        <ExperienceCard2 />




    </div>
    
    
    
    
    </motion.div>
  )
}

export default Experience
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './skill'
import Skill10 from './skill10'
import Skill11 from './skill11'
import Skill12 from './skill12'
import Skill2 from './skill2'
import Skill3 from './skill3'
import Skill4 from './skill4'
import Skill5 from './skill5'
import Skill6 from './skill6'
import Skill7 from './skill7'
import Skill8 from './skill8'
import Skill9 from './skill9'

type Props = {}

function Skills({}: Props) {
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

    className=' flex flex-col relative h-screen  text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className=' absolute top-24 uppercase tracking-[20px] text-white text-2xl px'>Skills</h3>
    <h3 className=' absolute top-36 uppercase tracking-[3px] text-white text-sm'>Hover over a Skill for currency Proficiency</h3>
    <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill2 />
        <Skill3 />
        <Skill4 />
        <Skill5 />
        <Skill6 />
        <Skill7 />
        <Skill8 />
        <Skill9 />
        <Skill10 />
        <Skill11 />
        <Skill12 />



    </div>
    </motion.div>
  )
}

export default Skills
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
  <div>
    <article className=' flex flex-col items-center rounded-l space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-zinc-800 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        viewport={{
            once:true
        }}
        className='w-72 h-62 object-cover object-center xl:h-[200px] xl:w-[200px] '
        src='https://www.rutgers.edu/sites/default/files/styles/16x9_one_third_default_1x/public/2020-02/lg_SHIELD_REVWHITE.jpg?h=6dade3ba&itok=iRFLeZZ2'  
        alt='' />
        <div className=' px-0 md:px-10'>
            <h4 className=' text-4xl font-light ' >Teaching Assistant</h4>
            <p className=' font-bold text-2xl'>Rutgers ,The state University of New Jersey</p>
            <div className=' flex space-x-2 my-2'>
               
            </div>
            <p className=' uppercase py-5 text-white'>
                September 1 2021 - December 31 2022
            </p>
            <ul className=' list-disc space-y-1 ml-5 text-sm'>
                <li>Accountable for conducting recitations/lectures, lab hours, office hours, and grading weekly assignments and
exams for 300 students.</li>
            <li>Developed and delivered engaging lectures for the undergrad students</li>
            </ul>
        </div>
    </article>
    </div>
    )
}

export default ExperienceCard
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
        src='https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/292439135_396531839175919_7175145601051356580_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=S6asDAG-pmgAX8zYUTs&_nc_ht=scontent-lga3-2.xx&oh=00_AT-cH2z1Y2kcHA--y3eJRg0jidO_3iKx4aNmZSK-uMuEDg&oe=635B862B'  
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
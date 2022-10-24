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
        src='https://abhishek01051998.github.io/portfolio/images/aws.png'  
        alt='' />
        <div className=' px-0 md:px-10'>
            <h4 className=' text-4xl font-light ' >SDE Intern</h4>
            <p className=' font-bold text-2xl'>Amazon Web Services</p>
            <div className=' flex space-x-2 my-2'>
                {/*Tech Useed */}
                <img className=' h-10 w-10 rounded-full' 
                src='https://img.icons8.com/color/72/javascript--v1.png'/>
                 <img className=' h-10 w-10 rounded-full' 
                src="https://img.icons8.com/fluency/344/typescript--v1.png"/>
                  <img className=' h-10 w-10 rounded-full' 
                src="https://img.icons8.com/plasticine/344/react.png"/>
              <img className=' h-10 w-10 rounded-full' 
                src="https://img.icons8.com/color/344/html-5--v1.png"/>
                <img className=' h-10 w-10 rounded-full' 
                src='https://img.icons8.com/color/344/c-key.png' />
            </div>
            <p className=' uppercase py-5 text-white'>
                June 6 2022 - August 26 2022
            </p>
            <ul className=' list-disc space-y-1 ml-5 text-sm'>
                <li>Architected and implemented missing click metrics for Provisioned  and Serverless Dashboard </li>
                <li>Deployed the new metrics to Gamma(pipeline)and added graphs to Amazon wiki for tracking  daily usage</li>
                <li>Identified the most used workflows and made suggestions for optimizations</li>
                <li>Correlated the customer health dashboard data with the click metrics data</li>

            </ul>
        </div>
    </article>
    </div>
    )
}

export default ExperienceCard
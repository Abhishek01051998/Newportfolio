import React from 'react'
import {motion} from "framer-motion";


type Props = {}

function About({}: Props) {
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
    className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-white text-2xl'>About</h3>
        <motion.img 
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:1.2
        }}
        viewport={{
            once:true
        }}
        src='https://abhishek01051998.github.io/portfolio/images/myimg.jpeg' 
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object bg-cover md:rounded-lg md:w-[400px] md:h-[300px]' />
        <div className=' space-y10 px-0 md:px-10'>
        <h5 className=' text-4xl font-semibold '>Here is a <span className=' underline decoration-red-500'>little</span> Background</h5>
        
        <p className=' text-sm'>I'm proficient in using many frontend tools and frameworks like React, LitElement, Typescript, etc. I've also worked on complete stack projects. I love the challenge of solving coding problems and will participate in coding competitions from time to time.

At my core is the desire to work on projects that improve people's lives- a tricky thing to quantify but the most insistent motivator within me. The pivot to software engineering came from a belief that technology designed by kind people has the power to improve lives on a large scale dramatically and a desire to be part of that process.

Outside of work, I like formula one because F1 is the pinnacle of the Motorsport formula ladder. It brings some of the fastest drivers in the world to compete for the ultimate CV. I also love the travel aspect of it. For engineers and dedicated fans, traveling the world to each race is remarkable in itself, and if I had the money, I'd fly every weekend. Also, I love the engineering/driving side. So much work goes into the cars, and the driver has to undergo some serious training to tame the car, and that is something that I admire about this sport. The relentless teamwork and team spirit within each team is something that I love and want to be a part of in the future 🏎️.</p>
        </div>
    
    </motion.div>
  )
}

export default About 
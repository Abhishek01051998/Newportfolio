import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion";
import Link from 'next/link'

function Header() {
  return (
    <header className=' sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:item-center'>
    <motion.div 
    initial={{
        x:-500,
        opacity:0,
        scale:0.5
    }}
    animate={{
        x:0,
        opacity: 1 ,
        scale: 1
    }}
    transition={{
        duration:1.5
    }}
    className=' flex flex-row items-center'>
        {/*Social icons */}
        <SocialIcon 
        url='https://twitter.com/Abh_sh_kj_in' fgColor='grey' bgColor='transparent'
         />
         <SocialIcon 
        url='https://www.facebook.com/profile.php?id=100001268397706' fgColor='grey' bgColor='transparent'
         />
         <SocialIcon 
        url='https://www.linkedin.com/in/abhishek-jain-183076185/' fgColor='grey' bgColor='transparent'
         /><SocialIcon 
         url='https://github.com/Abhishek01051998' fgColor='grey' bgColor='transparent'
          />
    </motion.div>

   
    <Link href={'#contact'}>
    <motion.div 
    initial={{
        x:500,
        opacity:0,
        scale:0.5
    }}
    animate={{
        x:0,
        opacity: 1 ,
        scale: 1
    }}
    transition={{
        duration:1.5
    }}

    className=' flex flex-row items-center text-grey-300 cursor-pointer'>
        <SocialIcon 
        className='cursor-pointer'
        network='email' fgColor='grey' bgColor='transparent'
        /><p className='uppercase hidden md:inline-flex text-sm  '>Get In Touch</p>
    </motion.div>
    </Link>
    </header>
  )
}

export default Header
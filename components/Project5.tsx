import Link from 'next/link'
import React from 'react'
import image from "./images/s.jpeg"

type Props = {}

function Project5({}: Props) {
  return (
    <div className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' >
                
                <div className=' space-y-0 text px-0 md:px-10 max-w-6xl'>
                <div className=' flex space-x-2 my-2 '>
                    <img className=' w-25 h-25 rounded-full object bg-cover md:rounded-lg md:w-[400px] md:h-[250px] items-center' src= "https://github.com/Abhishek01051998/whatsapp/blob/main/Screenshot%202022-10-28%20at%2011.45.29%20PM.png?raw=true" />
                </div>
                    <h4 className=' text-4xl font-semibold '>WhatsApp Clone </h4>
                    <p className=' text-lg text-center md:text-left'>Build a Whatsapp Clone using </p>
                    <div className=' flex  my-2 i'>
                {/*Tech Useed */}
                <img className=' h-10 w-10 rounded-full' 
                src='https://img.icons8.com/color/72/javascript--v1.png'/>
                 <img className=' h-10 w-10 rounded-full' 
                src="https://img.icons8.com/fluency/344/typescript--v1.png"/>
                  <img className=' h-10 w-10 rounded-full' 
                src="https://img.icons8.com/plasticine/344/react.png"/>
              <img className=' h-10 w-10 rounded-full' 
                src="https://img.icons8.com/color/344/html-5--v1.png"/>
                
            </div>
                <Link href="https://github.com/Abhishek01051998/whatsapp">
                    <div className=' flex items-center justify-center'><img 
                className='h-10 w-10 '
                src='https://img.icons8.com/ios-filled/344/github.png'
                alt=''
                /></div></Link>
                </div>
                
            </div>
  )
}

export default Project5
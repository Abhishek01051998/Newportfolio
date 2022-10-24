import Link from 'next/link'
import React from 'react'

type Props = {}

function Project1({}: Props) {
  return (
    <div className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' >
                
                <div className=' space-y-0 text px-0 md:px-10 max-w-6xl'>
                    <h4 className=' text-4xl font-semibold text-center'>Stop Sign Recognition using Spiking Neural Network</h4>
                    <p className=' text-lg text-center md:text-left'>Detected Traffic Sign using Spiking Neural Network which gives better
results over traditional neural networks.Developed using Pytorch.Led team of three people to train the model on
German Iraffic Sign Dataset. Achieved 99 percent accuracy</p>
                <Link href="https://github.com/Abhishek01051998/CS525Project">
                    <div className=' flex items-center justify-center'><img 
                className='h-10 w-10 '
                src='https://img.icons8.com/ios-filled/344/github.png'
                alt=''
                /></div></Link>
                </div>
                
            </div>
  )
}

export default Project1
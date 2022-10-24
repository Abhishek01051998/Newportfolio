import Link from 'next/link'
import React from 'react'

type Props = {}

function Project2({}: Props) {
  return (
    <div className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' >
                
                <div className=' space-y-0 text px-0 md:px-10 max-w-6xl'>
                    <h4 className=' text-4xl font-semibold text-center'>Inference Agent</h4>
                    <p className=' text-lg text-center md:text-left'>Build two ML agents to mimic the path taken by A* search algorithm in a grid world.
Experimented with two kinds of neural network architectures (one with only Full Dense Layers and the other with at least
one Convolutional Neural Layer) for each agent. The first agent with fully dense layers achieved an accuracy of 92.5</p>
                <Link href="https://github.com/Abhishek01051998/cs520-Assignment2">
                    <div className=' flex items-center justify-center'><img 
                className='h-10 w-10 '
                src='https://img.icons8.com/ios-filled/344/github.png'
                alt=''
                /></div></Link>
                </div>
                
            </div>
  )
}

export default Project2
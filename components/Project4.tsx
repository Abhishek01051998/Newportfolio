import Link from 'next/link'
import React from 'react'

type Props = {}

function Project2({}: Props) {
  return (
    <div className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' >
                
                <div className=' space-y-0 text px-0 md:px-10 max-w-6xl'>
                    <h4 className=' text-4xl font-semibold text-center'>BlackJack</h4>
                    <p className=' text-lg text-center md:text-left'>Built using TypeScript to reduce load time .
Managed the application state with React Hooks which made switching 70% easy. Divided the game logic into a separate
file instead of just being in the App component - to prevent the file being too big, and to clearly separate the logic from
the components(readability increased by 50%.</p>
                <Link href="https://github.com/Abhishek01051998/Blackjack">
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
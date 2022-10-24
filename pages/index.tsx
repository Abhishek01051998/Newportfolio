import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contactme from '../components/Contactme'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className= " bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-red-100 srcollbar-opacity-20 scrollbar-thumb-red-600 "  >
      <Head>
        <title>Abhishek Jain Portfolio</title>
      </Head>
      {/*Header */}
      <Header />
      
      {/*Hero */}
      <section id="hero" className=' snap-start'>
        <Hero  />
      </section>
      
      {/*About */}
      <section id="about" className=' snap-center'>
        <About />
      </section>
      
      
      {/*Experience */}
      <section id="experience" className=' snap-center'>
        <Experience />
      </section>

      {/*Skills */}
      <section id="skills" className=' snap-center'>
        <Skills />
      </section>

      {/*Projects */}
      <section id="projects" className=' snap-start'>
        <Project />
      </section>

      {/*Contact */}
      <section id="contact" className=' snap-start'>
        <Contactme />
      </section>
      <Link href='#hero'>
        <footer className=' sticky bottom-5 w-full cursor-pointer'>
          <div className=' flex  items-center justify-center'>
            <img className=' h-10 w-10 rounded-full filter greyscale hover:grayscale-0 cursor-pointer' 
            src='https://abhishek01051998.github.io/portfolio/images/myimg.jpeg' alt=''/>
          </div>
        </footer>
      </Link>
      
    </div>
  )
}

export default Home

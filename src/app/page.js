'use client'
import Image from 'next/image'
import Header from './header'
import About from './about'
import Skills from './skills'
import Contact from './contact'
import Preloader from './framer/preloader'
import HomeContent from './home'
import { CircleIndicator } from './framer/progress'
import { motion, useScroll, useSpring } from "framer-motion"
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  const [isLoading, setIsLoading]=useState(true);
  
  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <main className='w-screen'>
      <html>
    {isLoading ? <Preloader /> : ""}
      <div className="fixed  z-0 top-0 object-fill overflow-hidden ">
        <video autoPlay muted loop id="bg-vid" >
          <source src="bbg.mp4" type="video/mp4"/>
        </video>
    </div>
    <div className="fixed  z-0 top-0 object-fill overflow-hidden lg:hidden md:hidden">
        <video autoPlay muted loop id="bg-vid" >
          <source src="bbg2.mp4" type="video/mp4"/>
        </video>
    </div>

    <motion.div style={{ scaleX: scrollYProgress, height: '3px', backgroundColor: 'white', position: 'fixed'}} className='flex justify-center w-screen z-100 neon-border' />
    {/* <motion.div style={{ width: '50px', height: '12px', backgroundColor: 'red' }} className="z-100 fixed" >
      <div className="bg-white">

      </div>
      </motion.div> */}
    <Header/>
    <HomeContent/>
    <About/>
    <Skills/>
    <Contact/>
    </html>
    </main>
  )
}

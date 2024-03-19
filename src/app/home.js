'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

export default function HomeContent(){

    const text = "navigating the world of UI/UX design".split(" ")
    const text2 = "Check out my ongoing journey in my".split(" ")
    return(
        <div className="flex flex-col justify-center flex-wrap items-center gap-8 relative h-screen" id="home">
                <p>
                    <motion.div whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}} initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 1 }}}viewport={{ once: false }}>
                        <spam className="text-7xl font neon py-12" id="name">Riya Bora</spam><br></br>
                        {text.map((el, i) => (
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: i / 10 }}  key={i}>
                            {el}{" "}
                            </motion.span>))}
                        <br/>
                        {text2.map((el, i) => (
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 0.25, delay: i / 10 }} key={i} >
                            {el}{" "}
                        </motion.span>))} 
                    </motion.div>
                </p>

                    <motion.div whileHover={{ scale: 1.2}} onHoverStart={e => {}} onHoverEnd={e => {}}>
                        <button className="border-2 border-white p-2 neon neon-border"><Link href="https://drive.google.com/file/d/1rwXAIZVoOlaSemxVNC4Zlgu-dJRtx_Ns/view?usp=sharing" target='_blank'>Portfolio</Link></button>
                    </motion.div>

                    <div className='absolute flex bottom-0 right-0 mx-4'>
                        <Link href="https://www.instagram.com/reahhh.h/" className='border opacity-60 border-4 border-white p-1 bottom-0 text-white invert bg-white mx-0.5 instagram' target='_blank'><img src="insta.png"className='h-8'/></Link>
                        <Link href="https://www.discordapp.com/users/907639882837557359" className='border opacity-60 border-4 border-white p-1 bottom-0 text-white invert bg-white mx-0.5 discord' target='_blank'><img src="discord.png"className='h-8'/></Link>
                        <Link href="https://www.linkedin.com/in/riya-bora-343117256/" className='border opacity-60 border-4 border-white p-1 bottom-0 text-white invert bg-white mx-0.5 linkedin' target='_blank'><img src="linkedin.jpg"className='h-8'/></Link>
                    </div>
            </div>
    )
}
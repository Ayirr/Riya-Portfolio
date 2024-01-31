'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

export default function HomeContent(){

    const text = "navigating the world of UI/UX design".split(" ")
    const text2 = "Check out my ongoing journey in my".split(" ")
    return(
        <div className="flex flex-col justify-center flex-wrap items-center gap-12 relative h-screen" id="home">
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
            </div>
    )
}
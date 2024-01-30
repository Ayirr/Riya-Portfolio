'use client'

import { motion } from "framer-motion"
import React from "react";
import {Image} from "@nextui-org/react";

export default function About(){
    const text = "Currently pursuing engineering at The LNM Institute of Information Technology. I find joy in exploring the intersections of Frontend Development and bringing creative ideas to life. As I navigate through my studies, I'm on the lookout for exciting opportunities to apply my knowledge in real-world scenarios. I'm enthusiastic about connecting with fellow students and professionals who share similar interests and aspirations. Besides that I am also a digital illustrator actively seeking opportunities bridge the gap between academia and artistic exploration.".split(" ")
    return(
            <div className="text-centerp-16 z-10 relative  m-4" id="about">
            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <div className="h-screen flex flex-col justify-center flex-wrap items-center ">
                    <h1 className="text-3xl p-8 neon heading" >About</h1>
                    <Image isZoomed width={240} src="/dp4.jpg" className="mx-auto w-48 rounded-full"/> 
                    <p className="p-8">
                        {text.map((el, i) => (
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileInView={{animate:{ opacity: 1 }}} transition={{duration: 0.5, delay: i / 100 }} key={i} >
                                {el}{" "}
                            </motion.span>))} 
                        
                    </p>
                </div>
            </motion.div>
            
            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <div className="h-screen flex  flex-col justify-center items-center ">
                    <h1 className="text-3xl p-8 heading">Education</h1>
                    <img src="/bps2.png" className='h-40 w-72'/><img src="/lnm.jpg" className='h-40'/>
                    <p className='p-8'>
                        10 th: BPS, Dehradun(96.8%)<br/>12 th: BPS, Dehradun(95%)<br/>BTech, CCE: LNMIIT(current CGPA:7.18)</p>
                </div>
            </motion.div>
        </div>
        
    )
}

// export default function About(){
//     return(
//         <div>
            
//         </div>
//     )
// }



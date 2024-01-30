'use client'
import {motion} from 'framer-motion'

export default function Skills(){
    return(
        <div className="z-10 relative " id="skills">
            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <center className="h-screen flex flex-col gap-10 items-center justify-center">
                    <img src="html.png" className="invert w-24 "/>
                    HTML
                    <div className="progress" >
                        <div className="progress-value"></div>
                    </div>
                </center>
            </motion.div>

            
            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <center className="h-screen flex flex-col gap-10 items-center justify-center">
                    <img src="css.png" className="invert w-24 "/>
                    CSS
                    <div className="progress">
                        <div className="progress-value"></div>
                    </div>
                </center>
            </motion.div>


            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <center className="h-screen flex flex-col gap-10 items-center justify-center">
                    <img src="javascript.png" className="invert w-24 "/>
                    JavaScript
                    <div className="progress">
                        <div className="progress-value"></div>
                    </div>
                </center>
            </motion.div>


            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <center className="h-screen flex flex-col gap-10 items-center justify-center">
                    <img src="atom.png" className="invert w-24 "/>
                    React JS
                    <div className="progress">
                        <div className="progress-value"></div>
                    </div>
                </center>
            </motion.div>


            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <center className="h-screen flex flex-col gap-10 items-center justify-center">
                    <img src="next.png" className="invert w-24 "/>
                    Next JS
                    <div className="progress">
                        <div className="progress-value"></div>
                    </div>
                </center>
            </motion.div>

            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
            <center className="h-screen flex flex-col gap-10 items-center justify-center">
                <img src="fresco.png" className="invert w-24 "/>
                Adobe Fresco
                <div className="progress">
                    <div className="progress-value"></div>
                </div>
            </center>
            </motion.div>

            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
            <center className="h-screen flex flex-col gap-10 items-center justify-center">
                <img src="cpp.png" className="invert w-24 "/>
                C++
                <div className="progress">
                    <div className="progress-value"></div>
                </div>
            </center>
            </motion.div>

            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
            <center className="h-screen flex flex-col gap-10 items-center justify-center">
                <img src="java.png" className="invert w-24 "/>
                Java
                <div className="progress">
                    <div className="progress-value"></div>
                </div>
            </center>
            </motion.div>

            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
            <center className="h-screen flex flex-col gap-10 items-center justify-center">
                <img src="figma.png" className="invert w-24 "/>
                Figma
                <div className="progress">
                    <div className="progress-value"></div>
                </div>
            </center>
            </motion.div>
        </div>
        )
}
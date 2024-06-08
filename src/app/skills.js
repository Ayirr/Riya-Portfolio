'use client'
import {motion} from 'framer-motion'

export default function Skills(){
    return(
        <div className="z-10 relative" id="skills">
            <h1 className="text-8xl p-8 neon heading h-screen flex justify-center items-center" >
                        Skills
            </h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 sm:gap-30'>
            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                
                    <center className=" container flex flex-col gap-10 items-center justify-center">
                    <img src="html.png" className="invert w-12"/>
                    HTML
                    <div className="progress" >
                        
                    <motion.div initial={{width:'0%'}}whileInView={{width:'100%',transition:{duration:1}}}>
                        <div className="progress-value "></div>
                        </motion.div>
                    </div>
                </center>
            </motion.div>

            
            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <center className=" container flex flex-col gap-10 items-center justify-center">
                    <img src="css.png" className="invert w-12"/>
                    CSS
                    <div className="progress">
                    <motion.div initial={{width:'0%'}}whileInView={{width:'90%',transition:{duration:1}}}>
                        <div className="progress-value "></div>
                        </motion.div>
                    </div>
                </center>
            </motion.div>


            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <center className=" container flex flex-col gap-10 items-center justify-center">
                    <img src="javascript.png" className="invert w-12 "/>
                    JavaScript
                    <div className="progress">
                    <motion.div initial={{width:'0%'}}whileInView={{width:'65%',transition:{duration:1}}}>
                        <div className="progress-value "></div>
                        </motion.div>
                    </div>
                </center>
            </motion.div>


            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <center className=" container flex flex-col gap-10 items-center justify-center">
                    <img src="atom.png" className="invert w-12 "/>
                    React JS
                    <div className="progress">
                    <motion.div initial={{width:'0%'}}whileInView={{width:'45%',transition:{duration:1}}}>
                        <div className="progress-value "></div>
                        </motion.div>
                    </div>
                </center>
            </motion.div>


            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
                <center className=" container flex flex-col gap-10 items-center justify-center">
                    <img src="next.png" className="invert w-12 "/>
                    Next JS
                    <div className="progress">
                    <motion.div initial={{width:'0%'}}whileInView={{width:'65%',transition:{duration:1}}}>
                        <div className="progress-value"></div>
                    </motion.div>
                    </div>
                </center>
            </motion.div>

            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
            <center className=" container flex flex-col gap-10 items-center justify-center">
                <img src="fresco.png" className="invert w-12 "/>
                Adobe Fresco
                <div className="progress">
                    <motion.div initial={{width:'0%'}}whileInView={{width:'95%',transition:{duration:1}}}>
                    <div className="progress-value"></div>
                    </motion.div>
                </div>
            </center>
            </motion.div>

            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
            <center className=" container flex flex-col gap-10 items-center justify-center">
                <img src="cpp.png" className="invert w-12 "/>
                C++
                <div className="progress">
                    <motion.div initial={{width:'0%'}}whileInView={{width:'75%',transition:{duration:1}}}>
                    <div className="progress-value"></div>
                    </motion.div>
                </div>
            </center>
            </motion.div>

            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
            <center className=" container flex flex-col gap-10 items-center justify-center">
                <img src="java.png" className="invert w-12 "/>
                Java
                <div className="progress">
                    <motion.div initial={{width:'0%'}}whileInView={{width:'50%',transition:{duration:1}}}>
                    <div className="progress-value "></div>
                    </motion.div>
                </div>
            </center>
            </motion.div>

            <motion.div initial={{opacity: 0}}whileInView={{opacity: 1,x: 0,transition: {duration: 2 }}}viewport={{ once: false }}>
            <center className="  flex flex-col gap-10 items-center justify-center">
                <img src="figma.png" className="invert w-12 "/>
                Figma
                <div className="progress">
                    <motion.div initial={{width:'0%'}}whileInView={{width:'75%',transition:{duration:1}}}>
                    <div className="progress-value "></div>
                    </motion.div>
                </div>
            </center>
            </motion.div>
            </div>
        </div>
        )
}
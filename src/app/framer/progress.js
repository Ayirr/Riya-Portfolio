'use client'
import { motion, useScroll, useSpring } from "framer-motion"

export const CircleIndicator = () => {
  return (
    <motion.div style={{ width: '50px', height: '12px', backgroundColor: 'red' }} className="z-100 fixed" >
      <div className="bg-white">

      </div>
      </motion.div>
  );
};


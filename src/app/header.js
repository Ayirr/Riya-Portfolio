'use client'
import {Link} from "react-scroll/modules"
import {useRouter} from "next/navigation"
import { useState } from "react";
import {motion } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent z-30 fixed w-screen">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
      <motion.div whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
        <Link to="./" className="flex items-center space-x-3 rtl:space-x-reverse right-52">
          <img src="Riya Bora-logos_white.png" className="mx-4 w-36" onClick={() => router.push("./")} />
        </Link>
      </motion.div>
            
        
        
        <div className={`p-8 items-center justify-between w-full md:flex md:w-auto ${isMenuOpen?"border z-30  ":"none"} ${isMenuOpen?"rounded-lg":"none"} md:order-1 ${isMenuOpen ? "block" : "hidden"} ${isMenuOpen ? "bg-black" : "bg-transparent"} `} id="navbar-cta">
          <div className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <button onClick={()=>{toggleMenu();}}>
              <motion.div whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                <Link to="home" smooth={true} className="neon1">
                  Home
                </Link>
              </motion.div>
            </button>
            <button onClick={()=>{toggleMenu();closeMenu();}}>
              <motion.div whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                <Link to="about" smooth={true} className="neon1">
                  About
                </Link>
              </motion.div>
            </button>
            <button onClick={()=>{toggleMenu();closeMenu();}}>
              <motion.div whileHover={{ scale: 1.2}} onHoverStart={e => {}} onHoverEnd={e => {}}>
                <Link to="skills" smooth={true} className="neon1">
                  Skills
                </Link>
              </motion.div>
            </button>
            <button onClick={()=>{toggleMenu();closeMenu();}}>
              <motion.div whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                <Link to="contact" smooth={true} className="neon1">
                  Contact
                </Link>
              </motion.div>
            </button>
            <button onClick={()=>{toggleMenu();closeMenu();}}>
              <motion.div whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                <Link href="https://drive.google.com/file/d/1tqGYpr_pIwTHP7G9Ro_PL51DWeLG_2qX/view?usp=sharing" target='_blank' className="neon1 border-2 border-white p-2 neon2">
                  Resume
                </Link>
              </motion.div>
            </button>
          </div>
        </div>

        

      </div>
      <div className="flex md:order-2 align md:space-x-0 rtl:space-x-reverse justify-end mr-8 top-0">
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white md:hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={toggleMenu}>
            
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
          </button>
        </div>
    </nav>
  );
}

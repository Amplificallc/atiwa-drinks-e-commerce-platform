"use client"
import Link from "next/link"
import {motion, AnimatePresence} from "framer-motion"

export default function Home() {
  return (
   
    <main className="bg-gradient-to-r from-green-400 to-emerald-600 h-screen flex flex-col justify-center">
      <AnimatePresence mode='wait'>
     <motion.section 
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{duration:0.7, delay:0.2}}
      variants={{
        initialState:{
          opacity:0,
          x: "-150vw"
        },
        animateState:{
          opacity: 1, 
          x: 0
        },
        exitState:{
          opacity: 0,
          x: "150vw"
        }
      }}
     className="flex flex-col justify-center items-center space-y-4">
    <h1 className="text-white text-6xl font-bold text-center  leading-normal">Are you above the<br/> age of 18 years ?</h1>
    <p className="text-white text-xl font-medium">To access our site , please confirm you are of legal drinking age.</p>
    <Link href="home"><button className="text-emerald-600 font-semibold bg-white w-72 h-14 rounded-lg hover:bg-black hover:text-white hover:font-bold confirm-button">Yes, I am above 18 years</button> </Link>
    <Link href="/"><button className="text-white font-semibold backdrop-blur-3xl bg-white/30 w-72 h-14 rounded-lg hover:bg-white hover:font-bold hover:text-black confirm-button">No, I am below 18 years</button> </Link>
     </motion.section>
     </AnimatePresence>
     <footer className="flex flex-row justify-between items-start px-14 mt-14">
      <div>
        <h3 className="text-white font-light text-sm">An Atiwa Bitters Limited, Copyright &#169; 2023</h3>
        <p className="text-white text-sm font-light w-3/4">All materials on this website is intended for individuals of legal purchase age. Any material that is download from this website should not be forwarded to individuals below the legal purchase age.</p>
      </div>
      <div className="flex flex-row justify-center items-center w-1/4">
        <Link href="" className="text-white text-sm">Terms and Conditions</Link>
        <Link href="" className="text-white text-sm">Privacy Policy</Link>
      </div>
      </footer>
    </main>
  )
}

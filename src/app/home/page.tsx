"use client"
import styles from "../home.module.css"
import {motion} from "framer-motion"

const home = () => {
  return (
    <section className={`${styles.header} px-10`}>
      <div className=" h-screen flex flex-col justify-center w-3/4">
      <motion.h2 initial={{opacity: 0,}} animate={{opacity: 1}} transition={{duration: 0.3, type:"tween"}} className="text-green-600 font-bold leading-normal uppercase text-xl">Atiwa Bitters</motion.h2>
      <motion.h1 initial={{opacity: 0,}} animate={{opacity: 1}} transition={{duration: 0.3, delay: 0.8, type:"tween"}}  className="text-white font-light text-6xl">A reflection of <span className="font-bold text-green-600">Ghana&#39;s </span> true <span className="font-bold text-green-600">nature </span> and <span className="font-bold text-green-600">heritage </span></motion.h1>
      </div>
  </section>
  )
}

export default home
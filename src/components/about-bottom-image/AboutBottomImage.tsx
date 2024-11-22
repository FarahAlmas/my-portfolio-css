'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';
import styles from './AboutBottomImage.module.css'

const containerVariants ={
  hidden:{},
  show:{
    transition: {
      staggerChildren:0.2
    }
  }
}

const itemVariants = {
  hidden:{opacity:0,y:20},
  show:{opacity:1, y:0}
}
function AboutBottomImage() {
  return (
    <>
    <motion.section className={styles.aboutBottomImage}
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    
    >
      <motion.div variants={itemVariants}><Image src={"/html.png"} alt={"html-pic"} width={96} height={96}></Image></motion.div>
      <motion.div  variants={itemVariants}><Image src={"/css.png"} alt={"css-pic"} width={96} height={96}></Image></motion.div>
      <motion.div  variants={itemVariants}><Image src={"/typescript.png"} alt={"typescript-pic"} width={70} height={70}></Image></motion.div>
      <motion.div  variants={itemVariants}><Image src={"/git.png"} alt={"git-pic"} width={96} height={96}></Image></motion.div>
      <motion.div  variants={itemVariants}><Image src={"/figma.png"} alt={"figma-pic"} width={96} height={96}></Image></motion.div>
      <motion.div  variants={itemVariants}><Image src={"/react.png"} alt={"react-pic"} width={96} height={96}></Image></motion.div>
      <motion.div  variants={itemVariants}><Image src={"/node.png"} alt={"node-pic"} width={96} height={96}></Image></motion.div>
      <motion.div  variants={itemVariants}><Image src={"/next.png"} alt={"next-pic"} width={96} height={96}></Image></motion.div>
    </motion.section>
    </>
  )
}

export default AboutBottomImage
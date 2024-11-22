'use client';
import React from 'react'
import { motion } from 'framer-motion';
import styles from "./AboutSection.module.css";
import { caveatFont, interFont } from '@/font';
import Image from "next/image";
import Button from '../button/Button';

function AboutSection() {
  return (
   <>
   <section className={styles.about} id="about">

    <motion.div className={styles.aboutLeftDiv}
      
      initial = {{opacity: 0, x: -100}}
      whileInView = {{opacity: 1, x:0 }}
      transition = {{duration: 2 , type:'spring'}}>

      <h1 className={caveatFont.className}>Farah Almas</h1>

      <p className={caveatFont.className}>Freelance Web Developer</p>

      <h2 className={`${styles.detailsText} ${interFont.className}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repellat repudiandae illum voluptas! Beatae voluptatem nisi inventore. Aut sunt quos natus ut aspernatur unde tempora perspiciatis officiis autem nostrum magnam quasi eligendi ducimus optio sapiente.</h2>

      <Button text={"Contact Me"}/>
    </motion.div>

    <motion.div className={styles.aboutRightDiv}
    initial={{opacity:0, x: 100}}
    whileInView = {{opacity: 1, x:0 }}
    transition = {{duration: 2 , type:'spring'}}>
      <Image src={"/girl-avatar.jpg"} alt={"myPic"} width={400} height={400} className={styles.img}></Image>
    </motion.div>
    </section></>
  )
}

export default AboutSection
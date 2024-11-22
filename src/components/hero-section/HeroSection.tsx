"use client"

import { interFont } from '@/font'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import styles from './HeroSection.module.css'
import Image from 'next/image';
import Button from '../button/Button'
import { TypeAnimation } from 'react-type-animation';


export default function HeroSection(){
  return(
    <>
    <section className={`${styles.hero} ${interFont.className}`}>
      <h1>Hey! <span>I</span>&apos;m {" "}<br/></h1>
      <TypeAnimation
      sequence={[
        "Farah Almas",
        1000, 
        "A Front End Web Developer",
        1000,
        'Content creator',
        1000,
        'I love my passion',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    
  
        {/* <span>Farah Almas</span>
      <br/><span>I</span>'m A Front End Web Developer</h1> */}

      <p>I can build user interface for websites and application with
        <span> react js</span> and <span> Next.js </span>
        <br/>I love the front end development.
      </p>
      <Button text={"Hire Me"}/>

      <div className={styles.socialIconsDiv}>
      <FaFacebookF size={30} color={"black"}/>
      <FaXTwitter size={30} color={"black"}/>
      <FaInstagram size={30} color={"black"}/>
      <FaWhatsapp size={30} color={"black"}/>
      <FaTelegramPlane size={30} color={"black"}/>
      </div>

      <div className={styles.bottomImgDiv}>
        <Image src={"/behance.png"} alt={"behance-pic"} width={156} height={156}></Image>
        <Image src={"/dribble.png"} alt={"dribble-pic"} width={156} height={156}></Image>
        <Image src={"/upwork.png"} alt={"upwork-pic"} width={156} height={156}></Image>
        <Image src={"/freelance.png"} alt={"freelance-pic"} width={156} height={156}></Image>
      </div>
    </section>
    </>
  )
}
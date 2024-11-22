"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {caveatFont} from '@/font'
import TestimonialCard from './testimonial-card/TestimonialCard'
import styles from './Testimonials.module.css'

function Testimonials() {

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({delay:3000})])


  return (
   <>
   <section className={styles.testimonials} id="test">
    <h1 className={caveatFont.className}>
      <span>W</span>hat{" "}
      <span>O</span>ther{" "}
      <span>P</span>eople{" "}
      <span>S</span>ay
      </h1>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <TestimonialCard/>
        </div>
      </div>
   </section>
   </>
  )
}

export default Testimonials
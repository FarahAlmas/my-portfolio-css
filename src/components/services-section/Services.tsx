import React from 'react'
import styles from './Services.module.css'
import { caveatFont, interFont } from '@/font'
import ServicesCard from './services-card/ServicesCard'
function Services() {
  return (
    <>
    <section className={styles.services} id="services">
      <h1 className={caveatFont.className}>
        <span>W</span>hat {" "} 
        <span>I</span> {" "}
        <span>D</span>o {" "}
        <span>F</span>or {" "}
        <span>C</span>lients
        </h1>

        <p className={interFont.className}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eum, totam quam corrupti a inventore perspiciatis excepturi,
            <br />
            quas expedita doloremque ex, laboriosam beatae eaque in.</p>
            <div className={styles.servicesCardDiv}>
              <ServicesCard />
            </div>
    
    
    </section>

    </>
  )
}

export default Services
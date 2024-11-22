import React from 'react';
import styles from './Portfolio.module.css';
import { caveatFont, interFont } from '@/font';
import PortfolioCard from './portfolio-cards/PortfolioCard';

function Portfolio() {
  return (
    <>
    <section className={styles.portfolio} id="port">
      <h1 className={`${caveatFont.className}`}>
        <span>M</span>y{" "} 
        <span>L</span>ast{" "} 
        <span>W</span>ork
      </h1>
      <p className={interFont.className}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
        quaerat! Aspernatur at ut quos consequuntur deleniti ipsum 
        <br/>
        laboriosam eaque corporis sit pariatur ipsam doloribus dolor corrupti amet exercitation dolores dicpariatur ipsam doloribus dolor
        <br/>
        laboriosam.
        </p>
        <div className={styles.mywork}>
         <PortfolioCard/>


        </div>
    </section>
    </>
   
  )
}

export default Portfolio
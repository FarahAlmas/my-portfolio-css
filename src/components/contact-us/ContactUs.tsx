'use client'
import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import { caveatFont, interFont } from "@/font";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { sendEmail } from "@/utils/emailService";
function ContactUs() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = async (e:React.FormEvent)=>{
  e.preventDefault();
  const templateParams = {
    to_name: 'Farah Almas',
    from_name: name,
    from_email: email,
    message: message
  };
  try{
    await sendEmail(templateParams);
    alert('Email sent successfully');
    setName('');
    setEmail('');
    setMessage('');
  }
  catch (error){
    console.log('Emailjs  Error',error);
    alert('failed to send email')
  }
 }





  return (
    <>
      <section id="contact" className={`${styles.contactUs} ${interFont.className}`}>
        <h1 className={caveatFont.className}>
          <span>C</span>ontact <span>M</span>e
        </h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi velit
          aut veritatis dignissimos rerum, facilis asperiores consectetur
          <br /> dolorem soluta quos porro corrupti facere.
        </p>

        <div className={styles.contactUsBottomDiv}>
          <div className={styles.contactDivLeft}>
            <div className={styles.contactDivLeftContainer}>
              <IoIosMail size={24} color={"var(--logo-color)"} />
              <div className={styles.contactDivLeftText}>
                <h6>Have a question?</h6>
                <h6>I am here to help you</h6>
                <h6>Email me at farah@gmail.com </h6>
              </div>
            </div>
            <div className={styles.contactDivLeftContainer}>
              <FaMapMarkerAlt size={24} color={"var(--logo-color)"} />
              <div className={styles.contactDivLeftText}>
                <h6>Current Location</h6>
                <h6>Karachi, Pakistan</h6>
                <h6>serving clients worldwide</h6>
              </div>
            </div>
          </div>

          <div className={styles.contactDivRight}>
            <form onSubmit={handleSubmit}>
              <div className={styles.topInputDiv}>
                <input type="text" placeholder="Your name" className={styles.inputDetails} name="name" value={name} onChange={(e)=>setName(e.target.value)}/>

                <input type="text" placeholder="Your email" className={styles.inputDetails} name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

              </div>
              <input type="text" placeholder="Subject" className={styles.inputDetails} style={{width:"100%"}}/>
              <textarea placeholder="Your message" className={styles.inputDetails} style={{height:"224px"}} name="message" value={message} onChange={(e)=>setMessage(e.target.value)}>
              </textarea>
              <input type="submit" className={styles.submitBtn} value={"Send message"}/> 
            </form>
            </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;

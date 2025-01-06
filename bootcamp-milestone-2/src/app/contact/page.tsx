"use client";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function Contact() {


  const [name, setName] = useState("")    
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //specific vars
    const serviceID = "service_pec4xvk";
    const templateID = "template_jxlrivx";
    const publicKey = "RDZYeXRABoJlBedli";
   
    const templateParms = {
      from_name: name,
      from_email: email,
      to_name: "Karina Lee",
      message: message,
    };
  
    emailjs.send(serviceID, templateID,templateParms,publicKey) 
           .then((response)=>{
            console.log('email sent successfully',response);
            setName('');
            setEmail('');
            setMessage('');
           }) 
           .catch((error)=> {
            console.error('error sending email:',error);
           });
  }

  return (
    <div className={styles.mainContainer}>

      <div className={styles.container}>


        <div className={styles.contactMe}>
          <h1 className={styles.title}> Contact Me</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
         
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                value={name}
                name="name"
                placeholder="Your Name"
                required
                className={styles.input}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* email input place */}
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                value={email}
                name="email"
                placeholder="Your Email"
                required
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                value={message}
                name="message"
                placeholder="Your Message"
                required
                className={styles.input}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>

        <div className={styles.socialLinks}>
          <h1 className={styles.title}>Let's Connect:</h1>
         
          <a

          >
             <a href="https://www.linkedin.com/in/karina-lee-12kl/" className={styles.profile_link}>Click Here For My LinkedIn</a> 

          </a>


        </div>

      </div>
    </div>
  );
}
// import styles from "@/app/contact/page.module.css";
// import Footer from "@/components/footer/footer.module.css";

// export default function Contact() { 
//   return (
//     <div>
//       <h1 className={styles.pageTitle}>Contact</h1>
//       <form className={styles.contactForm} id="contact-form" autoComplete="off">                       
//         <label className={styles.label} htmlFor="name">Name:</label>         
//         <input className={styles.input} type="text" id="name" name="name" placeholder="Enter your name"/>
//         <label className={styles.label} htmlFor="email">Email:</label>
//         <input className={styles.input} type="email" id="email" name="email" placeholder="Enter your email"/>
//         <label className={styles.label} htmlFor="message">Message:</label>
//         <textarea className={styles.textarea} id="message" name="message" placeholder="Enter your message"></textarea>
//         <input className={styles.submit} type="submit" value="Submit"/>  
//       </form>
//       <br/>
//     </div>
//   );
// }

import React from "react";
import styles from "@/app/contact/page.module.css";

export default function Contact() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Contact</h1>
      <form className={styles.contactForm} id="contact-form" autoComplete="off">
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <label className={styles.label} htmlFor="message">
          Message:
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          placeholder="Enter your message"
          required
        ></textarea>
        <input className={styles.submit} type="submit" value="Submit" />
      </form>
      <br />
    </div>
  )
};



import React from "react";
import styles from "@/app/style.module.css";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <main>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}></h1>
        <ul className={styles.navList}></ul>
      </nav>
      <h1 className={styles.pageTitle}>
        Welcome to Karina&apos; s Website!
      </h1>
      <div className={styles.about}>
        <div className={styles.aboutImage}>
     
          <img 
            src="IMG_7579.jpg" 
            alt="Preview of Karina's personal website" 
            className="project-image"/>

            {/* </img> */}
        </div>
        <div className={styles.aboutText}>
          <p>
          Hello! My name is Karina Lee and I am a second year computer 
        engineering major. I was born in Colorado, but grew up in Portland, Oregon. 
        I love going to the gym and hanging out with my friends. And I enjoy finding 
        new music to listen to. 
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
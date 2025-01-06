import React from "react";
import styles from "@/app/style.module.css";
import Footer from "@/components/footer/footer";
import Image from "next/image";


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
     
        <Image 
            src="/IMG_7579.jpg" 
            alt="Preview of Karina's personal website" 
            width={800} // Adjust width as needed
            height={600} // Adjust height as needed
        />
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
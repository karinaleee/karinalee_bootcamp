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
      <h1 className={styles.pageTitle}>Welcome to Karina&apos; s Website!</h1>
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
            Hello! My name is Karina Lee and I am a third year computer
            engineering major. I am interested in hardware engineering and
            always curious to gain new experiences. I love exploring new nature
            spots and hiking. One of my favorite activites to do is hangout with
            my friends and try new foods.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

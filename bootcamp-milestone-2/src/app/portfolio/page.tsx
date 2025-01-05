import styles from "./page.module.css";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <main className={styles.portfolioMain}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <div className={styles.projectContainer}>
          <div className={styles.project}>
            <a href="/" className={styles.projectImageLink}>
            <Image
                src="\bootcamp-milestone-2\public\IMG_7579.jpg" // Correct relative path for Next.js public folder
                alt="Preview of Karina's personal website"
                className={styles.projectImage}
                width={400} // Specify dimensions for better optimization
                height={300}
              />
            </a>
            <div className={styles.projectDetails}>
              <p className={styles.projectName}>
                <strong>Karina's personal website</strong>
              </p>
              <p className={styles.projectDescription}>
                Hello. This is my webpage. 
              </p>
              <a href="/" className={styles.learnMore}>
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      
        
      </main>
    </>
  );
}
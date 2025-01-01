import styles from "./page.module.css";

export default function Portfolio() {
  return (
    <>
      <main className={styles.portfolioMain}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <div className={styles.projectContainer}>
          <div className={styles.project}>
            <a href="/" className={styles.projectImageLink}>
              <img
                src="bootcamp-milestone-2/src/app/IMG_6219.jpg"
                className={styles.projectImage}
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
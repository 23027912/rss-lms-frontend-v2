import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div>
          <p className={styles.name}>Sunita Yadav</p>
          <p className={styles.student}>Student ID. 23027912</p>
        </div>

        

        <p className={styles.copy}>© {year} Relay — RSS Server &amp; LMS project</p>
      </div>
    </footer>
  );
}

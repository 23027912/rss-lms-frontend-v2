import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div>
          <p className={styles.name}>Your Name</p>
          <p className={styles.student}>Student No. 00000000</p>
        </div>

        <nav aria-label="Footer" className={styles.links}>
          <a href="/about">About</a>
          <a href="/feeds">Feeds</a>
          <a href="/settings">Settings</a>
        </nav>

        <p className={styles.copy}>© {year} Relay — RSS Server &amp; LMS project</p>
      </div>
    </footer>
  );
}

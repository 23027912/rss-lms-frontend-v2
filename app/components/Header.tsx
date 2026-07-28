'use client';

import Link from 'next/link';
import SignalMark from './SignalMark';
import Nav from './Nav';
import { useTheme } from '../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <div className={styles.brandBlock}>
          <Link href="/" className={styles.wordmark}>
            <SignalMark />
            <span>RELAY</span>
          </Link>
          <p className={styles.assessmentTitle}>
            RSS Server &amp; LMS Frontend — Assessment&nbsp;1
          </p>
        </div>

        <div className={styles.right}>
          <Nav />
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeQuickToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☾' : '☀'}
          </button>
        </div>
      </div>
    </header>
  );
}

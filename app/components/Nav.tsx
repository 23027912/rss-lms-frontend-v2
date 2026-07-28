'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

interface NavLink {
  href: string;
  label: string;
}

// Always-visible block rectangles
const PRIMARY_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/feeds', label: 'Feeds / Posts' },
];

// Tucked into the kebab/hamburger menu at the end of the row
const MENU_LINKS: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/settings', label: 'Settings' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close the menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Let Escape close the menu for keyboard users
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close on an outside click since the menu now floats over the page
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const isMenuLinkActive = MENU_LINKS.some((link) => link.href === pathname);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul className={styles.desktopLinks}>
        {PRIMARY_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? styles.active : undefined}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}

        <li ref={wrapperRef} className={styles.menuWrapper}>
          <button
            type="button"
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''} ${
              isMenuLinkActive ? styles.hamburgerActiveRoute : ''
            }`}
            aria-expanded={open}
            aria-haspopup="menu"
            aria-controls="more-menu"
            aria-label={open ? 'Close menu' : 'Open menu: About, Settings'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            id="more-menu"
            className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}
            role="menu"
          >
            <ul>
              {MENU_LINKS.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    className={pathname === link.href ? styles.active : undefined}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

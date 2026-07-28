import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { ThemeProvider } from '../app/context/ThemeContext';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';

export const metadata: Metadata = {
  title: 'Relay — RSS Server & LMS Frontend',
  description:
    'Assessment 1: a usability-focused frontend for an RSS Server feeding into an LMS.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

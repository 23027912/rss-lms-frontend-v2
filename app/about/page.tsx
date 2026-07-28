import type { Metadata } from 'next';
import Breadcrumbs from '../components/Breadcrumbs';

export const metadata: Metadata = { title: 'About — Relay' };

export default function AboutPage() {
  return (
    <section className="container" style={{ paddingTop: 'var(--space-5)', paddingBottom: 'var(--space-6)' }}>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

      <h1>About Relay</h1>
      <p style={{ maxWidth: '65ch' }}>
        Relay is a staged project. This first assessment covers the frontend only: layout,
        navigation, theming, and the interaction patterns that will later display live RSS
        content inside a Learning Management System. No feed is sent or processed yet —
        the Feeds page below uses sample blog content from Module 4 Part 2 as a stand-in.
      </p>
      <p style={{ maxWidth: '65ch' }}>
        Assessment 2 introduces the server: API routes that fetch and parse real RSS feeds,
        a database, and the connective layer between the server and the LMS. This page,
        and the rest of the interface, is built to make that next stage a drop-in change
        rather than a rebuild.
      </p>

      <div
        style={{
          marginTop: 'var(--space-5)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-4)',
          background: 'var(--bg-raised)',
          maxWidth: '480px',
        }}
      >
        <p className="mono" style={{ color: 'var(--cyan)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
          Student details
        </p>
        <p style={{ margin: 0, color: 'var(--ink)', fontWeight: 600 }}>Sunita Yadav</p>
        <p style={{ margin: 0 }}>Student ID. 23027912</p>
      </div>

      <h2 style={{ marginTop: 'var(--space-5)' }}>Walkthrough video</h2>
      <p style={{ maxWidth: '65ch' }}>
        A short video below explains how to navigate Relay: switching themes, opening the
        feed view, and using the hamburger menu on smaller screens.
      </p>
      <div
        style={{
          aspectRatio: '16 / 9',
          maxWidth: '640px',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-md)',
          background: 'var(--bg-sunken)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Replace the src below with your uploaded walkthrough video */}
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Relay walkthrough video"
          style={{ width: '100%', height: '100%', border: 0, borderRadius: 'var(--radius-md)' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

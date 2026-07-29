/**************************************************************************************************
 * Home page
 *
 * Landing page for the site: a hero intro with links into Feeds and About, followed by a
 * three-step preview (Source → Relay → Display) explaining how content will eventually
 * flow from the RSS server into the LMS. Spacing is kept tight so the whole page fits
 * within the viewport without producing a scrollbar.
 **************************************************************************************************/
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-3)' }}>
      <span className="eyebrow">
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)', display: 'inline-block' }} />
        Assessment 1 — Frontend only
      </span>

      <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', maxWidth: '18ch', marginTop: 'var(--space-2)' }}>
        One relay. Every feed, tuned for the classroom.
      </h1>

      <p style={{ maxWidth: '58ch', fontSize: '0.95rem', margin: '0 0 var(--space-2)' }}>
        Relay is the frontend for an RSS Server that will forward syndicated content into
        a Learning Management System. This stage builds the interface end-to-end — navigation,
        theming, and a card-based feed view — using sample blog content as a stand-in for
        live RSS data.
      </p>

      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <Link href="/feeds" className="button button--primary">
          View sample feed →
        </Link>
        <Link href="/about" className="button">
          About this project
        </Link>
      </div>

      <div
        style={{
          marginTop: 'var(--space-3)',
          display: 'grid',
          gap: 'var(--space-2)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        }}
      >
        {[
          {
            step: 'Source',
            copy: 'RSS feeds are pulled from course-related publications and blogs.',
          },
          {
            step: 'Relay',
            copy: 'The server normalises and queues items ready for display — built in Assessment 2.',
          },
          {
            step: 'Display',
            copy: 'Students scan feed cards inside the LMS, in light or dark mode, on any device.',
          },
        ].map((s) => (
          <div
            key={s.step}
            style={{
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-3)',
              background: 'var(--bg-raised)',
            }}
          >
            <p className="mono" style={{ color: 'var(--cyan)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              {s.step}
            </p>
            <p style={{ margin: 0, fontSize: '0.88rem' }}>{s.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
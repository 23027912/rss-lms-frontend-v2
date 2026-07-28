import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="container" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' }}>
      <span className="eyebrow">
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)', display: 'inline-block' }} />
        Assessment 1 — Frontend only
      </span>

      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', maxWidth: '18ch', marginTop: 'var(--space-3)' }}>
        One relay. Every feed, tuned for the classroom.
      </h1>

      <p style={{ maxWidth: '58ch', fontSize: '1.05rem' }}>
        Relay is the frontend for an RSS Server that will forward syndicated content into
        a Learning Management System. This stage builds the interface end-to-end — navigation,
        theming, and a card-based feed view — using sample blog content as a stand-in for
        live RSS data.
      </p>

      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-4)' }}>
        <Link href="/feeds" className="button button--primary">
          View sample feed →
        </Link>
        <Link href="/about" className="button">
          About this project
        </Link>
      </div>

      <div
        style={{
          marginTop: 'var(--space-6)',
          display: 'grid',
          gap: 'var(--space-3)',
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
              padding: 'var(--space-4)',
              background: 'var(--bg-raised)',
            }}
          >
            <p className="mono" style={{ color: 'var(--cyan)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
              {s.step}
            </p>
            <p style={{ margin: 0 }}>{s.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

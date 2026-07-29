/**************************************************************************************************
 * Feeds / Posts page
 *
 * Displays the sample RSS-style content from lib/feedData as a responsive grid of
 * FeedCard components, standing in for a live feed until Assessment 2 introduces the
 * server. Includes a breadcrumb trail back to Home.
 **************************************************************************************************/
import type { Metadata } from 'next';
import Breadcrumbs from '../components/Breadcrumbs';
import FeedCard from '../components/FeedCard';
import { sampleFeed } from '../lib/feedData';

export const metadata: Metadata = { title: 'Feeds — Relay' };

export default function FeedsPage() {
  return (
    <section className="container" style={{ paddingTop: 'var(--space-5)', paddingBottom: 'var(--space-6)' }}>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Feeds' }]} />

      <span className="eyebrow">
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block' }} />
        Sample content — Module 4 Part 2
      </span>
      <h1 style={{ marginTop: 'var(--space-3)' }}>Feed</h1>
      <p style={{ maxWidth: '60ch' }}>
        This is a stand-in for the live RSS feed that the server will send once Assessment 2
        is built. Each card carries a tag and date first, so the list can be scanned quickly.
      </p>

      <div
        style={{
          display: 'grid',
          gap: 'var(--space-3)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          marginTop: 'var(--space-4)',
        }}
      >
        {sampleFeed.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

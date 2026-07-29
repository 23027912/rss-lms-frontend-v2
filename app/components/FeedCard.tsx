/**************************************************************************************************
 * FeedCard
 *
 * Renders a single feed item as a card: tag, date, title, and summary, with a hide/show
 * "Read more" toggle that expands the full body in place. Takes a typed FeedItem prop,
 * so it works unchanged whether the data comes from the sample array or a live RSS fetch.
 **************************************************************************************************/
'use client';

import { useState } from 'react';
import styles from './FeedCard.module.css';
import type { FeedItem } from '../lib/feedData';

interface FeedCardProps {
  item: FeedItem;
}

export default function FeedCard({ item }: FeedCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span className={`${styles.tag} mono`}>{item.tag}</span>
        <time className="mono" dateTime={item.date}>
          {new Date(item.date).toLocaleDateString('en-AU', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </time>
      </div>

      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.summary}>{item.summary}</p>

      <div
        id={`body-${item.id}`}
        className={styles.body}
        hidden={!expanded}
      >
        <p>{item.body}</p>
      </div>

      <button
        type="button"
        className={styles.toggle}
        aria-expanded={expanded}
        aria-controls={`body-${item.id}`}
        onClick={() => setExpanded((e) => !e)}
      >
        {expanded ? 'Show less ▲' : 'Read more ▾'}
      </button>
    </article>
  );
}

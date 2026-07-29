/**************************************************************************************************
 * Breadcrumbs
 *
 * Reusable breadcrumb trail for structured navigation. Renders a chain of links back to
 * Home, with the current page shown as plain (non-clickable) text in the accent colour.
 * Used on the About, Feeds, and Settings pages.
 *
 * Props:
 *   trail — ordered array of { label, href? }. Items with an href render as a link;
 *           the item without an href (the current page) is rendered as the active crumb.
 **************************************************************************************************/
import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  trail: Crumb[];
}

export default function Breadcrumbs({ trail }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mono" style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 'var(--space-4)' }}>
      <ol style={{ listStyle: 'none', display: 'flex', gap: '0.4rem', margin: 0, padding: 0 }}>
        {trail.map((item, i) => (
          <li key={item.href || item.label} style={{ display: 'flex', gap: '0.4rem' }}>
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" style={{ color: 'var(--cyan)' }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

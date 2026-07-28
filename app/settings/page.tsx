'use client';

import Breadcrumbs from '../components/Breadcrumbs';
import { useTheme } from '../context//ThemeContext';

export default function SettingsPage() {
  const { theme, setTheme, layout, setLayout, ready } = useTheme();

  if (!ready) return null;

  return (
    <section className="container" style={{ paddingTop: 'var(--space-5)', paddingBottom: 'var(--space-6)' }}>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Settings' }]} />

      <h1>Settings</h1>
      <p style={{ maxWidth: '60ch' }}>
        Preferences here are saved to this browser using local storage, so they persist
        between visits without needing an account.
      </p>

      <fieldset
        style={{
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-4)',
          marginTop: 'var(--space-4)',
          maxWidth: '480px',
        }}
      >
        <legend className="mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--cyan)' }}>
          Appearance
        </legend>

        <p style={{ margin: '0 0 var(--space-2)', color: 'var(--ink)', fontWeight: 600 }}>Theme</p>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <button
            type="button"
            className="button"
            aria-pressed={theme === 'light'}
            onClick={() => setTheme('light')}
            style={theme === 'light' ? { borderColor: 'var(--amber)' } : undefined}
          >
            ☀ Light
          </button>
          <button
            type="button"
            className="button"
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme('dark')}
            style={theme === 'dark' ? { borderColor: 'var(--amber)' } : undefined}
          >
            ☾ Dark
          </button>
        </div>

        <p style={{ margin: 'var(--space-4) 0 var(--space-2)', color: 'var(--ink)', fontWeight: 600 }}>
          Layout density
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <button
            type="button"
            className="button"
            aria-pressed={layout === 'comfortable'}
            onClick={() => setLayout('comfortable')}
            style={layout === 'comfortable' ? { borderColor: 'var(--amber)' } : undefined}
          >
            Comfortable
          </button>
          <button
            type="button"
            className="button"
            aria-pressed={layout === 'compact'}
            onClick={() => setLayout('compact')}
            style={layout === 'compact' ? { borderColor: 'var(--amber)' } : undefined}
          >
            Compact
          </button>
        </div>
      </fieldset>
    </section>
  );
}

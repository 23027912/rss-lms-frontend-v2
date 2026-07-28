/**************************************************************************************************
 * This file provides the functionality to store the selected theme in the browser's local storage.
 **************************************************************************************************/

'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

type Theme = 'light' | 'dark';
type Layout = 'comfortable' | 'compact';

interface ThemeContextValue {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  toggleTheme: () => void;
  layout: Layout;
  setLayout: Dispatch<SetStateAction<Layout>>;
  ready: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [layout, setLayout] = useState<Layout>('comfortable');
  const [ready, setReady] = useState(false);

  // Read saved preferences on first mount
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('relay-theme') as Theme | null;
    const savedLayout = window.localStorage.getItem('relay-layout') as Layout | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    setLayout(savedLayout || 'comfortable');
    setReady(true);
  }, []);

  // Apply theme + layout to the document and persist
  useEffect(() => {
    if (!ready) return;
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-layout', layout);
    window.localStorage.setItem('relay-theme', theme);
    window.localStorage.setItem('relay-layout', layout);
  }, [theme, layout, ready]);

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, layout, setLayout, ready }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}

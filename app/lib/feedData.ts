/**************************************************************************************************
 * This file contains placeholder feed data until Assessment 2 backend integration is complete.
 **************************************************************************************************/

export interface FeedItem {
  id: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  body: string;
}

export const sampleFeed: FeedItem[] = [
  {
    id: 'signal-basics',
    title: 'What RSS actually sends',
    date: '2026-07-14',
    tag: 'Foundations',
    summary: 'A short primer on feed items, enclosures, and why RSS still matters in an LMS.',
    body: 'An RSS item is just structured metadata — title, link, publish date, and a summary — wrapped in XML. When a server relays that into an LMS, it becomes a course update, a reading, or a notice, without anyone re-typing it. This module covers how those fields map onto the cards you see on this page.',
  },
  {
    id: 'accessible-cards',
    title: 'Designing feed cards for quick scanning',
    date: '2026-07-10',
    tag: 'Usability',
    summary: 'Card layout, contrast, and hierarchy choices made for students skimming between classes.',
    body: 'Each card leads with a tag and a date in monospace, so the eye can scan chronology before reading a single headline. Titles use the display face at a size that stays legible on a locked phone screen. Summaries are capped at two lines, with the full body tucked behind a Read more toggle to keep the list dense but not overwhelming.',
  },
  {
    id: 'theme-persistence',
    title: 'Saving theme choice with local storage',
    date: '2026-07-05',
    tag: 'Engineering',
    summary: 'How the light/dark toggle remembers a visitor across sessions without a login.',
    body: 'The theme context reads a saved value from localStorage on first render, falls back to the operating system preference, and writes back on every change. Because it is scoped to the browser rather than an account, the same pattern will carry over cleanly once real authentication is introduced in a later assessment.',
  },
  {
    id: 'lms-handoff',
    title: 'Where the LMS handoff happens',
    date: '2026-06-28',
    tag: 'Architecture',
    summary: 'A preview of the component boundary between this frontend and the future RSS server.',
    body: 'The Feeds page currently reads from a local sample array. In Assessment 2, that array is replaced by a fetch to a server API route that parses live RSS. Because the card component only expects an array of plain objects, that swap should not require touching any presentation code.',
  },
];

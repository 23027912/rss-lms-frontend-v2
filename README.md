## Implementation notes

### Feed dummy data
The Feeds / Posts page does not call a real RSS source yet — it reads a static array from
`lib/feedData.ts` (four sample blog-style items with a title, date, tag, summary, and
body). This is a deliberate stand-in per the brief, matching the shape a parsed RSS item
would have, so that Assessment 2 can replace the array with a `fetch` to a live feed
without changing any card/display code.

### Theme
Light and dark mode are handled by `context/ThemeContext.tsx`. On first load it checks
`localStorage` for a saved choice and falls back to the visitor's OS colour-scheme
preference if none is set. Every change is written straight back to `localStorage` and
applied to the page via `data-theme` / `data-layout` attributes on `<html>`, which the
CSS variables in `globals.css` key off. Theme can be switched from the quick toggle in
the header or from the Settings page, and the choice persists across visits.

### Components
The UI is split into small, single-purpose components under `components/`: `Header`,
`Footer`, `Nav`, `SignalMark` (logo), `Breadcrumbs`, and `FeedCard`. Each is self-contained
with its own CSS module (or inline styles for one-off page layout) and typed props, so
they can be reused or swapped independently — e.g. `FeedCard` will keep working unchanged
once `feedData.ts` is replaced by a live API call.

### Home page & navigation
The Home page (`app/page.tsx`) is a short landing view: a hero intro plus a three-step
preview of the Source → Relay → Display flow, with buttons into Feeds and About. The
navigation bar itself (`components/Nav.tsx`) shows **Home** and **Feeds / Posts** as
horizontal block rectangles, with the current page highlighted in a distinct amber fill.

### Hamburger menu
Rather than a mobile-only slide-out, the hamburger/kebab button sits permanently at the
right end of the same navigation row. Clicking it (icon animates from three lines to an
X) opens a small dropdown containing **About** and **Settings**. It closes on route
change, outside click, or Escape, and shows a small dot indicator on the button whenever
the active page is one of the items hidden inside it.

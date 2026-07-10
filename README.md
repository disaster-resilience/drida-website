# DRIDA — Disaster Resilience Infrastructure Development Agency

A fancy, modern single-page website for DRIDA. Mission: **save lives** and
**reduce loss of property** through resilient infrastructure and early-warning systems.

## Stack

- **Vite 6** + **React 18** — SPA with client-side routing (`react-router-dom`)
- **Tailwind CSS v4** (CSS-first `@theme` tokens, via `@tailwindcss/vite`)
- **Framer Motion** — scroll reveals, animated counters, page transitions
- **lucide-react** — icons
- No backend. The contact form validates client-side only (demo).

## Pages / routes

| Route            | What's there |
|------------------|--------------|
| `/`              | Hero, twin-goal mission, animated impact stats, program pillars, method, CTA |
| `/programs`      | The four resilience pillars in detail |
| `/impact`        | Count-up stats, animated trend chart, outcomes, testimonial |
| `/preparedness`  | **Interactive** household-readiness checklist with a live score meter |
| `/about`         | Mission, principles, four-step method |
| `/contact`       | Validated contact form + emergency/contact rail |
| `*`              | 404 |

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build & preview

```bash
npm run build     # → dist/
npm run preview   # serves dist/ at http://localhost:4173 (SPA history fallback)
```

## Where to edit

- **Copy & data** → `src/data/site.js` (org info, stats, programs, checklist, nav).
  Pages read from here so content stays consistent in one place.
- **Design tokens** → `@theme` block in `src/index.css` (colors, fonts).
- **Shared UI** → `src/components/ui.jsx` (Container, Section, Card, Button, Reveal…).

## Accessibility & polish

- Skip-to-content link, keyboard focus rings, `aria-pressed` / `aria-label` on controls.
- Respects `prefers-reduced-motion` (counters snap, transitions disabled).
- Responsive from mobile → desktop; sticky glass navbar with mobile menu.

## Verification status

- `npm run build` — passes clean (1944 modules).
- `npm run preview` — `/` and deep links (e.g. `/preparedness`) return 200; JS/CSS assets 200.
- All 7 page components confirmed present in the production bundle.
- Not yet verified: live visual paint in a real browser (no headless browser in this
  environment). Open `npm run preview` in a browser to confirm the render visually.

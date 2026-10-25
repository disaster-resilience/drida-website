# Graph Report - workspace  (2026-10-24)

## Corpus Check
- 23 files · ~7,908 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 3, .css 1)

## Summary
- 118 nodes · 358 edges · 8 communities (7 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9cb9d6a0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- CLAUDE.md
- Card
- package.json
- App.jsx
- Home.jsx
- Container
- DRIDA — Disaster Resilience Infrastructure Development Agency
- site.js

## God Nodes (most connected - your core abstractions)
1. `Container()` - 24 edges
2. `Card()` - 20 edges
3. `Reveal()` - 20 edges
4. `Section()` - 19 edges
5. `Button()` - 16 edges
6. `PageHeader()` - 14 edges
7. `App()` - 13 edges
8. `lucide-react` - 12 edges
9. `Impact()` - 11 edges
10. `SectionHeading()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `About()`  [EXTRACTED]
  src/App.jsx → src/pages/About.jsx
- `App()` --calls--> `Contact()`  [EXTRACTED]
  src/App.jsx → src/pages/Contact.jsx
- `App()` --calls--> `Home()`  [EXTRACTED]
  src/App.jsx → src/pages/Home.jsx
- `App()` --calls--> `Impact()`  [EXTRACTED]
  src/App.jsx → src/pages/Impact.jsx
- `App()` --calls--> `NotFound()`  [EXTRACTED]
  src/App.jsx → src/pages/NotFound.jsx

## Import Cycles
- None detected.

## Communities (8 total, 1 thin omitted)

### Community 1 - "Card"
Cohesion: 0.24
Nodes (13): PageHeader(), Card(), READINESS, Contact(), FieldError(), TOPICS, AIM_ICONS, AimCard() (+5 more)

### Community 2 - "package.json"
Cohesion: 0.08
Nodes (26): dependencies, framer-motion, lucide-react, react, react-dom, react-router-dom, description, devDependencies (+18 more)

### Community 3 - "App.jsx"
Cohesion: 0.28
Nodes (10): react, react-router-dom, App(), Page(), Footer(), Logo(), Navbar(), ScrollToTop() (+2 more)

### Community 4 - "Home.jsx"
Cohesion: 0.40
Nodes (13): programIcon(), Reveal(), Section(), SectionHeading(), About(), Approach(), Challenge(), CTA() (+5 more)

### Community 5 - "Container"
Cohesion: 0.24
Nodes (14): lucide-react, ICONS, partnerIcon(), Badge(), btnStyles, Button(), Container(), stagger (+6 more)

### Community 6 - "DRIDA — Disaster Resilience Infrastructure Development Agency"
Cohesion: 0.22
Nodes (8): Accessibility & polish, Build & preview, Develop, DRIDA — Disaster Resilience Infrastructure Development Agency, Pages / routes, Stack, Verification status, Where to edit

### Community 9 - "site.js"
Cohesion: 0.23
Nodes (10): AIMS, APPROACH, CYCLE, GOALS, HUB, INDIA_RISK, PARTNERS, PRINCIPLES (+2 more)

## Knowledge Gaps
- **1 isolated node(s):** `tailwindcss`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 37 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `lucide-react` connect `Container` to `Card`, `package.json`, `App.jsx`, `Home.jsx`, `site.js`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **What connects `tailwindcss` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07671957671957672 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `App.jsx` to `package.json`, `Home.jsx`, `Container`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
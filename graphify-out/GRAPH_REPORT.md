# Graph Report - workspace  (2026-07-10)

## Corpus Check
- 24 files · ~6,088 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 103 nodes · 202 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_CLAUDE|CLAUDE.md]]
- [[_COMMUNITY_ui.jsx|ui.jsx]]
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_site.js|site.js]]
- [[_COMMUNITY_Impact.jsx|Impact.jsx]]
- [[_COMMUNITY_Home.jsx|Home.jsx]]
- [[_COMMUNITY_DRIDA — Disaster Resilience Infrastructure Development Agency|DRIDA — Disaster Resilience Infrastructure Development Agency]]
- [[_COMMUNITY_App.jsx|App.jsx]]

## God Nodes (most connected - your core abstractions)
1. `Container()` - 9 edges
2. `Reveal()` - 8 edges
3. `DRIDA — Disaster Resilience Infrastructure Development Agency` - 8 edges
4. `Section()` - 7 edges
5. `Button()` - 7 edges
6. `Card()` - 7 edges
7. `PageHeader()` - 6 edges
8. `ORG` - 6 edges
9. `programIcon()` - 5 edges
10. `scripts` - 4 edges

## Surprising Connections (you probably didn't know these)
- `ProgramsPreview()` --calls--> `programIcon()`  [EXTRACTED]
  src/pages/Home.jsx → src/components/icons.js
- `Stat()` --calls--> `useCountUp()`  [EXTRACTED]
  src/components/StatGrid.jsx → src/hooks/useCountUp.js
- `Programs()` --calls--> `programIcon()`  [EXTRACTED]
  src/pages/Programs.jsx → src/components/icons.js

## Import Cycles
- None detected.

## Communities (9 total, 1 thin omitted)

### Community 1 - "ui.jsx"
Cohesion: 0.18
Nodes (17): PageHeader(), Badge(), btnStyles, Button(), Card(), Container(), Reveal(), Section() (+9 more)

### Community 2 - "package.json"
Cohesion: 0.10
Nodes (20): dependencies, framer-motion, lucide-react, react, react-dom, react-router-dom, description, devDependencies (+12 more)

### Community 3 - "site.js"
Cohesion: 0.24
Nodes (9): Footer(), Logo(), Navbar(), APPROACH, GOALS, NAV, ORG, PROGRAMS (+1 more)

### Community 4 - "Impact.jsx"
Cohesion: 0.19
Nodes (9): Stat(), StatGrid(), SectionHeading(), STATS, useCountUp(), Impact(), MAX, OUTCOMES (+1 more)

### Community 5 - "Home.jsx"
Cohesion: 0.20
Nodes (5): ICONS, programIcon(), goalIcons, ProgramsPreview(), Programs()

### Community 6 - "DRIDA — Disaster Resilience Infrastructure Development Agency"
Cohesion: 0.22
Nodes (8): Accessibility & polish, Build & preview, Develop, DRIDA — Disaster Resilience Infrastructure Development Agency, Pages / routes, Stack, Verification status, Where to edit

### Community 7 - "App.jsx"
Cohesion: 0.38
Nodes (3): App(), ScrollToTop(), Home()

## Knowledge Gaps
- **33 isolated node(s):** `name`, `private`, `version`, `type`, `description` (+28 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `name`, `private`, `version` to the rest of the system?**
  _33 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
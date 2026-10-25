# Graph Report - workspace  (2026-07-13)

## Corpus Check
- 23 files · ~8,066 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 109 nodes · 227 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `059f84ba`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_CLAUDE|CLAUDE.md]]
- [[_COMMUNITY_ui.jsx|ui.jsx]]
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_site.js|site.js]]
- [[_COMMUNITY_ui.jsx|ui.jsx]]
- [[_COMMUNITY_Home.jsx|Home.jsx]]
- [[_COMMUNITY_DRIDA — Disaster Resilience Infrastructure Development Agency|DRIDA — Disaster Resilience Infrastructure Development Agency]]
- [[_COMMUNITY_Partners.jsx|Partners.jsx]]
- [[_COMMUNITY_Partners.jsx|Partners.jsx]]

## God Nodes (most connected - your core abstractions)
1. `Container()` - 10 edges
2. `Section()` - 8 edges
3. `Button()` - 8 edges
4. `Card()` - 8 edges
5. `Reveal()` - 8 edges
6. `DRIDA — Disaster Resilience Infrastructure Development Agency` - 8 edges
7. `PageHeader()` - 7 edges
8. `programIcon()` - 7 edges
9. `ORG` - 6 edges
10. `scripts` - 4 edges

## Surprising Connections (you probably didn't know these)
- `ProgramsPreview()` --calls--> `programIcon()`  [EXTRACTED]
  src/pages/Home.jsx → src/components/icons.js
- `About()` --calls--> `programIcon()`  [EXTRACTED]
  src/pages/About.jsx → src/components/icons.js
- `Programs()` --calls--> `programIcon()`  [EXTRACTED]
  src/pages/Programs.jsx → src/components/icons.js
- `Partners()` --calls--> `partnerIcon()`  [EXTRACTED]
  src/pages/Partners.jsx → src/components/icons.js

## Import Cycles
- None detected.

## Communities (10 total, 1 thin omitted)

### Community 1 - "ui.jsx"
Cohesion: 0.23
Nodes (9): PageHeader(), Card(), Reveal(), Section(), READINESS, Contact(), TOPICS, Preparedness() (+1 more)

### Community 2 - "package.json"
Cohesion: 0.10
Nodes (20): dependencies, framer-motion, lucide-react, react, react-dom, react-router-dom, description, devDependencies (+12 more)

### Community 3 - "site.js"
Cohesion: 0.22
Nodes (8): App(), Footer(), Logo(), Navbar(), ScrollToTop(), NAV, ORG, Home()

### Community 4 - "ui.jsx"
Cohesion: 0.40
Nodes (5): programIcon(), PROGRAMS, About(), ProgramsPreview(), Programs()

### Community 5 - "Home.jsx"
Cohesion: 0.15
Nodes (10): Badge(), btnStyles, Button(), Container(), SectionHeading(), stagger, staggerItem, goalIcons (+2 more)

### Community 6 - "DRIDA — Disaster Resilience Infrastructure Development Agency"
Cohesion: 0.22
Nodes (8): Accessibility & polish, Build & preview, Develop, DRIDA — Disaster Resilience Infrastructure Development Agency, Pages / routes, Stack, Verification status, Where to edit

### Community 7 - "Partners.jsx"
Cohesion: 0.32
Nodes (5): ICONS, partnerIcon(), HUB, PARTNERS, Partners()

### Community 9 - "Partners.jsx"
Cohesion: 0.20
Nodes (10): AIMS, APPROACH, CYCLE, GOALS, INDIA_RISK, PRINCIPLES, VALUES, AIM_ICONS (+2 more)

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
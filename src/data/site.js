// Central content for the DRIDA site. Editing copy? Do it here — pages read
// from this module so text stays consistent and reviewable in one place.

export const ORG = {
  name: 'DRIDA',
  longName: 'Disaster Resilience Infrastructure Development Agency',
  tagline: 'Engineering resilience before disaster strikes.',
  mission:
    'DRIDA builds the physical and digital infrastructure that lets communities survive hazards and recover fast — so fewer lives are lost and less property is destroyed.',
  email: 'dridasocial@gmail.com',
  address: 'India Regional Technology Hub · Tamil Nadu, India',
  // Contact form → StaticForms.dev (server-side email; no backend needed).
  // The notification recipient is fixed in the StaticForms dashboard per apiKey
  // (the API has no recipient field), so it is NOT set here. The apiKey is a
  // public submit identifier, safe to ship in the client bundle.
  formEndpoint: 'https://api.staticforms.dev/submit',
  formApiKey: 'sf_e9e1473938bb6262063aafe7',
  formSubjectPrefix: '[Contacting through DRIDA website]:',
}

// DRIDA's defining role: it leads the India Regional Technology Hub and is the
// connecting link between the stakeholders below. Source: Partners_Role brief.
export const HUB = {
  name: 'India Regional Technology Hub',
  vision: 'Resilient India',
  lead: 'DRIDA Ltd',
  role: 'Hub lead & connecting link',
  blurb:
    'DRIDA Ltd leads the India Regional Technology Hub — the connecting link that brings land, academia, international expertise, and state & national disaster-management authorities into one resilience effort, working towards a Resilient India.',
}

// The five stakeholders DRIDA connects through the Hub. `role` is each partner's
// function in the Hub; `icon` maps to a lucide component in components/icons.js.
export const PARTNERS = [
  {
    id: 'resilience-corridor',
    name: 'Resilience Corridor',
    role: 'Land Owner',
    icon: 'Map',
    body: 'Owns and stewards the land corridor where resilient infrastructure, test beds, and the Hub\'s facilities are built.',
  },
  {
    id: 'anna-university',
    name: 'Anna University',
    role: 'Academic & Research Partner',
    icon: 'GraduationCap',
    body: 'Engineering research, talent, and testing — turning disaster science into deployable resilient design.',
  },
  {
    id: 'iadm',
    name: 'International Association of Disaster Management',
    role: 'International Knowledge Partner',
    icon: 'Globe2',
    body: 'Global standards, best practices, and cross-border knowledge exchange in disaster management.',
  },
  {
    id: 'tnsdma',
    name: 'Tamil Nadu State Disaster Management Authority',
    role: 'State Authority',
    icon: 'Shield',
    body: 'State mandate and coordination — aligning the Hub with Tamil Nadu\'s disaster-management plans and on-ground response.',
  },
  {
    id: 'ndma',
    name: 'National Disaster Management Authority',
    role: 'National Authority',
    icon: 'ShieldCheck',
    body: 'India\'s apex disaster-management body — the national policy, guidelines, and mandate the Hub delivers against.',
  },
]

// Twin north-star goals, stated in the objective.
export const GOALS = [
  {
    id: 'lives',
    title: 'Save lives',
    body: 'Early-warning networks and hardened lifeline infrastructure that give people the minutes that matter.',
  },
  {
    id: 'property',
    title: 'Reduce loss of property',
    body: 'Resilient design, retrofits, and risk mapping that keep homes, utilities, and businesses standing.',
  },
]

// The scale of the challenge — what disasters cost India every year. The new
// India Regional Technology Hub exists to cut these figures. SOURCED from public
// data (NDMA landmass-vulnerability statistics; World Bank / UNDRR & 2000–2024
// loss analyses). Re-check against the latest reports before publishing widely.
export const INDIA_RISK = [
  { id: 'economic', icon: 'Landmark', value: '$8B+', label: 'Lost every year', note: 'Average annual economic loss from disasters — around 2% of GDP.' },
  { id: 'floods', icon: 'Waves', value: '63%', label: 'Of that is floods', note: "Floods drive the largest share of India's yearly disaster loss." },
  { id: 'quake', icon: 'Activity', value: '58.6%', label: 'Of land is quake-prone', note: 'Landmass exposed to moderate-to-very-high earthquake intensity.' },
  { id: 'coast', icon: 'Wind', value: '5,700 km', label: 'Of coast face cyclones', note: "Of India's 7,516 km coastline, exposed to cyclones & tsunamis." },
]

// What the Hub AIMS to achieve. These are forward-looking targets for a brand-new
// hub — not results already delivered. Each is grounded in technology that exists
// today, so the aim is deployment and reach, not invention. Keep them stated as aims.
export const AIMS = [
  { id: 'warning', icon: 'RadioTower', title: 'Extend warning time', body: 'IoT river and rainfall sensors, seismic arrays, and cell-broadcast alerting already exist — we aim to link them so an alert becomes a safe evacuation, minutes before floods and storms hit.' },
  { id: 'lifelines', icon: 'Building2', title: 'Keep lifelines standing', body: 'Seismic-retrofit and flood-hardening engineering are proven today — we aim to apply them to the hospitals, shelters, power and water that must survive the worst-case event, not fail during it.' },
  { id: 'floods', icon: 'Map', title: 'Cut flood losses', body: 'Satellite imagery, LiDAR terrain data, and hydrological modelling can now map flood risk street by street — we aim to turn that into resilient design before the water rises.' },
  { id: 'community', icon: 'Users', title: 'Ready every neighborhood', body: 'Mobile training tools and community-alerting apps let residents act as first responders in the critical first hour — we aim to put them in every at-risk neighborhood.' },
]

// The four core program pillars. `metric` names the present-day technology each
// pillar is built on — a capability that exists today, not a result delivered yet.
export const PROGRAMS = [
  {
    id: 'early-warning',
    icon: 'RadioTower',
    title: 'Early-Warning Networks',
    summary:
      'Dense sensor grids and multi-channel alerting that detect floods, quakes, and storms and reach every resident in seconds.',
    points: [
      'River, rainfall & seismic sensor arrays',
      'SMS, siren, app & broadcast alert fan-out',
      'Last-mile alerts for low-connectivity areas',
    ],
    metric: 'Built on today\'s IoT sensors & cell-broadcast alerting',
  },
  {
    id: 'resilient-infra',
    icon: 'Building2',
    title: 'Resilient Infrastructure',
    summary:
      'We design and retrofit lifeline infrastructure — power, water, roads, shelters — to stay standing and functional through the worst-case event.',
    points: [
      'Seismic & flood retrofits of critical facilities',
      'Redundant power and water for shelters',
      'Elevated, storm-rated evacuation routes',
    ],
    metric: 'Uses proven seismic & flood-retrofit engineering',
  },
  {
    id: 'risk-mapping',
    icon: 'Map',
    title: 'Risk Mapping & Modeling',
    summary:
      'High-resolution hazard maps and scenario modeling that tell planners exactly where to invest before the next event.',
    points: [
      'Flood, wildfire & seismic exposure maps',
      'Climate-adjusted 50-year scenario models',
      'Open data portals for local governments',
    ],
    metric: 'Powered by satellite, LiDAR & hydrological modelling',
  },
  {
    id: 'community',
    icon: 'Users',
    title: 'Community Preparedness',
    summary:
      'Training, drills, and readiness tools that turn residents into first responders for the critical first hour.',
    points: [
      'Neighborhood response team training',
      'School & workplace evacuation drills',
      'Household readiness toolkits',
    ],
    metric: 'Delivered through mobile training & alerting apps',
  },
]

// Lightweight "how we work" pipeline shown on Home + About.
export const APPROACH = [
  { id: 'assess', title: 'Assess', body: 'Map the hazard, exposure, and the most vulnerable lifelines.' },
  { id: 'design', title: 'Design', body: 'Engineer resilient solutions and early-warning coverage for the gaps.' },
  { id: 'build', title: 'Build', body: 'Deploy infrastructure, sensors, and community response capacity.' },
  { id: 'sustain', title: 'Sustain', body: 'Monitor, drill, and improve — resilience is maintained, not finished.' },
]

// Interactive household-readiness checklist (Preparedness page).
export const READINESS = [
  { id: 'plan', label: 'A written household emergency & evacuation plan' },
  { id: 'kit', label: '72-hour kit: water, food, meds, flashlight, radio' },
  { id: 'alerts', label: 'Signed up for local emergency alerts' },
  { id: 'contacts', label: 'Out-of-area contact everyone knows' },
  { id: 'docs', label: 'Copies of key documents stored safely & digitally' },
  { id: 'meet', label: 'Two agreed family meeting points' },
  { id: 'utilities', label: 'You know how to shut off gas, water & power' },
  { id: 'insurance', label: 'Property insured for local hazards (flood/quake)' },
]

// The Disaster Management Cycle — the discipline's foundational framework: a
// continuous seven-phase loop for building safer communities. DRIDA works across
// every phase (our four-step method, APPROACH, is our compressed take on it).
// `color` holds full Tailwind class strings per phase so the theme stays in the
// dark navy/cyan palette instead of the usual bright-pastel infographic look.
// (Full literal strings here so Tailwind's scanner keeps them in the build.)
export const CYCLE = [
  {
    id: 'risk-assessment',
    icon: 'Search',
    title: 'Risk Assessment & Identification',
    points: [
      'Identify hazards, vulnerabilities and capacities',
      'Analyze and evaluate risks',
      'Map and prioritize risks',
      'Engage stakeholders and communities',
    ],
    color: { badge: 'bg-amber-400/15 text-amber-300', iconBg: 'bg-amber-400/10', icon: 'text-amber-300', border: 'border-amber-400/40', dot: 'bg-amber-400' },
  },
  {
    id: 'preparedness',
    icon: 'ClipboardCheck',
    title: 'Preparedness & Planning',
    points: [
      'Develop disaster management plans',
      'Establish early-warning systems',
      'Build capacity and conduct trainings',
      'Conduct drills and simulation exercises',
    ],
    color: { badge: 'bg-emerald-400/15 text-emerald-300', iconBg: 'bg-emerald-400/10', icon: 'text-emerald-300', border: 'border-emerald-400/40', dot: 'bg-emerald-400' },
  },
  {
    id: 'prevention',
    icon: 'Shield',
    title: 'Prevention & Mitigation',
    points: [
      'Implement risk-reduction measures',
      'Enforce building codes and land-use planning',
      'Protect environment and critical infrastructure',
      'Promote resilient livelihoods',
    ],
    color: { badge: 'bg-teal-400/15 text-teal-300', iconBg: 'bg-teal-400/10', icon: 'text-teal-300', border: 'border-teal-400/40', dot: 'bg-teal-400' },
  },
  {
    id: 'response',
    icon: 'Siren',
    title: 'Response',
    points: [
      'Activate emergency response plans',
      'Conduct search and rescue operations',
      'Provide immediate relief and medical assistance',
      'Ensure safety and security',
    ],
    color: { badge: 'bg-sky-400/15 text-sky-300', iconBg: 'bg-sky-400/10', icon: 'text-sky-300', border: 'border-sky-400/40', dot: 'bg-sky-400' },
  },
  {
    id: 'relief',
    icon: 'Package',
    title: 'Relief',
    points: [
      'Provide food, water, shelter and essential supplies',
      'Support vulnerable groups',
      'Manage relief resources effectively',
      'Coordinate with partners and stakeholders',
    ],
    color: { badge: 'bg-violet-400/15 text-violet-300', iconBg: 'bg-violet-400/10', icon: 'text-violet-300', border: 'border-violet-400/40', dot: 'bg-violet-400' },
  },
  {
    id: 'recovery',
    icon: 'TrendingUp',
    title: 'Recovery',
    points: [
      'Restore basic services and infrastructure',
      'Support livelihoods and economic recovery',
      'Provide psychosocial support',
      'Build back better with resilience',
    ],
    color: { badge: 'bg-rose-400/15 text-rose-300', iconBg: 'bg-rose-400/10', icon: 'text-rose-300', border: 'border-rose-400/40', dot: 'bg-rose-400' },
  },
  {
    id: 'review',
    icon: 'RefreshCw',
    title: 'Review, Learning & Improvement',
    points: [
      'Evaluate response and recovery efforts',
      'Document lessons learned',
      'Update plans and strategies',
      'Strengthen systems for continuous improvement',
    ],
    color: { badge: 'bg-orange-400/15 text-orange-300', iconBg: 'bg-orange-400/10', icon: 'text-orange-300', border: 'border-orange-400/40', dot: 'bg-orange-400' },
  },
]

// The five principles that run through every phase of the cycle.
export const PRINCIPLES = [
  { id: 'participation', icon: 'Users', title: 'Participation', body: 'Engage all stakeholders and communities.' },
  { id: 'risk-informed', icon: 'Target', title: 'Risk-Informed', body: 'Base decisions on risk data and analysis.' },
  { id: 'coordination', icon: 'Handshake', title: 'Coordination', body: 'Work together across all levels and sectors.' },
  { id: 'inclusiveness', icon: 'Leaf', title: 'Inclusiveness', body: 'Ensure no one is left behind.' },
  { id: 'sustainability', icon: 'Recycle', title: 'Sustainability', body: 'Promote long-term resilience and sustainable solutions.' },
]

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/partners', label: 'Partners' },
  { to: '/impact', label: 'Impact' },
  { to: '/preparedness', label: 'Preparedness' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

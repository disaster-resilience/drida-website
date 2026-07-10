// Central content for the DRIDA site. Editing copy? Do it here — pages read
// from this module so text stays consistent and reviewable in one place.

export const ORG = {
  name: 'DRIDA',
  longName: 'Disaster Resilience Infrastructure Development Agency',
  tagline: 'Engineering resilience before disaster strikes.',
  mission:
    'DRIDA builds the physical and digital infrastructure that lets communities survive hazards and recover fast — so fewer lives are lost and less property is destroyed.',
  email: 'contact@drida.org',
  emergency: '112',
  address: 'Resilience Operations Center · Sector 4, Civic District',
}

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

// Headline impact figures. `value` is the count-up target; `suffix` renders after.
export const STATS = [
  { id: 'lives', value: 128000, suffix: '+', label: 'Lives protected', sub: 'through early-warning coverage' },
  { id: 'property', value: 2.4, suffix: 'B', prefix: '$', decimals: 1, label: 'Property loss averted', sub: 'modeled across funded projects' },
  { id: 'comms', value: 340, suffix: '', label: 'Communities served', sub: 'across 19 hazard zones' },
  { id: 'time', value: 42, suffix: 'min', label: 'Avg. added warning time', sub: 'before flood & storm impact' },
]

// The four core program pillars.
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
    metric: '42 min average added warning time',
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
    metric: '$2.4B modeled property loss averted',
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
    metric: '340 communities mapped',
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
    metric: '340 communities served',
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

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/impact', label: 'Impact' },
  { to: '/preparedness', label: 'Preparedness' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

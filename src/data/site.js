// Central content for the DRIDA site. Editing copy? Do it here — pages read
// from this module so text stays consistent and reviewable in one place.

export const ORG = {
  name: 'DRIDA',
  longName: 'Disaster Resilience Infrastructure Development Agency',
  tagline: 'Engineering resilience before disaster strikes.',
  mission:
    'DRIDA builds the physical and digital infrastructure that lets communities survive hazards and recover fast — so fewer lives are lost and less property is destroyed.',
  email: 'info@drida.net',
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


// =====================================================================
// BLOG POSTS & FIELD DISPATCHES
// =====================================================================
export const BLOG_POSTS = [
  {
    slug: 'nepal-silent-time-bombs-himalayas-melting-lakes',
    title: 'Nepal’s Silent Time Bombs: Why the Himalaya’s Melting Lakes Demand Urgent Action',
    subtitle:
      'The glacier collapse leading to the Bhote Koshi incident on August 26 is not an isolated tragedy. It is a warning that Nepal sits atop a slow-motion emergency of nearly 200 unstable high-altitude lakes.',
    author: {
      name: 'Dr. Antony Gnanamuthu',
      role: 'Humanitarian professional & disaster management specialist',
      affiliation: 'Humanitarian & Disaster Risk Management Specialist',
      avatar: 'AG',
    },
    publishedAt: '2026-08-31',
    readTime: '6 min read',
    category: 'Field Dispatches',
    tags: ['Glacial Hazards', 'Himalayas', 'Early Warning Systems', 'Cross-Border Resilience', 'Climate Impact'],
    featured: true,
    coverBadge: 'Special Report · High-Altitude Hazards',
    keyMetrics: [
      { value: '900+', label: 'Casualties', note: 'Confirmed toll crossing 900 downstream in Rasuwa & Chitwan' },
      { value: '~200', label: 'Dangerous Lakes', note: 'Unstable glacial lakes across Hindu Kush Himalaya' },
      { value: '47', label: 'Priority Lakes', note: '21 inside Nepal, 25 across the border in Tibet feeding Nepali rivers' },
      { value: '65%', label: 'Accelerated Ice Loss', note: 'Faster Himalayan ice loss rate in 2010s vs 2000s' },
    ],
    summary:
      'Between 100 and 200 million cubic metres of ice and rock tore free in the Lhende Khola valley at 5,400m, triggering catastrophic flooding down the Bhote Koshi corridor. Dr. Antony Gnanamuthu details why engineering solutions, transboundary cooperation with China, and sensor networks are urgently required.',
    sections: [
      {
        heading: 'The Disaster at Bhote Koshi',
        content: [
          'The images from Rasuwa and downstream valleys this past week are searing: bridges twisted into scrap, homes buried under mud and boulders, search teams picking through debris fields that stretch toward Chitwan. By the morning of 31 August 2026 the official death toll from the Bhote Koshi disaster had already crossed 900 and was still rising.',
          'Preliminary assessments point to a massive glacier collapse high in the Lhende Khola valley, a tributary flowing from Tibet into Nepal. Between 100 and 200 million cubic metres of ice and rock tore free at roughly 5,200–5,400 metres and slammed into the valley floor with the force of a small earthquake. A secondary debris-dammed lake then formed and overflowed days later, compounding the destruction.',
          'This was not a classic glacial lake outburst flood (GLOF). Yet it belongs to the same family of hazards that scientists at the International Centre for Integrated Mountain Development (ICIMOD) and Nepal’s own hydrologists have been warning about for years. Around 200 glacial lakes across the Hindu Kush Himalaya are now classified as dangerous. Of the 47 Potentially Dangerous Glacial Lakes prioritised for Nepal’s river basins, 21 lie inside the country and 25 sit across the border in Tibet, feeding rivers that flow directly into Nepali territory. The August disaster is therefore both a national tragedy and a regional alarm bell.',
        ],
      },
      {
        heading: 'The Geography of Vulnerability',
        content: [
          'Nepal’s physical setting is uniquely unforgiving. The country occupies some of the youngest, steepest and most tectonically active mountains on Earth. Rivers such as the Bhote Koshi, Trishuli, Dudh Koshi and Arun drop thousands of metres in short horizontal distances. A surge that begins at 5,000 metres can reach inhabited valleys in minutes or a few hours, leaving almost no time for warning.',
          'The summer monsoon overlaps directly with heavily glaciated terrain — a combination rare in the Alps or Andes — so intense rainfall can coincide with, or trigger, glacial instability. The 2015 Gorkha earthquake further fractured slopes and loosened rock faces whose effects still linger a decade later.',
          'Population and infrastructure are concentrated precisely where the hazard is greatest. Villages, trekking routes, hydropower plants and the main overland trade corridor to China occupy the same narrow river valleys that channel these floods. When a high-altitude mass of ice, rock or water is released, there is nowhere for people or assets to hide.',
        ],
      },
      {
        heading: 'How Warming Turns Ice into Hazard',
        content: [
          'The root driver is straightforward and accelerating. Glaciers across the Hindu Kush Himalaya lost ice roughly 65 per cent faster in the 2010s than in the previous decade. Nepal’s own glaciers shed close to a quarter of their surface area between 1977 and 2010; the pace has almost certainly increased since. Meltwater that once drained or refroze now pools behind loose moraine dams of rock and ice debris. Small ponds grow into lakes of a square kilometre or more.',
          'Famous examples such as Imja Tsho near Everest and Thulagi near Manaslu were negligible in the mid-twentieth century; both are now among the most closely watched water bodies in the country.',
          'Warmer temperatures do double duty. They feed the lakes with more water and they destabilise the slopes, permafrost and hanging glaciers above them. Avalanches, rockfalls and ice collapses become more likely triggers. Recent events show that the danger is no longer confined to the large, well-known lakes. The 2024 Thame flood and the July 2025 Rasuwagadhi event both originated from relatively small or newly formed lakes that had not dominated official watchlists. Scientists now emphasise that “tiny and short-lived” supraglacial lakes can prove unexpectedly lethal.',
        ],
      },
      {
        heading: 'A Track Record Already Written in Debris',
        content: [
          'Nepal’s modern history with these hazards is long enough to remove any excuse for surprise. The 1985 Dig Tsho outburst destroyed a nearly completed hydropower project. The 1998 Tam Pokhari event caused widespread downstream damage. In 2016 a lake in Tibet breached and sent floodwater down the same Bhote Koshi corridor, wrecking stretches of the Arniko Highway and a hydropower plant at a cost estimated at US$70 million.',
          'Smaller outbursts and debris flows have continued, often with limited media attention until the body count or infrastructure losses force recognition. Each event has followed the same pattern: rapid onset, limited or no warning, disproportionate damage to communities and critical infrastructure, and a temporary surge of concern that fades until the next disaster. The August 2026 catastrophe is simply the largest and deadliest chapter so far.',
        ],
      },
      {
        heading: 'Transboundary Risk Cannot Be Managed Alone',
        content: [
          'More than half of the priority dangerous lakes sit inside Tibet. Nepal inherits hazards from terrain it cannot access, monitor or manage on its own. Floods originating across the border have already struck Nepali valleys repeatedly. Effective early-warning systems, real-time data sharing and joint mitigation therefore require genuine cooperation with China. So far that cooperation remains incomplete. Without it, downstream communities remain hostages to upstream decisions and upstream weather.',
          'Hydropower is particularly exposed. Nepal’s energy future and export ambitions rest on rivers that are also the primary pathways for glacial floods. A single major outburst can destroy turbines, transmission lines and access roads, wiping out years of investment and setting back the national economy. Tourism corridors in the Everest and Langtang regions face the same existential risk.',
        ],
      },
      {
        heading: 'What Can Still Be Done',
        content: [
          'Engineering solutions exist and have been demonstrated. Controlled outlet works at Imja Tsho in 2016 lowered the lake by draining more than four million cubic metres of water. Similar interventions have been carried out or planned at Tsho Rolpa and other priority sites. A recent Green Climate Fund grant of US$36 million is intended to support drainage and risk-reduction measures at four high-risk lakes.',
          'Early-warning systems that combine satellite monitoring, seismic sensors and community networks can buy precious minutes or hours. Yet these measures remain piecemeal. The list of lakes requiring urgent attention is longer than the list of lakes that have received it. Monitoring of smaller, rapidly forming lakes is still inadequate. Land-use planning in high-risk valleys continues to lag. And the fundamental driver — global greenhouse-gas emissions — lies beyond Nepal’s control. The country contributes negligibly to the problem yet suffers disproportionately from its consequences.',
        ],
      },
      {
        heading: 'A Slow-Motion Emergency Requires Fast Political Will',
        content: [
          'The August disaster will eventually fade from international headlines. The bodies will be recovered or declared missing, the highways will be patched, and the hydropower plants will be repaired or written off. What must not fade is the recognition that this was not a black-swan event. It was the predictable outcome of a process that scientists have documented for decades: a warming atmosphere thinning glaciers, expanding lakes, weakening slopes, and concentrating people and infrastructure in the path of the resulting floods.',
          'Nepal faces a slow-motion emergency. Around 200 lakes across the wider region, and 47 prioritised for its own river systems, remain potential sources of sudden, high-volume floods. Climate change is increasing both the number of lakes and the probability that they will fail. Geography concentrates the hazard. Transboundary realities complicate the response. The only missing ingredient is sustained political will — domestic and international — to treat the threat with the seriousness it deserves.',
          'Lives already lost cannot be recovered. Lives still at risk can still be protected, but only if the warning is finally heeded.',
        ],
      },
    ],
  },
]

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/impact', label: 'Impact' },
  { to: '/preparedness', label: 'Preparedness' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

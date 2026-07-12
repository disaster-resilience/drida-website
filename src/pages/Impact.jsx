import { Landmark, Waves, Activity, Wind, RadioTower, Building2, Map, Users, Target } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Reveal } from '../components/ui.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { INDIA_RISK, AIMS, GOALS } from '../data/site.js'

// Local icon registry for this page's data-driven cards.
const RISK_ICONS = { Landmark, Waves, Activity, Wind }
const AIM_ICONS = { RadioTower, Building2, Map, Users }

function RiskCard({ item }) {
  const Icon = RISK_ICONS[item.icon] || Activity
  return (
    <Card hover={false} className="text-center">
      <Icon className="mx-auto h-7 w-7 text-brand-300" />
      <div className="mt-4 text-3xl font-extrabold text-gradient sm:text-4xl">{item.value}</div>
      <div className="mt-1 text-sm font-semibold text-white">{item.label}</div>
      <div className="mt-2 text-xs leading-relaxed text-slate-500">{item.note}</div>
    </Card>
  )
}

function AimCard({ item }) {
  const Icon = AIM_ICONS[item.icon] || Target
  return (
    <Card className="flex gap-4">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-white">{item.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.body}</p>
      </div>
    </Card>
  )
}

export default function Impact() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title="What we aim to change."
        lead="The India Regional Technology Hub is new — so this is a statement of intent, not a scoreboard. Here is the scale of what India faces each year, and exactly what we are building the Hub to reduce."
      />

      <Section className="pt-10">
        <Container>
          <SectionHeading
            eyebrow="The challenge"
            title="What disasters cost India every year"
            lead="These are the numbers we exist to bring down. India is one of the most disaster-exposed nations on earth."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDIA_RISK.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.06}>
                <RiskCard item={r} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <SectionHeading
            eyebrow="Our aims"
            title="We aim to save lives and reduce loss"
            lead="Two north-star goals, and the concrete work the new Hub is standing up to reach them."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {GOALS.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.06}>
                <Card hover={false} className="border-brand-400/20 bg-ink-900/50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-300">We aim to</div>
                  <div className="mt-2 text-2xl font-extrabold text-white">{g.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{g.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {AIMS.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.06}>
                <AimCard item={a} />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-slate-500">
            Challenge figures are drawn from public sources (NDMA landmass-vulnerability
            statistics; World Bank / UNDRR and 2000–2024 loss analyses) and are indicative;
            confirm against the latest reports before wider use. Aims are targets for a newly
            launched Hub, not outcomes achieved to date.
          </p>
        </Container>
      </Section>
    </>
  )
}

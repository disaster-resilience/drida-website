import { motion } from 'framer-motion'
import { TrendingUp, ShieldCheck, Quote } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Reveal } from '../components/ui.jsx'
import PageHeader from '../components/PageHeader.jsx'
import StatGrid from '../components/StatGrid.jsx'

// Property loss averted per year ($ millions) — illustrative program modeling.
const TREND = [
  { year: '2021', value: 180 },
  { year: '2022', value: 320 },
  { year: '2023', value: 560 },
  { year: '2024', value: 740 },
  { year: '2025', value: 900 },
]
const MAX = Math.max(...TREND.map((d) => d.value))

const OUTCOMES = [
  { label: 'Flood-warning coverage', value: '96%', note: 'of residents in served basins' },
  { label: 'Retrofitted lifeline facilities', value: '210', note: 'hospitals, shelters & utilities' },
  { label: 'Response teams trained', value: '1,150', note: 'neighborhood volunteers' },
]

function TrendChart() {
  return (
    <Card hover={false} className="lg:p-8">
      <div className="flex items-center gap-2 text-brand-300">
        <TrendingUp className="h-5 w-5" />
        <h3 className="text-sm font-semibold uppercase tracking-wider">Property loss averted / year</h3>
      </div>
      <div className="mt-8 flex h-56 items-end gap-3 sm:gap-6" role="img" aria-label="Bar chart: property loss averted rising from $180M in 2021 to $900M in 2025">
        {TREND.map((d, i) => (
          <div key={d.year} className="flex flex-1 flex-col items-center gap-3">
            <div className="flex w-full flex-1 items-end">
              <motion.div
                className="w-full rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400"
                initial={{ height: 0 }}
                whileInView={{ height: `${(d.value / MAX) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="-mt-6 text-center text-xs font-semibold text-slate-300">${d.value}M</div>
              </motion.div>
            </div>
            <div className="text-xs font-medium text-slate-500">{d.year}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default function Impact() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title="What resilience returns."
        lead="Prevention is invisible when it works. These figures make the avoided losses — and the lives kept safe — visible and accountable."
      />

      <Section className="pt-10">
        <Container>
          <Reveal>
            <StatGrid />
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <TrendChart />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid h-full gap-4">
                {OUTCOMES.map((o) => (
                  <Card key={o.label} className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">{o.label}</div>
                      <div className="text-xs text-slate-500">{o.note}</div>
                    </div>
                    <div className="text-2xl font-extrabold text-gradient">{o.value}</div>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <figure className="mt-10 rounded-2xl border border-brand-400/20 bg-ink-900/50 p-8 sm:p-10">
              <Quote className="h-8 w-8 text-brand-400/60" />
              <blockquote className="mt-4 text-xl font-medium leading-relaxed text-slate-100 sm:text-2xl">
                “The new river sensors gave us forty minutes. That was the difference between a
                flooded street and a flooded hospital. Everyone got out.”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                <ShieldCheck className="h-4 w-4 text-life-400" />
                District emergency coordinator, Basin 7
              </figcaption>
            </figure>
          </Reveal>

          <p className="mt-8 text-center text-xs text-slate-500">
            Figures are illustrative program-modeling estimates for demonstration and would be
            replaced with audited outcome data in production.
          </p>
        </Container>
      </Section>
    </>
  )
}

import { Target, Compass, Handshake, ShieldCheck, RotateCw } from 'lucide-react'
import { Container, Section, SectionHeading, Card, Reveal } from '../components/ui.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { programIcon } from '../components/icons.js'
import { ORG, APPROACH, GOALS, CYCLE, PRINCIPLES } from '../data/site.js'

const VALUES = [
  { icon: Target, title: 'Prevention over reaction', body: 'A dollar spent before a disaster is worth many spent after. We invest where it stops loss.' },
  { icon: Compass, title: 'Evidence-led', body: 'Every project starts from hazard data and exposure modeling — not guesswork.' },
  { icon: Handshake, title: 'Community-owned', body: 'Resilience lasts only when the people it protects help build and maintain it.' },
  { icon: ShieldCheck, title: 'Accountable impact', body: 'We measure lives protected and property loss averted, and we publish what we find.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About DRIDA"
        title="We exist for the moments no one wants to face."
        lead={ORG.mission}
      />

      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {GOALS.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.1}>
                <Card hover={false} className="h-full border-brand-400/20 bg-ink-900/50">
                  <h2 className="text-xl font-bold text-white">{g.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{g.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/5 bg-ink-900/40 py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What we believe" title="Four principles behind every project." />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <Card className="flex h-full gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{v.body}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5 bg-ink-900/40">
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="The field's framework"
              title="The Disaster Management Cycle"
              lead="A continuous process for building safer, more resilient and better-prepared communities. DRIDA works across every phase of the cycle."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CYCLE.map((s, i) => {
              const Icon = programIcon(s.icon)
              return (
                <Reveal key={s.id} delay={i * 0.05}>
                  <Card hover={false} className={`h-full border-t-2 ${s.color.border}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${s.color.badge}`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${s.color.iconBg} ${s.color.icon}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-sm font-bold leading-tight text-white">{s.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${s.color.dot}`} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-slate-400">
              <RotateCw className="h-4 w-4 text-brand-400" />
              A continuous loop — every event sharpens the next cycle of response.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-white/10 bg-ink-900/50 p-6 sm:p-8">
              <h3 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                Key principles
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {PRINCIPLES.map((p) => {
                  const Icon = programIcon(p.icon)
                  return (
                    <div key={p.id} className="text-center">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3 text-sm font-bold text-white">{p.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">{p.body}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading center eyebrow="Our method" title="From risk to resilience, in four steps." />
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {APPROACH.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.08}>
                <li className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-sm font-bold text-brand-300 ring-1 ring-brand-400/20">
                    {i + 1}
                  </div>
                  {i < APPROACH.length - 1 && (
                    <div className="absolute left-10 top-5 hidden h-px w-full bg-gradient-to-r from-brand-400/40 to-transparent md:block" />
                  )}
                  <h3 className="mt-4 font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  )
}

import { Check, ArrowRight } from 'lucide-react'
import { Container, Section, Button, Card, Reveal } from '../components/ui.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { programIcon } from '../components/icons.js'
import { PROGRAMS } from '../data/site.js'

export default function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Four pillars that turn hazard into recovery."
        lead="From the sensor in the river to the drill in the schoolyard, our work spans the full arc of disaster resilience — engineered to save lives and protect property."
      />

      <Section className="pt-10">
        <Container>
          <div className="space-y-6">
            {PROGRAMS.map((p, i) => {
              const Icon = programIcon(p.icon)
              return (
                <Reveal key={p.id} delay={i * 0.05}>
                  <Card id={p.id} hover={false} className="scroll-mt-24 lg:p-8">
                    <div className="grid gap-6 lg:grid-cols-[auto_1fr_1fr] lg:items-start">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div>
                        <h2 className="text-xl font-bold text-white">{p.title}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.summary}</p>
                        <div className="mt-4 inline-flex rounded-full border border-brand-400/20 bg-brand-500/5 px-3 py-1 text-xs font-medium text-brand-300">
                          {p.metric}
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-life-500/15 text-life-400">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-ink-900/50 p-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-bold text-white">Have a community at risk?</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Tell us about the hazard — we'll help scope an assessment.
                </p>
              </div>
              <Button to="/contact">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}

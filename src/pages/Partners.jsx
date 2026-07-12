import { ArrowRight, Network } from 'lucide-react'
import { Container, Section, Button, Card, Badge, Reveal } from '../components/ui.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { partnerIcon } from '../components/icons.js'
import { HUB, PARTNERS } from '../data/site.js'

// The Hub at a glance: DRIDA Ltd sits at the center as the connecting link,
// with each stakeholder radiating out. Rendered as a labelled hub-and-spoke.
function HubDiagram() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-brand-400/20 bg-gradient-to-br from-ink-850 to-ink-900 p-8 sm:p-10">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="relative">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200 ring-1 ring-brand-400/30">
              <Network className="h-8 w-8" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">{HUB.lead}</div>
              <div className="mt-1 text-sm text-brand-300">{HUB.role}</div>
            </div>
          </div>

          <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PARTNERS.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-white/10 bg-ink-900/50 px-4 py-3 text-center"
              >
                <div className="text-sm font-semibold text-white">{p.name}</div>
                <div className="mt-1 text-xs text-slate-400">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Partners() {
  return (
    <>
      <PageHeader
        eyebrow="The Hub"
        title="DRIDA leads the India Regional Technology Hub."
        lead={HUB.blurb}
      />

      <Section className="pt-10">
        <Container>
          <HubDiagram />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PARTNERS.map((p, i) => {
              const Icon = partnerIcon(p.icon)
              return (
                <Reveal key={p.id} delay={i * 0.05}>
                  <Card id={p.id} className="flex h-full scroll-mt-24 flex-col">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-white">{p.name}</h2>
                        <div className="mt-2">
                          <Badge>{p.role}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.body}</p>
                  </Card>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-ink-900/50 p-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-bold text-white">Want to join the Hub?</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Land, research, technology, or funding — resilience is built together.
                </p>
              </div>
              <Button to="/contact">
                Partner with us <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}

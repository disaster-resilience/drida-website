import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, RotateCcw, ShieldAlert, ShieldCheck, Shield } from 'lucide-react'
import { Container, Section, Card, Reveal, Button } from '../components/ui.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { READINESS } from '../data/site.js'

// Score → tier label + tone for the readiness meter.
function tier(pct) {
  if (pct >= 85) return { label: 'Well prepared', tone: 'text-life-400', Icon: ShieldCheck, bar: 'from-life-500 to-life-400' }
  if (pct >= 50) return { label: 'Getting there', tone: 'text-signal-400', Icon: Shield, bar: 'from-signal-500 to-signal-400' }
  return { label: 'At risk', tone: 'text-red-400', Icon: ShieldAlert, bar: 'from-red-500 to-red-400' }
}

export default function Preparedness() {
  const [checked, setChecked] = useState(() => new Set())

  const toggle = (id) =>
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const pct = Math.round((checked.size / READINESS.length) * 100)
  const t = useMemo(() => tier(pct), [pct])
  const { Icon } = t

  return (
    <>
      <PageHeader
        eyebrow="Preparedness"
        title="The first hour is yours. Be ready for it."
        lead="Before responders arrive, households and neighbors save the most lives. Run this quick check to see how ready you are — and what to fix first."
      />

      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            {/* Live readiness meter */}
            <Reveal>
              <Card hover={false} className="lg:sticky lg:top-24">
                <div className={`flex items-center gap-2 ${t.tone}`}>
                  <Icon className="h-6 w-6" />
                  <span className="text-sm font-semibold uppercase tracking-wider">{t.label}</span>
                </div>
                <div className="mt-4 text-6xl font-extrabold tracking-tight text-white">
                  {pct}
                  <span className="text-2xl text-slate-500">%</span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${t.bar}`}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
                <p className="mt-4 text-sm text-slate-400">
                  {checked.size} of {READINESS.length} readiness steps complete.
                </p>
                {checked.size > 0 && (
                  <button
                    onClick={() => setChecked(new Set())}
                    className="ring-focus mt-5 inline-flex items-center gap-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Reset
                  </button>
                )}
              </Card>
            </Reveal>

            {/* Checklist */}
            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {READINESS.map((item) => {
                  const on = checked.has(item.id)
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => toggle(item.id)}
                        aria-pressed={on}
                        className={`ring-focus flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                          on
                            ? 'border-life-400/30 bg-life-500/[0.07]'
                            : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors ${
                            on ? 'border-life-400 bg-life-500 text-ink-950' : 'border-white/25 text-transparent'
                          }`}
                        >
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </span>
                        <span className={`text-sm ${on ? 'text-white' : 'text-slate-300'}`}>
                          {item.label}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <Reveal>
            <Card hover={false} className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Have questions?</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Ask us about preparedness in your area — we're happy to help.
                </p>
              </div>
              <Button to="/contact" className="shrink-0">Ask us</Button>
            </Card>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}

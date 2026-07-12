import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, HeartPulse, Home as HomeIcon, ChevronRight, Network, Landmark, Waves, Activity, Wind } from 'lucide-react'
import { Container, Section, SectionHeading, Button, Card, Badge, Reveal, stagger, staggerItem } from '../components/ui.jsx'
import { programIcon } from '../components/icons.js'
import { ORG, GOALS, PROGRAMS, APPROACH, HUB, PARTNERS, INDIA_RISK } from '../data/site.js'

const goalIcons = { lives: HeartPulse, property: HomeIcon }
const riskIcons = { Landmark, Waves, Activity, Wind }

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="absolute -top-24 left-1/2 -z-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
      <Container className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={staggerItem}>
            <Badge tone="life">
              <span className="pulse-dot h-2 w-2 rounded-full bg-life-400" />
              India Regional Technology Hub · towards a Resilient India
            </Badge>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Engineering resilience{' '}
            <span className="text-gradient">before disaster strikes.</span>
          </motion.h1>

          <motion.p variants={staggerItem} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {ORG.longName} leads the{' '}
            <span className="font-semibold text-white">India Regional Technology Hub</span> — the
            connecting link between land, research, and disaster-management authorities — building
            the infrastructure and early-warning systems that let communities survive hazards and
            recover fast, to <span className="font-semibold text-white">save lives</span> and{' '}
            <span className="font-semibold text-white">reduce loss of property</span>.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-9 flex flex-wrap gap-3">
            <Button to="/partners">
              Meet the Hub partners <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/programs" variant="ghost">
              Explore our programs
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

function Mission() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our mission"
              title="Two goals guide every project we take on."
              lead={ORG.mission}
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {GOALS.map((goal, i) => {
              const Icon = goalIcons[goal.id] || ShieldCheck
              return (
                <Reveal key={goal.id} delay={i * 0.1}>
                  <Card className="h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{goal.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{goal.body}</p>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function HubPreview() {
  return (
    <Section className="border-t border-white/5 bg-ink-900/40">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeading
              eyebrow="The Hub"
              title="One connecting link, five stakeholders."
              lead={`${HUB.lead} leads the ${HUB.name}, joining land, academia, international expertise, and state & national authorities into a single effort towards a ${HUB.vision}.`}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/partners"
              className="ring-focus group inline-flex items-center gap-1 rounded-lg text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              Meet the partners
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-brand-400/20 bg-ink-900/50 p-6 sm:flex-row sm:flex-wrap sm:justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-4 py-2 text-sm font-bold text-brand-200 ring-1 ring-brand-400/30">
            <Network className="h-4 w-4" />
            {HUB.lead}
          </span>
          {PARTNERS.map((p) => (
            <Link
              key={p.id}
              to="/partners"
              className="ring-focus rounded-full border border-white/10 bg-ink-850 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-brand-400/30 hover:text-white"
            >
              {p.name}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function Challenge() {
  return (
    <Section className="border-y border-white/5 bg-ink-900/40">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeading
              eyebrow="The challenge"
              title="The scale of what India faces."
              lead="The Hub is new, so this is a statement of intent, not a scoreboard. Here is what disasters cost India every year — the numbers we exist to bring down."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/impact"
              className="ring-focus group inline-flex items-center gap-1 rounded-lg text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              What we aim to change
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDIA_RISK.map((r, i) => {
            const Icon = riskIcons[r.icon] || Activity
            return (
              <Reveal key={r.id} delay={i * 0.06}>
                <Card hover={false} className="h-full text-center">
                  <Icon className="mx-auto h-7 w-7 text-brand-300" />
                  <div className="mt-4 text-3xl font-extrabold text-gradient sm:text-4xl">{r.value}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{r.label}</div>
                  <div className="mt-2 text-xs leading-relaxed text-slate-500">{r.note}</div>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Figures drawn from public sources (NDMA, World Bank / UNDRR, 2000–2024 loss
          analyses) and indicative. See the{' '}
          <Link to="/impact" className="text-brand-300 hover:text-brand-200">
            Impact page
          </Link>{' '}
          for what we aim to build.
        </p>
      </Container>
    </Section>
  )
}

function ProgramsPreview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeading eyebrow="What we do" title="Four pillars of disaster resilience." />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/programs"
              className="ring-focus group inline-flex items-center gap-1 rounded-lg text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              All programs
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROGRAMS.map((p) => {
            const Icon = programIcon(p.icon)
            return (
              <motion.div key={p.id} variants={staggerItem}>
                <Link to="/programs" className="ring-focus block h-full rounded-2xl">
                  <Card className="flex h-full flex-col">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-white">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.summary}</p>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}

function Approach() {
  return (
    <Section className="border-t border-white/5 bg-ink-900/40">
      <Container>
        <Reveal>
          <SectionHeading center eyebrow="How we work" title="Assess. Design. Build. Sustain." />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.08}>
              <div className="relative h-full">
                <Card className="h-full">
                  <div className="text-sm font-bold text-brand-400">0{i + 1}</div>
                  <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.body}</p>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function CTA() {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-400/20 bg-gradient-to-br from-ink-850 to-ink-900 p-10 sm:p-14">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Resilience is built together.
              </h2>
              <p className="mt-4 text-slate-300">
                Partner with DRIDA, fund a project, or prepare your own household. Every step
                shortens the distance between a hazard and a safe recovery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact">
                  Get involved <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/impact" variant="ghost">
                  See what we aim to change
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <HubPreview />
      <Challenge />
      <ProgramsPreview />
      <Approach />
      <CTA />
    </>
  )
}

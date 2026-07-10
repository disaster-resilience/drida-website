import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ─── Layout primitives ────────────────────────────────────────────────
export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  )
}

// Small eyebrow + heading + optional lead paragraph.
export function SectionHeading({ eyebrow, title, lead, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{lead}</p>}
    </div>
  )
}

export function Badge({ children, tone = 'brand' }) {
  const tones = {
    brand: 'border-brand-400/30 bg-brand-500/10 text-brand-300',
    life: 'border-life-400/30 bg-life-500/10 text-life-400',
    signal: 'border-signal-400/30 bg-signal-500/10 text-signal-400',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

// ─── Buttons / CTAs ───────────────────────────────────────────────────
const btnBase =
  'ring-focus inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98]'
const btnStyles = {
  primary:
    'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-600/20 hover:shadow-xl hover:shadow-brand-500/30 hover:brightness-110',
  ghost: 'glass text-slate-100 hover:bg-white/[0.08]',
  signal:
    'bg-gradient-to-r from-signal-400 to-signal-500 text-ink-950 shadow-lg shadow-signal-500/20 hover:brightness-105',
}

export function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `${btnBase} ${btnStyles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}

// ─── Cards ────────────────────────────────────────────────────────────
export function Card({ className = '', hover = true, children }) {
  return (
    <div
      className={`glass rounded-2xl p-6 ${
        hover ? 'transition-colors duration-300 hover:border-brand-400/30 hover:bg-white/[0.05]' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

// ─── Motion helpers ───────────────────────────────────────────────────
// Fade + rise, triggered once on scroll into view.
export function Reveal({ delay = 0, y = 24, className = '', children }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for lists of Reveal-like children.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

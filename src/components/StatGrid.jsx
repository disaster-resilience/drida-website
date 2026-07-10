import { useCountUp } from '../hooks/useCountUp.js'
import { STATS } from '../data/site.js'
import { Reveal } from './ui.jsx'

function Stat({ stat, index }) {
  const { ref, display } = useCountUp(stat.value, { decimals: stat.decimals || 0 })
  return (
    <Reveal delay={index * 0.08}>
      <div ref={ref} className="glass rounded-2xl p-6 text-center sm:text-left">
        <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          <span className="text-gradient">
            {stat.prefix || ''}
            {display}
            {stat.suffix || ''}
          </span>
        </div>
        <div className="mt-2 text-sm font-semibold text-slate-200">{stat.label}</div>
        <div className="mt-0.5 text-xs text-slate-500">{stat.sub}</div>
      </div>
    </Reveal>
  )
}

export default function StatGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {STATS.map((s, i) => (
        <Stat key={s.id} stat={s} index={i} />
      ))}
    </div>
  )
}

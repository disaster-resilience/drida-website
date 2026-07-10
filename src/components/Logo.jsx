import { Link } from 'react-router-dom'

// Brand shield + wordmark. Shield echoes the favicon (protection + a pulse
// line, for the "lives / monitoring" idea).
export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="ring-focus group flex items-center gap-2.5 rounded-lg" aria-label="DRIDA home">
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <path
          d="M32 6 L54 16 V34 C54 47 44 55 32 58 C20 55 10 47 10 34 V16 Z"
          fill="none"
          stroke="url(#logoG)"
          strokeWidth="4"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <path
          d="M19 33 h8 l3.5 -10 4.5 18 3.5 -8 h6"
          fill="none"
          stroke="url(#logoG)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-white">DRIDA</span>
        {!compact && (
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
            Disaster Resilience
          </span>
        )}
      </span>
    </Link>
  )
}

import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { Button } from './ui.jsx'
import { NAV, ORG } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Solidify the bar once the user scrolls past the hero fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [location.pathname])

  const linkClass = ({ isActive }) =>
    `ring-focus rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-white' : 'text-slate-300 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${ORG.emergency}`}
            className="ring-focus flex items-center gap-1.5 rounded-full px-2 py-1 text-sm text-slate-300 hover:text-white"
          >
            <Phone className="h-4 w-4 text-signal-400" />
            <span className="tabular-nums">{ORG.emergency}</span>
          </a>
          <Button to="/contact" className="px-4 py-2">Get involved</Button>
        </div>

        <button
          className="ring-focus rounded-lg p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass-strong border-t border-white/10 md:hidden">
          <div className="space-y-1 px-5 py-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive ? 'bg-white/5 text-white' : 'text-slate-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-3 w-full">Get involved</Button>
          </div>
        </div>
      )}
    </header>
  )
}

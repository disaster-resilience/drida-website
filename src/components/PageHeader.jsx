import { Container } from './ui.jsx'

// Consistent hero band for inner pages.
export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <header className="relative overflow-hidden pb-4 pt-32 sm:pt-40">
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-20 left-1/3 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[110px]" />
      <Container className="relative">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{lead}</p>}
      </Container>
    </header>
  )
}

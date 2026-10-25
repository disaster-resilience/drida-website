import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Check,
  ChevronRight,
  AlertTriangle,
  Waves,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react'
import { Container, Section, Card, Badge, Button, Reveal } from '../components/ui.jsx'
import { BLOG_POSTS, ORG } from '../data/site.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // If slug not found, redirect to blog index
  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <>
      {/* Apple-style Reading Progress Indicator */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-life-400 origin-left"
        style={{ scaleX }}
      />

      {/* Header & Hero */}
      <article className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-28 left-1/2 -z-0 h-80 w-[45rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[130px]" />

        <Container className="relative">
          {/* Breadcrumb & Back */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link to="/blog" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-slate-300">{post.category}</span>
          </div>

          <div className="max-w-4xl">
            <Badge tone="signal">
              <AlertTriangle className="h-3 w-3" />
              {post.coverBadge || 'Special Report'}
            </Badge>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.12]">
              {post.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300 font-normal">
              {post.subtitle}
            </p>

            {/* Author Profile Card */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-600/30 text-base font-bold text-brand-300 ring-1 ring-brand-400/30 shadow-inner">
                  {post.author.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{post.author.name}</div>
                  <div className="text-xs text-slate-300 leading-snug">{post.author.role}</div>
                  <div className="text-[11px] text-brand-300/90 font-medium">{post.author.affiliation}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-brand-400" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-brand-400" />
                  <span>{post.readTime}</span>
                </div>
                <button
                  onClick={handleShare}
                  className="ring-focus inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200 transition-colors hover:bg-white/[0.08]"
                  title="Copy link"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-life-400" /> : <Share2 className="h-3.5 w-3.5 text-brand-300" />}
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Quick Key Metrics Banner */}
            {post.keyMetrics && (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {post.keyMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-ink-900/60 p-4 transition-all duration-300 hover:border-brand-400/30"
                  >
                    <div className="text-2xl font-extrabold text-gradient sm:text-3xl">{metric.value}</div>
                    <div className="text-xs font-semibold text-white mt-1">{metric.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-tight">{metric.note}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </article>

      {/* Main Content Layout with Sticky Table of Contents */}
      <Section className="border-t border-white/5 bg-ink-950/60 pt-10 pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[260px_1fr] items-start">
            {/* Sticky Table of Contents (Desktop) */}
            <aside className="sticky top-24 hidden rounded-2xl border border-white/10 bg-ink-900/40 p-5 backdrop-blur-md lg:block">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400 mb-3">
                <Layers className="h-3.5 w-3.5" />
                Contents
              </div>
              <nav className="space-y-1">
                {post.sections.map((sec, idx) => (
                  <a
                    key={sec.heading}
                    href={`#section-${idx}`}
                    onClick={() => setActiveSection(idx)}
                    className={`block rounded-lg px-2.5 py-1.5 text-xs leading-snug transition-colors ${
                      activeSection === idx
                        ? 'bg-brand-500/10 text-brand-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {sec.heading}
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  Published in cooperation with the International Association of Disaster Management (IADM).
                </div>
              </div>
            </aside>

            {/* Article Editorial Body */}
            <div className="max-w-3xl space-y-12">
              {post.sections.map((section, idx) => (
                <div key={section.heading} id={`section-${idx}`} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl border-b border-white/10 pb-3">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Author Bio Box */}
              <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-ink-900/80 to-ink-850 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-500/15 text-xl font-bold text-brand-300 ring-1 ring-brand-400/30">
                    {post.author.avatar}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">About the Author</span>
                    <h3 className="text-lg font-bold text-white mt-1">{post.author.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      The author is a humanitarian professional and a disaster management specialist who has led community engagement for risk reduction across Asia, Africa and Europe. He is currently Secretary General of the International Association of Disaster Management.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
                        <Shield className="h-3 w-3 text-brand-400" />
                        IADM Secretary General
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
                        <Waves className="h-3 w-3 text-sky-400" />
                        GLOF Risk Specialist
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Call to Action */}
              <div className="mt-12 rounded-2xl border border-brand-400/20 bg-gradient-to-br from-ink-900 to-ink-950 p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white">Join DRIDA’s Resilience Network</h4>
                  <p className="mt-1 text-sm text-slate-400 max-w-md">
                    We collaborate with state authorities, universities, and international bodies to engineer early warning and mitigation infrastructure.
                  </p>
                </div>
                <div className="mt-6 sm:mt-0">
                  <Button to="/contact" className="px-6 py-2.5 text-sm">
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

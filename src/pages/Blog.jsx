import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User, Sparkles, BookOpen, ChevronRight } from 'lucide-react'
import { Container, Section, Card, Badge, Reveal, stagger, staggerItem } from '../components/ui.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { BLOG_POSTS } from '../data/site.js'

export default function Blog() {
  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0]
  const recent = BLOG_POSTS.filter((p) => p.slug !== featured?.slug)

  return (
    <>
      <PageHeader
        eyebrow="Insights & Field Dispatches"
        title="Perspectives on resilience, climate risk, and disaster engineering."
        lead="Analyses, case studies, and engineering reports from DRIDA experts and global disaster management leaders."
      />

      {/* Featured Dispatch */}
      {featured && (
        <Section className="pb-12 pt-8">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-brand-400/25 bg-gradient-to-br from-ink-900/90 via-ink-850 to-ink-950 p-7 sm:p-10 lg:p-12 shadow-2xl shadow-black/40">
                <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/15 blur-[120px] pointer-events-none" />
                <div className="relative flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge tone="signal">
                        <Sparkles className="h-3 w-3" />
                        Featured Analysis
                      </Badge>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {featured.category}
                      </span>
                    </div>

                    <Link to={`/blog/${featured.slug}`} className="group block mt-5">
                      <h2 className="text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-brand-300 sm:text-3xl lg:text-4xl lg:leading-tight">
                        {featured.title}
                      </h2>
                    </Link>

                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                      {featured.subtitle}
                    </p>

                    {/* Author & Meta bar */}
                    <div className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400 border-y border-white/5 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 text-brand-300 font-semibold ring-1 ring-brand-400/30">
                          {featured.author.avatar}
                        </div>
                        <div>
                          <span className="font-semibold text-white block">{featured.author.name}</span>
                          <span className="text-slate-400 text-[11px]">{featured.author.affiliation}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                        <Calendar className="h-3.5 w-3.5 text-brand-400" />
                        <span>{new Date(featured.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-brand-400" />
                        <span>{featured.readTime}</span>
                      </div>
                    </div>

                    {/* Key metrics strip */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {featured.keyMetrics.map((m) => (
                        <div key={m.label} className="rounded-xl border border-white/5 bg-ink-950/60 p-3.5">
                          <div className="text-xl font-bold text-gradient sm:text-2xl">{m.value}</div>
                          <div className="text-xs font-semibold text-slate-200 mt-0.5">{m.label}</div>
                          <div className="text-[11px] text-slate-400 mt-1 leading-tight">{m.note}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((t) => (
                        <span key={t} className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-400">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${featured.slug}`}
                      className="ring-focus inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-5 py-2.5 text-xs font-semibold text-brand-300 ring-1 ring-brand-400/30 transition-all hover:bg-brand-500/20 hover:text-white"
                    >
                      Read full article <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      )}

      {/* Additional Dispatches & Archive */}
      <Section className="border-t border-white/5 bg-ink-900/30 py-16">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                Archive & Insights
              </span>
              <h3 className="mt-1 text-2xl font-bold text-white">All Dispatches</h3>
            </div>
            <span className="text-xs text-slate-400">
              {BLOG_POSTS.length} {BLOG_POSTS.length === 1 ? 'article' : 'articles'} published
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Reveal key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="ring-focus group block h-full">
                  <Card className="flex h-full flex-col justify-between border-white/10 bg-ink-900/40 p-6 transition-all duration-300 hover:border-brand-400/30 hover:bg-white/[0.04]">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-medium text-brand-400">{post.category}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h4 className="mt-4 text-lg font-bold text-white transition-colors duration-200 group-hover:text-brand-300">
                        {post.title}
                      </h4>

                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                        {post.subtitle}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/5 pt-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">{post.author.name}</span>
                        <span className="inline-flex items-center gap-1 text-brand-300 font-semibold group-hover:translate-x-0.5 transition-transform">
                          Read <ChevronRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

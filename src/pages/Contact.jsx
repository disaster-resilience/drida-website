import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, AlertTriangle } from 'lucide-react'
import { Container, Section, Card, Button, Reveal } from '../components/ui.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { ORG } from '../data/site.js'

const TOPICS = ['Partner with us', 'Fund a project', 'Request an assessment', 'Media / press', 'Volunteer']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  // `company` is a honeypot: hidden from humans, only bots fill it. StaticForms
  // drops any submission where the honeypot field is non-empty.
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '', company: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!EMAIL_RE.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail helps us route this.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSendError('')
    if (!validate()) return
    // Static site (no backend): POST to StaticForms.dev, which emails the team.
    // The subject is auto-prefixed so every message is tagged as coming from the
    // website. Recipient is fixed in the StaticForms dashboard (not sent here).
    setSending(true)
    try {
      const res = await fetch(ORG.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          apiKey: ORG.formApiKey,
          subject: `${ORG.formSubjectPrefix} ${form.topic}`,
          name: form.name,
          email: form.email,
          replyTo: form.email,
          topic: form.topic,
          message: form.message,
          honeypot: form.company,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false) {
        throw new Error(data.message || `Request failed (${res.status})`)
      }
      setSent(true)
    } catch (err) {
      setSendError(
        `Sorry — we couldn't send your message just now. Please email us directly at ${ORG.email}.`,
      )
    } finally {
      setSending(false)
    }
  }

  const field =
    'ring-focus w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/40'

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build resilience together."
        lead="Whether you represent a community at risk, a funder, or a volunteer — reach out. For a life-threatening emergency, always contact your local emergency services first."
      />

      <Section className="pt-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            {/* Contact rail */}
            <Reveal>
              <div className="space-y-4">
                <Card hover={false}>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                      <div>
                        <div className="font-semibold text-white">Email</div>
                        <a href={`mailto:${ORG.email}`} className="ring-focus rounded text-slate-400 hover:text-brand-300">
                          {ORG.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                      <div>
                        <div className="font-semibold text-white">Operations Center</div>
                        <div className="text-slate-400">{ORG.address}</div>
                      </div>
                    </li>
                  </ul>
                </Card>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1}>
              <Card hover={false} className="lg:p-8">
                {sent ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <CheckCircle2 className="h-14 w-14 text-life-400" />
                    <h2 className="mt-4 text-2xl font-bold text-white">Message sent</h2>
                    <p className="mt-2 max-w-sm text-sm text-slate-400">
                      Thanks, {form.name.split(' ')[0] || 'friend'}. We've received your message and
                      our team will respond within two business days. For a life-threatening
                      emergency, please contact your local emergency services.
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-6"
                      onClick={() => {
                        setSent(false)
                        setForm({ name: '', email: '', topic: TOPICS[0], message: '', company: '' })
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-5">
                    {/* Honeypot: off-screen, not for humans. Bots that fill it get dropped. */}
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={form.company}
                      onChange={set('company')}
                      className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                          Name
                        </label>
                        <input id="name" className={field} value={form.name} onChange={set('name')} placeholder="Your name" />
                        {errors.name && <FieldError msg={errors.name} />}
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                          Email
                        </label>
                        <input id="email" type="email" className={field} value={form.email} onChange={set('email')} placeholder="you@example.org" />
                        {errors.email && <FieldError msg={errors.email} />}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-slate-300">
                        How can we help?
                      </label>
                      <select id="topic" className={field} value={form.topic} onChange={set('topic')}>
                        {TOPICS.map((t) => (
                          <option key={t} value={t} className="bg-ink-850">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                        Message
                      </label>
                      <textarea id="message" rows={5} className={`${field} resize-none`} value={form.message} onChange={set('message')} placeholder="Tell us about your community, project, or question…" />
                      {errors.message && <FieldError msg={errors.message} />}
                    </div>

                    {sendError && (
                      <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{sendError}</span>
                      </div>
                    )}

                    <Button type="submit" className="w-full sm:w-auto" disabled={sending}>
                      {sending ? 'Sending…' : 'Send message'} <Send className="h-4 w-4" />
                    </Button>
                    <p className="text-xs text-slate-500">
                      Your message goes straight to our team — we'll reply by email within two business days.
                    </p>
                  </form>
                )}
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}

function FieldError({ msg }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
      <AlertTriangle className="h-3.5 w-3.5" /> {msg}
    </p>
  )
}

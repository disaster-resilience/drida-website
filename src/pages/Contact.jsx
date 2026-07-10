import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle } from 'lucide-react'
import { Container, Section, Card, Button, Reveal } from '../components/ui.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { ORG } from '../data/site.js'

const TOPICS = ['Partner with us', 'Fund a project', 'Request an assessment', 'Media / press', 'Volunteer']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!EMAIL_RE.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail helps us route this.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // Front-end only demo: validate, then show a confirmation. A production
    // build would POST this to an intake API / CRM.
    if (validate()) setSent(true)
  }

  const field =
    'ring-focus w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/40'

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build resilience together."
        lead="Whether you represent a community at risk, a funder, or a volunteer — reach out. For a life-threatening emergency, always call your local emergency number first."
      />

      <Section className="pt-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            {/* Contact rail */}
            <Reveal>
              <div className="space-y-4">
                <Card hover={false} className="border-signal-400/30 bg-signal-500/[0.06]">
                  <div className="flex items-center gap-2 text-signal-400">
                    <Phone className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Emergency</span>
                  </div>
                  <a href={`tel:${ORG.emergency}`} className="ring-focus mt-2 block rounded text-4xl font-extrabold tabular-nums text-white">
                    {ORG.emergency}
                  </a>
                  <p className="mt-1 text-xs text-slate-400">Life-threatening situations — call now.</p>
                </Card>

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
                    <h2 className="mt-4 text-2xl font-bold text-white">Message received</h2>
                    <p className="mt-2 max-w-sm text-sm text-slate-400">
                      Thanks, {form.name.split(' ')[0] || 'friend'}. Our team will respond within two
                      business days. For anything urgent, call {ORG.emergency}.
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-6"
                      onClick={() => {
                        setSent(false)
                        setForm({ name: '', email: '', topic: TOPICS[0], message: '' })
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-5">
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

                    <Button type="submit" className="w-full sm:w-auto">
                      Send message <Send className="h-4 w-4" />
                    </Button>
                    <p className="text-xs text-slate-500">
                      Demo form — submissions are validated in the browser and not sent anywhere.
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

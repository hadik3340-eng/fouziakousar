import { useState } from 'react'
import { Mail, MessageCircle, Facebook, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import { serviceOptions, socialLinks } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  WhatsApp: MessageCircle,
  Email: Mail,
  Facebook: Facebook,
  Instagram: Instagram,
  LinkedIn: Linkedin,
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    const formData = new FormData(e.currentTarget)
    const payload: Record<string, string> = { 'form-name': 'contact' }
    formData.forEach((value, key) => {
      payload[key] = String(value)
    })

    try {
      const res = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })
      if (!res.ok) throw new Error('submit failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-[#100f0b] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <Reveal>
          <span className="section-label">Contact</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
            Let's Work <span className="gold-text italic">Together</span>
          </h2>
          <p className="mt-5 max-w-md text-[#a89a78]">
            Share a little about your business and what you need help with — Shopify,
            eBay, Meta Ads or overall e-commerce marketing strategy.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label] ?? Mail
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-xs font-semibold text-[#e7e0cf] transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold-bright)]"
                >
                  <Icon size={14} />
                  {link.label}
                </a>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={1} className="rounded-2xl border border-[color:var(--line)] bg-[#151310] p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
              <CheckCircle2 size={40} className="text-[color:var(--gold-bright)]" />
              <p className="font-display text-xl text-[#f3efe6]">Message Sent</p>
              <p className="max-w-sm text-sm text-[#a89a78]">
                Thanks for reaching out. Fouzia will get back to you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="WhatsApp" name="whatsapp" />
                <Field label="Business / Brand" name="business" />
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[color:var(--gold)]">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-[color:var(--line)] bg-[#0f0e0a] px-4 py-3 text-sm text-[#f3efe6] outline-none transition-colors focus:border-[color:var(--gold)]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[color:var(--gold)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your business and what you're looking to achieve..."
                  className="w-full resize-none rounded-xl border border-[color:var(--line)] bg-[#0f0e0a] px-4 py-3 text-sm text-[#f3efe6] outline-none transition-colors placeholder:text-[#6d6552] focus:border-[color:var(--gold)]"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400">
                  Something went wrong sending your message. Please try again or
                  reach out via WhatsApp or email.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[#14120d] transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                <Send size={15} />
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[color:var(--gold)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-[color:var(--line)] bg-[#0f0e0a] px-4 py-3 text-sm text-[#f3efe6] outline-none transition-colors focus:border-[color:var(--gold)]"
      />
    </div>
  )
}

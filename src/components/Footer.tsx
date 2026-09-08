import { Mail, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react'
import { socialLinks } from '@/lib/data'

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  WhatsApp: MessageCircle,
  Email: Mail,
  Facebook: Facebook,
  Instagram: Instagram,
  LinkedIn: Linkedin,
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#shopify' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--line)] bg-[#0b0b0c] py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl text-[#f3efe6]">Fouzia Kousar</p>
          <p className="mt-2 text-sm text-[#a89a78]">
            Digital Marketing Specialist | Shopify Expert | eBay Consultant
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[#c7bfab] hover:text-[color:var(--gold-bright)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Connect
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label] ?? Mail
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] text-[#e7e0cf] transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold-bright)]"
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[color:var(--line)] px-5 pt-6 text-xs text-[#6d6552] lg:px-8">
        © 2026 Fouzia Kousar. All Rights Reserved.
      </div>
    </footer>
  )
}

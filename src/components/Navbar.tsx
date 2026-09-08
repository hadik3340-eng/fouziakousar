import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0b0b0c]/90 backdrop-blur-xl border-b border-[color:var(--line)] py-3'
          : 'bg-transparent py-6',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-baseline gap-2 font-display">
          <span className="text-xl font-semibold tracking-tight text-[#f3efe6]">
            Fouzia Kousar
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold)]">
            Nova Marketing
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'relative py-1 text-[#cfc7b4] transition-colors hover:text-[color:var(--gold-bright)]',
                  active === link.href && 'text-[color:var(--gold-bright)]',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--gold)] transition-transform duration-300',
                    active === link.href && 'scale-x-100',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full border border-[color:var(--gold)] bg-[color:var(--gold)] px-5 py-2 text-sm font-semibold text-[#14120d] transition-transform hover:scale-105"
        >
          Work With Me
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[#f3efe6]"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mx-5 mt-3 rounded-2xl border border-[color:var(--line)] bg-[#100f0b] p-6">
          <ul className="flex flex-col gap-4 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[#e7e0cf] hover:text-[color:var(--gold-bright)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[#14120d]"
          >
            Work With Me
          </a>
        </div>
      )}
    </header>
  )
}

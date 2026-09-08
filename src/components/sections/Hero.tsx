import { ShoppingBag, Gavel, Megaphone, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const floatingCards = [
  { icon: ShoppingBag, label: 'Shopify', className: '-left-6 top-10 lg:-left-10', delay: '0s' },
  { icon: Gavel, label: 'eBay', className: '-right-4 top-24 lg:-right-8', delay: '1.4s' },
  { icon: Megaphone, label: 'Meta Ads', className: '-left-4 bottom-28 lg:-left-10', delay: '2.1s' },
  { icon: TrendingUp, label: 'E-commerce', className: '-right-6 bottom-8 lg:-right-8', delay: '0.7s' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0b0b0c] pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(217,180,92,0.14),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(217,180,92,0.08),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div>
          <Reveal>
            <span className="section-label inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2">
              Digital Marketing • Shopify • eBay
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] text-[#f6f2e8] sm:text-5xl lg:text-[3.6rem]">
              Helping E-commerce Brands{' '}
              <span className="gold-text italic">Grow, Sell &amp; Scale</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c7bfab] sm:text-lg">
              I help businesses build high-converting Shopify stores, grow through
              performance marketing, manage e-commerce platforms and develop strategies
              that turn online opportunities into measurable growth.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#shopify"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[#14120d] transition-transform hover:scale-105"
              >
                View My Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] px-7 py-3.5 text-sm font-semibold text-[#f3efe6] transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold-bright)]"
              >
                Let's Work Together
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#8a8168]">
              Shopify &middot; eBay &middot; Meta Ads &middot; E-commerce Marketing
            </p>
          </Reveal>
        </div>

        <Reveal delay={2} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
              <img
                src="/hero-portrait.svg"
                alt="Fouzia Kousar working on Shopify and Meta Ads campaigns"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            {floatingCards.map(({ icon: Icon, label, className, delay }) => (
              <div
                key={label}
                className={`animate-float absolute hidden sm:flex items-center gap-2 rounded-2xl glass-card px-4 py-3 shadow-xl ${className}`}
                style={{ animationDelay: delay }}
              >
                <Icon size={16} className="text-[color:var(--gold-bright)]" />
                <span className="text-xs font-semibold text-[#f3efe6]">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

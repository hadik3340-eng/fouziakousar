import { Check } from 'lucide-react'
import { expertiseTags } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

export function About() {
  return (
    <section id="about" className="relative bg-[#0b0b0c] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <span className="section-label">About Fouzia</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
            Digital Marketing That Focuses on{' '}
            <span className="gold-text italic">Growth</span>
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-base leading-relaxed text-[#c7bfab] sm:text-lg">
            Fouzia Kousar is a Digital Marketing Specialist, Shopify Expert and eBay
            Consultant who works with brands and independent sellers to strengthen
            their online presence, e-commerce operations and advertising performance.
            With hands-on experience across Shopify store builds, eBay account
            management and Meta advertising, her focus stays on practical decisions
            that move a business toward real, measurable sales.
          </p>
          <p className="mt-5 text-base leading-relaxed text-[#c7bfab] sm:text-lg">
            As a freelancer working with clients across different markets, Fouzia
            approaches every project as a partner in growth — auditing what already
            exists, fixing what is holding a store back, and building a strategy
            suited to the product, budget and audience in front of her.
          </p>

          <div className="mt-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
              My Expertise
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {expertiseTags.map((tag) => (
                <li
                  key={tag}
                  className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[#151310] px-3 py-2.5 text-sm text-[#e7e0cf]"
                >
                  <Check size={14} className="shrink-0 text-[color:var(--gold-bright)]" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#services"
            className="mt-9 inline-flex items-center justify-center rounded-full border border-[color:var(--gold)] px-7 py-3 text-sm font-semibold text-[color:var(--gold-bright)] transition-colors hover:bg-[color:var(--gold)] hover:text-[#14120d]"
          >
            Learn More About Me
          </a>
        </Reveal>
      </div>
    </section>
  )
}

import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

export function Services() {
  return (
    <section id="services" className="relative bg-[#100f0b] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="section-label">Services</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
            What I Can Do For{' '}
            <span className="gold-text italic">Your Business</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.title}
                delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[#151310] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--gold)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[#1c1a13] text-[color:var(--gold-bright)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-[#14120d]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg text-[#f3efe6]">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#a89a78]">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--gold-bright)] transition-colors group-hover:gap-2.5"
                >
                  View Service <ArrowUpRight size={13} />
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

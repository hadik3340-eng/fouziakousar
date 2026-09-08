import { ArrowUpRight } from 'lucide-react'
import { shopifyProjects } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

export function ShopifyPortfolio() {
  return (
    <section id="shopify" className="relative bg-[#0b0b0c] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="section-label">Shopify Portfolio</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
              Shopify <span className="gold-text italic">Projects</span>
            </h2>
            <p className="mt-3 max-w-lg text-[#a89a78]">
              Selected Shopify stores and e-commerce projects.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shopifyProjects.map((project, i) => (
            <Reveal
              key={project.code}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className="group overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[#151310] transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--gold)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                  {project.code}
                </p>
                <h3 className="mt-2 font-display text-lg text-[#f3efe6]">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-[#a89a78]">{project.industry}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[color:var(--line)] px-2.5 py-1 text-[10px] text-[#c7bfab]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--gold-bright)]"
                >
                  View Project <ArrowUpRight size={13} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)] px-7 py-3 text-sm font-semibold text-[color:var(--gold-bright)] transition-colors hover:bg-[color:var(--gold)] hover:text-[#14120d]"
          >
            View All Shopify Projects
          </a>
        </Reveal>
      </div>
    </section>
  )
}

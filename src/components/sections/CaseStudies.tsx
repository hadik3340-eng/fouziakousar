import { useState } from 'react'
import { caseStudies, caseStudyFilters } from '@/lib/data'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

export function CaseStudies() {
  const [filter, setFilter] = useState<(typeof caseStudyFilters)[number]>('All')

  const visible =
    filter === 'All' ? caseStudies : caseStudies.filter((c) => c.category === filter)

  return (
    <section id="case-studies" className="relative bg-[#0b0b0c] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="section-label">Case Studies</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
              Detailed <span className="gold-text italic">Case Studies</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {caseStudyFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors',
                  filter === f
                    ? 'border-[color:var(--gold)] bg-[color:var(--gold)] text-[#14120d]'
                    : 'border-[color:var(--line)] text-[#c7bfab] hover:border-[color:var(--gold)]',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {visible.map((study, i) => (
            <Reveal
              key={study.id}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className="rounded-2xl border border-[color:var(--line)] bg-[#151310] p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[color:var(--gold-bright)]">
                  {study.category}
                </span>
                <span className="text-xs text-[#8a8168]">{study.industry}</span>
              </div>

              <h3 className="mt-4 font-display text-lg text-[#f3efe6]">
                {study.client}
              </h3>

              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[color:var(--gold)]">
                    Challenge
                  </dt>
                  <dd className="mt-1 text-[#a89a78]">{study.challenge}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[color:var(--gold)]">
                    Strategy
                  </dt>
                  <dd className="mt-1 text-[#a89a78]">{study.strategy}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[color:var(--gold)]">
                    Execution
                  </dt>
                  <dd className="mt-1 text-[#a89a78]">{study.execution}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[color:var(--gold)]">
                    Results
                  </dt>
                  <dd className="mt-1 text-[#a89a78]">{study.results}</dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[color:var(--line)] px-2.5 py-1 text-[10px] text-[#c7bfab]"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-dashed border-[color:var(--line)] px-4 py-6 text-center text-xs text-[#8a8168]">
                Screenshots for this case study will appear here.
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

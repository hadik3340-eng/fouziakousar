import { metaAdsMetrics } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

const screenshots = [
  '/meta-ads/results-01.svg',
  '/meta-ads/results-02.svg',
  '/meta-ads/results-03.svg',
]

export function MetaAdsResults() {
  return (
    <section id="meta-ads" className="relative bg-[#0b0b0c] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="section-label">Performance Marketing</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
            Performance Marketing &amp;{' '}
            <span className="gold-text italic">Meta Ads</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {metaAdsMetrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className="rounded-2xl border border-[color:var(--line)] bg-[#151310] px-4 py-6 text-center"
            >
              <p className="font-display text-2xl text-[color:var(--gold-bright)]">
                {metric.value}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#a89a78]">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="mt-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            Meta Ads Manager — Screenshot Gallery
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {screenshots.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-xl border border-[color:var(--line)]"
              >
                <img
                  src={src}
                  alt="Meta Ads Manager results placeholder"
                  loading="lazy"
                  width={900}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8 max-w-2xl text-sm text-[#8a8168]">
          Results vary depending on product, market, budget, offer and campaign
          strategy. Metrics above show real client results only once actual campaign
          data has been added.
        </Reveal>
      </div>
    </section>
  )
}

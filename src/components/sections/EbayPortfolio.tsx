import { ebayCategories, ebayProjects } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

const screenshots = [
  '/ebay/dashboard-01.svg',
  '/ebay/dashboard-02.svg',
  '/ebay/dashboard-03.svg',
]

export function EbayPortfolio() {
  return (
    <section id="ebay" className="relative bg-[#100f0b] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">eBay Portfolio</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
            eBay <span className="gold-text italic">Expertise &amp; Projects</span>
          </h2>
        </Reveal>

        <Reveal delay={1} className="mt-8 flex flex-wrap gap-3">
          {ebayCategories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-[color:var(--line)] bg-[#151310] px-4 py-2 text-xs font-medium text-[#e7e0cf]"
            >
              {cat}
            </span>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={2} className="rounded-2xl border border-[color:var(--line)] bg-[#151310] p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
              Dashboard Preview — Upload Real Screenshots
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {screenshots.map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-xl border border-[color:var(--line)]"
                >
                  <img
                    src={src}
                    alt="eBay dashboard placeholder"
                    loading="lazy"
                    width={900}
                    height={560}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {ebayProjects.map((project, i) => (
              <Reveal
                key={project.code}
                delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
                className="rounded-2xl border border-[color:var(--line)] bg-[#151310] p-5 transition-colors hover:border-[color:var(--gold)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                  {project.code}
                </p>
                <h3 className="mt-1.5 font-display text-lg text-[#f3efe6]">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-[#a89a78]">{project.focus}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)] px-7 py-3 text-sm font-semibold text-[color:var(--gold-bright)] transition-colors hover:bg-[color:var(--gold)] hover:text-[#14120d]"
          >
            View eBay Portfolio
          </a>
        </Reveal>
      </div>
    </section>
  )
}

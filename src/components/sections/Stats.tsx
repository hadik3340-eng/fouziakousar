import { stats } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

export function Stats() {
  return (
    <section className="relative border-y border-[color:var(--line)] bg-[#100f0b] py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label + stat.value} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="rounded-2xl border border-[color:var(--line)] bg-[#151310] px-6 py-8 text-center transition-transform hover:-translate-y-1">
              <p className="font-display text-3xl text-[color:var(--gold-bright)] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#a89a78]">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import { BadgeCheck } from 'lucide-react'
import { whyReasons } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

export function WhyWorkWithMe() {
  return (
    <section className="relative bg-[#100f0b] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="section-label">Why Work With Me</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
            Built On Experience,{' '}
            <span className="gold-text italic">Not Guesswork</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyReasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className="rounded-2xl border border-[color:var(--line)] bg-[#151310] p-6"
            >
              <BadgeCheck size={24} className="text-[color:var(--gold-bright)]" />
              <h3 className="mt-4 font-display text-lg text-[#f3efe6]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a89a78]">
                {reason.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Reveal } from '@/components/Reveal'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1c1809] via-[#0b0b0c] to-[#0b0b0c] py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,180,92,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl lg:text-5xl">
            Ready to Grow Your{' '}
            <span className="gold-text italic">Online Business?</span>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#c7bfab] sm:text-lg">
            Let's discuss your business goals and create a strategy designed around
            your market, product and growth objectives.
          </p>
        </Reveal>
        <Reveal delay={2} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-8 py-3.5 text-sm font-semibold text-[#14120d] transition-transform hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#shopify"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] px-8 py-3.5 text-sm font-semibold text-[#f3efe6] transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold-bright)]"
          >
            View Portfolio
          </a>
        </Reveal>
      </div>
    </section>
  )
}

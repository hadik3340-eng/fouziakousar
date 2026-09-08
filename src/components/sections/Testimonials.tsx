import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const testimonial = testimonials[index]

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative bg-[#0b0b0c] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="section-label">Testimonials</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
            What Clients <span className="gold-text italic">Will Say</span>
          </h2>
        </Reveal>

        <Reveal delay={1} className="relative mt-12 rounded-2xl border border-[color:var(--line)] bg-[#151310] p-8 sm:p-12">
          <Quote size={30} className="mx-auto text-[color:var(--gold)]" />
          <p className="mt-6 font-display text-xl italic leading-relaxed text-[#e7e0cf] sm:text-2xl">
            "{testimonial.quote}"
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-12 w-12 shrink-0 rounded-full border border-[color:var(--line)] bg-[#1c1a13]" />
            <div className="text-left">
              <p className="text-sm font-semibold text-[#f3efe6]">{testimonial.name}</p>
              <p className="text-xs text-[#a89a78]">
                {testimonial.business} &middot; {testimonial.country}
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[#f3efe6] transition-colors hover:border-[color:var(--gold)]"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name + i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-6 rounded-full transition-colors ${
                    i === index ? 'bg-[color:var(--gold)]' : 'bg-[color:var(--line)]'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[#f3efe6] transition-colors hover:border-[color:var(--gold)]"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

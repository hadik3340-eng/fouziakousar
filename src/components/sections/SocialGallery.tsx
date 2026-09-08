import { socialGalleryCategories } from '@/lib/data'
import { Reveal } from '@/components/Reveal'

const items = [
  { src: '/social/post-01.svg', span: 'row-span-2' },
  { src: '/social/post-02.svg', span: '' },
  { src: '/social/post-03.svg', span: 'row-span-2' },
  { src: '/social/post-04.svg', span: 'row-span-2' },
  { src: '/social/post-05.svg', span: '' },
  { src: '/social/post-06.svg', span: 'row-span-2' },
]

export function SocialGallery() {
  return (
    <section className="relative bg-[#100f0b] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="section-label">Social Media Marketing</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6f2e8] sm:text-4xl">
              Content &amp; <span className="gold-text italic">Social Strategy</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {socialGalleryCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[11px] text-[#c7bfab]"
              >
                {cat}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 [grid-auto-rows:140px] lg:[grid-auto-rows:170px]">
          {items.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className={`${item.span} overflow-hidden rounded-2xl border border-[color:var(--line)]`}
            >
              <img
                src={item.src}
                alt="Social media design placeholder"
                loading="lazy"
                width={700}
                height={700}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

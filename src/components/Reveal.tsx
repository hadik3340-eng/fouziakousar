import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4
  as?: 'div' | 'span' | 'li'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn(
        'reveal',
        delay ? `reveal-delay-${delay}` : undefined,
        visible && 'is-visible',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

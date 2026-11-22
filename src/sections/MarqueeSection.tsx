import { useEffect, useRef } from 'react'

type Signal = { label: string; detail: string }

const SIGNALS: Signal[] = [
  { label: '3 IEEE papers', detail: 'research' },
  { label: '#2 in MS cohort', detail: 'Asia University' },
  { label: '60% less manual work', detail: 'infra monitoring' },
  { label: '4 companies · 3 countries', detail: 'India → Taiwan → remote' },
  { label: '15+ production systems', detail: 'AI, APIs, cloud' },
  { label: 'MS Computer Science', detail: '91.7% GPA' },
  { label: 'Enterprise AI', detail: 'FastAPI · Docker · AWS' },
  { label: 'Taiwan MOE scholar', detail: '2024' },
]

function Signal({ signal }: { signal: Signal }) {
  return (
    <span className="flex items-baseline gap-3 flex-shrink-0 whitespace-nowrap pr-8">
      <strong className="text-[#D7E2EA] text-sm sm:text-base font-semibold tracking-tight">{signal.label}</strong>
      <span className="text-[#D7E2EA]/40 text-xs sm:text-sm uppercase tracking-[0.16em]">{signal.detail}</span>
      <span className="text-[#5b6cff] text-sm" aria-hidden="true">/</span>
    </span>
  )
}

function Row({ reverse = false }: { reverse?: boolean }) {
  const rowRef = useRef<HTMLDivElement>(null)
  const position = useRef(reverse ? -420 : 0)

  useEffect(() => {
    let frame = 0
    const speed = reverse ? 0.18 : -0.18
    const tick = () => {
      position.current += speed
      if (position.current < -1800) position.current = 0
      if (position.current > 0) position.current = -1800
      if (rowRef.current) rowRef.current.style.transform = `translate3d(${position.current}px, 0, 0)`
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reverse])

  return (
    <div className="overflow-hidden border-t border-white/10 py-5">
      <div ref={rowRef} className="flex w-max" style={{ willChange: 'transform' }}>
        {[...SIGNALS, ...SIGNALS, ...SIGNALS].map((signal, index) => <Signal key={`${signal.label}-${index}`} signal={signal} />)}
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden" style={{ backgroundColor: '#000000' }} aria-label="Selected experience">
      <Row />
      <Row reverse />
    </section>
  )
}

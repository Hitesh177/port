import { useEffect, useRef } from 'react'

type Card = {
  type: 'quote' | 'fact'
  text: string
  sub?: string
  bg: string
  textColor: string
}

const CARDS: Card[] = [
  {
    type: 'quote',
    text: '"Any sufficiently advanced technology is indistinguishable from magic."',
    sub: '— Arthur C. Clarke',
    bg: '#4a5568',
    textColor: '#e2d9f3',
  },
  {
    type: 'fact',
    text: '3 IEEE Research Papers',
    sub: 'Published during MS program',
    bg: '#2d4a3e',
    textColor: '#a8d5c2',
  },
  {
    type: 'quote',
    text: '"Move fast and break things."',
    sub: '— Mark Zuckerberg',
    bg: '#4a3728',
    textColor: '#f0c9a0',
  },
  {
    type: 'fact',
    text: 'Ranked #2',
    sub: 'MS Computer Science cohort',
    bg: '#3b3a5e',
    textColor: '#c4b8f0',
  },
  {
    type: 'quote',
    text: '"The best way to predict the future is to invent it."',
    sub: '— Alan Kay',
    bg: '#3d4a2a',
    textColor: '#c8e6a0',
  },
  {
    type: 'fact',
    text: 'MOE Scholar 2024',
    sub: 'Taiwan Ministry of Education',
    bg: '#4a2d3a',
    textColor: '#f0a8c8',
  },
  {
    type: 'quote',
    text: '"First, solve the problem. Then, write the code."',
    sub: '— John Johnson',
    bg: '#2a3d4a',
    textColor: '#a0d4e6',
  },
  {
    type: 'fact',
    text: '60% Efficiency Boost',
    sub: 'Via AI scheduling automation',
    bg: '#4a4028',
    textColor: '#f0dea0',
  },
  {
    type: 'quote',
    text: '"Talk is cheap. Show me the code."',
    sub: '— Linus Torvalds',
    bg: '#3a2d4a',
    textColor: '#d4a8f0',
  },
  {
    type: 'fact',
    text: 'Manga & Anime Nerd',
    sub: 'Attack on Titan devotee',
    bg: '#2d3a4a',
    textColor: '#a0c4f0',
  },
  {
    type: 'quote',
    text: '"Simplicity is the soul of efficiency."',
    sub: '— Austin Freeman',
    bg: '#3a4a2d',
    textColor: '#b8e6a0',
  },
  {
    type: 'fact',
    text: 'Fluent in 3 Languages',
    sub: 'English, Hindi, Chinese (basic)',
    bg: '#4a2d2d',
    textColor: '#f0a8a8',
  },
  {
    type: 'quote',
    text: '"Programs must be written for people to read."',
    sub: '— Harold Abelson',
    bg: '#2d4a4a',
    textColor: '#a0e6e6',
  },
  {
    type: 'fact',
    text: 'Amateur Astronomer',
    sub: 'Stars > social media',
    bg: '#1e2a3a',
    textColor: '#8ec4f0',
  },
  {
    type: 'quote',
    text: '"The measure of intelligence is the ability to change."',
    sub: '— Albert Einstein',
    bg: '#3a2a3a',
    textColor: '#e6a0e6',
  },
  {
    type: 'fact',
    text: 'Can debug at 3am',
    sub: 'Zero coffee required',
    bg: '#2a3a2a',
    textColor: '#a0d4a0',
  },
  {
    type: 'quote',
    text: '"Make it work, make it right, make it fast."',
    sub: '— Kent Beck',
    bg: '#4a3a2a',
    textColor: '#f0c8a0',
  },
  {
    type: 'fact',
    text: 'Hiking the Taiwan Mountains',
    sub: 'Views > meetings',
    bg: '#2a4a3a',
    textColor: '#a0f0c8',
  },
]

const ROW1 = [...CARDS.slice(0, 9), ...CARDS.slice(0, 9), ...CARDS.slice(0, 9)]
const ROW2 = [...CARDS.slice(9), ...CARDS.slice(9), ...CARDS.slice(9)]

function MarqueeCard({ card }: { card: Card }) {
  return (
    <div
      className="rounded-2xl flex-shrink-0 flex flex-col justify-between p-6"
      style={{
        width: '340px',
        height: '180px',
        backgroundColor: card.bg,
        color: card.textColor,
      }}
    >
      <p className="text-sm leading-relaxed font-medium" style={{ fontSize: '14px', lineHeight: '1.5' }}>
        {card.text}
      </p>
      {card.sub && (
        <p className="text-xs opacity-70 mt-2" style={{ fontSize: '12px' }}>
          {card.sub}
        </p>
      )}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const pos1 = useRef(0)
  const pos2 = useRef(0)

  useEffect(() => {
    const speed = 0.5
    const cardWidth = 340 + 12 // width + gap
    const row1Total = 9 * cardWidth
    const row2Total = 9 * cardWidth

    const animate = () => {
      pos1.current -= speed
      pos2.current += speed

      if (pos1.current <= -row1Total) pos1.current = 0
      if (pos2.current >= 0) pos2.current = -row2Total

      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${pos1.current}px)`
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${pos2.current}px)`

      animRef.current = requestAnimationFrame(animate)
    }

    pos2.current = -ROW2.length / 3 * cardWidth * 0.5
    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Row 1: moves left */}
      <div className="flex gap-3 mb-3" style={{ willChange: 'transform' }} ref={row1Ref}>
        {ROW1.map((card, i) => (
          <MarqueeCard key={i} card={card} />
        ))}
      </div>

      {/* Row 2: moves right */}
      <div className="flex gap-3" style={{ willChange: 'transform' }} ref={row2Ref}>
        {ROW2.map((card, i) => (
          <MarqueeCard key={i} card={card} />
        ))}
      </div>
    </section>
  )
}

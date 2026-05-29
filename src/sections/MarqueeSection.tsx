import { useEffect, useRef } from 'react'

type Card = {
  type: 'work' | 'fun'
  text: string
  sub?: string
  bg: string
  textColor: string
}

const CARDS: Card[] = [
  // === WORK (80%) ===
  {
    type: 'work',
    text: '3 IEEE Research Papers',
    sub: 'Co-authored during MS at Asia University',
    bg: '#1e2a4a',
    textColor: '#a5b4fc',
  },
  {
    type: 'work',
    text: 'Ranked #2 in MS Cohort',
    sub: 'Computer Science, Asia University Taiwan',
    bg: '#1a2e1a',
    textColor: '#86efac',
  },
  {
    type: 'work',
    text: '~60% Less Manual Work',
    sub: 'AI-powered infra monitoring at Pou Chen Corp',
    bg: '#2a1e3a',
    textColor: '#c4b5fd',
  },
  {
    type: 'work',
    text: 'LLM Integration at Scale',
    sub: 'OpenWebUI · MCP/MCPO · Hugging Face · FastAPI',
    bg: '#1e3028',
    textColor: '#6ee7b7',
  },
  {
    type: 'work',
    text: 'MOE International Scholar',
    sub: 'Taiwan Ministry of Education — 2024',
    bg: '#2e1e1e',
    textColor: '#fca5a5',
  },
  {
    type: 'work',
    text: 'Enterprise AI Pipelines',
    sub: 'Python · FastAPI · Docker · Prometheus · Checkmk',
    bg: '#1e2a3a',
    textColor: '#93c5fd',
  },
  {
    type: 'work',
    text: '4 Companies · 3 Countries',
    sub: 'India → Taiwan → Global Remote',
    bg: '#2a2a1e',
    textColor: '#fde68a',
  },
  {
    type: 'work',
    text: 'Serverless on AWS',
    sub: 'Lambda · S3 · EC2 · Research at Big Data Lab',
    bg: '#1a2e2e',
    textColor: '#67e8f9',
  },
  {
    type: 'work',
    text: '~40% Better Visibility',
    sub: 'Incident response efficiency via AI monitoring',
    bg: '#2e2a1e',
    textColor: '#fdba74',
  },
  {
    type: 'work',
    text: '"First, solve the problem. Then write the code."',
    sub: '— John Johnson',
    bg: '#1e2020',
    textColor: '#d1fae5',
  },
  {
    type: 'work',
    text: 'Full-Stack AI Systems',
    sub: 'From infra automation to LLM UI to cloud deploy',
    bg: '#20181e',
    textColor: '#f9a8d4',
  },
  {
    type: 'work',
    text: '"Any sufficiently advanced tech is indistinguishable from magic."',
    sub: '— Arthur C. Clarke',
    bg: '#1e2030',
    textColor: '#bfdbfe',
  },
  {
    type: 'work',
    text: 'GPA 91.7% · Top of Class',
    sub: 'MS Computer Science & Information Engineering',
    bg: '#1a1e2e',
    textColor: '#a5b4fc',
  },
  {
    type: 'work',
    text: 'MCPO Streamable-HTTP Migration',
    sub: 'Modernized legacy FastAPI services at enterprise scale',
    bg: '#1e2a1a',
    textColor: '#bbf7d0',
  },
  // === FUN (20%) ===
  {
    type: 'fun',
    text: 'Can debug at 3am',
    sub: 'Zero coffee required',
    bg: '#2a1a2a',
    textColor: '#e9d5ff',
  },
  {
    type: 'fun',
    text: 'Fluent in 3 Languages',
    sub: 'English · Hindi · Chinese (basic)',
    bg: '#1a2a2e',
    textColor: '#a5f3fc',
  },
  {
    type: 'fun',
    text: 'Hiking Taiwan Mountains',
    sub: 'Views > meetings, always',
    bg: '#1e2e1a',
    textColor: '#d9f99d',
  },
  {
    type: 'fun',
    text: 'Amateur Astronomer',
    sub: 'Stars > social media',
    bg: '#12141e',
    textColor: '#818cf8',
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
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <p className="text-sm leading-relaxed font-semibold" style={{ fontSize: '14px', lineHeight: '1.5' }}>
        {card.text}
      </p>
      {card.sub && (
        <p className="text-xs opacity-60 mt-2" style={{ fontSize: '11.5px' }}>
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
    const cardWidth = 340 + 12
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

    pos2.current = -row2Total * 0.5
    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="flex gap-3 mb-3" style={{ willChange: 'transform' }} ref={row1Ref}>
        {ROW1.map((card, i) => <MarqueeCard key={i} card={card} />)}
      </div>
      <div className="flex gap-3" style={{ willChange: 'transform' }} ref={row2Ref}>
        {ROW2.map((card, i) => <MarqueeCard key={i} card={card} />)}
      </div>
    </section>
  )
}

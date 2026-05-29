import FadeIn from '../components/FadeIn'

const REASONS = [
  {
    num: '01',
    title: 'MOE Scholarship',
    body: 'Awarded the Taiwan Ministry of Education scholarship — one of a limited number granted annually to international students demonstrating exceptional academic merit. Covered full tuition and living costs.',
    tag: 'Merit-based',
    color: '#818cf8',
  },
  {
    num: '02',
    title: 'World-Class AI Research',
    body: 'Asia University\'s Big Data Lab collaborates with IEEE, industry partners, and international institutions. The research environment directly enabled co-authoring 3 IEEE papers within the first year of the MS program.',
    tag: 'Research Output',
    color: '#f9a8d4',
  },
  {
    num: '03',
    title: 'Enterprise AI at Scale',
    body: 'Taiwan is home to global manufacturing and tech giants. The AI Engineer Intern role at Pou Chen Corporation — one of the world\'s largest footwear manufacturers — meant deploying real AI systems to enterprise infrastructure from day one.',
    tag: 'Industry Access',
    color: '#86efac',
  },
  {
    num: '04',
    title: 'The Silicon Island',
    body: 'Taiwan produces 90%+ of the world\'s advanced semiconductors (TSMC). Being here means being at the center of global hardware and technology supply chains — surrounded by engineers solving problems that matter.',
    tag: 'Tech Ecosystem',
    color: '#fde68a',
  },
]

const FUN_FACTS = [
  { label: 'Beef Noodle Soup', val: 'Life-changing', sub: 'Taichung has the best, period' },
  { label: 'Scooter Culture', val: 'Adopted it', sub: 'Fastest way across campus' },
  { label: 'Night Markets', val: 'Weekly ritual', sub: 'Fengjia market is 15 min away' },
  { label: 'Alishan Mountains', val: 'Hiked it', sub: '2600m, worth every step' },
]

export default function WhyTaiwanSection() {
  return (
    <section
      style={{ backgroundColor: '#000000', padding: '80px 24px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading */}
        <FadeIn delay={0} y={30}>
          <div style={{ marginBottom: '56px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(215,226,234,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              The Story Behind the Move
            </div>
            <h2
              className="font-black uppercase"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', color: '#D7E2EA', letterSpacing: '-0.03em', lineHeight: 0.95, margin: 0 }}
            >
              Why Taiwan?
            </h2>
          </div>
        </FadeIn>

        {/* Reasons grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '64px' }}>
          {REASONS.map(({ num, title, body, tag, color }, i) => (
            <FadeIn key={num} delay={0.1 + i * 0.07} y={20}>
              <div style={{
                backgroundColor: 'rgba(215,226,234,0.04)',
                border: '1px solid rgba(215,226,234,0.08)',
                borderTop: `2px solid ${color}`,
                borderRadius: '20px',
                padding: '28px',
                height: '100%',
                boxSizing: 'border-box',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'rgba(215,226,234,0.2)', letterSpacing: '0.05em' }}>{num}</span>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, color, backgroundColor: `${color}14`, borderRadius: '6px', padding: '3px 9px', letterSpacing: '0.06em' }}>{tag}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#D7E2EA', marginBottom: '12px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(215,226,234,0.55)', lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Fun strip */}
        <FadeIn delay={0.35} y={20}>
          <div style={{
            backgroundColor: 'rgba(215,226,234,0.03)',
            border: '1px solid rgba(215,226,234,0.07)',
            borderRadius: '20px',
            padding: '28px 32px',
          }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(215,226,234,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Life in Taiwan
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
              {FUN_FACTS.map(({ label, val, sub }) => (
                <div key={label}>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(215,226,234,0.35)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#D7E2EA', letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '3px' }}>{val}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(215,226,234,0.4)', fontWeight: 500 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

const glass = {
  backgroundColor: 'rgba(255,255,255,0.06)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '24px',
} as React.CSSProperties

const pillGlass = {
  backgroundColor: 'rgba(255,255,255,0.07)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '100px',
  padding: '6px 16px',
  fontSize: '0.8rem',
  color: '#e2e8f0',
  fontWeight: 500,
} as React.CSSProperties

export default function EducationPage() {
  return (
    <div style={{ backgroundColor: '#06071a', minHeight: '100vh', color: '#e2e8f0', position: 'relative', overflow: 'hidden' }}>

      {/* Background orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,108,255,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '40%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '30%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, padding: '28px 40px', borderBottom: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', backgroundColor: 'rgba(6,7,26,0.6)' }}>
        <Link to="/" style={{ color: '#a5b4fc', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em' }}>
          ← Back Home
        </Link>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '60px', color: '#fff' }}>
          Education
        </h1>

        {/* Entry 1 — Master's */}
        <div style={{ ...glass, padding: '36px', marginBottom: '28px' }}>
          {/* Campus banner */}
          <div style={{ marginBottom: '28px', borderRadius: '16px', overflow: 'hidden', height: '159px' }}>
            <img src="/asia-university.png" alt="Asia University campus"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Master's Degree · 2024 – Present
          </div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
            Master of Science in Computer Science &amp; Information Engineering
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(226,232,240,0.6)', margin: '0 0 28px', fontWeight: 500 }}>
            Asia University, Taichung, Taiwan
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '32px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {[
              { val: '91.7%', label: 'GPA', accent: '#818cf8' },
              { val: '#2', label: 'Department Rank', accent: '#818cf8' },
              { val: '3', label: 'IEEE Papers', accent: '#e2e8f0' },
            ].map(({ val, label, accent }) => (
              <div key={label}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: accent, letterSpacing: '-0.03em', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(226,232,240,0.5)', marginTop: '4px', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* MOE Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.25)', borderRadius: '100px', padding: '8px 18px', marginBottom: '28px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#818cf8', letterSpacing: '0.05em' }}>
              Taiwan Ministry of Education (MOE) Scholarship Recipient
            </span>
          </div>

          {/* Research areas */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(226,232,240,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Research Areas</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Artificial Intelligence', 'Intelligent Systems', 'Machine Learning', 'Clustering Algorithms', 'Generative AI', 'Computer Vision'].map(area => (
                <span key={area} style={pillGlass}>{area}</span>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '28px' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(226,232,240,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>IEEE Publications</div>
            {[
              {
                title: 'Deep Learning Applications in Embedded Systems and IoT Devices',
                venue: 'IEEE 13th International Conference on Smart Grid (icSmartGrid) — 2025',
                link: 'https://www.researchgate.net/publication/394190159_Deep_Learning_Applications_in_Embedded_Systems_and_IoT_Devices',
              },
              {
                title: 'Adaptive Energy Management Systems for Smart Grids: A Hybrid Approach Using Machine Learning and IoT Integration',
                venue: 'ResearchGate — 2025',
                link: 'https://www.researchgate.net/publication/394590009_Adaptive_Energy_Management_Systems_for_Smart_Grids_A_Hybrid_Approach_Using_Machine_Learning_and_IoT_Integration',
              },
              {
                title: 'AI-Enabled Optimization of Fractional Order PID Controllers for Robust Stability in All-Electric Naval Energy Systems',
                venue: '2025 14th International Conference on Renewable Energy Research and Applications (ICRERA)',
                link: null,
              },
            ].map((pub, i) => (
              <div key={i} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '0.92rem', fontWeight: 600, color: '#818cf8', display: 'block', textDecoration: 'none', lineHeight: 1.5, marginBottom: '4px' }}
                    onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    {pub.title} ↗
                  </a>
                ) : (
                  <p style={{ fontSize: '0.92rem', fontWeight: 600, color: '#e2e8f0', margin: '0 0 4px', lineHeight: 1.5 }}>{pub.title}</p>
                )}
                <p style={{ fontSize: '0.78rem', color: 'rgba(226,232,240,0.45)', margin: 0 }}>{pub.venue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Entry 2 — Bachelor's */}
        <div style={{ ...glass, padding: '36px' }}>
          {/* University image */}
          <div style={{ marginBottom: '28px', borderRadius: '16px', overflow: 'hidden' }}>
            <img src="/presidency-university.png" alt="Presidency University"
              style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', display: 'block' }} />
          </div>

          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Bachelor's Degree · 2019 – 2023
          </div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
            Bachelor of Technology in Computer Science &amp; Engineering
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(226,232,240,0.6)', margin: '0 0 28px', fontWeight: 500 }}>
            Presidency University, Bangalore, India
          </p>

          <div style={{ display: 'flex', gap: '32px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {[
              { val: '8.4', label: 'GPA' },
              { val: 'Top 10%', label: 'Batch Rank' },
              { val: 'Magna Cum Laude', label: 'Distinction' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#e2e8f0', letterSpacing: '-0.03em', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(226,232,240,0.5)', marginTop: '4px', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Vice President — Space & AI Club', 'President — Health & Wellness Club'].map(role => (
              <span key={role} style={pillGlass}>{role}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

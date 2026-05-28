import { Link } from 'react-router-dom'

export default function EducationPage() {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#D7E2EA' }}>
      {/* Header */}
      <div style={{ padding: '32px 40px', borderBottom: '1px solid rgba(215,226,234,0.1)' }}>
        <Link to="/" style={{ color: '#D7E2EA', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, opacity: 0.6, letterSpacing: '0.05em' }}>
          ← Back Home
        </Link>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 40px' }}>
        {/* Title */}
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '60px', color: '#D7E2EA' }}>
          Education
        </h1>

        {/* Entry 1 — Master's */}
        <div style={{ borderTop: '1px solid rgba(215,226,234,0.15)', paddingTop: '48px', marginBottom: '56px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#5b6cff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Master's Degree · 2024 – Present
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#D7E2EA', margin: 0, letterSpacing: '-0.02em' }}>
                Master of Science in Computer Science &amp; Information Engineering
              </h2>
              <p style={{ fontSize: '1rem', color: '#D7E2EA', opacity: 0.6, marginTop: '6px', fontWeight: 500 }}>
                Asia University, Taichung, Taiwan
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '32px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {[
              { val: '91.7%', label: 'GPA' },
              { val: '#2', label: 'Department Rank' },
              { val: '3', label: 'IEEE Papers Co-authored' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#5b6cff', letterSpacing: '-0.03em', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: '0.72rem', color: '#888', marginTop: '4px', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(91,108,255,0.12)', borderRadius: '100px', padding: '8px 16px', marginBottom: '28px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5b6cff', letterSpacing: '0.05em' }}>
              🎓 Taiwan Ministry of Education (MOE) Scholarship Recipient
            </span>
          </div>

          {/* Research areas */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Research Areas</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Artificial Intelligence', 'Intelligent Systems', 'Machine Learning', 'Clustering Algorithms', 'Generative AI', 'Computer Vision'].map(area => (
                <span key={area} style={{ backgroundColor: 'rgba(215,226,234,0.08)', border: '1px solid rgba(215,226,234,0.15)', borderRadius: '100px', padding: '6px 16px', fontSize: '0.8rem', color: '#D7E2EA', fontWeight: 500 }}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Entry 2 — Bachelor's */}
        <div style={{ borderTop: '1px solid rgba(215,226,234,0.15)', paddingTop: '48px', marginBottom: '56px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#5b6cff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Bachelor's Degree · 2019 – 2023
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#D7E2EA', margin: 0, letterSpacing: '-0.02em' }}>
                Bachelor of Technology in Computer Science &amp; Engineering
              </h2>
              <p style={{ fontSize: '1rem', color: '#D7E2EA', opacity: 0.6, marginTop: '6px', fontWeight: 500 }}>
                Presidency University, Bangalore, India
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '32px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {[
              { val: '8.4', label: 'GPA' },
              { val: 'Top 10%', label: 'Batch Rank' },
              { val: 'Magna Cum Laude', label: 'Distinction' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#D7E2EA', letterSpacing: '-0.03em', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: '0.72rem', color: '#888', marginTop: '4px', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Vice President — Space & AI Club', 'President — Health & Wellness Club'].map(role => (
              <span key={role} style={{ backgroundColor: 'rgba(215,226,234,0.08)', border: '1px solid rgba(215,226,234,0.15)', borderRadius: '100px', padding: '6px 16px', fontSize: '0.8rem', color: '#D7E2EA', fontWeight: 500 }}>
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div style={{ borderTop: '1px solid rgba(215,226,234,0.15)', paddingTop: '48px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px' }}>IEEE Publications</div>
          {[
            {
              title: 'Deep Learning Applications in Embedded Systems and IoT Devices',
              venue: 'IEEE 13th International Conference on Smart Grid (icSmartGrid) — 2025',
            },
            {
              title: 'AI-Enabled Optimization of Fractional Order PID Controllers for Robust Stability in All-Electric Naval Energy Systems',
              venue: '2025 14th International Conference on Renewable Energy Research and Applications (ICRERA)',
            },
          ].map((pub, i) => (
            <div key={i} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: i === 0 ? '1px solid rgba(215,226,234,0.08)' : 'none' }}>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#D7E2EA', margin: '0 0 6px', lineHeight: 1.4 }}>{pub.title}</p>
              <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>{pub.venue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

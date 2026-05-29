import { Link } from 'react-router-dom'

const JOBS = [
  {
    role: 'AI Engineer Intern',
    company: 'Pou Chen Corporation',
    location: 'Taichung, Taiwan',
    period: 'Jul 2025 – Present',
    color: '#5b6cff',
    stack: ['Python', 'FastAPI', 'Docker', 'LLMs', 'OpenWebUI', 'Prometheus', 'Checkmk', 'LibreNMS', 'MCP/MCPO', 'Hugging Face'],
    bullets: [
      'Developed and deployed AI-powered infrastructure monitoring assistants using Python, FastAPI, MCP, OpenWebUI, Docker, and LLM integrations for Checkmk and LibreNMS environments',
      'Reduced manual system health-check effort by approximately 60%',
      'Built automated monitoring and reporting workflows integrating Prometheus, Checkmk APIs, and Hugging Face models',
      'Improved incident visibility and response efficiency by nearly 40%',
      'Migrated legacy FastAPI services to MCPO-based streamable-http architecture',
      'Implemented intelligent monitoring query routing and AI-assisted troubleshooting systems',
      'Built enterprise automation pipelines for infrastructure analysis and operational monitoring',
    ],
  },
  {
    role: 'Associate Software Developer',
    company: 'Blueed Technology LLC',
    location: 'Bangalore, India (Client: Virgin Voyages)',
    period: 'Nov 2023 – Jun 2024',
    color: '#f97316',
    stack: [],
    bullets: [
      'Developed backend solutions for resource allocation and scheduling systems',
      'Collaborated on enterprise data integration workflows',
      'Automated operational processes and logistics systems',
      'Improved customer and operational efficiency using data-driven engineering approaches',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Honest Design Co Ltd',
    location: 'Taichung, Taiwan',
    period: 'Sep 2024 – Dec 2024',
    color: '#10b981',
    stack: [],
    bullets: [
      'Assisted in developing and maintaining websites for local Taiwanese companies',
      'Focused on responsive frontend functionality and localization',
      'Translated Chinese website content into English for global audiences',
      'Participated in client consultations and technical requirement gathering',
    ],
  },
  {
    role: 'Cloud Developer & Research Engineer',
    company: 'Big Data Lab, Asia University',
    location: 'Taichung, Taiwan',
    period: 'Mar 2023 – Jun 2023',
    color: '#8b5cf6',
    stack: ['AWS Lambda', 'Cloud Computing', 'Serverless Architecture'],
    bullets: [
      'Worked on AWS Lambda and serverless architecture research projects',
      'Developed cloud-based applications using AWS services',
      'Implemented scalable and secure cloud workflows',
      'Participated in research activities under Dr. Robert Hsu',
    ],
  },
]

export default function WorkExpPage() {
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
        <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 6.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '60px', color: '#D7E2EA' }}>
          Work Experience
        </h1>

        {/* Jobs */}
        {JOBS.map((job, i) => (
          <div key={i} style={{ borderTop: '1px solid rgba(215,226,234,0.15)', paddingTop: '48px', marginBottom: '56px' }}>

            {/* Pou Chen — special hero banner */}
            {job.company === 'Pou Chen Corporation' && (
              <div style={{ marginBottom: '32px' }}>
                {/* Building banner */}
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', height: '130px' }}>
                  <img
                    src="/pou-chen-building.png"
                    alt="Pou Chen HQ"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Gradient overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)' }} />
                  {/* PCC logo over banner */}
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <img
                      src="/pou-chen-logo.png"
                      alt="PCC Logo"
                      style={{ width: '56px', height: '56px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.25)', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Pou Chen Corporation</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Taichung, Taiwan</div>
                    </div>
                  </div>
                </div>

                {/* Brands strip */}
                <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(215,226,234,0.08)' }}>
                  <div style={{ padding: '12px 20px 0', backgroundColor: '#111' }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#666', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Brands Manufactured For</div>
                  </div>
                  <div style={{ backgroundColor: '#ffffff', padding: '16px 20px' }}>
                    <img
                      src="/pou-chen-brands.png"
                      alt="Brand partners"
                      style={{ width: '100%', objectFit: 'contain', display: 'block', maxHeight: '130px', mixBlendMode: 'multiply' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Virgin Voyages — client logo */}
            {job.company === 'Blueed Technology LLC' && (
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Client</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '12px', padding: '10px 20px' }}>
                  <img
                    src="/virgin-voyages-logo.png"
                    alt="Virgin Voyages"
                    style={{ height: '32px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              </div>
            )}

            {/* Role header */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: job.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                {job.period}
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#D7E2EA', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
                {job.role}
              </h2>
              {job.company !== 'Pou Chen Corporation' && (
                <p style={{ fontSize: '1rem', color: '#D7E2EA', opacity: 0.6, margin: 0, fontWeight: 500 }}>
                  {job.company} · {job.location}
                </p>
              )}
            </div>

            {/* Bullets */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: job.color, flexShrink: 0, marginTop: '7px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#D7E2EA', opacity: 0.8, lineHeight: 1.65 }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            {job.stack.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {job.stack.map(t => (
                  <span key={t} style={{ backgroundColor: 'rgba(215,226,234,0.08)', border: '1px solid rgba(215,226,234,0.15)', borderRadius: '100px', padding: '5px 14px', fontSize: '0.75rem', color: '#D7E2EA', fontWeight: 600 }}>
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

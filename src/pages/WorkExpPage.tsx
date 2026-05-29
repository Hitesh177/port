import { Link } from 'react-router-dom'

const JOBS = [
  {
    role: 'AI Engineer Intern',
    company: 'Pou Chen Corporation',
    location: 'Taichung, Taiwan',
    period: 'Jul 2025 – Present',
    color: '#818cf8',
    orb: 'rgba(91,108,255,0.2)',
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
    color: '#fb923c',
    orb: 'rgba(249,115,22,0.15)',
    stack: ['Node.js', 'React', 'PostgreSQL', 'REST APIs', 'AWS', 'Docker', 'Agile'],
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
    color: '#34d399',
    orb: 'rgba(16,185,129,0.15)',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'Localization'],
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
    color: '#c084fc',
    orb: 'rgba(139,92,246,0.15)',
    stack: ['AWS Lambda', 'AWS S3', 'AWS EC2', 'Serverless Architecture', 'Python', 'Cloud Computing', 'Research'],
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
    <div style={{ backgroundColor: '#06071a', minHeight: '100vh', color: '#e2e8f0', position: 'relative', overflow: 'hidden' }}>

      {/* Background orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-5%', right: '0%', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,108,255,0.15) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '-8%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '20%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, padding: '28px 40px', borderBottom: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', backgroundColor: 'rgba(6,7,26,0.6)' }}>
        <Link to="/" style={{ color: '#a5b4fc', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em' }}>
          ← Back Home
        </Link>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 6.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '60px', color: '#fff' }}>
          Work Experience
        </h1>

        {/* Jobs */}
        {JOBS.map((job, i) => (
          <div key={i} style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: `1px solid rgba(255,255,255,0.09)`,
            borderLeft: `3px solid ${job.color}`,
            borderRadius: '24px',
            padding: '32px 36px',
            marginBottom: '20px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Subtle orb inside card */}
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: `radial-gradient(circle, ${job.orb} 0%, transparent 70%)`, pointerEvents: 'none' }} />

            {/* Pou Chen — building banner */}
            {job.company === 'Pou Chen Corporation' && (
              <div style={{ marginBottom: '28px' }}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', height: '130px' }}>
                  <img src="/pou-chen-building.png" alt="Pou Chen HQ"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,7,26,0.1) 0%, rgba(6,7,26,0.75) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src="/pou-chen-logo.png" alt="PCC Logo"
                      style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)', objectFit: 'cover' }} />
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Pou Chen Corporation</div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Taichung, Taiwan</div>
                    </div>
                  </div>
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ padding: '10px 16px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                    <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(226,232,240,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Brands Manufactured For</div>
                  </div>
                  <div style={{ backgroundColor: '#ffffff', padding: '14px 16px' }}>
                    <img src="/pou-chen-brands.png" alt="Brand partners"
                      style={{ width: '100%', objectFit: 'contain', display: 'block', maxHeight: '120px', mixBlendMode: 'multiply' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Virgin Voyages client */}
            {job.company === 'Blueed Technology LLC' && (
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(226,232,240,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Client</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '10px', padding: '8px 18px' }}>
                  <img src="/virgin-voyages-logo.png" alt="Virgin Voyages"
                    style={{ height: '28px', objectFit: 'contain', display: 'block' }} />
                </div>
              </div>
            )}

            {/* Role header */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: job.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                {job.period}
              </div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: 800, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
                {job.role}
              </h2>
              {job.company !== 'Pou Chen Corporation' && (
                <p style={{ fontSize: '0.95rem', color: 'rgba(226,232,240,0.55)', margin: 0, fontWeight: 500 }}>
                  {job.company} · {job.location}
                </p>
              )}
            </div>

            {/* Bullets */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: job.color, flexShrink: 0, marginTop: '8px' }} />
                  <span style={{ fontSize: '0.92rem', color: 'rgba(226,232,240,0.8)', lineHeight: 1.7 }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {job.stack.map(t => (
                <span key={t} style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${job.color}33`,
                  borderRadius: '100px',
                  padding: '4px 14px',
                  fontSize: '0.72rem',
                  color: job.color,
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

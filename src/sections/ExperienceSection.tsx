import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function EducationCard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '20px' }}>
      {/* Icon / Logo row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            backgroundColor: '#5b6cff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L2 8l10 5 10-5-10-5z" fill="white" />
            <path d="M2 16l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0a0a0a', letterSpacing: '-0.01em' }}>
          Asia University
        </span>
      </div>

      {/* Main heading */}
      <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.5rem)', fontWeight: 800, color: '#0a0a0a', lineHeight: 1.25, letterSpacing: '-0.02em', margin: 0 }}>
        MS Computer Science &amp; Information Engineering — Asia University, Taiwan
      </h3>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '24px' }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0a0a0a', lineHeight: 1, letterSpacing: '-0.04em' }}>91.7%</div>
          <div style={{ fontSize: '0.7rem', color: '#888', marginTop: '3px', fontWeight: 500 }}>GPA</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#5b6cff', lineHeight: 1, letterSpacing: '-0.04em' }}>#2</div>
          <div style={{ fontSize: '0.7rem', color: '#888', marginTop: '3px', fontWeight: 500 }}>Department Rank</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0a0a0a', lineHeight: 1, letterSpacing: '-0.04em' }}>3</div>
          <div style={{ fontSize: '0.7rem', color: '#888', marginTop: '3px', fontWeight: 500 }}>IEEE Papers</div>
        </div>
      </div>

      {/* MOE Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#f0f4ff', borderRadius: '100px', padding: '6px 14px' }}>
        <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#5b6cff', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          🎓 Taiwan MOE Scholarship Recipient
        </span>
      </div>

      {/* Divider label */}
      <div style={{ borderTop: '1px solid #eee', paddingTop: '14px' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Research Focus
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            { label: 'AI & Machine Learning', val: 95 },
            { label: 'Intelligent Systems', val: 88 },
            { label: 'Clustering Algorithms', val: 82 },
          ].map(({ label, val }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.65rem', color: '#999', width: '120px', flexShrink: 0 }}>{label}</span>
              <div style={{ flex: 1, height: '4px', backgroundColor: '#f0f0f0', borderRadius: '2px' }}>
                <div style={{ width: `${val}%`, height: '100%', backgroundColor: '#5b6cff', borderRadius: '2px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WorkExpCard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '20px' }}>
      {/* Tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5b6cff', flexShrink: 0 }} />
        <span style={{ fontSize: '0.75rem', color: '#5b6cff', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Current Role
        </span>
      </div>

      {/* Large editorial heading */}
      <h3 style={{
        fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)',
        fontWeight: 800,
        color: '#0a0a0a',
        lineHeight: 1.2,
        letterSpacing: '-0.03em',
        margin: 0,
        flex: 1,
      }}>
        Reduced manual system health-check effort by ~60% through AI-powered infrastructure automation at Pou Chen Corporation
      </h3>

      {/* Impact stats */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#5b6cff', letterSpacing: '-0.03em' }}>~60%</div>
          <div style={{ fontSize: '0.65rem', color: '#888', fontWeight: 500 }}>Less Manual Work</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0a0a0a', letterSpacing: '-0.03em' }}>~40%</div>
          <div style={{ fontSize: '0.65rem', color: '#888', fontWeight: 500 }}>Better Visibility</div>
        </div>
      </div>

      {/* Tech pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {['Python', 'FastAPI', 'Docker', 'LLMs', 'Prometheus', 'OpenWebUI', 'MCP/MCPO'].map(t => (
          <span
            key={t}
            style={{
              backgroundColor: '#f0f0f0',
              borderRadius: '100px',
              padding: '4px 12px',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#444',
              letterSpacing: '0.01em',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Image strip */}
      <div style={{ display: 'flex', gap: '6px', borderRadius: '12px', overflow: 'hidden', height: '80px' }}>
        {[
          { bg: 'linear-gradient(135deg, #5b6cff 0%, #3b4cdf 100%)', label: 'AI Monitoring' },
          { bg: 'linear-gradient(135deg, #0a0a0a 0%, #333 100%)', label: 'Infrastructure' },
          { bg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', label: 'LLM Pipelines' },
        ].map(({ bg, label }, i) => (
          <div key={i} style={{ flex: 1, background: bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.85)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', padding: '0 4px' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const [toggled, setToggled] = useState(false)
  const navigate = useNavigate()

  return (
    <section id="experience" style={{ backgroundColor: '#f5f5f3', padding: '80px 24px' }}>
      {/* Section title */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 48px' }}>
        <h2
          className="font-black uppercase"
          style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', color: '#0a0a0a', letterSpacing: '-0.03em', margin: 0 }}
        >
          Experience
        </h2>
      </div>

      {/* Stacked card layout */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'stretch',
          position: 'relative',
          perspective: '1200px',
          gap: 0,
        }}
      >
        {/* LEFT CARD — Education */}
        <motion.div
          animate={{
            rotateY: toggled ? -18 : 0,
            x: toggled ? -12 : 0,
          }}
          transition={{ type: 'spring', stiffness: 180, damping: 28 }}
          style={{
            transformOrigin: 'right center',
            flex: 1,
            zIndex: 2,
            position: 'relative',
          }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '28px',
              padding: '36px',
              height: '100%',
              boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
              minHeight: '420px',
              boxSizing: 'border-box',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/education')}
          >
            <EducationCard />
          </div>
        </motion.div>

        {/* MIDDLE TOGGLE PANEL */}
        <motion.div
          onClick={() => setToggled(v => !v)}
          animate={{
            width: toggled ? 52 : 44,
            backgroundColor: toggled ? '#0a0a0a' : '#5b6cff',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 3,
            borderRadius: '0 12px 12px 0',
            position: 'relative',
          }}
          whileHover={{ scaleY: 1.02 }}
        >
          <motion.span
            key={toggled ? 'less' : 'read'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              color: '#ffffff',
              fontWeight: 800,
              letterSpacing: '0.15em',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              userSelect: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {toggled ? 'Read Less' : 'Click to Read'}
          </motion.span>
        </motion.div>

        {/* RIGHT CARD — Work Experience */}
        <motion.div
          animate={{ x: toggled ? 8 : 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 28 }}
          style={{ flex: 1, zIndex: 2, position: 'relative' }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '28px',
              padding: '36px',
              height: '100%',
              boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
              minHeight: '420px',
              boxSizing: 'border-box',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/workexp')}
          >
            <WorkExpCard />
          </div>
        </motion.div>
      </div>

      {/* Expanded content below on toggle */}
      <AnimatePresence>
        {toggled && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            style={{ maxWidth: '1100px', margin: '24px auto 0', overflow: 'hidden' }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '28px',
                padding: '36px 40px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#5b6cff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Education
                </div>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.75, margin: 0 }}>
                  MS in Computer Science at Asia University, Taiwan. MOE Scholarship Recipient, Ranked #2 in department, GPA 91.7%.
                  Co-authored 3 IEEE research papers. Research areas: AI, Intelligent Systems, Machine Learning, Clustering Algorithms.
                  Previously completed B.Tech in CS at Presidency University, India — Magna Cum Laude, Top 10% of batch.
                </p>
                <button
                  onClick={() => navigate('/education')}
                  style={{
                    marginTop: '20px',
                    padding: '10px 24px',
                    backgroundColor: '#5b6cff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '100px',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                  }}
                >
                  Full Details →
                </button>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#5b6cff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Work Experience
                </div>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.75, margin: 0 }}>
                  AI Engineer Intern at Pou Chen Corporation (Jul 2025–Present). Previously: Associate Software Developer at Blueed Technology
                  (Virgin Voyages client), Software Developer Intern at Honest Design Co., and Cloud Research Engineer at Asia University Big Data Lab under Dr. Robert Hsu.
                </p>
                <button
                  onClick={() => navigate('/workexp')}
                  style={{
                    marginTop: '20px',
                    padding: '10px 24px',
                    backgroundColor: '#0a0a0a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '100px',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                  }}
                >
                  Full Details →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

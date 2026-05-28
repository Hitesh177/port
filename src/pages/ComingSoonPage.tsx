import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ComingSoonPage() {
  const { slug } = useParams()

  const projectNames: Record<string, string> = {
    'ai-dream-visualizer': 'AI Dream Visualizer — Turn Thoughts Into Cinematic Worlds',
    'nids': 'Network Intrusion Detection System',
  }

  const name = slug ? projectNames[slug] : 'This Project'

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#D7E2EA', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '32px 40px', borderBottom: '1px solid rgba(215,226,234,0.1)' }}>
        <Link to="/" style={{ color: '#D7E2EA', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, opacity: 0.6, letterSpacing: '0.05em' }}>
          ← Back Home
        </Link>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', textAlign: 'center' }}>
        {/* Animated dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#5b6cff', marginBottom: '40px' }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            marginBottom: '32px',
            color: '#D7E2EA',
          }}
        >
          Coming<br />Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', opacity: 0.5, maxWidth: '480px', lineHeight: 1.6, marginBottom: '48px' }}
        >
          {name} — full case study and documentation is being prepared.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/"
            style={{
              backgroundColor: '#5b6cff',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '100px',
              padding: '14px 32px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            ← Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

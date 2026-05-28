import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TECH_STACK = [
  {
    category: 'Threat Detection & AI',
    color: '#ef4444',
    items: [
      { name: 'Isolation Forest / LSTM', desc: 'Unsupervised anomaly detection on live network packet streams' },
      { name: 'LLM Incident Reasoning', desc: 'GPT-4 / Claude generates human-readable AI incident analysis reports' },
      { name: 'Scikit-learn + PyTorch', desc: 'Attack vector classification and threat severity scoring' },
      { name: 'YARA Rules Engine', desc: 'Pattern-based malware signature matching integrated with ML pipeline' },
      { name: 'Hugging Face NER', desc: 'Named-entity recognition on log streams to extract IOCs (IPs, hashes, CVEs)' },
    ],
  },
  {
    category: 'Backend & Real-time Infrastructure',
    color: '#f97316',
    items: [
      { name: 'Python + FastAPI', desc: 'Async API server handling real-time threat feeds and agent orchestration' },
      { name: 'WebSockets', desc: 'Bidirectional live updates — threat nodes animate onto the map in real-time' },
      { name: 'Apache Kafka', desc: 'Event streaming for high-throughput network log ingestion and processing' },
      { name: 'Redis', desc: 'In-memory threat state cache and pub/sub for sub-100ms alert propagation' },
      { name: 'PostgreSQL + TimescaleDB', desc: 'Time-series storage for network events, threat history, and AI audit logs' },
    ],
  },
  {
    category: 'Frontend & Visualization',
    color: '#a855f7',
    items: [
      { name: 'React + TypeScript', desc: 'Core UI with dark cinematic design system and glassmorphism panels' },
      { name: 'D3.js Network Graph', desc: 'Force-directed global topology — nodes pulse red on active threat detection' },
      { name: 'Mapbox GL / Deck.gl', desc: 'Global threat map with animated attack arcs and geolocation overlays' },
      { name: 'Recharts / Victory', desc: 'Real-time threat activity charts, attack vector donut, and timeline feeds' },
      { name: 'Framer Motion', desc: 'Cinematic panel transitions, threat pulse animations, and alert fly-ins' },
    ],
  },
  {
    category: 'Autonomous Defense Agents',
    color: '#06b6d4',
    items: [
      { name: 'LangChain Agents', desc: 'Autonomous decision agents that triage incidents and recommend firewall rules' },
      { name: 'Attack Simulation Engine', desc: 'Runs controlled red-team simulations to test defense response coverage' },
      { name: 'Network Reconstruction', desc: 'AI rebuilds corrupted or disconnected network segments from topology snapshots' },
      { name: 'Automated Playbooks', desc: 'Rule-based + AI-driven response playbooks triggered on confirmed threats' },
      { name: 'Docker + Isolation Sandbox', desc: 'Containerized threat simulation environments for safe attack emulation' },
    ],
  },
]

const FEATURES = [
  { icon: '🌍', title: 'Global Threat Map', desc: 'Live world map with animated attack arcs, red threat nodes, and real-time geolocation of attack origins and targets.' },
  { icon: '🤖', title: 'AI Anomaly Reasoning', desc: 'LLMs analyze packet anomalies and generate natural-language incident reports — no analyst required for triage.' },
  { icon: '⚔️', title: 'Attack Simulation', desc: 'Controlled red-team attack simulations run inside isolated sandboxes to stress-test defense configurations.' },
  { icon: '🛡️', title: 'Autonomous Defense Agents', desc: 'AI agents automatically isolate compromised nodes, block malicious IPs, and update firewall rules in real-time.' },
  { icon: '🔗', title: 'Network Reconstruction', desc: 'When segments go dark under attack, Phantom reconstructs the topology and reroutes critical traffic autonomously.' },
  { icon: '📊', title: 'Incident Intelligence', desc: 'Full timeline reconstruction of every incident — attack vectors, affected assets, AI reasoning, and remediation steps.' },
]

export default function PhantomPage() {
  return (
    <div style={{ backgroundColor: '#050508', minHeight: '100vh', color: '#e2e8f0' }}>
      {/* Header */}
      <div style={{ padding: '28px 40px', borderBottom: '1px solid rgba(239,68,68,0.15)', backdropFilter: 'blur(12px)', backgroundColor: 'rgba(5,5,8,0.9)', position: 'sticky', top: 0, zIndex: 10 }}>
        <Link to="/" style={{ color: '#ef4444', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.04em' }}>
          ← Back to Portfolio
        </Link>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 40px 0' }}>
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }}
            />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#ef4444', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Concept Project · 2025</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.88, marginBottom: '24px', color: '#f1f5f9' }}>
            PHANTOM
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 600, color: '#94a3b8', lineHeight: 1.4, marginBottom: '12px', maxWidth: '680px' }}>
            AI Cyber Defense System — cinematic cybersecurity intelligence with live threat detection, autonomous defense agents, and AI-generated incident analysis.
          </p>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '620px', marginBottom: '40px' }}>
            Built for the next generation of SOC teams. Phantom turns raw network noise into actionable intelligence — autonomously, in real-time, at scale.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
            {['Live Threat Detection', 'AI Anomaly Reasoning', 'Attack Simulation', 'Autonomous Agents', 'Network Reconstruction', 'Recruiter Crack 🔥'].map(t => (
              <span key={t} style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '100px', padding: '6px 16px', fontSize: '0.78rem', color: '#fca5a5', fontWeight: 600 }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(239,68,68,0.2)', boxShadow: '0 24px 80px rgba(239,68,68,0.1)', marginBottom: '80px' }}
        >
          <img src="/project-phantom.png" alt="Phantom interface" style={{ width: '100%', display: 'block' }} />
        </motion.div>

        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} style={{ marginBottom: '72px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.03em', marginBottom: '32px' }}>
            Core Capabilities
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f1f5f9', marginBottom: '8px' }}>{title}</div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.03em', marginBottom: '40px' }}>
            Technical Architecture
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {TECH_STACK.map(({ category, color, items }) => (
              <div key={category}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color }} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{category}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                  {items.map(({ name, desc }) => (
                    <div key={name} style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: `1px solid ${color}22`, borderLeft: `3px solid ${color}`, borderRadius: '10px', padding: '16px 18px' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '4px' }}>{name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ backgroundColor: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '20px', padding: '40px', textAlign: 'center', marginBottom: '60px' }}
        >
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: '2rem', marginBottom: '12px' }}
          >
            👁️
          </motion.div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '8px', letterSpacing: '-0.02em' }}>In Development</h3>
          <p style={{ fontSize: '0.95rem', color: '#64748b', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.7 }}>
            Phantom is a concept cybersecurity platform showcasing AI-driven threat intelligence. Architecture is designed, UI prototype complete.
          </p>
          <Link to="/" style={{ backgroundColor: '#ef4444', color: '#fff', textDecoration: 'none', borderRadius: '100px', padding: '12px 28px', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em', display: 'inline-block' }}>
            ← Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

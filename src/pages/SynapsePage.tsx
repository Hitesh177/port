import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TECH_STACK = [
  {
    category: 'Frontend & Visualization',
    color: '#b5a4f5',
    items: [
      { name: 'React + TypeScript', desc: 'Core UI framework with full type safety' },
      { name: 'D3.js / Cytoscape.js', desc: 'Force-directed neural graph rendering with interactive nodes' },
      { name: 'Framer Motion', desc: 'Fluid spring animations for node transitions and expansions' },
      { name: 'Canvas API', desc: 'High-performance rendering for 1000+ node graphs' },
      { name: 'Tailwind CSS', desc: 'Pastel design system with glassmorphism effects' },
    ],
  },
  {
    category: 'AI & Intelligence Layer',
    color: '#f9a8d4',
    items: [
      { name: 'LLM Integrations (GPT-4 / Claude)', desc: 'Semantic relationship detection, insight generation, auto-tagging' },
      { name: 'Sentence Transformers', desc: 'Convert thoughts into high-dimensional embeddings for similarity search' },
      { name: 'Pinecone / Weaviate', desc: 'Vector database for fast semantic nearest-neighbor search across thoughts' },
      { name: 'LangChain', desc: 'Orchestrate multi-step reasoning chains to surface cross-node insights' },
      { name: 'HuggingFace Models', desc: 'Local inference for summarization, classification, and NER' },
    ],
  },
  {
    category: 'Backend & Infrastructure',
    color: '#86efac',
    items: [
      { name: 'Python + FastAPI', desc: 'Async REST + WebSocket server for real-time graph sync' },
      { name: 'WebSockets', desc: 'Live bidirectional updates — node creation syncs instantly across sessions' },
      { name: 'PostgreSQL + pgvector', desc: 'Relational storage with native vector extension for hybrid search' },
      { name: 'Redis', desc: 'Session caching and pub/sub for real-time collaboration' },
      { name: 'Docker + Docker Compose', desc: 'Containerized local deployment with one-command setup' },
    ],
  },
  {
    category: 'Core Features',
    color: '#fde68a',
    items: [
      { name: 'Neural Knowledge Map', desc: 'Infinite canvas with force-directed graph — nodes for ideas, projects, memories' },
      { name: 'AI Insight Engine', desc: 'Automatically surfaces connections between distant nodes using LLMs' },
      { name: 'Branch & Evolve', desc: 'Thoughts branch into sub-graphs, memories create temporal chains' },
      { name: 'Deep Dive Mode', desc: 'Click any node to enter immersive focus view with full context + AI summary' },
      { name: 'Semantic Search', desc: 'Type anything — returns most semantically similar nodes across your brain map' },
    ],
  },
]

export default function SynapsePage() {
  return (
    <div style={{ backgroundColor: '#faf9ff', minHeight: '100vh', color: '#1a1a2e' }}>
      {/* Header */}
      <div style={{ padding: '28px 40px', borderBottom: '1px solid rgba(26,26,46,0.08)', backdropFilter: 'blur(12px)', backgroundColor: 'rgba(250,249,255,0.9)', position: 'sticky', top: 0, zIndex: 10 }}>
        <Link to="/" style={{ color: '#6d5cc7', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.04em' }}>
          ← Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 40px 0' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(181,164,245,0.2)', border: '1px solid rgba(181,164,245,0.4)', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b5a4f5', display: 'inline-block' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6d5cc7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Concept Project · 2025</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.92, marginBottom: '24px', color: '#1a1a2e' }}>
            SYNAPSE
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 600, color: '#4a4a7a', lineHeight: 1.4, marginBottom: '12px', maxWidth: '680px' }}>
            Visual AI Brain Interface — where ideas connect, projects evolve, memories branch, and AI generates insights in real-time.
          </p>
          <p style={{ fontSize: '1rem', color: '#888', lineHeight: 1.7, maxWidth: '620px', marginBottom: '40px' }}>
            Think Obsidian meets AGI aesthetics. A living, breathing neural map of your mind — every thought, project, and memory represented as a node in an infinite intelligent graph.
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
            {['Neural Graph', 'LLM-Powered', 'Vector Search', 'Real-time', 'Interactive', 'Pastel UI'].map(t => (
              <span key={t} style={{ backgroundColor: 'rgba(181,164,245,0.15)', border: '1px solid rgba(181,164,245,0.3)', borderRadius: '100px', padding: '6px 16px', fontSize: '0.78rem', color: '#6d5cc7', fontWeight: 600 }}>
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
          style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(181,164,245,0.3)', boxShadow: '0 24px 80px rgba(109,92,199,0.12)', marginBottom: '80px' }}
        >
          <img src="/project-synapse.png" alt="Synapse interface" style={{ width: '100%', display: 'block' }} />
        </motion.div>

        {/* What it does */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} style={{ marginBottom: '72px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#1a1a2e', letterSpacing: '-0.03em', marginBottom: '24px' }}>
            What is Synapse?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🧠', title: 'Neural Map', desc: 'Every idea is a node. Connections form automatically as your knowledge grows — visualized as a living brain.' },
              { icon: '🔗', title: 'AI Connections', desc: 'LLMs scan your nodes and surface non-obvious links between distant ideas you never thought were related.' },
              { icon: '🌿', title: 'Memory Branching', desc: 'Thoughts branch into sub-graphs. Projects split into tasks. Memories chain into timelines.' },
              { icon: '✨', title: 'Insight Engine', desc: 'Ask your brain anything. The AI synthesizes across your entire knowledge graph to generate unique insights.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ backgroundColor: '#fff', border: '1px solid rgba(181,164,245,0.25)', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 16px rgba(109,92,199,0.05)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a2e', marginBottom: '8px' }}>{title}</div>
                <div style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#1a1a2e', letterSpacing: '-0.03em', marginBottom: '40px' }}>
            Technical Architecture
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {TECH_STACK.map(({ category, color, items }) => (
              <div key={category}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color }} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{category}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                  {items.map(({ name, desc }) => (
                    <div key={name} style={{ backgroundColor: '#fff', border: `1px solid ${color}33`, borderLeft: `3px solid ${color}`, borderRadius: '10px', padding: '16px 18px' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a2e', marginBottom: '4px' }}>{name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#888', lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Status banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ backgroundColor: '#fff', border: '1px solid rgba(181,164,245,0.3)', borderRadius: '20px', padding: '40px', textAlign: 'center', marginBottom: '60px', boxShadow: '0 4px 32px rgba(109,92,199,0.08)' }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🚀</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a1a2e', marginBottom: '8px', letterSpacing: '-0.02em' }}>In Development</h3>
          <p style={{ fontSize: '0.95rem', color: '#888', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.7 }}>
            Synapse is a passion project exploring the intersection of AI and personal knowledge management. Architecture is designed, UI is prototyped.
          </p>
          <Link to="/" style={{ backgroundColor: '#b5a4f5', color: '#fff', textDecoration: 'none', borderRadius: '100px', padding: '12px 28px', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em', display: 'inline-block' }}>
            ← Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

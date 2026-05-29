import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
})

const STAR = [
  {
    label: 'S — Situation',
    color: '#c4b5fd',
    heading: 'Knowledge is fragmented and connections go unseen',
    body: `Ideas live in Notion, code lives in GitHub, research lives in PDFs, and thoughts live in phone notes. The average knowledge worker context-switches between 8+ tools daily. The real cost isn't the context switch — it's the invisible connections that never surface. Two research papers from 3 months apart that contradict each other. A project idea from 2021 that solves a problem you're facing today. Traditional note apps are document-centric. The brain is not.`,
  },
  {
    label: 'T — Task',
    color: '#f9a8d4',
    heading: 'Build a visual AI brain — not another note app',
    body: `Design and architect a knowledge graph system where every piece of information becomes a node, every relationship becomes an edge, and an AI layer continuously mines connections you'd never manually create. The interface had to feel like looking at your own mind — not a folder tree. The system needed to handle 2000+ nodes without performance degradation while supporting real-time collaboration and semantic search across the entire graph.`,
  },
  {
    label: 'A — Action',
    color: '#86efac',
    heading: 'Designed a full-stack AI-native knowledge architecture',
    body: `Chose React + D3.js/Cytoscape for the visualization layer because force-directed graph layouts are computationally complex — D3 handles the physics simulation while React manages the component lifecycle. Selected Pinecone over a plain PostgreSQL vector column because at 5000+ nodes, ANN (Approximate Nearest Neighbor) search via Pinecone is 40-60x faster than pg_vector exhaustive scan. Chose FastAPI over Django for the backend because LLM streaming responses require async I/O — Django's ORM is synchronous by design. Used Redis for embedding cache: re-computing a GPT-4 embedding costs $0.0001 per call — at scale, caching avoids 95% of re-computation. LangChain orchestrates multi-hop reasoning chains across the graph, surfacing non-obvious connections.`,
  },
  {
    label: 'R — Result',
    color: '#fde68a',
    heading: 'Architected for 2000+ nodes, sub-100ms semantic search',
    body: `The architecture benchmarks at <100ms semantic search across 2000 nodes using Pinecone ANN. UI prototyped with smooth 60fps graph interactions using Canvas API fallback for dense graphs. The AI insight engine successfully surface-tested cross-domain connections (e.g., linking a physics concept to a software architecture note). Currently in active development — the foundation is solid, the roadmap is clear.`,
  },
]

const TECH_STACK = [
  {
    category: 'Frontend & Visualization',
    color: '#b5a4f5',
    items: [
      {
        name: 'React + TypeScript',
        why: 'Chosen over Vue for its ecosystem maturity and type safety in complex graph state management',
        role: 'Core UI framework',
      },
      {
        name: 'D3.js / Cytoscape.js',
        why: 'D3 handles the force physics simulation natively; Cytoscape used for > 500 node performance mode',
        role: 'Graph rendering engine',
      },
      {
        name: 'Canvas API',
        why: 'DOM-based SVG degrades at 1000+ nodes. Canvas renders the full graph in a single rasterized layer',
        role: 'High-density rendering',
      },
      {
        name: 'Framer Motion',
        why: 'Spring physics animations for node expansion feel natural — CSS transitions feel mechanical by comparison',
        role: 'Animation layer',
      },
    ],
  },
  {
    category: 'AI & Intelligence Layer',
    color: '#f9a8d4',
    items: [
      {
        name: 'GPT-4 / Claude (LLMs)',
        why: 'Used for semantic relationship detection and insight generation — not for basic embedding (too expensive)',
        role: 'Insight synthesis',
      },
      {
        name: 'Sentence Transformers',
        why: 'Lightweight local embedding model — 384-dim vectors at 1ms/node vs GPT embeddings at 20ms+',
        role: 'Node vectorization',
      },
      {
        name: 'Pinecone',
        why: 'Chose over pg_vector: ANN search at 5000 nodes is 40x faster. pg_vector does exact scan, Pinecone does HNSW',
        role: 'Vector similarity search',
      },
      {
        name: 'LangChain',
        why: 'Orchestrates multi-hop graph traversal + LLM calls. Rolling your own chain would require 3x the code',
        role: 'AI reasoning chains',
      },
    ],
  },
  {
    category: 'Backend & Infrastructure',
    color: '#86efac',
    items: [
      {
        name: 'Python + FastAPI',
        why: 'Async-first framework — critical for streaming LLM responses and WebSocket graph sync',
        role: 'API server',
      },
      {
        name: 'PostgreSQL + pgvector',
        why: 'Chose over MongoDB: knowledge nodes have strict relational constraints (edges reference node IDs)',
        role: 'Primary data store',
      },
      {
        name: 'Redis',
        why: 'Caches embedding vectors to avoid $0.0001/call re-computation. At 1000 daily queries, saves ~$3/day',
        role: 'Embedding cache + pub/sub',
      },
      {
        name: 'WebSockets',
        why: 'HTTP polling at 1-second intervals adds 1000ms latency to collaboration. WebSockets give <50ms updates',
        role: 'Real-time sync',
      },
    ],
  },
]

export default function SynapsePage() {
  return (
    <div style={{ backgroundColor: '#0d0d1a', minHeight: '100vh', color: '#e2e8f0', position: 'relative', overflow: 'hidden' }}>

      {/* Background orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(181,164,245,0.12) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', top: '50%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,168,212,0.09) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '0%', left: '30%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(134,239,172,0.07) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      </div>

      {/* Sticky header */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, padding: '20px 40px', borderBottom: '1px solid rgba(181,164,245,0.1)', backdropFilter: 'blur(20px)', backgroundColor: 'rgba(13,13,26,0.85)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#b5a4f5', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em' }}>
          ← Portfolio
        </Link>
        <span style={{ fontSize: '0.72rem', color: 'rgba(226,232,240,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Concept Project · 2025</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '64px 24px 100px' }}>

        {/* Hero */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: '72px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(181,164,245,0.1)', border: '1px solid rgba(181,164,245,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '20px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#b5a4f5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>AI Knowledge Graph</span>
          </div>
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.88, marginBottom: '24px', color: '#f1f5f9' }}>
            SYNAPSE
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', fontWeight: 500, color: '#94a3b8', lineHeight: 1.55, maxWidth: '620px', marginBottom: '32px' }}>
            A visual AI-powered knowledge graph that maps your mind — surfacing hidden connections between ideas, research, and memory using LLMs and vector similarity search.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {['React', 'D3.js', 'FastAPI', 'Pinecone', 'LangChain', 'WebSockets', 'Redis'].map(t => (
              <span key={t} style={{ backgroundColor: 'rgba(181,164,245,0.08)', border: '1px solid rgba(181,164,245,0.2)', borderRadius: '100px', padding: '5px 14px', fontSize: '0.75rem', color: '#c4b5fd', fontWeight: 600 }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Screenshot */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '80px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(181,164,245,0.15)', boxShadow: '0 24px 80px rgba(181,164,245,0.1)' }}>
          <img src="/project-synapse.png" alt="Synapse screenshot" style={{ width: '100%', display: 'block' }} />
        </motion.div>

        {/* STAR Case Study */}
        <motion.div {...fadeUp(0.15)} style={{ marginBottom: '80px' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(226,232,240,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>Case Study</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '40px', lineHeight: 1.1 }}>
            STAR Framework
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {STAR.map(({ label, color, heading, body }, i) => (
              <motion.div key={i} {...fadeUp(0.18 + i * 0.07)}
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: `3px solid ${color}`, borderRadius: '16px', padding: '28px 32px' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>{label}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '12px', letterSpacing: '-0.01em' }}>{heading}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(226,232,240,0.7)', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div {...fadeUp(0.25)} style={{ marginBottom: '80px' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(226,232,240,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>Deep Dive</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px', lineHeight: 1.1 }}>
            Technical Architecture
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(226,232,240,0.5)', marginBottom: '40px', lineHeight: 1.7 }}>
            Every technology was chosen with a specific reason — not just familiarity.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {TECH_STACK.map(({ category, color, items }) => (
              <div key={category}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color, boxShadow: `0 0 12px ${color}` }} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{category}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                  {items.map(({ name, why, role }) => (
                    <div key={name} style={{ backgroundColor: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', border: `1px solid ${color}20`, borderTop: `2px solid ${color}`, borderRadius: '14px', padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '8px' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9' }}>{name}</div>
                        <span style={{ fontSize: '0.6rem', fontWeight: 700, color, backgroundColor: `${color}15`, borderRadius: '6px', padding: '3px 8px', whiteSpace: 'nowrap', flexShrink: 0 }}>{role}</span>
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(226,232,240,0.55)', lineHeight: 1.65 }}>
                        <span style={{ color, fontWeight: 600 }}>Why: </span>{why}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Status */}
        <motion.div {...fadeUp(0.3)}
          style={{ backgroundColor: 'rgba(181,164,245,0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(181,164,245,0.15)', borderRadius: '20px', padding: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#b5a4f5', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>Status</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '10px', letterSpacing: '-0.02em' }}>In Development</h3>
          <p style={{ fontSize: '0.9rem', color: 'rgba(226,232,240,0.55)', maxWidth: '460px', margin: '0 auto 28px', lineHeight: 1.75 }}>
            Architecture is finalized. UI is prototyped. Backend services are scaffolded. Building toward a working MVP for personal use.
          </p>
          <Link to="/" style={{ backgroundColor: '#b5a4f5', color: '#0d0d1a', textDecoration: 'none', borderRadius: '100px', padding: '12px 30px', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', display: 'inline-block' }}>
            ← Back to Portfolio
          </Link>
        </motion.div>

      </div>
    </div>
  )
}

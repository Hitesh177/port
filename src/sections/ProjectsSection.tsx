import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

const PROJECTS = [
  {
    num: '01',
    name: 'AI Dream Visualizer',
    category: 'Personal Project',
    tags: ['Generative AI', 'LLMs', 'Computer Vision', 'React', 'Python'],
    desc: 'Turn thoughts into cinematic worlds. Type a prompt like "A lonely engineer in Tokyo building AGI" — the system generates a visual world, cinematic narration, soundtrack, and dynamic environment. AI-generated interactive short films.',
    screenshot: '/project-ai-monitoring.png',
    slug: 'ai-dream-visualizer',
  },
  {
    num: '02',
    name: 'Synapse — Visual AI Brain Interface',
    category: 'Personal Project',
    tags: ['React', 'D3.js', 'LLMs', 'Python', 'Vector DB'],
    desc: 'A giant neural knowledge map where ideas connect visually, projects evolve, memories branch, and AI generates insights in real-time. Obsidian meets AGI — an interactive brain OS for thought and creativity.',
    screenshot: '/project-synapse.png',
    slug: 'synapse',
  },
  {
    num: '03',
    name: 'Phantom — AI Cyber Defense System',
    category: 'Personal Project',
    tags: ['Python', 'ML', 'FastAPI', 'React', 'WebSockets', 'Redis'],
    desc: 'A cinematic cybersecurity intelligence platform with live threat detection, AI anomaly reasoning, attack simulation, autonomous defense agents, and real-time network reconstruction on a global threat map.',
    screenshot: '/project-phantom.png',
    slug: 'phantom',
  },
  {
    num: '04',
    name: 'Mayur Indian Kitchen',
    category: 'Restaurant Website · Taiwan',
    tags: ['Brand Website', 'Restaurant', 'Multi-location'],
    desc: 'A multi-location Indian restaurant and grocery brand serving regional recipes, tandoor dishes, biryani, vegetarian food, catering, and cultural experiences across Taiwan and Dubai since 2011.',
    screenshot: '/project-mayur.png',
    slug: 'mayur-indian-kitchen',
    externalUrl: 'https://indianfoodtaiwan.com',
    blocks: [
      { label: 'Indian cuisine across Taiwan', bg: '#2b211d' },
      { label: 'Catering & grocery', bg: '#3b2b20' },
      { label: '14 kitchen locations', bg: '#242424' },
      { label: 'Since 2011', bg: '#4a3025' },
    ],
  },
  {
    num: '05',
    name: 'Baba Indian Restaurant',
    category: 'Restaurant Website · Taichung',
    tags: ['Brand Website', 'Restaurant', 'Reservations'],
    desc: 'A restaurant experience for authentic North and South Indian food in Taichung, built around hand-ground spices, tandoori cooking, vegetarian options, and warm hospitality across two branches.',
    screenshot: '/project-baba.png',
    slug: 'baba-indian-restaurant',
    externalUrl: 'https://babaindianfood.tw',
    blocks: [
      { label: 'Hand-ground spices', bg: '#3b2721' },
      { label: 'Tandoori cooking', bg: '#5a3024' },
      { label: 'Taichung · 2 branches', bg: '#2b2c25' },
      { label: 'Reserve & order online', bg: '#4a3b24' },
    ],
  },
  {
    num: '06',
    name: 'Sree India Palace',
    category: 'Restaurant Website · Taichung',
    tags: ['Brand Website', 'Hyderabadi', 'Hospitality'],
    desc: 'A royal dining identity rooted in Hyderabad: Mughal heritage, Hyderabadi dum biryani, curries, tandoor dishes, weekly specials, and an elevated guest experience in Taichung’s West District.',
    screenshot: '/project-sree.png',
    slug: 'sree-india-palace',
    externalUrl: 'https://sreeindiapalace.com',
    blocks: [
      { label: 'Hyderabadi cuisine', bg: '#33251e' },
      { label: 'Mughal heritage', bg: '#4d3220' },
      { label: '100+ authentic dishes', bg: '#2d2922' },
      { label: 'West District · Taichung', bg: '#58412b' },
    ],
  },
  {
    num: '07',
    name: 'Bhabhi Indian Restaurant',
    category: 'Restaurant Website · Hsinchu',
    tags: ['Brand Website', 'Storytelling', 'Community'],
    desc: 'A story-led restaurant website for authentic North Indian food in Hsinchu, connecting Odisha roots, slow-cooked classics, fresh masala, communal buffet dinners, and corporate catering near the Science Park.',
    screenshot: '/project-bhabhi.png',
    slug: 'bhabhi-indian-restaurant',
    externalUrl: 'https://bhabhiindianfood.com',
    blocks: [
      { label: 'Odisha → Hsinchu', bg: '#2f2820' },
      { label: 'Slow-cooked classics', bg: '#4c3025' },
      { label: 'Fortnightly community buffet', bg: '#29322b' },
      { label: 'Catering for 10–40', bg: '#493c28' },
    ],
  },
  {
    num: '08',
    name: 'Wonderwood',
    category: 'Experience Website · Beipu',
    tags: ['Brand Website', 'Experiences', 'Community'],
    desc: 'A home for a two-hectare forest recreation center near Beipu, Taiwan, featuring immersive outdoor puzzle adventures, scavenger hunts, workshops, music, nature exploration, and community gatherings.',
    screenshot: '/project-wonderwood.png',
    slug: 'wonderwood',
    externalUrl: 'https://wonderwood.com.tw',
    blocks: [
      { label: 'Two-hectare forest', bg: '#233028' },
      { label: 'Immersive puzzle adventures', bg: '#2d3b2d' },
      { label: 'Workshops & live music', bg: '#3c3525' },
      { label: 'Beipu · Hsinchu County', bg: '#26352f' },
    ],
  },
  {
    num: '09',
    name: "Don't Be A Wage Slave",
    category: 'Editorial Website · Taiwan',
    tags: ['Editorial', 'Podcast', 'Books'],
    desc: 'An editorial platform for critical thinking about work, freedom, and the architecture of modern life, bringing together essays, podcasts, books, pilgrimage paths, and a long-running weekly manifesto.',
    screenshot: '/project-dbawageslave.png',
    slug: 'dont-be-a-wage-slave',
    externalUrl: 'https://dbawageslave.com',
    blocks: [
      { label: '600+ essays', bg: '#252525' },
      { label: 'Life, death & freedom', bg: '#342b25' },
      { label: 'Podcast & multimedia', bg: '#292d31' },
      { label: 'Based in Taichung', bg: '#3b3328' },
    ],
  },
  {
    num: '10',
    name: 'Mayur International Kitchen Dubai',
    category: 'Restaurant Website · Dubai',
    tags: ['Brand Website', 'Halal Dining', 'International'],
    desc: 'An all-day international kitchen in Business Bay, Dubai, bringing Chef Mayur’s Indian food heritage together with biryani, charcoal grills, South Indian breakfast, vegetarian dishes, and family dining near Burj Khalifa.',
    screenshot: '/project-mayur-dubai.png',
    slug: 'mayur-international-kitchen-dubai',
    externalUrl: 'https://www.mayurdubai.com/',
    blocks: [
      { label: '100% halal certified', bg: '#2d2922' },
      { label: 'Breakfast to late dinner', bg: '#403125' },
      { label: 'Business Bay · Dubai', bg: '#25302e' },
      { label: '15 branches worldwide', bg: '#4a3926' },
    ],
  },
  {
    num: '11',
    name: 'ITG Soft Games Taiwan',
    category: 'Game Studio · Taiwan',
    tags: ['Indie Games', 'NES Homebrew', 'Retro'],
    desc: 'A retro game studio and publisher focused on original homebrew games, Famicom development, chiptune culture, and hardware for classic gaming machines from Taiwan.',
    screenshot: '/project-itg-soft.png',
    slug: 'itg-soft-games-taiwan',
    externalUrl: 'https://retro-ai-six.vercel.app/',
    blocks: [
      { label: 'Independent Taiwan games', bg: '#2d2922' },
      { label: 'Famicom & NES homebrew', bg: '#33302a' },
      { label: 'Chiptune culture', bg: '#25302e' },
      { label: 'Games, hardware & publishing', bg: '#4a3926' },
    ],
  },
]

type Project = {
  num: string
  name: string
  category: string
  tags: string[]
  desc: string
  screenshot: string | null
  slug: string
  externalUrl?: string
  blocks?: { label: string; bg: string }[]
}

const TOTAL = PROJECTS.length

interface ProjectCardProps {
  project: Project
  index: number
  containerProgress: ReturnType<typeof useScroll>['scrollYProgress']
}

function ProjectCard({ project, index, containerProgress }: ProjectCardProps) {
  const navigate = useNavigate()
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03
  const rangeStart = index / TOTAL
  const rangeEnd = (index + 1) / TOTAL
  const scale = useTransform(containerProgress, [rangeStart, rangeEnd], [1, targetScale])

  return (
    <div className="h-[85vh] flex items-start" style={{ position: 'sticky', top: '6rem' }}>
      <motion.div
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
        style={{
          backgroundColor: '#0C0C0C',
          scale,
          top: `${index * 28}px`,
          transformOrigin: 'top center',
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick={() => project.externalUrl ? window.open(project.externalUrl, '_blank', 'noopener,noreferrer') : navigate(`/projects/${project.slug}`)}
        whileHover={{ borderColor: 'rgba(91,108,255,0.8)', transition: { duration: 0.2 } }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span
              className="font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#D7E2EA' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="text-[#D7E2EA] uppercase tracking-widest font-light opacity-60"
                style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)', maxWidth: '600px', lineHeight: 1.2 }}
              >
                {project.name}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', maxWidth: '280px' }}>
              {project.tags.slice(0, 4).map(t => (
                <span key={t} style={{ backgroundColor: 'rgba(215,226,234,0.1)', border: '1px solid rgba(215,226,234,0.2)', borderRadius: '100px', padding: '4px 12px', fontSize: '0.7rem', color: '#D7E2EA', fontWeight: 500 }}>
                  {t}
                </span>
              ))}
            </div>
            {/* View button */}
            <span style={{ backgroundColor: '#5b6cff', color: '#fff', borderRadius: '100px', padding: '8px 20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
              View →
            </span>
          </div>
        </div>

        {/* Description */}
        <p style={{ color: '#D7E2EA', opacity: 0.65, fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)', lineHeight: 1.65, marginBottom: '16px', maxWidth: '700px' }}>
          {project.desc}
        </p>

        {/* Screenshot or blocks */}
        {project.screenshot ? (
          <div style={{ borderRadius: '24px', overflow: 'hidden', width: '100%' }}>
            <img
              src={project.screenshot}
              alt={project.name}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        ) : (
          <div className="flex gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4" style={{ flex: '0 0 40%' }}>
              {(project.blocks ?? []).slice(0, 2).map(({ label, bg }) => (
                <div key={label} style={{ background: bg, borderRadius: '24px', height: 'clamp(100px, 14vw, 190px)', display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:gap-4" style={{ flex: '1 1 60%' }}>
              {(project.blocks ?? []).slice(2, 4).map(({ label, bg }) => (
                <div key={label} style={{ background: bg, borderRadius: '24px', flex: 1, display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      ref={containerRef}
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}

import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'


const ABOUT_TEXT =
  "Master's student in CS at Asia University, Taiwan — MOE Scholarship Recipient, Ranked #2 in department, GPA 91.7%, co-authored 3 IEEE papers. AI Engineer Intern at Pou Chen Corporation building enterprise AI systems, LLM-powered workflows, and infrastructure automation. Previously at Blueed Technology (Virgin Voyages), Honest Design Co, and Asia University Big Data Lab. Driven by curiosity and systems thinking — building technology that is intelligent, reliable, and impactful."

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Top-left moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full"
        />
      </FadeIn>

      {/* Bottom-left 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full"
        />
      </FadeIn>

      {/* Top-right lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full"
        />
      </FadeIn>

      {/* Bottom-right 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full"
        />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium text-center leading-relaxed max-w-[560px]"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(0.75rem, 1.3vw, 1rem)',
            } as React.CSSProperties}
          />

        </div>
      </div>
    </section>
  )
}

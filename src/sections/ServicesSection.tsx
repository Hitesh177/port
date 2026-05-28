import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    num: '01',
    name: 'AI & Machine Learning',
    desc: 'Machine Learning • Deep Learning • Generative AI • Computer Vision • Image Processing • Image Segmentation • Data Science • OpenCV • Scikit-learn • Optimization Algorithms',
  },
  {
    num: '02',
    name: 'Software Engineering & Cloud',
    desc: 'Python • Java • C/C++/C# • FastAPI • Backend Development • Frontend Development • AWS Cloud • Docker • Distributed Systems • Data Structures',
  },
  {
    num: '03',
    name: 'Electrical & Embedded Systems',
    desc: 'PLC Programming • Arduino • Raspberry Pi • IoT Sensors • Microcontrollers • Processor Architecture • Embedded Systems • Panel Designing • IoT Engineering • Digital Systems',
  },
  {
    num: '04',
    name: 'Enterprise AI & Intelligent Systems',
    desc: 'LLM Integrations • OpenWebUI • MCP/MCPO • Infrastructure Monitoring • Prometheus • Checkmk APIs • LibreNMS • AI Automation • Intelligent Workflows • Enterprise Monitoring Systems',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills & Expertise
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Number */}
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {svc.num}
              </span>

              {/* Name + description */}
              <div className="flex flex-col justify-center gap-2 pt-2">
                <span
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0C0C0C' }}
                >
                  {svc.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    color: '#0C0C0C',
                    opacity: 0.6,
                  }}
                >
                  {svc.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

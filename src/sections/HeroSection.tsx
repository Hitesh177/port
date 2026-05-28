import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience']

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col"
      style={{ overflowX: 'clip', position: 'relative', backgroundColor: '#000000' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA' }}
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden mt-12 sm:mt-8 md:mt-4">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full
              text-[12vw] sm:text-[12vw] md:text-[12vw] lg:text-[12vw]"
          >
            Hi, i&apos;m Hitesh
          </h1>
        </FadeIn>
      </div>

      {/* Centered Portrait */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0
          w-[252px] sm:w-[324px] md:w-[396px] lg:w-[468px]"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src="/hitesh-portrait.png"
            alt="Hitesh portrait"
            className="w-full"
            style={{ backgroundColor: 'transparent' }}
          />
        </FadeIn>
      </Magnet>

      {/* Bottom Bar */}
      <div className="flex-1 flex items-end justify-between pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            SOFTWARE ENGINEER FOCUSED ON AI AND USER EXPERIENCE
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

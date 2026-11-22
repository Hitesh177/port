import { Routes, Route } from 'react-router-dom'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import EducationPage from './pages/EducationPage'
import WorkExpPage from './pages/WorkExpPage'
import ComingSoonPage from './pages/ComingSoonPage'
import SynapsePage from './pages/SynapsePage'
import PhantomPage from './pages/PhantomPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}>
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          <ProjectsSection />
        </div>
      } />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/workexp" element={<WorkExpPage />} />
      <Route path="/projects/synapse" element={<SynapsePage />} />
      <Route path="/projects/phantom" element={<PhantomPage />} />
      <Route path="/projects/:slug" element={<ComingSoonPage />} />
    </Routes>
  )
}

'use client'

import { useScrollObserver } from './hooks/useScrollObserver'
import { SkipLink } from './components/layout/SkipLink'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { FortinetSection } from './components/sections/FortinetSection'
import { DeploymentSection } from './components/sections/DeploymentSection'
import { AboutSection } from './components/sections/AboutSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { FAQSection } from './components/sections/FAQSection'
import { ContactSection } from './components/sections/ContactSection'
import './home.css'

export default function Home() {
  useScrollObserver()

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <FortinetSection />
        <DeploymentSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

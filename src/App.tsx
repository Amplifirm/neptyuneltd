import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Solutions } from './components/Solutions'
import { Features } from './components/Features'
import { UseCases } from './components/UseCases'
import { Integrations } from './components/Integrations'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Solutions />
        <Features />
        <UseCases />
        <Integrations />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <HowItWorks />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

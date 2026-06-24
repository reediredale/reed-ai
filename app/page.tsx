import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import CRONonNegotiable from '@/components/CRONonNegotiable'
import Services from '@/components/Services'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import SocialProof from '@/components/SocialProof'
import About from '@/components/About'
import Footer from '@/components/Footer'
import IntentTracker from '@/components/IntentTracker'
import UTMTracker from '@/components/UTMTracker'

export default function Home() {
  return (
    <main>
      <UTMTracker />
      <IntentTracker />
      <Hero />
      <ClientLogos />
      <CRONonNegotiable />
      <Services />
      <CaseStudiesSection />
      <SocialProof />
      <About />
      <Footer />
    </main>
  )
}

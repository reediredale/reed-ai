import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import SocialProof from '@/components/SocialProof'
import ToolSwitcher from '@/components/ToolSwitcher'
import Services from '@/components/Services'
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
      <ToolSwitcher />
      <Services />
      <SocialProof />
      <About />
      <Footer />
    </main>
  )
}

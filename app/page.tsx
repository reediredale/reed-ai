import Hero from '@/components/Hero'
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
      <ToolSwitcher />
      <Services />
      <About />
      <Footer />
    </main>
  )
}

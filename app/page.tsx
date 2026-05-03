import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
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
      <ContactForm />
      <Services />
      <About />
      <Footer />
    </main>
  )
}

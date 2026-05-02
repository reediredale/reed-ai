import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import IntentTracker from '@/components/IntentTracker'

export default function Home() {
  return (
    <main>
      <IntentTracker />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  )
}

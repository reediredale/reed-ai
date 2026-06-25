import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import CROAuditForm from './CROAuditForm'

export const metadata: Metadata = {
  title: 'Contact — Reed Iredale',
  description:
    'Get in touch with Reed Iredale. Growth experimentation consultant working with brands across ecommerce, financial services, gaming, and enterprise.',
}

const VALUE_ITEMS = [
  { icon: '⚡', text: 'Response within 48 hours' },
  { icon: '🎯', text: 'Straight talk' },
  { icon: '🌏', text: 'Working with brands across AU & internationally' },
  { icon: '🔒', text: 'Everything discussed stays confidential' },
]

export default function ContactPage() {
  return (
    <main>
      {/* Page header */}
      <section className="pt-28 pb-16 px-6 sm:px-8 text-center border-b border-neutral-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-500 text-[11px] font-bold uppercase tracking-widest mb-6">Contact</p>
          <h1
            className="font-display font-bold text-neutral-900 tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Let&apos;s work together.
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed max-w-xl mx-auto">
            Tell me about your business. I&apos;ll be in touch within 48 hours.
          </p>
        </div>
      </section>

      {/* Form + Value */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">

            {/* What you get */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-6">What to expect</p>
              <ul className="space-y-5 mb-10">
                {VALUE_ITEMS.map(item => (
                  <li key={item.text} className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <p className="text-neutral-700 font-medium" style={{ fontSize: '1.1rem' }}>{item.text}</p>
                  </li>
                ))}
              </ul>

              <figure className="border-l-4 border-green-500 pl-6">
                <blockquote
                  className="font-display font-bold text-neutral-800 italic leading-snug mb-3"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
                >
                  &ldquo;We didn&apos;t trust anyone other than Reed to work on our first ever sales funnel project.&rdquo;
                </blockquote>
                <figcaption className="text-sm text-neutral-500">UX Executive, BHP (ASX 200)</figcaption>
              </figure>
            </div>

            {/* Form */}
            <div>
              <CROAuditForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

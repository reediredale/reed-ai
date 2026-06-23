import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import CROAuditForm from './CROAuditForm'

export const metadata: Metadata = {
  title: 'Free CRO Audit — Reed Iredale',
  description:
    'Request a free CRO audit. Get a full review of your biggest conversion leak plus prioritised quick-win recommendations — back to you within 48 hours.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-content mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
            Free CRO Audit
          </p>

          <h1 className="font-display text-3xl sm:text-[2.4rem] font-bold text-neutral-900 leading-[1.15] tracking-tight mb-4">
            Get your FREE<br className="hidden sm:block" /> CRO Audit.
          </h1>
          <p className="text-neutral-500 text-base leading-relaxed mb-10">
            Takes 2 minutes. Back to you within 48 hours.
          </p>

          <CROAuditForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}

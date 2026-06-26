import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — Reed Iredale',
  description:
    'Growth Experimentation and CRO expert. 15+ years in marketing, design, and data science. Worked with BHP, Ladbrokes, Australian Retirement Trust, and 200+ others.',
}

const STATS = [
  { value: '200+',   label: 'brands worked with' },
  { value: '15+',    label: 'years experience' },
  { value: '< 48hr', label: 'audit turnaround' },
]

const CLIENTS = [
  'BHP', 'Ladbrokes', 'Australian Retirement Trust', 'Oscar Wylee',
  'loans.com.au', 'JB Racks', 'Petzyo', 'Savings.com.au', 'InfoChoice',
  'X (Twitter)', 'First Mac', 'Flight Centre',
]

export default function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <section className="pt-28 pb-16 px-6 sm:px-8 text-center border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-500 text-[11px] font-bold uppercase tracking-widest mb-6">About</p>
          <h1
            className="font-display font-bold text-neutral-900 tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Growth and Conversion<br /> Rate Expert.
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed max-w-2xl mx-auto">
            15+ years in marketing, design, and online behavioural economics.
            Trained Data Scientist. NN Group design award winner.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 sm:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-3 gap-6 sm:gap-10 text-center">
            {STATS.map(stat => (
              <div key={stat.label}>
                <p
                  className="font-display font-bold text-neutral-900 mb-2"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                >
                  {stat.value}
                </p>
                <p className="text-neutral-500 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6 sm:px-8 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 items-start">
            <div className="flex-1 space-y-6 text-neutral-600 leading-relaxed" style={{ fontSize: '1.125rem' }}>
              <p>
                Reed Iredale is an expert in marketing, design, and online behavioural economics.
                He&apos;s a trained Data Scientist, has led and consulted on CRO for top ASX 200
                clients, won NN Group design awards, and has 15+ years of marketing experience.
              </p>
              <p>
                He&apos;s worked with 200+ Australian and international brands across ecommerce,
                financial services, gaming, superannuation, and enterprise — including BHP, Ladbrokes,
                Australian Retirement Trust, Oscar Wylee, loans.com.au, JB Racks, Petzyo,
                Savings.com.au, and InfoChoice.
              </p>
              <p>
                Reed studied Data Science and AI at the Institute of Data (
                <strong className="text-neutral-900">RMIT University</strong> and{' '}
                <strong className="text-neutral-900">UTS</strong>). He applies a rigorous,
                experiment-led approach to growth — every recommendation is hypothesis-driven,
                every outcome is measured.
              </p>
              <p>
                Based in Brisbane, Australia. Grew up in Byron Bay and Mission Beach.
                Newcastle United and Brisbane Broncos supporter.
              </p>
            </div>
            <div className="sm:w-72 shrink-0">

              <Image
                src="/reed-iredale-full-body.webp"
                alt="Reed Iredale"
                width={288}
                height={360}
                className="w-full rounded-2xl object-cover object-top shadow-lg mb-4"
              />
              <Image
                src="/reed-iredale-headshot.webp"
                alt="Reed Iredale"
                width={288}
                height={360}
                className="w-full rounded-2xl object-cover object-top shadow-lg"
              />
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Blockquote */}
      <section className="py-20 px-6 sm:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <figure className="bg-white rounded-2xl p-10 sm:p-16 text-center shadow-sm border border-neutral-200">
            <div className="font-serif text-green-500 leading-none mb-6 select-none"
                 style={{ fontSize: '6rem', lineHeight: 0.8 }}>
              &ldquo;
            </div>
            <blockquote
              className="font-display font-bold text-neutral-900 leading-tight mb-10"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
            >
              We didn&apos;t trust anyone other than Reed to work on our first ever sales funnel project.
            </blockquote>
            <figcaption className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-200 shrink-0" />
              <div className="text-left">
                <p className="text-base font-bold text-neutral-900">BHP</p>
                <p className="text-sm text-neutral-500">UX Executive, ASX 200</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 sm:px-8 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-4 border-green-500 pl-8">
            <p
              className="font-display font-bold text-neutral-700 leading-snug italic"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
            >
              &ldquo;Most businesses run advertising without optimising conversions. It&apos;s like turning
              on a tap without fixing the drain — you&apos;re spending more to fill the same leaky bucket.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-6 sm:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-content mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-8">
            200+ brands, including
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CLIENTS.map(client => (
              <span key={client} className="px-4 py-2 border border-neutral-200 rounded-full text-sm font-semibold text-neutral-600 bg-white">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2
            className="font-display font-bold text-neutral-900 tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.1 }}
          >
            Ready to grow your conversions?
          </h2>
          <p className="text-neutral-500 text-lg mb-8">
            Tell me about your business and I&apos;ll be in touch within 48 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors duration-150 text-base"
          >
            Contact me →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — Reed Iredale',
  description:
    'Growth Experimentation and CRO expert. 15+ years in marketing, design, and data science. Worked with BHP, Ladbrokes, Australian Retirement Trust, and 200+ others.',
}

const STATS = [
  { value: '200+', label: 'brands worked with' },
  { value: '15+',  label: 'years experience' },
  { value: '< 48hr', label: 'audit turnaround' },
]

export default function AboutPage() {
  return (
    <main>
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-content mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">About</p>

          <h1 className="font-display text-3xl sm:text-[2.4rem] font-bold text-neutral-900 leading-[1.15] tracking-tight mb-8">
            Growth and Conversion<br className="hidden sm:block" /> Rate Expert.
          </h1>

          <div className="space-y-5 text-neutral-600 text-base leading-relaxed mb-12">
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
              Reed studied Data Science and AI at the Institute of Data (RMIT University and UTS).
              He applies a rigorous, experiment-led approach to growth — every recommendation is
              hypothesis-driven, every outcome is measured.
            </p>
            <p>
              Based in Brisbane, Australia. Grew up in Byron Bay and Mission Beach. Newcastle United
              and Brisbane Broncos supporter.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 py-8 border-y border-neutral-100 mb-12">
            {STATS.map(stat => (
              <div key={stat.label}>
                <p className="font-display font-bold text-2xl text-neutral-900 mb-1">{stat.value}</p>
                <p className="text-xs text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <figure className="border border-neutral-200 rounded-xl p-5 bg-white mb-12">
            <blockquote className="text-sm text-neutral-700 leading-relaxed mb-4">
              &ldquo;We didn&apos;t trust anyone other than Reed to work on our first ever sales funnel project.&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-neutral-200 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-neutral-900">BHP</p>
                <p className="text-xs text-neutral-500">UX Executive</p>
              </div>
            </figcaption>
          </figure>

          <div className="border-l-2 border-neutral-900 pl-5 mb-12">
            <p className="text-neutral-600 text-sm leading-relaxed italic">
              &ldquo;Most businesses run advertising without optimising conversions. It&apos;s like turning
              on a tap without fixing the drain — you&apos;re spending more to fill the same leaky bucket.&rdquo;
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold rounded-xl transition-colors duration-150"
          >
            Get your free CRO audit →
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}

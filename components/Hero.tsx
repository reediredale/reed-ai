'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePostHog } from 'posthog-js/react'
import ContactModal from './ContactModal'

const CLIENTS = ['BHP', 'Ladbrokes', 'Australian Retirement Trust', 'Oscar Wylee', 'Petzyo', 'InfoChoice', '200+ others']

export default function Hero() {
  const posthog = usePostHog()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    posthog?.capture('cta_clicked', { cta: 'hero' })
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="bg-slate-900 pt-32 pb-24 px-8 text-center">
        <div className="max-w-2xl mx-auto">

          {/* Identity chip */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-10">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 shrink-0">
              <Image
                src="/reed-iredale-thumb.png"
                alt="Reed Iredale"
                width={24}
                height={24}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
            <span className="text-white/60 text-xs font-medium">
              Reed Iredale · Growth Experimentation Consultant
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
            Your best growth lever<br className="hidden sm:block" /> is already in your data.
          </h1>

          {/* Sub */}
          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            I run structured experiments — A/B tests, funnel analyses, attribution frameworks —
            that find exactly which levers move your number. No guesswork. Just compounding evidence.
          </p>

          {/* CTA */}
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-7 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl text-base transition-colors duration-150 shadow-lg shadow-green-500/20"
          >
            Get your free CRO audit
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Trust strip */}
          <p className="mt-10 text-white/25 text-xs tracking-wide">
            {CLIENTS.join('  ·  ')}
          </p>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

'use client'

import Image from 'next/image'
import { usePostHog } from 'posthog-js/react'

export default function Hero() {
  const posthog = usePostHog()

  const handleCTA = () => {
    posthog?.capture('cta_clicked', { cta: 'hero_primary' })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-slow" />
              Available for new projects
            </div>

            <h1 className="font-display text-5xl lg:text-[4.25rem] font-bold leading-[1.08] tracking-tight text-white mb-6">
              I build AI that{' '}
              <span className="gradient-text">learns your customers.</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
              Self-learning AI systems for sales and marketing teams — built on your data,
              tuned to your pipeline, and designed to get smarter with every interaction.
            </p>

            <button
              onClick={handleCTA}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 transition-all duration-200"
            >
              Tell me what you're working on
              <span className="group-hover:translate-x-1 transition-transform duration-200 text-base">→</span>
            </button>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-10">
              {['Data Science Program', 'RMIT University', 'UTS'].map((badge, i) => (
                <span key={badge} className="flex items-center gap-4">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-700" />}
                  <span className="text-sm text-gray-500">{badge}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
              {/* Image container */}
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/reed-iredale-headshot.webp"
                  alt="Reed Iredale"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 288px, 320px"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808]/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 shadow-xl">
                <p className="text-xs text-gray-500 mb-0.5">Building</p>
                <p className="text-sm font-semibold text-white">AI · Sales · Marketing</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

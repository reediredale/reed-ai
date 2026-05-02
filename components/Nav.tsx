'use client'

import { useEffect, useState } from 'react'
import { usePostHog } from 'posthog-js/react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const posthog = usePostHog()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToContact = () => {
    posthog?.capture('cta_clicked', { cta: 'nav' })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/85 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display font-semibold text-white tracking-tight">
          Reed Iredale
        </span>
        <button
          onClick={scrollToContact}
          className="text-sm font-medium text-gray-300 hover:text-white border border-white/15 hover:border-white/30 px-4 py-2 rounded-lg transition-all duration-200"
        >
          Get in touch
        </button>
      </div>
    </nav>
  )
}

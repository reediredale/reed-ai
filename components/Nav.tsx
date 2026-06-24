'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'

const NAV_LINKS = [
  { label: 'About',         href: '/about' },
  { label: 'Case Studies',  href: '/case-studies' },
  { label: 'AI Consulting', href: '/ai-consulting' },
]

export default function Nav() {
  const posthog  = usePostHog()
  const pathname = usePathname()
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const dark = isHome && !scrolled && !menuOpen

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      dark ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-b border-neutral-100'
    }`}>

      {/* Top bar */}
      <div className="max-w-content mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display font-extrabold text-lg tracking-tight transition-colors duration-300 hover:opacity-70 ${
            dark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          Reed<span className={dark ? 'text-green-400' : 'text-green-500'}> Iredale</span>
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-5">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium transition-colors duration-150 ${
                  dark
                    ? 'text-white/60 hover:text-white'
                    : pathname === link.href
                      ? 'text-neutral-900'
                      : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => posthog?.capture('cta_clicked', { cta: 'nav' })}
            className="text-xs font-semibold px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-lg transition-colors duration-150 whitespace-nowrap"
          >
            Free CRO audit
          </Link>
        </div>

        {/* Mobile: compact CTA + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <Link
            href="/contact"
            onClick={() => posthog?.capture('cta_clicked', { cta: 'nav_mobile' })}
            className="text-xs font-semibold px-3 py-1.5 bg-green-500 text-white rounded-lg whitespace-nowrap"
          >
            Free audit
          </Link>
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 shrink-0"
          >
            <span className={`block h-[2px] w-5 rounded-full transition-all duration-200 origin-center ${dark && !menuOpen ? 'bg-white' : 'bg-neutral-800'} ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-5 rounded-full transition-all duration-200 ${dark && !menuOpen ? 'bg-white' : 'bg-neutral-800'} ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[2px] w-5 rounded-full transition-all duration-200 origin-center ${dark && !menuOpen ? 'bg-white' : 'bg-neutral-800'} ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-neutral-100 shadow-xl">
          <div className="px-6 py-2">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-4 border-b border-neutral-100 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
              >
                {link.label}
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
            <div className="py-4">
              <Link
                href="/contact"
                onClick={() => { setMenuOpen(false); posthog?.capture('cta_clicked', { cta: 'nav_mobile_menu' }) }}
                className="flex items-center justify-center w-full py-4 bg-green-500 hover:bg-green-400 text-white text-sm font-bold rounded-xl transition-colors"
              >
                Get your free CRO audit →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

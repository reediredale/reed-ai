'use client'

import { useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'

export default function IntentTracker() {
  const posthog = usePostHog()

  useEffect(() => {
    if (!posthog) return

    // Scroll depth milestones
    const fired = new Set<number>()
    const onScroll = () => {
      const pct = Math.round(
        (window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)) * 100
      )
      for (const milestone of [25, 50, 75, 100]) {
        if (pct >= milestone && !fired.has(milestone)) {
          fired.add(milestone)
          posthog.capture('scroll_depth_reached', { depth_pct: milestone })
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Section viewed tracking
    const sectionIds = ['about', 'services', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            posthog.capture('section_viewed', { section: entry.target.id })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Animate sections as they enter viewport
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.section-animate').forEach((el) => animObserver.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
      animObserver.disconnect()
    }
  }, [posthog])

  return null
}

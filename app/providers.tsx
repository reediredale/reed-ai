'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key || key.startsWith('phc_xxx')) return
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      persistence: 'localStorage',
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

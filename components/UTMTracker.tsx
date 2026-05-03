'use client'

import { useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'

// Detects and captures UTM params + Instagram-specific signals on every page load.
// PostHog auto-captures $initial_utm_* properties but this fires an explicit event
// so you can build funnels like: instagram_reel_visit → contact_form_submitted.
export default function UTMTracker() {
  const posthog = usePostHog()

  useEffect(() => {
    if (!posthog) return

    const params = new URLSearchParams(window.location.search)

    const utm = {
      source: params.get('utm_source') ?? undefined,
      medium: params.get('utm_medium') ?? undefined,
      campaign: params.get('utm_campaign') ?? undefined,
      content: params.get('utm_content') ?? undefined,
      term: params.get('utm_term') ?? undefined,
    }

    // Instagram signals: ig_* params or igsh (share hash Instagram appends automatically)
    const igshid = params.get('igshid') ?? params.get('igsh') ?? undefined
    const igSource = params.get('ig_source') ?? undefined
    const fromInstagram =
      utm.source === 'instagram' ||
      !!igshid ||
      !!igSource ||
      document.referrer.includes('instagram.com')

    // Store attribution on the PostHog person profile
    const setProps: Record<string, string> = {}
    if (utm.source) setProps['utm_source'] = utm.source
    if (utm.medium) setProps['utm_medium'] = utm.medium
    if (utm.campaign) setProps['utm_campaign'] = utm.campaign
    if (utm.content) setProps['utm_content'] = utm.content
    if (fromInstagram) setProps['ever_visited_from_instagram'] = 'true'
    if (Object.keys(setProps).length > 0) {
      posthog.setPersonPropertiesForFlags(setProps)
    }

    // Fire a source_visit event whenever there's an attribution signal
    const hasSignal =
      utm.source || utm.medium || utm.campaign || igshid || igSource || fromInstagram
    if (hasSignal) {
      posthog.capture('source_visit', {
        ...utm,
        igshid,
        ig_source: igSource,
        from_instagram: fromInstagram,
        referrer: document.referrer || undefined,
        landing_path: window.location.pathname,
      })
    }

    // Fire a dedicated Instagram reel event for easy funnel filtering
    if (fromInstagram) {
      posthog.capture('instagram_visit', {
        utm_medium: utm.medium,
        utm_campaign: utm.campaign,
        utm_content: utm.content,
        igshid,
        referrer: document.referrer || undefined,
      })
    }
  }, [posthog])

  return null
}

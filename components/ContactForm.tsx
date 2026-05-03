'use client'

import { useState, useRef } from 'react'
import { usePostHog } from 'posthog-js/react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const posthog = usePostHog()
  const [formState, setFormState] = useState<FormState>('idle')
  const [started, setStarted] = useState(false)
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const submitterName = useRef('')

  const handleFirstFocus = () => {
    if (!started) {
      setStarted(true)
      posthog?.capture('contact_form_started')
    }
  }

  const set = (field: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    submitterName.current = fields.name

    posthog?.capture('contact_form_submitted', {
      message_char_count: fields.message.length,
      $set: { name: fields.name, email: fields.email },
    })
    posthog?.identify(fields.email, {
      name: fields.name,
      email: fields.email,
    })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          tools: fields.message,
          challenge: '',
        }),
      })
      if (!res.ok) throw new Error()
      posthog?.capture('contact_form_success', { name: fields.name })
      setFormState('success')
    } catch {
      posthog?.capture('contact_form_error')
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <section id="contact" className="pb-16 px-6">
        <div className="max-w-content mx-auto">
          <div className="border border-neutral-200 rounded-xl p-8 bg-neutral-50">
            <p className="font-display font-semibold text-neutral-900 text-lg">
              Got it, {submitterName.current}.
            </p>
            <p className="text-neutral-500 text-sm mt-1">
              I'll read what you've shared and come back to you soon.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="pb-16 px-6">
      <div className="max-w-content mx-auto">
        <div className="border border-neutral-200 rounded-xl p-6 sm:p-8">
          <p className="font-display font-semibold text-neutral-900 mb-1">
            What are you working on?
          </p>
          <p className="text-neutral-500 text-sm mb-6">
            Tell me your current setup and what&apos;s not working. I&apos;ll come back with thoughts.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={fields.name}
                onChange={set('name')}
                onFocus={handleFirstFocus}
                placeholder="Your name"
                className="input-field"
              />
              <input
                type="email"
                required
                value={fields.email}
                onChange={set('email')}
                onFocus={handleFirstFocus}
                placeholder="your@email.com"
                className="input-field"
              />
            </div>
            <textarea
              required
              rows={4}
              value={fields.message}
              onChange={set('message')}
              onFocus={handleFirstFocus}
              placeholder="e.g. We're using HubSpot and GA4, but our reps are still doing manual outreach and we have no idea which leads are actually ready to buy..."
              className="input-field resize-none"
            />

            {formState === 'error' && (
              <p className="text-xs text-red-500">
                Something went wrong. Email me directly at{' '}
                <a href="mailto:reed@reediredale.com" className="underline">
                  reed@reediredale.com
                </a>
              </p>
            )}

            <button
              type="submit"
              disabled={formState === 'loading'}
              className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors duration-150"
            >
              {formState === 'loading' ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                'Send →'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

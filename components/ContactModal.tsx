'use client'

import { useState, useRef, useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const posthog = usePostHog()
  const [formState, setFormState] = useState<FormState>('idle')
  const [started, setStarted]     = useState(false)
  const [fields, setFields]       = useState({ name: '', email: '', message: '' })
  const submitterName             = useRef('')

  // Escape key
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setFormState('idle')
      setStarted(false)
      setFields({ name: '', email: '', message: '' })
    }
  }, [isOpen])

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

    posthog?.identify(fields.email, { name: fields.name, email: fields.email })
    posthog?.capture('contact_form_submitted', {
      message_char_count: fields.message.length,
      $set: { name: fields.name, email: fields.email },
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

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/20 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-card bg-white rounded-2xl shadow-2xl w-full max-w-lg relative">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors text-lg leading-none"
        >
          ×
        </button>

        <div className="p-7 sm:p-8">
          {formState === 'success' ? (
            <div className="py-4 text-center">
              <p className="font-display text-2xl font-semibold text-neutral-900 mb-2">
                Got it, {submitterName.current}.
              </p>
              <p className="text-neutral-500 text-sm">
                I'll read what you've shared and come back to you soon.
              </p>
            </div>
          ) : (
            <>
              <p className="font-display font-semibold text-neutral-900 text-xl mb-1">
                What are you working on?
              </p>
              <p className="text-neutral-500 text-sm mb-6">
                Tell me your current setup and what&apos;s not working. No pitch, just a conversation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={fields.name}
                    onChange={set('name')}
                    onFocus={handleFirstFocus}
                    placeholder="Your name"
                    className="input-field"
                    autoFocus
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
                  placeholder="e.g. We use HubSpot and GA4 but our reps still do manual outreach and we have no idea which leads are actually ready to buy..."
                  className="input-field resize-none"
                />

                {formState === 'error' && (
                  <p className="text-xs text-red-500">
                    Something went wrong — email me directly at{' '}
                    <a href="mailto:reed@reediredale.com" className="underline">
                      reed@reediredale.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors duration-150"
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}

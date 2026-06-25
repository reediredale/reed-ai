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
  const [fields, setFields]       = useState({ name: '', email: '', website: '', challenge: '' })
  const submitterName             = useRef('')

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setFormState('idle')
      setStarted(false)
      setFields({ name: '', email: '', website: '', challenge: '' })
    }
  }, [isOpen])

  const handleFirstFocus = () => {
    if (!started) {
      setStarted(true)
      posthog?.capture('cro_audit_form_started')
    }
  }

  const set = (field: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    submitterName.current = fields.name

    posthog?.identify(fields.email, { name: fields.name, email: fields.email })
    posthog?.capture('cro_audit_requested', {
      website: fields.website,
      challenge_char_count: fields.challenge.length,
      $set: { name: fields.name, email: fields.email },
    })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          website: fields.website,
          tools: fields.challenge,
          challenge: fields.challenge,
        }),
      })
      if (!res.ok) throw new Error()
      posthog?.capture('cro_audit_success', { name: fields.name })
      setFormState('success')
    } catch {
      posthog?.capture('cro_audit_error')
      setFormState('error')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/25 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-card bg-white rounded-2xl shadow-2xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors text-lg leading-none"
        >
          ×
        </button>

        <div className="p-7 sm:p-8">
          {formState === 'success' ? (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4 text-green-600 text-xl">
                ✓
              </div>
              <p className="font-display text-xl font-semibold text-neutral-900 mb-2">
                You&apos;re in, {submitterName.current}.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                I&apos;ll review your site and send you a Loom walkthrough within 48 hours.
                Keep an eye on your inbox.
              </p>
            </div>
          ) : (
            <>
              <p className="font-display font-bold text-neutral-900 text-xl mb-1">
                Get in touch.
              </p>
              <p className="text-neutral-500 text-sm mb-5">
                Tell me about your business and I&apos;ll be in touch within 48 hours.
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
                <input
                  type="url"
                  required
                  value={fields.website}
                  onChange={set('website')}
                  onFocus={handleFirstFocus}
                  placeholder="https://yoursite.com"
                  className="input-field"
                />
                <textarea
                  required
                  rows={3}
                  value={fields.challenge}
                  onChange={set('challenge')}
                  onFocus={handleFirstFocus}
                  placeholder="What's your biggest conversion challenge? (e.g. lots of traffic but poor checkout rate, high bounce on landing pages...)"
                  className="input-field resize-none"
                />

                {formState === 'error' && (
                  <p className="text-xs text-red-500">
                    Something went wrong — email me at{' '}
                    <a href="mailto:reed@reediredale.com" className="underline">reed@reediredale.com</a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors duration-150"
                >
                  {formState === 'loading' ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send message →'
                  )}
                </button>

                <p className="text-center text-xs text-neutral-400 pt-1">
                  I respond to every message. Just straight answers.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

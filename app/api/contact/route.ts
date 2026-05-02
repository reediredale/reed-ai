import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, tools, challenge } = await req.json()

    if (!name || !email || !tools || !challenge) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const to = process.env.CONTACT_TO_EMAIL ?? 'reed@reediredale.com'
    const from = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

    await resend.emails.send({
      from,
      to,
      subject: `New inquiry from ${name}${company ? ` · ${company}` : ''}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 40px; border-radius: 12px;">
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #222;">
            <h2 style="margin: 0 0 4px; font-size: 20px; font-weight: 600; color: #fff;">New inquiry from ${name}</h2>
            <p style="margin: 0; color: #888; font-size: 14px;">Submitted via reediredale.com</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; width: 100px; vertical-align: top;">NAME</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">EMAIL</td>
              <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #a78bfa; text-decoration: none;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">COMPANY</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${company}</td>
            </tr>` : ''}
          </table>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Currently Using</p>
            <p style="margin: 0; color: #f5f5f5; font-size: 14px; line-height: 1.7; background: #111; padding: 16px; border-radius: 8px; border-left: 2px solid #7c3aed; white-space: pre-wrap;">${tools}</p>
          </div>

          <div style="margin-bottom: 32px;">
            <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Biggest Challenge</p>
            <p style="margin: 0; color: #f5f5f5; font-size: 14px; line-height: 1.7; background: #111; padding: 16px; border-radius: 8px; border-left: 2px solid #2563eb; white-space: pre-wrap;">${challenge}</p>
          </div>

          <div style="padding-top: 24px; border-top: 1px solid #222;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #7c3aed, #2563eb); color: #fff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500;">Reply to ${name} →</a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const { name, email, website, monthlyVisitors, tools, challenge } = await req.json()

    if (!name || !email || !tools) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Reed Iredale Site" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL ?? 'reed@reediredale.com',
      replyTo: email,
      subject: `New enquiry from ${name}${website ? ` · ${website}` : ''}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 40px; border-radius: 12px;">
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #222;">
            <h2 style="margin: 0 0 4px; font-size: 20px; font-weight: 600; color: #fff;">New enquiry from ${name}</h2>
            <p style="margin: 0; color: #888; font-size: 14px;">Submitted via reediredale.com</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; width: 120px; vertical-align: top;">NAME</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">EMAIL</td>
              <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #a78bfa; text-decoration: none;">${email}</a></td>
            </tr>
            ${website ? `<tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">WEBSITE</td>
              <td style="padding: 10px 0; font-size: 14px;"><a href="${website}" style="color: #a78bfa; text-decoration: none;">${website}</a></td>
            </tr>` : ''}
            ${monthlyVisitors ? `<tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">MONTHLY VISITORS</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${monthlyVisitors}</td>
            </tr>` : ''}
          </table>

          <div style="margin-bottom: 32px;">
            <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Conversion Challenge</p>
            <p style="margin: 0; color: #f5f5f5; font-size: 14px; line-height: 1.7; background: #111; padding: 16px; border-radius: 8px; border-left: 2px solid #7c3aed; white-space: pre-wrap;">${tools || challenge}</p>
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

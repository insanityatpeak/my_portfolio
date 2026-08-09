import { NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LEN = 100;
const MAX_EMAIL_LEN = 254;
const MAX_MESSAGE_LEN = 5000;

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    if (
      name.length > MAX_NAME_LEN ||
      email.length > MAX_EMAIL_LEN ||
      message.length > MAX_MESSAGE_LEN
    ) {
      return NextResponse.json(
        { error: 'One or more fields exceed the allowed length.' },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log('--- New Contact Submission ---');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log('------------------------------');
    }

    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['priyanshurawat2104@gmail.com'],
            subject: `Portfolio Inquiry from ${name}`,
            reply_to: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        });
      } catch (err) {
        console.error('Failed to send email via Resend:', err);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

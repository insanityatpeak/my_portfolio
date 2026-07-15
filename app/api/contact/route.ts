import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    console.log('--- New Contact Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------');

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

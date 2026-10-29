import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateContactEmail } from '@/lib/email-template';

// Strict rate limit in-memory store for basic DoS protection
const ipRequests = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now > entry.expiresAt) {
    ipRequests.set(ip, { count: 1, expiresAt: now + 60000 }); // 1 minute window
    return true;
  }
  if (entry.count >= 5) {
    return false; // Max 5 messages per minute per IP
  }
  entry.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'local-client';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many messages sent. Please wait a minute before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, brief, honeypot } = body;

    // Honeypot spam trap: if hidden field is filled, silently ignore
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Message received.' });
    }

    // Input validations
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!brief || typeof brief !== 'string' || brief.trim().length < 5) {
      return NextResponse.json(
        { error: 'Please enter a message with at least 5 characters.' },
        { status: 400 }
      );
    }

    const clientName = typeof name === 'string' && name.trim() ? name.trim().slice(0, 80) : 'Prospective Client';
    const clientEmail = email.trim().slice(0, 100);
    const clientMessage = brief.trim().slice(0, 3000);

    const recipient = process.env.CONTACT_TO_EMAIL || 'ajupoolat@gmail.com';
    const emailUser = process.env.EMAIL_USER || process.env.GMAIL_USER;
    const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;


    // Configure Nodemailer transporter (defaulting to Gmail or custom SMTP)
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Generate styled HTML and plain text using reusable template module
    const { html, text } = generateContactEmail({
      clientName,
      clientEmail,
      clientMessage,
    });

    await transporter.sendMail({
      from: `"Ajvadu Portfolio" <${emailUser}>`,
      to: recipient,
      replyTo: clientEmail, // Clicking 'Reply' in Gmail replies to the client directly!
      subject: `🎯 [Portfolio Lead] ${clientName} reached out`,
      text,
      html,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! I will reply within two working days.',
    });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    );
  }
}

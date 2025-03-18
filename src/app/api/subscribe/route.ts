import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, adminEmail } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: 'New Newsletter Subscription',
      text: `New subscriber: ${email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to the Wise Yogi newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    // Auto-reply to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Wise Yogi',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2F4F2F;">Welcome to Wise Yogi!</h2>
          <p>Thank you for joining our mindful community. We're excited to share our journey with you.</p>
          <p>You'll receive updates about:</p>
          <ul>
            <li>Mindful living tips</li>
            <li>Traditional recipes</li>
            <li>Updates from our farmer communities</li>
            <li>Special offers and new products</li>
          </ul>
          <p>Stay mindful,<br>The Wise Yogi Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
} 
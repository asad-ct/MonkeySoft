import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
    try {
        const { email, message } = await request.json();

        // Validate inputs
        if (!email || !message) {
            return NextResponse.json(
                { error: 'Email and message are required' },
                { status: 400 }
            );
        }

        // Check if API key is configured
        if (!resend) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json(
                { error: 'Email service is not configured. Please add RESEND_API_KEY to .env.local' },
                { status: 500 }
            );
        }

        // Send email to admin
        const result = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'imasadali7@gmail.com',
            replyTo: email,
            subject: `New Contact Form Submission from ${email}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #F63715 0%, #FF9663 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <p style="margin: 10px 0;"><strong>From Email:</strong></p>
            <p style="margin: 10px 0; color: #333; font-size: 14px;">${email}</p>
            
            <p style="margin: 20px 0 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #F63715;">
              <p style="margin: 0; color: #333; font-size: 14px; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="margin-top: 20px; font-size: 12px; color: #999;">
              This email was sent from your contact form. Reply to continue the conversation.
            </p>
          </div>
        </div>
      `,
            text: `New Contact Form Submission\n\nFrom Email: ${email}\n\nMessage:\n${message}`,
        });

        if (result.error) {
            console.error('Resend error:', result.error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

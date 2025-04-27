import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key if available
const resendApiKey = process.env.RESEND_API_KEY || '';
// Create a conditional resend instance to avoid build errors
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const formData = await request.json();
    const { name, email, phone, service, message } = formData;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('Resend API key is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Prepare the service text
    let serviceText = 'Not specified';
    if (service) {
      // Capitalize the service name and replace hyphens with spaces
      serviceText = service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, ' ');
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Golden Smile Creation <onboarding@resend.dev>', // Update with verified domain once set up
      to: process.env.NOTIFICATION_EMAIL || 'contact@goldensmilecreation.com', // Where notifications should go
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${serviceText}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This email was sent from the Golden Smile Creation contact form.</em></p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error('Error sending email:', error);

    // Handle the error with proper type checking
    const errorMessage = error instanceof Error
      ? error.message
      : 'An unknown error occurred when sending email';

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

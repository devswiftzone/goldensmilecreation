# Resend Email Setup Guide for Golden Smile Creation

This guide will help you set up Resend to handle form submissions on your website.

## What is Resend?

[Resend](https://resend.com) is a modern email API for developers. It's designed to be simple to use and provides excellent deliverability. Unlike traditional email services, Resend is specifically built for sending transactional and marketing emails from web applications.

## 1. Create a Resend Account

1. Go to [Resend.com](https://resend.com) and sign up for an account.
2. Verify your email address.

## 2. Add a Sending Domain (Optional but Recommended)

While you can use the default `onboarding@resend.dev` email for testing, for production you should add your own domain:

1. In the Resend dashboard, go to "Domains" and click "Add Domain".
2. Enter your domain (e.g., `goldensmilecreation.com`).
3. Follow the DNS verification steps provided by Resend. This typically involves adding:
   - TXT records for domain verification
   - MX records for receiving emails
   - DKIM records for improved deliverability

## 3. Generate an API Key

1. In the Resend dashboard, go to "API Keys" and click "Create API Key".
2. Give your API key a name (e.g., "Golden Smile Website").
3. Copy the API key - you'll only see it once!

## 4. Configure Your Website

Create a `.env.local` file in the root of your project with the following variables:

```
RESEND_API_KEY=re_abc123yourapikey
NOTIFICATION_EMAIL=contact@goldensmilecreation.com
```

Replace the placeholder values with your actual Resend API key and the email address where you want to receive contact form submissions.

## 5. Understanding the Implementation

This website uses Next.js API routes to handle email sending. When a user submits the contact form:

1. The frontend collects form data and sends it to the `/api/send-email` endpoint.
2. The API endpoint validates the data and uses the Resend API to send an email.
3. The sender will be `onboarding@resend.dev` (or your verified domain email).
4. The recipient will be the email specified in `NOTIFICATION_EMAIL` environment variable.
5. The user's email is set as the reply-to address, so you can reply directly to them.

## 6. Testing

1. Start your development server and navigate to the contact form.
2. Fill out the form with test data and submit it.
3. Check the email account you configured as the recipient to verify the email was received.
4. For debugging, check your Resend dashboard for email sending logs.

## 7. Migrating to Production

When moving to production:

1. Make sure your Resend API key is securely stored as an environment variable.
2. Complete domain verification for better email deliverability.
3. Consider rate limiting the form submission to prevent abuse.
4. Test thoroughly to ensure emails are being delivered properly.

## Troubleshooting

- **Emails not being sent**: Check your Resend dashboard for any errors or failures.
- **API Key errors**: Ensure your API key is correctly set in your environment variables.
- **Deliverability issues**: Verify your domain to improve email deliverability.
- **Error messages**: Review the console for any error messages being logged.

## Email Template

The contact form submission email has a basic HTML template with:

- Sender's name, email, and phone number
- Service of interest
- Message content
- Timestamp of submission

You can modify the email template in the `/api/send-email/route.ts` file to match your branding needs.

## Security Considerations

- Never expose your Resend API key in client-side code.
- Always validate form input both on the client and server side.
- Consider implementing CAPTCHA or other anti-spam measures for public forms.
- Keep your Resend SDK and other dependencies up to date.

For more information, visit [Resend Documentation](https://resend.com/docs).

import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/contact
 *
 * Handles contact form submissions by sending an email via Hostinger SMTP.
 *
 * Environment variables required:
 * - EMAIL_USER: Your Hostinger email (info@greenhillsinternational.com)
 * - EMAIL_PASSWORD: Your email password (app password recommended)
 * - EMAIL_HOST: Hostinger SMTP host (usually smtp.hostinger.com)
 * - EMAIL_PORT: SMTP port (465 for SSL, 587 for TLS)
 */

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON body
    const body = await request.json();
    const { name, email, phone, message, service } = body;
    console.log(name);

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Get email credentials from environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const emailHost = process.env.EMAIL_HOST || "smtp.hostinger.com";
    const emailPort = parseInt(process.env.EMAIL_PORT || "465", 10);

    // Check if credentials are configured
    if (!emailUser || !emailPassword) {
      console.error(
        "Email credentials not configured in environment variables"
      );
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Create a transporter using Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465, // true for 465 (SSL), false for 587 (TLS)
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Verify the connection configuration
    await transporter.verify();

    // Compose the email content
    const mailOptions = {
      from: `"${name}" <${emailUser}>`, // sender address (must be your Hostinger email)
      to: emailUser, // recipient (your Hostinger email)
      replyTo: email, // user's email for easy replies
      subject: `New Contact Form Submission${service ? ` - ${service}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%); color: #E8DCC4; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #2C3E50; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 10px; border-left: 3px solid #D4AF37; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Green Hills International</h2>
              <p>New Contact Form Submission</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${
                phone
                  ? `
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${phone}</div>
              </div>
              `
                  : ""
              }
              ${
                service
                  ? `
              <div class="field">
                <span class="label">Service Interested:</span>
                <div class="value">${service}</div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the contact form on Green Hills International website.</p>
              <p>Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${service ? `Service Interested: ${service}` : ""}

Message:
${message}

---
Reply directly to this email to respond to ${name}.
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully. We will get back to you soon!",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Return error response
    return NextResponse.json(
      {
        error:
          "Failed to send email. Please try again later or contact us directly.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

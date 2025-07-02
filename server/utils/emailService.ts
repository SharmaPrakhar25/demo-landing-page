import nodemailer from 'nodemailer';
import type { ContactSubmission } from '@shared/schema';

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendContactNotification(submission: ContactSubmission): Promise<void> {
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'demo@example.com';
    const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333; text-align: center; margin-bottom: 30px; border-bottom: 3px solid #4F46E5; padding-bottom: 15px;">
            🎨 New Contact Form Submission - Demo Landing Page
          </h1>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #4F46E5; margin-top: 0;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${submission.firstName} ${submission.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="mailto:${submission.email}" style="color: #4F46E5; text-decoration: none;">
                    ${submission.email}
                  </a>
                </td>
              </tr>
              ${submission.company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                <td style="padding: 8px 0; color: #1f2937;">${submission.company}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <span style="background-color: #4F46E5; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                    ${this.formatServiceName(submission.service)}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Submitted:</td>
                <td style="padding: 8px 0; color: #1f2937;">${new Date(submission.createdAt).toLocaleString()}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #4F46E5; margin-top: 0; margin-bottom: 15px;">Message</h3>
            <div style="background-color: white; padding: 15px; border-radius: 6px; border-left: 4px solid #4F46E5; line-height: 1.6; color: #374151;">
              ${submission.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This notification was sent from the Demo Landing Page contact form.
            </p>
            <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0;">
              Submission ID: #${submission.id}
            </p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Demo Landing Page Contact" <${fromEmail}>`,
      to: notificationEmail,
      subject: `🎨 New Contact Form Submission - ${submission.firstName} ${submission.lastName}`,
      html: htmlContent,
      text: `
New Contact Form Submission - Demo Landing Page

Name: ${submission.firstName} ${submission.lastName}
Email: ${submission.email}
${submission.company ? `Company: ${submission.company}` : ''}
Service Interest: ${this.formatServiceName(submission.service)}
Submitted: ${new Date(submission.createdAt).toLocaleString()}

Message:
${submission.message}

---
Submission ID: #${submission.id}
      `.trim(),
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`✅ Contact notification email sent successfully to ${notificationEmail}`);
    } catch (error) {
      console.error('❌ Failed to send contact notification email:', error);
      throw error;
    }
  }

  private formatServiceName(service: string): string {
    const serviceMap: Record<string, string> = {
      'it-staffing': 'IT Staffing Solutions',
      'servicenow-implementation': 'ServiceNow Implementation',
      'servicenow-consulting': 'ServiceNow Consulting',
      'general-inquiry': 'General Inquiry',
    };
    return serviceMap[service] || service;
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('✅ Email service connection verified');
      return true;
    } catch (error) {
      console.error('❌ Email service connection failed:', error);
      return false;
    }
  }
}

export const emailService = new EmailService(); 
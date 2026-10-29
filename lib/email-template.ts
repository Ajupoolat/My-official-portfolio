export interface ContactEmailPayload {
  clientName: string;
  clientEmail: string;
  clientMessage: string;
}

/**
 * Generates both HTML and Plain Text formats for incoming portfolio contact inquiries.
 */
export function generateContactEmail({
  clientName,
  clientEmail,
  clientMessage,
}: ContactEmailPayload) {
  // Sanitize message for HTML insertion
  const sanitizedMessage = clientMessage
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const formattedDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Inquiry from ${clientName}</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f4f5;
            margin: 0;
            padding: 24px;
            color: #18181b;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            border: 1px solid #e4e4e7;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          .header {
            background: #0c0d0d;
            color: #ffffff;
            padding: 24px 32px;
            border-bottom: 2px solid #2B8BFE;
          }
          .header h2 {
            margin: 0;
            font-size: 20px;
            font-weight: 700;
          }
          .header p {
            margin: 4px 0 0 0;
            color: #a1a1aa;
            font-size: 13px;
            font-family: monospace;
          }
          .body {
            padding: 32px;
          }
          .meta-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 24px;
          }
          .meta-row {
            display: flex;
            margin-bottom: 8px;
            font-size: 14px;
          }
          .meta-row:last-child {
            margin-bottom: 0;
          }
          .meta-label {
            width: 90px;
            color: #64748b;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.05em;
          }
          .meta-value {
            color: #0f172a;
            font-weight: 500;
          }
          .meta-value a {
            color: #2B8BFE;
            text-decoration: none;
            font-weight: 600;
          }
          .message-label {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #64748b;
            margin-bottom: 8px;
          }
          .message-box {
            background: #ffffff;
            border-left: 3px solid #2B8BFE;
            padding: 16px 20px;
            font-size: 15px;
            line-height: 1.6;
            color: #1e293b;
            white-space: pre-wrap;
            background: #fdfdfd;
          }
          .footer {
            background: #f8fafc;
            padding: 16px 32px;
            border-top: 1px solid #e2e8f0;
            font-size: 12px;
            color: #94a3b8;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Lead: Portfolio Contact</h2>
            <p>Sent via portfolio contact form</p>
          </div>
          <div class="body">
            <div class="meta-box">
              <div class="meta-row">
                <div class="meta-label">Sender</div>
                <div class="meta-value">${clientName}</div>
              </div>
              <div class="meta-row">
                <div class="meta-label">Email</div>
                <div class="meta-value"><a href="mailto:${clientEmail}">${clientEmail}</a></div>
              </div>
              <div class="meta-row">
                <div class="meta-label">Date</div>
                <div class="meta-value">${formattedDate} (IST)</div>
              </div>
            </div>
            <div class="message-label">Project Brief &amp; Inquiry</div>
            <div class="message-box">${sanitizedMessage}</div>
          </div>
          <div class="footer">
            Tip: You can hit <strong>Reply</strong> directly in your email client to respond to ${clientEmail}.
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
New Project Inquiry via Ajvadu Portfolio
----------------------------------------
From: ${clientName} (${clientEmail})
Date: ${new Date().toISOString()}

Message:
${clientMessage}

Reply directly to this email to contact ${clientEmail}.
  `.trim();

  return { html, text };
}

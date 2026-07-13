import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { htmlToPdf } from '../../../lib/pdf';

export async function POST(req) {
  try {
    const { to, subject, html, invoiceNumber } = await req.json();

    if (!process.env.SMTP_HOST) {
      return NextResponse.json({ error: 'SMTP not configured. Set SMTP_HOST env var.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });

    let attachments = [];
    try {
      const pdfBuffer = await htmlToPdf(html);
      attachments.push({
        filename: `invoice-${invoiceNumber || 'document'}.pdf`,
        content: pdfBuffer,
        contentType: 'application/pdf',
      });
    } catch (pdfErr) {
      console.warn('PDF generation skipped:', pdfErr.message);
    }

    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to,
      subject,
      html,
      attachments,
    });

    return NextResponse.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}

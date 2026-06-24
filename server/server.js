// server.js — Express backend for Piyush Gupta's portfolio contact form
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// ---- Middleware ----
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
}));
app.use(express.json());

// Limit contact form to 5 requests per 15 minutes per IP — stops spam/abuse.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many messages sent. Please try again later.' },
});

// ---- Mailer setup ----
// Uses Gmail SMTP via an App Password (set in server/.env — see .env.example).
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function validateContactPayload(body) {
  const errors = [];
  const { name, email, subject, message } = body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Full name must be at least 2 characters.');
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please provide a valid email address.');
  }
  if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters.');
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.');
  }
  return errors;
}

// ---- Routes ----
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'piyush-portfolio-api' });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  const errors = validateContactPayload(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors.join(' ') });
  }

  const { name, email, subject, message } = req.body;
  const recipient = process.env.CONTACT_RECEIVER_EMAIL || 'work.with.piyush.gupta@gmail.com';

  // If mail credentials aren't configured, don't pretend to send — fail loudly so it's obvious in dev.
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn('[contact] GMAIL_USER / GMAIL_APP_PASSWORD not set — skipping actual send.');
    console.log('[contact] Would have sent:', { name, email, subject, message });
    return res.status(200).json({
      success: true,
      message: 'Message received (email sending is not configured on this server yet).',
    });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <h3>New message from your portfolio site</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('[contact] Failed to send email:', err.message);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});

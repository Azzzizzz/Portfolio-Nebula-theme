import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'missing fields' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'bad email' });
  }

  if (message.length > 4000) {
    return res.status(400).json({ error: 'too long' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: personalTarget(),
      replyTo: email,
      subject: `Portfolio · ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: 'send failed' });
  }
}

function personalTarget() {
  return 'syedaziz9999@gmail.com';
}

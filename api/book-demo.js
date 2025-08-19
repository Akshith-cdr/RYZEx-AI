import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, purpose, contactMethod, hearAbout } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // or your SMTP provider
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER, // set in Vercel dashboard
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"RYZEx AI Website" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO, // your email, set in Vercel env
    subject: "New Book Demo Request",
    text: `
Full Name: ${name}
Email: ${email}
Phone: ${phone}
Purpose: ${purpose}
Preferred Contact Method: ${contactMethod}
How did you hear about us: ${hearAbout}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
}

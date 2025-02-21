import { prisma } from "@/lib/prisma-client";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email) {
    return new Response(
      JSON.stringify({ error: "L'email est requis" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: email }
  });
  if (!user) {
    return new Response(
      JSON.stringify({ error: "Utilisateur introuvable" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  if (!process.env.JWT_SECRET) {
    return new Response(
      JSON.stringify({ error: "JWT secret is not defined" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Configurez le transporteur de courrier électronique
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Envoyez l'email avec le lien de réinitialisation
  const mailOptions = {
    from: process.env.EMAIL_SEND,
    to: email,
    subject: 'Réinitialisation de mot de passe',
    text: `Cliquez sur le lien suivant pour réinitialiser votre mot de passe : ${process.env.FRONTEND_URL}/reset-password?token=${token}`
  };

  await transporter.sendMail(mailOptions);

  return new Response(JSON.stringify({ message: "Email de réinitialisation envoyé" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
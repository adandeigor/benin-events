import { prisma } from "@/lib/prisma-client";
import jwt from "jsonwebtoken";
import ResetPasswordEmail from "@/email-template/reset-password.template";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const token = jwt.sign({ email: email }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

  // Générer le lien de réinitialisation
  const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  // Rendre le template d'email
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to: email,
      subject: 'Vérification d\'email ',
      react: await ResetPasswordEmail({ resetLink: resetLink }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
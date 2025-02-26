import { prisma } from "@/lib/prisma-client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { token, newPassword } = await request.json();
  if (!token || !newPassword) {
    return new Response(
      JSON.stringify({ error: "Le token et le nouveau mot de passe sont requis" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  try {
    if (!process.env.JWT_SECRET) {
      return new Response(
        JSON.stringify({ error: "JWT secret is not defined" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = (decoded as jwt.JwtPayload).email;

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email: email },
      data: { password: hashedPassword }
    });

    return new Response(JSON.stringify({ message: "Mot de passe réinitialisé avec succès" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Token invalide ou expiré" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "@/lib/prisma-client";
import bcrypt from 'bcryptjs';
import { signInSchema } from '@/lib/type-zod';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email et mot de passe sont requis" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const parsedData = signInSchema.parse(email, password);

    const user = await prisma.user.findUnique({
      where: { email: parsedData.email },
    });

    if (!user || !bcrypt.compareSync(parsedData.password, user.password)) {
      return new Response(
        JSON.stringify({ error: "Identifiants invalides" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Créez une session ou un token JWT ici si nécessaire

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la connexion de l'utilisateur :", error);
    return new Response(
      JSON.stringify({ error: "Erreur interne du serveur" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
import { prisma } from "@/lib/prisma-client";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    try {
        const { name, email, password, imageUrl } = await request.json();

        // Vérifier si les champs obligatoires sont remplis
        if (!name || !email ) {
            return new Response(
                JSON.stringify({ error: "Name, email, and password are required" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return new Response(
                JSON.stringify({ error: "User already exists" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }
        let hashedPassword = null;
        // Hacher le mot de passe avant de l'enregistrer
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        // Création de l'utilisateur
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                image: imageUrl || null, // Gérer le cas où imageUrl est undefined
            },
        });

        return new Response(JSON.stringify(newUser), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.error("Erreur lors de l'inscription :", error);
        return new Response(
            JSON.stringify({ error: error.message || "An unknown error occurred" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}

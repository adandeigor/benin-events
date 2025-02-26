import { prisma } from "@/lib/prisma-client";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    const { name, email, password, role_id, phone_number } = await request.json();
    try {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role_id,
                phone_number,
            },
        });
        return new Response(JSON.stringify(user), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "An error occurred", details: error }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
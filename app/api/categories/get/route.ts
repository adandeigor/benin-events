import { prisma } from "@/lib/prisma-client";

export async function GET(request:Request){
    try {
        const categories = await prisma.categories.findMany();
        return new Response(JSON.stringify(categories), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        return new Response(
            JSON.stringify({ error: "Error fetching categories" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
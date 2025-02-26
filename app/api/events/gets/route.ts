import { prisma } from "@/lib/prisma-client";

export async function GET(request: Request) {
    try {
        const events = await prisma.events.findMany();
        return new Response(JSON.stringify(events), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching events:", error);
        return new Response(
            JSON.stringify({ error: "Error fetching events" }), 
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
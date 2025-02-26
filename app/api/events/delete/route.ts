import { prisma } from "@/lib/prisma-client";

export async function DELETE(request: Request) {
    const { event_id } = await request.json() as { event_id: string };

    if (!event_id) {
        return new Response(JSON.stringify({ error: "Event ID is required" }), { status: 400 });
    }

    try {
        await prisma.events.delete({
            where: { event_id: Number(event_id) }
        });
        return new Response(JSON.stringify({ message: "Event deleted successfully" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to delete event" }), { status: 500 });
    }
}
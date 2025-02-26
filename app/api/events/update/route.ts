import { prisma } from "@/lib/prisma-client";

export async function UPDATE(request: Request) {
    const {
        event_id,
        title,
        description,
        start_date,
        end_date,
        start_hours,
        Lieu,
        banner_image,
        entrer,
        images,
        priority,
        organizer_id,
        category_id,
        ticket_price,
        vedette
    } = await request.json() as {
        event_id: string;
        title: string;
        description: string;
        start_date: string;
        end_date: string;
        start_hours: string;
        Lieu: string;
        banner_image: string;
        entrer: string;
        images: string[];
        priority: boolean;
        organizer_id: number;
        category_id: number;
        ticket_price: number;
        vedette: boolean;
    };

    if (!event_id) {
        return new Response(JSON.stringify({ error: "Event ID is required" }), { status: 400 });
    }

    try {
        const update_event = await prisma.events.update({
            where: { event_id: Number(event_id) },
            data: {
                title,
                description,
                start_date,
                end_date,
                start_hours,
                Lieu,
                banner_image,
                entrer,
                images,
                priority,
                organizer_id,
                category_id,
                ticket_price,
                vedette
            }
        });
        return new Response(JSON.stringify(update_event), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to update event" }), { status: 500 });
    }
}
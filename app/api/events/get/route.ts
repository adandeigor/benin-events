import { prisma } from "@/lib/prisma-client";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const event_id = url.searchParams.get('event_id');

    if (!event_id) {
      return new Response(JSON.stringify({ error: "event_id est requis" }), { status: 400 });
    }

    const event = await prisma.events.findUnique({
      where: { event_id: parseInt(event_id) },
    });

    if (!event) {
      return new Response(JSON.stringify({ error: "Événement non trouvé" }), { status: 404 });
    }

    return new Response(JSON.stringify(event), { status: 200 });
  } catch (error) {
    console.error("Error fetching event:", error);
    return new Response(JSON.stringify({ error: "Erreur lors de la récupération de l'événement" }), { status: 500 });
  }
}
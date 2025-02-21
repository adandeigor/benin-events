import { prisma } from "@/lib/prisma-client";

export async function POST(request: Request) {
  try {
    const {
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

    const newEvent = await prisma.events.create({
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
        vedette,
        visibility: "PUBLIC", // or set the appropriate value
      },
    });

    return new Response(JSON.stringify(newEvent), { status: 201 });
  } catch (error) {
    console.error("Error creating event:", error);
    return new Response(JSON.stringify({ error: "Error creating event" }), { status: 500 });
  }
}
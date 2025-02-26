import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        // Récupération de tous les événements depuis le modèle "Events"
        const events = await prisma.events.findMany(); // Assurez-vous que le modèle est bien nommé "events" dans votre schéma Prisma
        return NextResponse.json(events, { status: 200 });
    } catch (error) {
        // Journalisation de l'erreur pour faciliter le débogage
        console.error("Erreur lors de la récupération des événements :", error);

        // Retourne une réponse JSON avec un statut 500 et un message d'erreur
        return NextResponse.json(
            { error: "Erreur lors de la récupération des événements" },
            { status: 500 }
        );
    }
}

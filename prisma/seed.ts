import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding database...");

    // Création des catégories
    const categories = await prisma.categories.createMany({
        data: [
            {
                category_name: "Concert",
                category_description: "Événements musicaux",
            },
            {
                category_name: "Conférence",
                category_description: "Événements professionnels",
            },
            {
                category_name: "Sport",
                category_description: "Compétitions sportives",
            },
            {
                category_name: "Théâtre",
                category_description: "Représentations théâtrales",
            },
        ],
    });

    // Création d'un utilisateur organisateur
    const organizer = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "john.doe@example.com",
            password: "hashedpassword",
            phone_number: "+22990000000",
            role: {
                create: {
                    rule_name: "Organizer",
                    rule_description: "Peut créer des événements",
                },
            },
        },
    });

    // Liste des événements fictifs
    const eventsData = [
        {
            title: "Festival AfroBeat",
            slug: "festival-afrobeat",
            description:
                "Le plus grand festival de musique afrobeat au Bénin !",
            start_date: new Date("2025-04-10T18:00:00Z"),
            end_date: new Date("2025-04-12T23:00:00Z"),
            start_hours: new Date("2025-04-10T18:00:00Z"),
            location: "Stade de l'Amitié, Cotonou",
            banner_image: "/images/hero-img1.jpg",
            entry_fee: "Gratuit",
            images: ["/images/hero-img1.jpg", "/images/hero-img2.webp"],
            priority: true,
            organizer_id: organizer.user_id,
            category_id: 1,
            ticket_price: 5000,
            vedette: true,
            visibility: "PUBLIC",
        },
        {
            title: "Tech Innov Summit",
            slug: "tech-innov-summit",
            description:
                "Un sommet sur les innovations technologiques en Afrique de l'Ouest.",
            start_date: new Date("2025-06-15T09:00:00Z"),
            end_date: new Date("2025-06-15T18:00:00Z"),
            start_hours: new Date("2025-06-15T09:00:00Z"),
            location: "Palais des Congrès, Cotonou",
            banner_image: "/images/hero-img3.jpg",
            entry_fee: "2500 FCFA",
            images: ["/images/hero-img3.jpg", "/images/hero-img4.jfif"],
            priority: false,
            organizer_id: organizer.user_id,
            category_id: 2,
            ticket_price: 2500,
            vedette: false,
            visibility: "PUBLIC",
        },
        {
            title: "Marathon de Cotonou",
            slug: "marathon-cotonou",
            description: "Course de 42 km à travers la ville de Cotonou.",
            start_date: new Date("2025-09-20T06:00:00Z"),
            end_date: new Date("2025-09-20T12:00:00Z"),
            start_hours: new Date("2025-09-20T06:00:00Z"),
            location: "Boulevard de la Marina, Cotonou",
            banner_image: "/images/hero-img5.jfif",
            entry_fee: "1000 FCFA",
            images: ["/images/hero-img5.jfif", "/images/hero-img6.jfif"],
            priority: true,
            organizer_id: organizer.user_id,
            category_id: 3,
            ticket_price: 1000,
            vedette: true,
            visibility: "PUBLIC",
        },
    ];

    // Insérer les événements
    for (const event of eventsData) {
        await prisma.events.create({ data: event });
    }

    console.log("Seeding terminé !");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

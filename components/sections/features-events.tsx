import { cn } from "@/lib/utils";
import {
    Calendar,
    Share,
    Megaphone,
    Ticket,
    Mail,
    Book,
    QrCode,
    Settings,
} from "lucide-react";
import { ColourfulText } from "@/components/ui/colourful-text";

export function FeaturesEvents() {
    const features = [
        {
            title: "Gestion des évènements",
            description:
                "Créez, gérez et organisez des événements facilement avec des outils puissants.",
            icon: <Calendar />,
        },
        {
            title: "Partage d'événements",
            description:
                "Partagez vos événements sur les réseaux sociaux et avec votre communauté.",
            icon: <Share />,
        },
        {
            title: "Marketing d'événements",
            description:
                "Utilisez des outils marketing pour promouvoir vos événements à grande échelle.",
            icon: <Megaphone />,
        },
        {
            title: "Billetterie en ligne",
            description:
                "Vendez vos billets directement sur la plateforme avec des options de paiement sécurisées.",
            icon: <Ticket />,
        },
        {
            title: "Newsletter",
            description:
                "Envoyez des newsletters à vos participants pour les tenir informés des mises à jour.",
            icon: <Mail />,
        },
        {
            title: "Blog de l'événement",
            description:
                "Publiez des articles, des mises à jour et des histoires pour attirer plus de participants.",
            icon: <Book />,
        },
        {
            title: "QR Code personnalisé",
            description:
                "Générez des QR codes pour un accès rapide aux événements et à la billetterie.",
            icon: <QrCode />,
        },
        {
            title: "Administration complète",
            description:
                "Accédez à un tableau de bord pour gérer tous les aspects de vos événements et billetterie.",
            icon: <Settings />,
        },
    ];

    return (
        <>
            <h2 className="scroll-m-20 mt-24 mb-10 text-center pb-2 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight first:mt-0">
                Tout ce dont vous avez besoin pour des
                <br /> <ColourfulText text="événements réussis !" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) &&
                    "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};

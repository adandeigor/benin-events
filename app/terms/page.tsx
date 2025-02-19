"use client";

import {
    ShieldCheck,
    FileText,
    Globe,
    UserCheck,
    ShoppingCart,
    AlertTriangle,
} from "lucide-react";

export default function TermsOfService() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Bannière */}
            <div className="bg-primary text-primary-foreground py-12 text-center rounded-lg shadow-md">
                <h1
                    className="text-3xl font-bold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Conditions Générales d'Utilisation
                </h1>
            </div>

            <div className="mt-8 space-y-6 text-foreground">
                <p>
                    Bienvenue sur <strong>Bénin Events</strong>. En utilisant
                    notre plateforme, vous acceptez les présentes conditions
                    générales d'utilisation.
                </p>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <UserCheck className="text-primary" /> Acceptation des
                        conditions
                    </h2>
                    <p>
                        En accédant à Bénin Events, vous acceptez sans réserve
                        ces conditions d'utilisation.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FileText className="text-primary" /> Objet de la
                        plateforme
                    </h2>
                    <p>
                        Bénin Events est une plateforme de billetterie et de
                        promotion d'événements en Afrique de l'Ouest.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <ShoppingCart className="text-primary" /> Conditions de
                        vente
                    </h2>
                    <p>
                        L'achat de billets est soumis aux conditions spécifiques
                        de chaque événement. Aucun remboursement n'est possible
                        sauf en cas d'annulation.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <ShieldCheck className="text-primary" /> Responsabilités
                    </h2>
                    <p>
                        Nous ne pouvons être tenus responsables des annulations
                        ou modifications des événements.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <AlertTriangle className="text-primary" /> Modifications
                        des CGU
                    </h2>
                    <p>
                        Nous nous réservons le droit de modifier ces conditions
                        à tout moment. Vous serez informé des mises à jour sur
                        notre site.
                    </p>
                </section>
            </div>
        </div>
    );
}

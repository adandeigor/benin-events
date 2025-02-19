"use client";

import {
    ShieldCheck,
    Lock,
    User,
    FileText,
    Globe,
    Trash2,
    Mail,
} from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Bannière */}
            <div className="bg-primary text-primary-foreground py-12 text-center rounded-lg shadow-md">
                <h1
                    className="text-3xl font-bold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Politique de Confidentialité
                </h1>
            </div>

            <div className="mt-8 space-y-6 text-foreground">
                <p>
                    Chez <strong>Bénin Events</strong>, nous attachons une
                    grande importance à la protection de vos données
                    personnelles. Cette politique explique comment nous
                    collectons, utilisons et protégeons vos informations.
                </p>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <User className="text-primary" /> Données collectées
                    </h2>
                    <ul className="list-none mt-2 space-y-2">
                        <li className="flex items-center gap-2">
                            <ShieldCheck className="text-primary" /> Nom,
                            prénom, e-mail, numéro de téléphone
                        </li>
                        <li className="flex items-center gap-2">
                            <Lock className="text-primary" /> Coordonnées
                            bancaires pour les paiements
                        </li>
                        <li className="flex items-center gap-2">
                            <Globe className="text-primary" /> Adresse IP,
                            cookies et préférences utilisateur
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FileText className="text-primary" /> Finalités du
                        traitement
                    </h2>
                    <ul className="list-none mt-2 space-y-2">
                        <li className="flex items-center gap-2">
                            <ShieldCheck className="text-primary" /> Gestion des
                            billets et transactions
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="text-primary" /> Envoi de
                            communications et promotions
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Trash2 className="text-primary" /> Vos droits
                    </h2>
                    <p>
                        Vous pouvez demander la modification ou suppression de
                        vos données en nous contactant à{" "}
                        <strong>[adresse e-mail]</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <ShieldCheck className="text-primary" /> Sécurité des
                        données
                    </h2>
                    <p>
                        Nous mettons en œuvre des mesures de sécurité adaptées
                        pour protéger vos informations contre tout accès non
                        autorisé.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FileText className="text-primary" /> Partage des
                        données
                    </h2>
                    <p>
                        Vos informations ne seront jamais vendues. Elles peuvent
                        être partagées avec des partenaires uniquement pour
                        assurer nos services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Trash2 className="text-primary" /> Durée de
                        conservation
                    </h2>
                    <p>
                        Nous conservons vos données aussi longtemps que
                        nécessaire pour nos services et en conformité avec la
                        loi.
                    </p>
                </section>
            </div>
        </div>
    );
}

"use client";

import React from "react";
import { ColourfulText } from "@/components/ui/colourful-text";

export function Hero() {
    return (
        <>
            <section className="flex items-center justify-center w-full min-h-[60vh] flex-col px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Retrouvez tous vos évènements <br />
                    chez <ColourfulText text="Bénin Events." />
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mb-4 md:mb-8">
                    Consultez notre calendrier, trouvez vos événements préférés
                    <br /> et réservez vos places pour s'enjailler.
                </p>
            </section>
        </>
    );
}

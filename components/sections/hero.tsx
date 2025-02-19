"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ColourfulText } from "@/components/ui/colourful-text";
import { SearchEvent } from "./search";

export function Hero() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full min-h-screen flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Ici c'est <ColourfulText text="Bénin Events" />, <br /> et on
                s'enjaille.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mb-4 md:mb-8">
                Retrouvez les meilleurs événements du Bénin, <br /> et partagez
                les vôtres !
            </p>
            <SearchEvent />
        </BackgroundLines>
    );
}

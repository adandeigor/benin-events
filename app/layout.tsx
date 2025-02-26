import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SessionProvider } from "next-auth/react";

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bénin Events",
    description: "Bénin Events, online event ticketing",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            
            <body
                className={`${playfairDisplay.variable} ${montserrat.variable} antialiased font-montserrat`}
            >
                
                
                {children}
                
            </body>
        </html>
    );
}

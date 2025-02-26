"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Sun, Moon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { SearchEvent } from "./search";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Évènements", href: "/events" },
        { name: "À propos", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Soumettre un évènement", href: "/submit-event" },
    ];

    return (
        <nav className="relative w-full bg-background text-foreground shadow-md border-b top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Mobile & Tablet */}
                <div className="flex items-center lg:hidden">
                    <Drawer open={open} onOpenChange={setOpen}>
                        <DrawerTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="bg-background text-foreground p-10">
                            <div className="flex flex-col space-y-4 mt-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="text-sm font-medium hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </DrawerContent>
                    </Drawer>

                    <h1 className="hidden md:inline-block text-lg font-bold font-playfair">
                        Bénin Events
                    </h1>
                </div>

                {/* Desktop & Tablet */}
                <div className="hidden lg:flex items-center space-x-6">
                    <h1 className="text-lg font-bold font-playfair">
                        Bénin Events
                    </h1>
                    <div className="flex space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Search & Theme Toggle */}
                <div className="flex items-center space-x-4">
                    <SearchEvent />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="cursor-pointer"
                    >
                        {theme === "dark" ? (
                            <Sun className="h-6 w-6" />
                        ) : (
                            <Moon className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>
        </nav>
    );
}

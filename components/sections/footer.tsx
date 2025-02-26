"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">À propos</h3>
                        <p className="text-sm">
                            Bénin Events est votre plateforme pour organiser et
                            découvrir des événements culturels inoubliables au
                            Bénin.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Liens rapides
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/events"
                                    className="hover:underline"
                                >
                                    Tous les évènements
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline">
                                    À propos de nous
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="hover:underline"
                                >
                                    Politique de confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:underline">
                                    Conditions générales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:underline"
                                >
                                    Contactez-nous
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Newsletter
                        </h3>
                        <p className="text-sm mb-4">
                            Inscrivez-vous pour recevoir les dernières nouvelles
                            et mises à jour sur les événements au Bénin.
                        </p>
                        <form className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
                            >
                                S'inscrire
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-300 dark:border-gray-700 my-6" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <p className="text-sm">
                        © {new Date().getFullYear()} Bénin Events. Tous droits
                        réservés.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:text-primary transition"
                        >
                            <Facebook size={24} />
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="hover:text-primary transition"
                        >
                            <Twitter size={24} />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-primary transition"
                        >
                            <Instagram size={24} />
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-primary transition"
                        >
                            <Linkedin size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

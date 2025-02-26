"use client";

import React from "react";
import { motion } from "motion/react";

const images = [
    "/images/hero-img1.jpg",
    "/images/hero-img2.webp",
    "/images/hero-img3.jpg",
    "/images/hero-img4.jfif",
];

const imagesLeft = [
    "/images/hero-img5.jfif",
    "/images/hero-img6.jfif",
    "/images/hero-img7.jfif",
    "/images/hero-img8.jfif",
];

export function HeroImages() {
    return (
        <>
            <div className="overflow-hidden w-full relative">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        className="flex gap-4"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ display: "flex", width: "200%" }}
                    >
                        {[
                            ...images,
                            ...images,
                            ...images,
                            ...images,
                            ...images,
                            ...images,
                            ...images,
                            ...images,
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-1/3 md:w-1/4 lg:w-1/8 h-36 object-cover rounded-lg border"
                                style={{ flex: "0 0 auto" }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="overflow-hidden w-full relative mt-5">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        className="flex gap-4"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ display: "flex", width: "200%" }}
                    >
                        {[
                            ...imagesLeft,
                            ...imagesLeft,
                            ...imagesLeft,
                            ...imagesLeft,
                            ...imagesLeft,
                            ...imagesLeft,
                            ...imagesLeft,
                            ...imagesLeft,
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-1/3 lg:w-1/8 h-36 object-cover rounded-lg border"
                                style={{ flex: "0 0 auto" }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}

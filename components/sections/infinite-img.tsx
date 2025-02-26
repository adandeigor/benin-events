"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

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

export function InfiniteImg() {
    return (
        <>
            <div className="h-[250px] my-5 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    imageUrls={images}
                    direction="right"
                    speed="fast"
                />
            </div>
            <div className="h-[250px] my-5 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    imageUrls={imagesLeft}
                    direction="left"
                    speed="fast"
                />
            </div>
        </>
    );
}

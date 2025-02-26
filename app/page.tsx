import { FeaturesEvents } from "@/components/sections/features-events";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { InfiniteImg } from "@/components/sections/infinite-img";
import { LatestArticles } from "@/components/sections/latest-articles";
import { Navbar } from "@/components/sections/navbar";
import { VedetteEvents } from "@/components/sections/vedette-events";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <InfiniteImg />
            <VedetteEvents />
            <FeaturesEvents />
            <LatestArticles />
            <Footer />
        </>
    );
}

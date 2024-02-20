"use client";

import { useEffect, useRef, useState } from "react";
import HeroBanner from "./HeroBanner";
import { HeroBannerType } from "@/types/types";

const HeroBannerCarousel = ({heroData} : { heroData: HeroBannerType[] }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const interval = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }

    const changeSlide = (index: number) => {
        if (interval.current !== null) {
            clearInterval(interval.current);
        }
        setCurrentSlide(index);
        interval.current = setInterval(nextSlide, 5000);
    }


    useEffect(() => {
        // On mount change slide every 3 seconds. On unmount clear that interval.
        interval.current = setInterval(nextSlide, 5000);
        return () => clearInterval(interval.current!);
    })

    return (
        <div className="relative h-96">
            <HeroBanner 
                image={heroData[currentSlide].image} 
                title={heroData[currentSlide].title} 
                buttonText={heroData[currentSlide].buttonText} 
                buttonUrl={heroData[currentSlide].buttonUrl}
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 pb-4">
                {heroData.map((_bannerData, index) => (
                    <div key={index} 
                        className={`carousel-dot ${index === currentSlide ? "bg-camel-yellow-light" : ""}`}
                        onClick={() => changeSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeroBannerCarousel
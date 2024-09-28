import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { ContentSection } from "@/components/home/ContentSection"; 
import { Courses } from "@/components/home/ContentSection/Courses";
import { HeroSection } from "@/components/home/HeroSection";
import React from "react";


export const Home: React.FC = () => {
    return (
        <>  
            <Navbar />
            <HeroSection />
            <ContentSection />
            <Courses />
            <Footer />
        </>
    )
}
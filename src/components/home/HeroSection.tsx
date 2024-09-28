import React from "react";
import flower from "@/assets/flower-bg.svg";
import studentAvatars from "@/assets/Student Avatars.svg";
import { Button } from "../ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-custom-violet flex flex-col md:flex-row items-center p-6 md:p-8">
      <div className="w-full md:w-1/3 text-white space-y-4 md:space-y-6 md:px-10">
      <h2 className="text-xs text-gray-500" ><span> LIVE COURSE &#903; </span>  ART, DESIGN ENTREPRENURSHIP</h2>
        <h1 className="text-4xl md:text-4xl font-semibold">Artpreneur Program</h1>

        <div className="flex items-center gap-2">
          <img src={studentAvatars} alt="Students" className="h-6 md:h-8" />
          <p className="text-sm md:text-lg">+ 250 students enrolled</p>
        </div>

        <p className="text-xs md:text-gray-400">
          This Deca-dimensional program is about Art, Design,
          Creativity, Software, Aesthetics, Teaching,
          Communication, Sales, Branding and Marketing.
        </p>

        <Button className="bg-white text-black px-6 py-2 text-sm md:text-base font-semibold rounded-full">
          Get in touch
        </Button>
      </div>

      <div className="w-full md:w-2/3 mt-6 md:mt-0">
        <img src={flower} alt="Background Art" className="object-cover w-full h-auto rounded-lg" />
      </div>
    </section>
  );
};
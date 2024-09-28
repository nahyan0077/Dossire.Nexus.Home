import React from "react";
import flower from "@/assets/flower-bg.svg";
import studentAvatars from "@/assets/Student Avatars.svg";
import { Button } from "../ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-custom-violet flex items-center p-8">
    {/* left-section */}
      <div className="w-1/2 text-white space-y-6 px-10">

      <h2 className="text-xs text-gray-500" ><span> LIVE COURSE &#903; </span>  ART, DESIGN ENTREPRENURSHIP</h2>
   
        <h1 className="text-5xl  font-allerta">Artpreneur Program</h1>


        <div className="flex items-center gap-2">
          <img src={studentAvatars} alt="Students" className="h-8" />
          <p className="text-lg">+ 250 students enrolled</p>
        </div>


        <p className="text-sm">
          This Deca-dimensional program is about Art, Design, Creativity, 
          Software, Aesthetics, Teaching, Communication, Sales, Branding, and Marketing.
        </p>


        <Button className="bg-white text-black px-6 py-2 font-semibold">
          Get in Touch
        </Button>
      </div>

        {/* right-section */}
      <div className="w-1/2">
        <img src={flower} alt="Background Art" className="object-cover w-full h-auto" />
      </div>
    </section>
  );
};

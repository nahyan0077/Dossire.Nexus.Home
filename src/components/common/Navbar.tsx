import React from "react";
import logo from "@/assets/Logo.svg"; 
import { Button } from "@/components/ui/button"; 
import { IoIosArrowDown } from "react-icons/io";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-custom-violet text-white p-6">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center">
          <img src={logo} alt="Atma Studios" className="h-8 mr-4" />
        </div>

        <div className="hidden md:flex space-x-8 text-sm">
            <div className="flex items-center gap-2" >
                <span> <IoIosArrowDown /> </span>
                <a href="#" className="hover:text-gray-300">  Courses</a> 
            </div>
            <div className="flex items-center gap-2" >
                <span> <IoIosArrowDown /> </span>
                <a href="#" className="hover:text-gray-300">  Events</a>
            </div>
            <div className="flex items-center gap-2" >
                <span> <IoIosArrowDown /> </span>
                <a href="#" className="hover:text-gray-300">  Community</a>
            </div>
            <div className="flex items-center gap-2" >
                <a href="#" className="hover:text-gray-300">  For Teams</a>
            </div>
        </div>


        <div>
          <Button className="bg-white text-black hover:bg-gray-200">
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

import React, { useState } from "react";
import logo from "@/assets/footer-logo.svg";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-custom-violet text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Atma Studios" className="h-6 md:h-8" />
          <p className="hidden md:block " > Atma Studios </p>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        <div className={`${isMenuOpen ? 'flex gap-10 min-h-screen pl-10' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-custom-violet md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8 `}>
          <a href="#" className="hover:text-gray-300 text-sm flex items-center justify-between">
          <span className="w-1 h-1 bg-red-500 rounded-full mr-3"></span>
            Courses { !isMenuOpen && <IoIosArrowDown className="ml-1" />}
          </a>
          <a href="#" className="hover:text-gray-300 text-sm flex items-center justify-between">
            Events { !isMenuOpen && <IoIosArrowDown className="ml-1" />}
          </a>
          <a href="#" className="hover:text-gray-300 text-sm flex items-center justify-between">
            Community { !isMenuOpen && <IoIosArrowDown className="ml-1" />}
          </a>
          <a href="#" className="hover:text-gray-300 text-sm">
            About us
          </a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-white text-black hover:bg-gray-200 text-sm">
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};
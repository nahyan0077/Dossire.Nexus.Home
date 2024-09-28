import React from "react";
import logo from '@/assets/footer-logo.svg'
import dossier from '@/assets/dossire.svg'
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-custom-violet text-white py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
                    <div className="md:w-1/3">
                        <img src={logo} alt="Atma Studios Logo" className="mb-4 h-8" />
                        <p className="text-sm mb-2">Atma Studios · Learn UX/UI Bootcamps & Online Courses</p>
                        <p className="text-sm mb-2">132 Dartmouth Street, KK Nagar, Chennai 600025.</p>
                        <div className="flex items-center space-x-2 mb-1">
                            <MdOutlineMail size={16} />
                            <p className="text-sm">demo@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FiPhone size={16} />
                            <p className="text-sm">+91 93456 78459</p>
                        </div>
                    </div>

                    <div className="md:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Courses</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">UX/UI Bootcamp</a></li>
                            <li><a href="#" className="hover:underline">Design System Bootcamp</a></li>
                            <li><a href="#" className="hover:underline">UX Research Bootcamp</a></li>
                            <li><a href="#" className="hover:underline">UI Design Bootcamp</a></li>
                        </ul>
                    </div>

                    <div className="md:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Atma Studios</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Our story</a></li>
                            <li><a href="#" className="hover:underline">Get in Touch</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">Threads</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 md:mt-16 pt-4 border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-xs md:text-sm">
                        © Atma Studios 
                        <a href="#" className="text-purple-400 hover:underline ml-1">Terms</a> & 
                        <a href="#" className="text-purple-400 hover:underline ml-1">Privacy</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-xs md:text-sm">Powered by</span>
                        <img src={dossier} alt="Dossier Logo" className="h-4 md:h-5" />
                        <span className="font-semibold text-sm md:text-base">dossier.nexus</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
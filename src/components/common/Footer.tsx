import React from "react";
import logo from '@/assets/footer-logo.svg'
import dossier from '@/assets/dossire.svg'
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-custom-violet text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col space-y-8">
                    <div>
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

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Courses</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">UX/UI Bootcamp</a></li>
                            <li><a href="#" className="hover:underline">Design System Bootcamp</a></li>
                            <li><a href="#" className="hover:underline">UX Research Bootcamp</a></li>
                            <li><a href="#" className="hover:underline">UI Design Bootcamp</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Atma Studios</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Our story</a></li>
                            <li><a href="#" className="hover:underline">Get in Touch</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">Threads</a></li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                        <div className="flex items-center justify-center space-x-1 text-xs mb-4">
                            <FaRegCopyright /> 
                            <p>dossier.nexus</p>
                            <a href="#" className="text-purple-400 hover:underline">Terms</a>
                            <span>&</span>
                            <a href="#" className="text-purple-400 hover:underline">Privacy</a>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="text-xs">Powered by</span>
                            <img src={dossier} alt="Dossier Logo" className="h-4" />
                            <span className="font-semibold text-sm">dossier.nexus</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
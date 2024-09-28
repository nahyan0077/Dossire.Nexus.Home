import React from "react";
import logo from '@/assets/footer-logo.svg'
import dossier from '@/assets/dossire.svg'
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";


export const Footer: React.FC = () => {
    return (
        <footer className="bg-custom-violet text-white py-10">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <img src={logo} alt="Atma Studios Logo" className="mb-4" />
                        <p className="text-sm mb-2">Atma Studios · Learn UX/UI Bootcamps & Online Courses</p>
                        <p className="text-sm mb-2">132 Dartmouth Street, KK Nagar, Chennai 600025.</p>
                        <div className="flex gap-2 items-center" >
                            <MdOutlineMail />
                            <p className="text-sm mb-1"> demo@gmail.com</p>
                        </div>
                        <div className="flex gap-2 items-center" >
                            <FiPhone size={15} />
                            <p className="text-sm mb-1"> +91 93456 78459</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Courses</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">UX/UI Bootcamp</a></li>
                            <li><a href="#" className="hover:underline">Design System Bootcamp</a></li>
                            <li><a href="#" className="hover:underline">UX Research Bootcamp</a></li>
                            <li><a href="#" className="hover:underline">UI Design Bootcamp</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Atma Studios</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Our story</a></li>
                            <li><a href="#" className="hover:underline">Get in Touch</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">Threads</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2" >
                    <FaRegCopyright /> 
                    <p> Atma Studios <a href="#" className="text-purple-400 hover:underline">Terms</a> & <a href="#" className="text-purple-400 hover:underline">Privacy</a></p>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">Powered by</span>
                        <img src={dossier} alt="Logo" className="h-6" />
                        <span className="ml-2 font-bold text-xl">dossier.nexus</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
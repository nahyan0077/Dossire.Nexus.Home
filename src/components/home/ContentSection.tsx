import React from "react";
import { OverView } from "./ContentSection/OverView";
import { Posts } from "./ContentSection/Posts";
import { Faq } from "./ContentSection/Faq";
import { Button } from "../ui/button";

export const ContentSection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row p-10">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <div 
                    className="bg-white rounded-3xl shadow-md p-6 flex flex-col border-l-2 mt-10 sticky top-20"
                    style={{ maxHeight: 'calc(200vh - 40px)', overflowY: 'auto' }}
                >
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Artpreneur Program
                    </h2>
                    <ul className="space-y-3 mb-6 flex-grow ml-5">
                        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Overview</li>
                        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Posts</li>
                        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Next Batches</li>
                        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">FAQ</li>
                    </ul>
                    <Button className="w-full bg-black text-white hover:bg-gray-800 py-6">
                        Get in touch
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 md:pl-10">
                <OverView />
                <Posts />
                <Faq />
            </div>
        </section>
    );
};

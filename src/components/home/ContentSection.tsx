import React from "react";
import { OverView } from "./ContentSection/OverView";
import { Posts } from "./ContentSection/Posts";
import { Faq } from "./ContentSection/Faq";
import { Courses } from "./ContentSection/Courses";

export const ContentSection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row p-10">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <div className="bg-gray-500 h-60">
                    {/* Content for the left sidebar */}
                </div>
            </div>
            <div className="w-full md:w-3/4 md:pl-10">
                <OverView />
                <Posts />
                <Faq />
                <Courses />
            </div>
        </section>
    );
};
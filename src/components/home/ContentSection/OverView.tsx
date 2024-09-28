import React from "react";
import overviewImage from '@/assets/overview-image.svg';

export const OverView: React.FC = () => {

    const elements = ["User research", "Wireframing", "Prototyping", "Usability testing"];

    return (
        <div className="p-8 ">

            <h2 className="text-xs font-semibold text-gray-500 tracking-wide uppercase">Overview</h2>

            <h2 className="text-2xl font-semibold mt-2 mb-4">Be a part of the Creative Revolution.</h2>

            <p className="text-xs text-gray-700 mb-6">
                Artpreneur program offers the following essential elements – art, design, creativity, technical tools, aesthetics, business skills, branding, and teaching. The course is not limited to just these 8 elements but includes a gamut of aspects like hands-on practice sessions, interactive discussions, live projects, brainstorming, time management, personality development, and insights to make an individual distinct in the creative industry.
            </p>


            <div className="flex flex-col md:flex-row  mb-4 items-center">
                <p className="text-xs font-semibold mr-44 lg:mr-8 mb-2">Skills you will learn:</p>
                <div className="flex flex-wrap gap-2">
                    {elements.map((text) => (
                        <button
                            key={text}
                            className="text-xs bg-purple-100 rounded-xl px-3 py-1 border-2 border-purple-400 mr-2"
                        >
                            {text}
                        </button>
                    ))}
                </div>
            </div>


            <div className="flex flex-col md:flex-row mb-4">
                <p className="text-xs font-semibold mr-14">Prerequisites:</p>
                <p className="text-xs text-gray-600">Absolutely no experience is required. We start with the Basics!</p>
            </div>


            <div className="flex flex-col md:flex-row mb-8">
                <p className="text-xs font-semibold mr-28">Level:</p>
                <p className="text-xs text-gray-600">Beginner</p>
            </div>

            {/* overview image */}
            <div className="relative">
                <img
                    src={overviewImage}
                    alt="Overview"
                    className="w-full h-auto rounded-lg shadow-lg"
                />

            </div>
        </div>
    );
};

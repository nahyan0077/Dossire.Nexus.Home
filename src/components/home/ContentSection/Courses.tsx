import { Button } from "@/components/ui/button";
import React from "react";
import { Card } from "@/components/ui/card"; 
import photo from "@/assets/courses.svg";
import avatars from '@/assets/Student Avatars.svg'

export const Courses: React.FC = () => {

    return (
        <>
            <div className="p-8">
                <div className="w-full md:w-1/3">
                    <h2 className="text-xs font-semibold text-gray-400 tracking-wide">
                        MORE COURSES ON ART AND ENTREPRENEURSHIP
                    </h2>
                    <h2 className="text-3xl font-semibold mt-2 mb-2">
                        Accelerate your career
                    </h2>
                    <h2 className="text-3xl font-semibold mt-2 mb-4">
                        in a <span className="text-gray-500">UX/UI bootcamp</span>
                    </h2>
                    <p className="text-xs text-gray-700 mb-6">
                        Start a new career in tech or accelerate in your existing design,
                        engineering or product role with the accountability of a live class
                    </p>
                    <Button> View all courses </Button>
                </div>

                {/* Course cards  */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, index) => (
                        <Card key={index} className="shadow-md rounded-md">
                            <div className="relative">
                                <img src={photo} alt={`Master Digital `} width={400} height={300} className="rounded-t-md " />
                                <span className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    Course
                                </span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-semibold mb-2 text-gray-900">
                                Master Digital Product Design: UX Research & UI Design
                                </h3>
                                <div className="flex justify-between items-center" >
                                    <div>
                                        <img src={avatars} alt="" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mt-2">
                                            Starting from
                                        </p>
                                        <p className="text-sm font-semibold text-gray-900">
                                        ₹74,700
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

import { Button } from "@/components/ui/button";
import React from "react";

export const Courses: React.FC = () => {
    return (
        <>
            <div className="p-8" >
                <h2 className="text-xs font-semibold text-gray-500 tracking-wide uppercase">MORE COURSES on ART AND ENTREPRENEURSHIP</h2>
                <h2 className="text-3xl font-bold mt-2 mb-4">Accelerate your career </h2>
                <h2 className="text-3xl font-bold mt-2 mb-4">in a UX/UI bootcamp</h2>
                <p className="text-base text-gray-700 mb-6">
                Start a new career in tech or accelerate in your existing design, engineering or product role with the accountability of a live class            
                </p>
                <Button> View all courses </Button>
            </div>
        </>
    )
}
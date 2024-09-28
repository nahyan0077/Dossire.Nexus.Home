import React from "react";
import { OverView } from "./ContentSection/OverView";
import { Posts } from "./ContentSection/Posts";
import { Faq } from "./ContentSection/Faq";
import { Courses } from "./ContentSection/Courses";

export const ContentSection : React.FC = () => {
    return (
        <>
            <section className="flex h-20 p-10 " >
                <div className="w-1/4 " >

                </div>
                <div className="w-3/4 " >
                    <OverView />
                    <Posts />
                    <Faq />
                    <Courses />
                </div>
            </section>
        </>
    )
}
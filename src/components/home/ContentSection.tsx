import React from "react";
import { OverView } from "./ContentSection/OverView";

export const ContentSection : React.FC = () => {
    return (
        <>
            <section className="flex h-20" >
                <div className="w-1/4 bg-gray-700" >

                </div>
                <div className="w-3/4 " >
                    <OverView />
                </div>
            </section>
        </>
    )
}
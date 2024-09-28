import React from "react";
import post1 from '@/assets/post-1.svg'
import post2 from '@/assets/post-2.svg'
import post3 from '@/assets/post-3.svg'
import post4 from '@/assets/post-4.svg'
import post5 from '@/assets/post-5.svg'

export const Posts : React.FC = () => {

    const images = [post1, post2, post3, post4, post5]

    return (
        <>
        <div className="p-8">

            <h2 className="text-xs font-semibold text-gray-500 tracking-wide uppercase">Posts</h2>
            <h2 className="text-3xl font-bold mt-2 mb-4">Learn live with industry experts</h2>

            <p className="text-base text-gray-700 mb-6">
                During our Bootcamp you’ll dive into live classes with a team of Design teachers who are actively rockin’ their roles as Creative Directors, Brand Architects, and more.
            </p>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    images.map((post, index) => (
                        <div key={index} className="relative bg-white p-4 ">
                            <img src={post}  className="w-full " />
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}
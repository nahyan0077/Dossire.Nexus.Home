import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import faqImage from '@/assets/FAQ Image.svg'

export const Faq: React.FC = () => {
    return (
        <div className="p-8 ">
            <h2 className="text-xs font-semibold text-gray-500 tracking-wide uppercase">FAQ</h2>
            <h2 className="text-3xl font-bold mt-2 mb-4">Got a question about our course?</h2>
            <p className="text-base text-gray-700 mb-6">
                Chances are at this stage you have a couple questions. We encourage our students to ask questions directly and you can arrange a quick call with us anytime.
            </p>
            <div className="space-y-2">
                {[...Array(5)].map((_) => (
                    <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="px-4 py-3  hover:no-underline">Do I need UX/UI experience?</AccordionTrigger>
                        <AccordionContent className="px-10 py-2">
                            UX/UI experience is essential for design-specific roles, other positions benefit from at least a basic understanding of these principles. Investing time in learning the fundamentals of UX/UI can enhance collaboration, improve product quality, and contribute to a more seamless user experience.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                ))}
            </div>
            <Card className="mt-6 bg-white">
                <CardContent className="p-6">
                    <div className="flex ">
                        <div className="w-1/2 pr-4 flex flex-col justify-around">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Got another question?</h3>
                                <p className="text-sm text-gray-600 ">
                                    If you've got another questions about our Bootcamp you can send us a message or join an intro session to meet our team and others.
                                </p>
                            </div>
                            <div className="space-y-2 w-full">
                                <Button className=" bg-black text-white">Send message</Button>
                                <br />
                                <Button variant="outline" className=" border-2 border-black text-black">Join a free intro session</Button>
                            </div>
                        </div>
                        <div className="w-1/2 ">
                            <img src={faqImage} alt="Student with laptop" className="rounded-lg" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
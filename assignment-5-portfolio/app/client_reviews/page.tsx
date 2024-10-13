"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";
import cb1 from "@/app/cb1.png"
import cb2 from "@/app/cb2.png"
import cg1 from "@/app/cg1.png"

// Swiper components, modules and styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";




export default function Client_reviews() {
    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-indigo-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">CLIENT REVIEWS</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"><strong><i>"As a freelance web designer, I always aim to deliver the best to my clients."</i></strong></p>
                    </div>
                </div>
            </div>

            <Swiper
                navigation
                pagination={{ type: "bullets", clickable: true }}
                autoplay={true}
                loop={true}
                modules={[Autoplay, Navigation]}>
                <SwiperSlide >
                    <div className="p-2 md:w-1/3 sm:mb-0 mb-6 clientcard client">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="testimonial" className="w-50  g1 h-50 pt-5 mb-8 object-cover justify-center items-center object-center  inline-block " src={cb1} />
                        </div>

                        <div className=" p-5 backdrop-blur-lg  ">
                            <h2 className="text-xl  title-font text-blue-400 font-bold mt-5" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px white" }}>BETTER FUTURE for PAKISTAN (BFFP) WEBSITE</h2>
                            <br />
                            <div className="relative z-10 space-y-4 ">
                                <div className="flex items-center text-brand-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                </div>
                                <div className="text-sm sm:text-base sm:leading-snug text-white"> "You are very thorough. I really appreciate the way you think through the best way to accomplish what we need on our site. We are in need of best Web Developer." </div>
                                <div className="flex items-center gap-2" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px yellow" }}>
                                    <img className="h-6 w-6 shrink-0 rounded-full sm:h-8 sm:w-8" src="https://i.pinimg.com/736x/5a/0c/7b/5a0c7b76e2a8bcdbe571c5ba916f93fe.jpg" alt="img" />
                                    <div className="flex flex-col text-sm leading-tight opacity-50 text-black"><span>Mustaqeem</span>
                                        <span className=" text-black">Client Review</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-2 md:w-1/3 sm:mb-0 mb-6 clientcard client">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="testimonial" className="w-50  g1 h-50 pt-5 mb-8 object-cover justify-center items-center object-center  inline-block " src={cg1} />
                        </div>

                        <div className=" p-5 backdrop-blur-lg ">
                            <h2 className="text-xl  title-font text-blue-400 font-bold mt-5" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px white" }}>CHARITY WEBSITE</h2>
                            <br />
                            <div className="relative z-10 space-y-4 ">
                                <div className="flex items-center text-brand-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                </div>
                                <div className="text-sm sm:text-base sm:leading-snug text-white">"I really appreciate your work on our website. You are great!" I really appreciate the way you think through the best way to accomplish what we need on our site - even things that we don't think to do!"</div>
                                <div className="flex items-center gap-2" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px yellow" }}>
                                    <img className="h-6 w-6 shrink-0 rounded-full sm:h-8 sm:w-8" src="https://img.freepik.com/premium-vector/cute-short-hair-blonde-anime-girl-with-uniform-ai-generated-image_362642-4053.jpg?w=360" alt="img" />
                                    <div className="flex flex-col text-sm "><span>Rukhsana Panhwer</span>
                                        <span>Client Review</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6 clientcard  client">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="testimonial" className="w-50  g1 h-50 pt-5 mb-8 object-cover justify-center items-center object-center  inline-block " src={cb2} />
                        </div>
<br />
                        <div className=" p-5 backdrop-blur-lg ">
                            <h2 className="text-xl  title-font text-blue-400 font-bold mt-5" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px white" }}>ACSHR WEBSITE</h2>
                            <br />
                            <div className="relative z-10 space-y-4 ">
                                <div className="flex items-center text-brand-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="yellow" className="h-4 w-4 sm:h-6 sm:w-6"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"></path></svg>
                                </div>
                                <div className="text-sm sm:text-base sm:leading-snug text-white">Be clear and concise.
                                    Be constructive, Provide context , Responsiveness , & used  standardized language. onlu what we need in our website.
                                    "Thanks for building this for us."</div>
                                <div className="flex items-center gap-2" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px yellow" }}>
                                    <img className="h-6 w-6 shrink-0 rounded-full sm:h-8 sm:w-8" src="https://static.vecteezy.com/system/resources/previews/033/242/567/non_2x/cute-little-boy-cartoon-in-casual-clothes-illustration-isolated-on-white-background-vector.jpg" alt="img" />

                                    <div className="flex text-white flex-col text-sm "><span>Abdul Jabbar</span>
                                        <span>Client Review</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper >

            <br /><br />






        </>
    );
}

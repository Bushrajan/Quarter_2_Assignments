import Image from 'next/image'
import React from 'react'
// import Gif from "@/app/technical_education.gif"
// import Gif2 from "@/app/experience.gif"
import gov from "@/app/giaic.png"
import matric from "@/app/matric.png"
import intermidiate from "@/app/intermidiate.png"
import smit from "@/app/smit.png"

export default function About() {
    return (
        <>
        <br />
            <section className="text-gray-600 about body-font">

                <div className="container px-5 py-24 mx-auto">
                    <div className='container mx-auto'>
                        <div className="flex flex-col">
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-24 h-full bg-indigo-500"></div>
                            </div>
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">ABOUT ME</h1>
                                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"><strong><i>"As a freelance web designer, I always aim to deliver the best to my clients."</i></strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-evenly m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 card1 card2">
                            <div className="h-full text-center">
                                {/* <Image width={40} height={40} alt="testimonial" className="w-20 g1 h-20 firstcards mb-8 object-cover outline-green-500 outline-dashed object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Gif} /> */}

                                <Image alt="testimonial" className="w-40 g1 h-40 mb-8 object-cover  object-center  inline-block " src={matric} />
                                {/* <h2 className='text-white outline-sky-500 outline-dashed font-bold text-2xl'>EDUCATION</h2><br /> */}
                                <p className="leading-relaxed text-black">



                                    <br />

                                    <strong className='text-3xl'>Matric</strong>

                                    <br />
                                    Iqra Huffaz Secondary Scool

                                    <br />
                                    2020-2023

                                    <br />

                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>


                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 card1 card2">
                            <div className="h-full text-center">
                                {/* <Image width={40} height={40} alt="testimonial" className="w-20 g1 h-20 firstcards mb-8 object-cover outline-green-500 outline-dashed object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Gif} />
                                 */}

                                <Image alt="testimonial" className="w-40 g1 h-40 mb-8 object-cover  object-center  inline-block " src={intermidiate} />

                                {/* <h2 className='text-white outline-sky-500 outline-dashed font-bold text-2xl'>EDUCATION</h2><br /> */}
                                <p className="leading-relaxed text-black">



                                    <br />

                                    <strong className='text-3xl'>Intermediate</strong>

                                    <br />
                                    Bahria College Karachi NORE-1

                                    <br />
                                    2020-2023

                                    <br />

                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>


                                </p>
                            </div>
                        </div>



                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 card1 card3 animated-rollIn">
                            <div className="h-full text-center">
                                {/* <Image width={40} height={40} alt="testimonial" className="w-20 g1 h-20 firstcards mb-8 object-cover outline-green-500 outline-dashed object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Gif2} />
                                 */}

                                <Image alt="testimonial" className="w-40 g1 h-40 mb-8 object-cover  object-center  inline-block " src={smit} />

                                {/* <h2 className='text-white outline-sky-500 outline-dashed font-bold text-2xl'>EXPERIENCE</h2><br /> */}
                                <p className="leading-relaxed text-black">

                                    <br />
                                    <strong className='text-3xl'>SMIT</strong>
                                    <br />
                                    <span style={{ fontSize: "15px" }}> (Saylani Mass IT Training) <br />
                                        2024-2025
                                    </span>
                                    <br />
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>


                                </p>

                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 card1 card4">
                            <div className="h-full text-center">
                                {/* <Image width={40} height={40} alt="testimonial" className="w-20 g1 h-20 firstcards mb-8 object-cover outline-green-500 outline-dashed object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Gif} />
                                 */}

                                <Image alt="testimonial" className="w-40 g1 h-40 mb-8 object-cover  object-center  inline-block " src={gov} />
                                {/* <h2 className='text-white outline-sky-500 outline-dashed font-bold text-2xl'>TECH EDUCATION</h2><br /> */}
                                <p className="leading-relaxed text-black">

                                    <br />
                                    <strong className='text-3xl'>GIAIC </strong>
                                    <br />

                                    <span style={{ fontSize: "15px" }}>(Certified Cloud Applied
                                        Generative Al Engineer (GenEng)) <br />
                                        2024-2025</span>
                                    <br />
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

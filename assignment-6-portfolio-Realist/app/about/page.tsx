'use client'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import line from "@/app/line.png"
import logo from "@/app/logo.png"
import ui from "@/app/ui.png"
import gov from "@/app/giaic.png"
import matric from "@/app/matric.png"
import intermidiate from "@/app/intermidiate.png"
import smit from "@/app/smit.png"
import Client_reviews from '../client_reviews/page';
export default function About() {
    return (
        <>

            <nav className="bg-white rounded-xl mt-3 w-full border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-1">
                    <div className="flex items-center">

                        <Image src={logo} className="logo" alt="Logo" />

                        <Link href={'/'} className=" font-bold hover:text-purple-500" >
                            <span><strong className="" style={{ fontSize: "20px" }} ><i>About</i></strong></span>
                        </Link>

                        <Image src={line} className="line" alt="line" />
                        <iframe src="https://free.timeanddate.com/clock/i9lj1amy/n757/fn7/fs20/tct/pct/ftb/th2" width="120" height="30" ></iframe>
                    </div>
                    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden hover:bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span className="sr-only"></span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className="hidden  w-full md:block md:w-auto " id="navbar-multi-level">

                        <ul className="flex flex-col items-center justify-center font-medium p-4 gap-0 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <div className="border1 ">
                                    <Link href={'/'} className=" font-bold hover:text-purple-500" >
                                        <Icon icon="fluent:home-32-filled" className="icon" /><span className="icon-heading">Home</span></Link>
                                </div>
                            </li>

                            <li>
                                <div className="border1 ">
                                    <Link href={'/about'} className=" font-bold hover:text-purple-500" >
                                        <Icon icon="mdi:about" className="icon" /><span className="icon-heading">About Me</span></Link>
                                </div>
                            </li>

                            <li>
                                <div className="border1 ">
                                    <Link href={'/projects'} className=" font-bold hover:text-purple-500" >
                                        <Icon icon="fluent:folder-link-28-filled" className="icon" /><span className="icon-heading">Projects</span></Link>
                                </div>
                            </li>

                            <li>
                                <div className="border1 ">
                                    <Link href={'/contact'} className=" font-bold hover:text-purple-500" >
                                        <Icon icon="mdi:phone" className="icon" /><span className="icon-heading">Contact</span></Link>
                                </div>
                            </li>


                            <li>
                                <div className="border1 ">
                                    <Link href={'/certificates'} className=" font-bold hover:text-purple-500" >
                                        <Icon icon="mdi:certificate-outline" className="icon" /><span className="icon-heading">Certificates</span></Link>
                                </div>
                            </li>

                            <li>
                                <div className="border1 ">
                                    <Link href={'/Bushra_Resume.pdf'} className=" font-bold hover:text-purple-500" >
                                        <Icon icon="tabler:file-cv" className="icon" /><span className="icon-heading">CV</span></Link>
                                </div>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center"><b><i>My Skills </i></b></h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">

                            <div className="h-full bg-gray-100 p-8 rounded-3xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>

                                <p className="leading-relaxed text-2xl mb-1">Soft Skills</p>

                                <p className="leading-relaxed mb-10">
                                    <li className='' style={{ listStyleType: "none" }}>👂🏻 Active Listening</li>
                                    <li className='' style={{ listStyleType: "none" }}>🗣️ Effective Communication</li>
                                    <li className='' style={{ listStyleType: "none" }}>🫱🏼‍🫲🏾 Collaboration</li>
                                    <li className='' style={{ listStyleType: "none" }}>👨🏻‍👦🏻‍👦🏻 Teamwork</li>
                                    <li className='' style={{ listStyleType: "none" }}>🙋‍♂️ Creative Problem Solving</li>
                                    <li className='' style={{ listStyleType: "none" }}>⌛ Time management</li>
                                </p>

                                <a className="inline-flex items-center">
                                    <Image alt="ui" width={50} height={50} className="pt-5 rounded-xl border mb-8 object-cover justify-center items-center object-center  inline-block " src={ui} />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">BUSHRA JAN</span>
                                        <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">

                            <div className="h-full bg-gray-100 p-8 rounded-3xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>

                                <p className="leading-relaxed text-2xl mb-1">Hard Skills</p>


                                <p className="leading-relaxed mb-10">
                                    <li className='' style={{ listStyleType: "none" }}>MS Office  </li>
                                    <li className='' style={{ listStyleType: "none" }}>HTML</li>
                                    <li className='' style={{ listStyleType: "none" }}>CSS</li>
                                    <li className='' style={{ listStyleType: "none" }}>JAVASCRIPT (on-going)</li>
                                    <li className='' style={{ listStyleType: "none" }}>TYPESCRIPT  </li>
                                    <li className='' style={{ listStyleType: "none" }}>TAILWIND , BOOTSTARP, FIGMA</li>
                                </p>



                                <a className="inline-flex items-center">
                                    <Image alt="ui" width={50} height={50} className="pt-5 rounded-xl border mb-8 object-cover justify-center items-center object-center  inline-block " src={ui} />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">BUSHRA JAN</span>
                                        <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="text-gray-600 about body-font">

                <div className="container px-2 py-5 rounded-xl w-full bg-white mx-auto">
                    <p className="leading-relaxed text-2xl mb-1 text-center"><b><i>My Education </i></b></p>
                    <br />
                    <div className="flex flex-wrap justify-evenly m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 card1 card2">
                            <div className="h-full text-center">

                                <Image alt="testimonial" className="w-40 g1 h-40 mb-8 object-cover  object-center  inline-block " src={matric} />
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

                                <Image alt="testimonial" className="w-40 g1 h-40 mb-8 object-cover  object-center  inline-block " src={intermidiate} />

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
                                <Image alt="testimonial" className="w-40 g1 h-40 mb-8 object-cover  object-center  inline-block " src={smit} />

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

                                <Image alt="testimonial" className="w-40 g1 h-40 mb-8 object-cover  object-center  inline-block " src={gov} />
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
                <br /><br />
            </section >

            <br /><br />            <br /><br />
            <section className="text-gray-600 about body-font">

                <p className="leading-relaxed text-2xl mb-1 text-center"><b><i>My Experience </i></b></p>
                <br />

                <div className="container px-2 py-5 rounded-xl w-full bg-white mx-auto">
                    <br />
                    <div className='flex flex-wrap justify-evenly m-4'>

                        <Client_reviews />
                    </div>
                </div>
                <br /><br />
            </section >

        </>
    )
}

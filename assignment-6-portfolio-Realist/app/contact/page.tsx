'use client'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import line from "@/app/line.png"
import logo from "@/app/logo.png"
import Footer from '../components/footer';
export default function Contact() {
    return (
        <>

            <nav className="bg-white rounded-xl mt-3 w-full border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-1">
                    <div className="flex items-center">

                        <Image src={logo} className="logo" alt="Logo" />

                        <Link href={'/'} className=" font-bold hover:text-purple-500" >
                            <span><strong className="" style={{ fontSize: "20px" }} ><i>Contact</i></strong></span>
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

            <Footer />
        </>
    )
}

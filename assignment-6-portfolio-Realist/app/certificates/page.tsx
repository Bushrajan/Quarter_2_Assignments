'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import certificate2 from '@/app/certificate2.png'
import line from "@/app/line.png"
import logo from "@/app/logo.png"
import { Icon } from '@iconify/react';

export default function Certificates() {
  return (
    <div>
      <nav className="bg-white rounded-xl mt-3 w-full border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-1">
          <div className="flex items-center">

            <Image src={logo} className="logo" alt="Logo" />

            <Link href={'/'} className=" font-bold hover:text-purple-500" >
              <span><strong className="" style={{ fontSize: "20px" }} ><i>Certificates</i></strong></span>
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
        <div className="container px-5 pt-16 py-10 mx-auto">

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

            <div className="p-2 md:w-1/3 sm:mb-0 mb-6 certificate-card card">
              <div className=" p-5  backdrop-blur-lg  ">
                <div className="rounded-lg h-50 overflow-hidden">
                  <Image alt="testimonial" className="  w-50 image g1 h-50 pt-5  object-cover mx-auto object-center   inline-block " src={certificate2} />
                </div>
                <br />
                <h2 className="text-xl  h2 title-font text-black font-bold mt-5" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px white" }}> <strong>Certificate: BanoQabil</strong> </h2>

                <Link href="/Bq.pdf" target='_blank'>
                  <strong className='text-yellow-500 flex items-center' style={{ textShadow: "1px 1px 1px black " }}><Icon icon="ion:arrow-redo" />&nbsp; Click for show...</strong>
                </Link>

              </div>
            </div>

            <div className="p-2 md:w-1/3 sm:mb-0 mb-6 certificate-card card">
              <div className=" p-5  backdrop-blur-lg  ">
                <div className="rounded-lg h-50 overflow-hidden">
                  <Image alt="testimonial" className="  w-50 image g1 h-50 pt-5 mb-8 object-cover mx-auto object-center   inline-block " src={certificate2} />
                </div>

                <br />
                <h2 className="text-xl  title-font text-black h2 font-bold mt-5" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px white" }}> <strong>Certificate: Sindh Board of Technical Education </strong> </h2>

                <Link href="/Bq.pdf" target='_blank'>
                  <strong className='text-yellow-500 flex items-center' style={{ textShadow: "1px 1px 1px black " }}><Icon icon="ion:arrow-redo" />&nbsp; Click for show...</strong>
                </Link>



              </div>
            </div>

            <div className="p-2 md:w-1/3 sm:mb-0 mb-6 certificate-card card">
              <div className=" p-5  backdrop-blur-lg  ">
                <div className="rounded-lg h-50 overflow-hidden">
                  <Image alt="testimonial" className="  w-50 image g1 h-50 pt-5 mb-8 object-cover mx-auto object-center   inline-block " src={certificate2} />
                </div>
                
                <br />
                <h2 className="text-xl h2  title-font text-black font-bold mt-5" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px white" }}> <strong>Certificate: LRN Global </strong> </h2>
                <Link href="/Bq.pdf" target='_blank'>
                  <strong className='text-yellow-500 flex items-center' style={{ textShadow: "1px 1px 1px black " }}><Icon icon="ion:arrow-redo" />&nbsp; Click for show...</strong>
                </Link>



              </div>
            </div>

          </div>
        </div>
      </section>
      <br />      <br />      <br /> <br />
    </div>

  )
}


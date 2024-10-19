import React from 'react';
import Image from 'next/image';
import logo from "@/app/logo.png";
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Footer() {
  return (

    <>

      <hr />

      <footer className="text-gray-600 body-font">

        <div className=" body-font relative rounded-xl">
          <div className="container px-2 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="rounded-xl lg:w-2/3 md:w-1/2 bg-gray-300  overflow-hidden sm:mr-10 p-5 flex items-end justify-start relative">
              <iframe width="100%" height="100%" className="absolute inset-0" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: "grayscale(1)", opacity: "(0.4);" }}></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Near Jodia Bazar SMIU College , Jeswani Street Sadar , Karchi. </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a className="text-purple-500 leading-relaxed">bushrajantuba@example.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">+92 3130260559</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex rounded-xl flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5" style={{ boxShadow: "box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;" }}>
              <h1 className="text-gray-900 text-4xl font-bold mb-1  title-font">Contact Me </h1>
              <p className="leading-relaxed mb-5 text-gray-600">I'd love to hear from you! Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to reach out...</p>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Phone</label>
                <input type="number" id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">Button</button>

            </div>
          </div>
        </div>

        <div className="container px-2 py-8 mx-auto flex items-center  sm:flex-row flex-col">

          <div className='flex '>
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image src={logo} className="logo" alt="Logo" />
              <span className="ml-3 text-xl">WDBJ</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              <Link href={"/"} className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">© 2020 — @Bushrajan</Link>
            </p>
          </div>

          <div className='flex justify-center item-center'>
            <span className="inline-flex  lg:ml-auto lg:mt-0 mt-6 w-full justify-center item-center md:justify-start md:w-auto">
              <Link className="p-1" href='https://www.google.com/maps/place/Jeswani+St,+Seari+Quarters,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8516079,67.0005856,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e03ef14aa01:0xfae5d2926ca10456!8m2!3d24.8516031!4d67.0031659!16s%2Fg%2F1vy7f1h5?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
                <Icon icon="line-md:my-location-loop" style={{ color: "black" }} width={50} height={35} />
              </Link>

              <Link href='https://www.linkedin.com/feed/' className="p-1">
                <Icon icon="fa:linkedin-square" style={{ color: "black" }} width={50} height={32} />
              </Link>

              <Link href='https://www.facebook.com/' className="p-1">
                <Icon icon="fa6-brands:square-facebook" style={{ color: "black" }} width={50} height={35} />
              </Link>

              <Link href='mailto:bushrajantubajan@gmail.com' className="p-1">
                <Icon icon="bi:envelope-at-fill" style={{ color: "black" }} width={50} height={35} />
              </Link>

              <Link href='https://github.com/Bushrajan' className="p-1">
                <Icon icon="jam:github" style={{ color: "black" }} width={50} height={36} />
              </Link>

            </span>
          </div >

        </div >



      </footer >














    </>

  );
}


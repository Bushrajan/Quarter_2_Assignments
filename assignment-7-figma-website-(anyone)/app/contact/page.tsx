"use client"
import React from 'react';
import Image from 'next/image';
import arow from "@/app/asset/arow.png";
import contact from "@/app/asset/conatct.png";
import TypedComponent2 from '../components/types2';

function Contact() {
  return (
    <div className='md:mt-40 mt-10 mb-20'>
      <h1 className="text-white text-2xl text-center title-font font-medium mb-4" style={{ textTransform: "capitalize" }}>What's  <span className='text-yellow-300'>Stopping </span>you?</h1>

      <div className='flex mx-auto md:gap-10 gap-6 items-center p-1 w-full justify-center lg:flex-row md:flex-row  sm:flex-row flex-wrap  '>

        <div className='md:ms-16  m-2'>
          <Image src={contact} alt="heroimg" className='rounded-xl img-2contact' width={470} height={370}></Image>
        </div>

        <div className=' justify-center  items-center mt-10 '>

          <h5 className="text-white text-2xl md:text-left lg:text-left text-center title-font font-medium mb-4" style={{ textTransform: "capitalize" }}>
            
            <TypedComponent2 />

          </h5>
          <div className="text-white"><Image src={arow} width={90} alt="img" className='img-1-arrowofcontact'></Image></div>

          <div className="text-white  mb-6 mt-3" style={{ fontSize: "12px" }}>
            <div className="relative mb-5">
              <input type="text" id="name" name="name" className="w-full  bg-white rounded border border-gray-300 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{ width: "300px" }} placeholder='Full Name ' />
            </div>
            <div className="relative mb-5">
              <input type="email" id="email" name="email" className="w-full  bg-white rounded border border-gray-300 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{ width: "300px" }} placeholder='Email Address' />
            </div>
            <div className="relative mb-10">
              <input type="number" id="number" name="number" className="w-full  bg-white rounded border border-gray-300 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{ width: "300px" }} placeholder='Phone No' />
            </div>
          </div>


          <div className=' text-center justify-center mb-20 items-center mt-6 md:flex lg:flex flex-wrap'>
            <button className='bg-yellow-300 rounded-xl  text-black  justify-center button-component text-center items-center' style={{ width: "150px", height: "50px" }}>
              Join Now</button>
          </div>
        </div>




      </div>
    </div >
  );
}

export default Contact;

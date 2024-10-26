"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import hero from "@/app/asset/herosec.png";
import play from "@/app/asset/play.png";
import { ButtonDemo } from '../components/button';
import TypedComponent from '../components/typed';

function About() {
  return (
    <div>
      <section className="text-gray-600 mt-20 body-font overflow-hidden">
        <div className="container mx-auto">
          <div className=" about md:px-8  px-5  mx-auto flex flex-wrap  ">
            <div className="justify-center items-center mx-auto   lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-white text-4xl  title-font font-medium mb-4" style={{ textTransform: "capitalize" }}>
                <Link href="/about">
                  <TypedComponent />
                </Link>
              </h1>
              <p className="text-white mt-10 mb-4" style={{ textTransform: "capitalize" }}>Our aim is to bring more people into fitness so that <br /> every indivisual, family,society and whole nation.
              </p>

              <div className='flex mx-auto mt-20 gap-10 items-center text-center'>

                <ButtonDemo />
                <div className="flex items-center">
                  <div className="text-yellow-300 font-bold " style={{ borderRadius: "50%" }}>
                    <button className=''>
                      <Image src={play} alt="heroimg" className='button ' width={50} height={50}></Image>
                    </button>
                  </div>
                  <div className="text-white ml-2 ">Watch video</div>
                </div>
              </div>

              <div className='flex mx-auto mt-10 gap-20 lg:flex md:flex lg:justify-start md:justify-start justify-center item-center flex-wrap text-center'>
                <div className="lg:mt-16 md:mt-16 mt-1">
                  <div className="text-yellow-300 font-bold" style={{ fontFamily: "monospace", fontSize: "18px" }}>7</div>
                  <div className="text-white">Years </div>
                  <div className="text-white">Experience</div>
                </div>

                <div className="lg:mt-16 md:mt-16 mt-1 ">
                  <div className="text-yellow-300 font-bold" style={{ fontFamily: "monospace", fontSize: "18px" }}>25k+ </div>
                  <div className="text-white">Happy</div>
                  <div className="text-white">customers</div>
                </div>

                <div className="lg:mt-16 md:mt-16 mt-1 ">
                  <div className="text-yellow-300 font-bold" style={{ fontFamily: "monospace", fontSize: "18px" }}>95</div>
                  <div className="text-white">Gym</div>
                  <div className="text-white">Trainers </div>
                </div>
              </div>



            </div>
            <Image src={hero} alt="heroimg" className='immg bg-yellow-200 mx-auto  img-hero_about' width={500} height={370}></Image>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

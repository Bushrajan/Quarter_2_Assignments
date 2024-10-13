import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import certificate2 from '@/app/certificate2.png'
import click from '@/app/click.png'


export default function Certificates() {
  return (
    <div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">CERTIFICATES</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"><strong><i>"As a freelance web designer, I always aim to deliver the best to my clients."</i></strong></p>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

            <div className="p-2 md:w-1/3 sm:mb-0 mb-6 certificate-card card">
              <div className=" p-5  backdrop-blur-lg  ">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image alt="testimonial" className="  w-50 image g1 h-50 pt-5 mb-8 object-cover mx-auto object-center   inline-block " src={certificate2} />
                </div>
                <h2 className="text-xl  h2 title-font text-black font-bold mt-5" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px white" }}> <strong>Certificate: BanoQabil</strong> </h2><br />
                <Link href="/Bq.pdf" target='_blank'>
                  <Image alt="testimonial" className="  w-20 g1 h-10 click mb-8 object-cover mx-auto object-center   inline-block " src={click} />
                  <strong className='text-yellow-500' style={{ textShadow: "1px 1px 1px black " }}> Click for show...</strong></Link>


              </div>
            </div>

            <div className="p-2 md:w-1/3 sm:mb-0 mb-6 certificate-card card">
              <div className=" p-5  backdrop-blur-lg  ">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image alt="testimonial" className="  w-50 image g1 h-50 pt-5 mb-8 object-cover mx-auto object-center   inline-block " src={certificate2} />
                </div>
                <h2 className="text-xl  title-font text-black h2 font-bold mt-5" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px white" }}> <strong>Certificate: Sindh Board of Technical Education </strong> </h2>
                <br />
                <Link href="/sindhboard.pdf" target='_blank'>
                  <Image alt="testimonial" className="  w-20 g1 h-10 click mb-8 object-cover mx-auto object-center   inline-block " src={click} />
                  <strong className='text-yellow-500' style={{ textShadow: "1px 1px 1px black " }}> Click for show...</strong></Link>



              </div>
            </div>

            <div className="p-2 md:w-1/3 sm:mb-0 mb-6 certificate-card card">
              <div className=" p-5  backdrop-blur-lg  ">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image alt="testimonial" className="  w-50 image g1 h-50 pt-5 mb-8 object-cover mx-auto object-center   inline-block " src={certificate2} />
                </div>
                <h2 className="text-xl h2  title-font text-black font-bold mt-5" style={{ fontStyle: "oblique", textShadow: "1px -2px 2px white" }}> <strong>Certificate: LRN Global </strong> </h2>
                <br />
                <Link href="/LRN.pdf" target='_blank'>
                  <Image alt="testimonial" className="  w-20 g1 h-10 click mb-8 object-cover mx-auto object-center   inline-block " src={click} />
                  <strong className='text-yellow-500' style={{ textShadow: "1px 1px 1px black " }}> Click for show...</strong></Link>



              </div>
            </div>

          </div>
        </div>
      </section>
      <br />      <br />      <br /> <br />
    </div>

  )
}


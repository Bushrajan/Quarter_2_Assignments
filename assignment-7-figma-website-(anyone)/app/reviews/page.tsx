'use client'

import React, { use } from 'react';
import Image from 'next/image';
import coma from "@/app/asset/coma.png"
import coma2 from "@/app/asset/coma2.png"
import stars from "@/app/asset/stars.png"
import review from "@/app/asset/review1.png"
import review2 from "@/app/asset/review.png"
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Review() {
  return (
    <div className='md:mt-40 mt-10'>
      <h1 className="text-white text-2xl text-center title-font font-medium mb-4" style={{ textTransform: "capitalize" }}>Stories of our <span className='text-yellow-300'>Vyayamshala</span> Family</h1>
      <div className='md:w-3/5 about  mx-auto flex mt-20 '>

        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay]}>

          <SwiperSlide>
            <div className="container mx-auto">
              <div className="p-4 flex slider">
                <div className='ms-2 mx-auto  '>
                  <Image src={review} alt="img" className='review comment-img' ></Image>
                </div>
                <div className='ms-5 p-5'>
                  <Image src={coma} alt="heroimg" className='button ' width={30} height={50}></Image>

                  <p className='mt-10'>A complete package to all the fitness freaks out there. Join soon and test yourself. Vyayamshala's layouts, environment and it's surrounding itself plays vital role to motivate and go beyond your limitation.</p>

                  <div className='flex justify-between'>
                    <div>
                      <Image src={stars} alt="heroimg" className='button mt-10 ' width={100} height={100}></Image>
                      <p className='mt-5'>Jhon Doe, Student</p>
                    </div>
                    <div>
                      <Image src={coma2} alt="heroimg" className='button mt-10 ' width={30} height={50}></Image>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container mx-auto">
              <div className="p-4 flex slider">
                <div className='ms-2  mx-auto '>
                  <Image src={review2} alt="img" className='review comment-img' ></Image>
                </div>
                <div className='ms-5 p-5'>
                  <Image src={coma} alt="heroimg" className='button ' width={30} height={50}></Image>

                  <p className='mt-10'>A complete package to all the fitness freaks out there. Join soon and test yourself. Vyayamshala's layouts, environment and it's surrounding itself plays vital role to motivate and go beyond your limitation.</p>

                  <div className='flex justify-between'>
                    <div>
                      <Image src={stars} alt="heroimg" className='button mt-10 ' width={100} height={100}></Image>
                      <p className='mt-5'>Jhon Doe, Student</p>
                    </div>
                    <div>
                      <Image src={coma2} alt="heroimg" className='button mt-10 ' width={30} height={50}></Image>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>





        </Swiper >


      </div>
    </div>
  );
}

export default Review;

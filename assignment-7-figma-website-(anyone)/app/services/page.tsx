
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import e1 from "@/app/asset/e1.png"
import e2 from "@/app/asset/e2.png"
import e3 from "@/app/asset/e3.png"
import e4 from "@/app/asset/e4.png"
import e6 from "@/app/asset/e6.png"
import e5 from "@/app/asset/e5.png"

import { ButtonDemo } from '../components/button';
function Service() {
  return (
    <div>
      <section className="text-gray-600 body-font mt-16 overflow-hidden">
        <div className="container  mx-auto">
          <div className=" container md:px-16 px-10  mx-auto flex flex-wrap  ">
            <div className="justify-center items-center mx-auto   lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h5 className="text-white   title-font font-medium mb-4" style={{ textTransform: "capitalize", fontSize: "12px" }}>
                <Link href="/about " className='text-yellow-300'>Services</Link>
              </h5>
              <h1 className="text-white text-2xl  title-font font-medium mb-4" style={{ textTransform: "capitalize" }}>
                <Link href="/about">We provide service that <br />
                  fits the best for you.</Link>
              </h1>
              <p className="text-white mt-10 mb-4">Strive for greatness with the best, around the best and in the best <br />fitness environment available in the city.
              </p>

              <div className='flex mx-auto mt-10 gap-10 items-center text-center'>

                <ButtonDemo />

              </div>

            </div>

            <div className='flex mx-auto gap-10 items-center justify-center lg:flex-row md:flex-row flex-wrap  text-center'>

              <div className="justify-center items-center ">
                <div className="text-white"><Image src={e1} width={90} alt="img" className=' small-img-service'></Image></div>
                <div className="text-white" style={{fontSize:"12px"}}>Whole body fat loss</div>
                <div className="text-white"><Image src={e2} width={90}  className='mt-9 small-img-service' alt="img"></Image></div>
                <div className="text-white" style={{fontSize:"12px"}}>Bodybuilding</div>
              </div>
              <div className="justify-center items-center ">
                <div className="text-white"><Image src={e3} width={90} alt="img" className=' small-img-service'></Image></div>
                <div className="text-white" style={{fontSize:"12px"}}>Zumba</div>
                <div className="text-white"><Image src={e5} width={90} className='mt-9 small-img-service'  alt="img"></Image></div>
                <div className="text-white" style={{fontSize:"12px"}}>Aerobcs</div>
              </div>
              <div className="justiy-center items-center ">
                <div className="text-white"><Image src={e6}  width={90} alt="img" className=' small-img-service'></Image></div>
                <div className="text-white" style={{fontSize:"12px"}}>Yoga</div>
                <div className="text-white"><Image src={e4} width={90}  className='mt-9 small-img-service' alt="img"></Image></div>
                <div className="text-white" style={{fontSize:"12px"}}>Free Weights</div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;

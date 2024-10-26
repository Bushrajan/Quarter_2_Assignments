import React from 'react';
import Image from 'next/image';
import twitter from "@/app/asset/twitter.png"
import pintrest from "@/app/asset/pinterest.png"
import tiktok from "@/app/asset/tiktok.png"

import t1 from "@/app/asset/t1.png"
import t2 from "@/app/asset/t2.png"
import t3 from "@/app/asset/t3.png"
import t4 from "@/app/asset/t4.png"

function Trainers() {
  return (
    <div className='mt-20'>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto">
          <div className=" about md:px-8  px-5  mx-auto flex flex-wrap  ">

            <div className="justify-center items-center mx-auto   lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-white text-2xl text-center title-font font-medium mb-4" style={{ textTransform: "capitalize" }}>Meet our <span className='text-yellow-300'>Trainers</span></h1>

              <div className='flex mx-auto gap-20 lg:flex md:flex lg:justify-start md:justify-start justify-center item-center flex-wrap text-center'>

                <div className="lg:mt-16 md:mt-16 mt-1">
                  <div className="text-yellow-300 font-bold" style={{ fontFamily: "monospace", fontSize: "18px" }}><Image src={t1} alt="icon" className='' width={150} height={100}></Image></div>
                  <div className="text-white text-1xl  mt-6 font-bold">Zahra Sharif </div>
                  <div className="text-white-100">Fitness Trainer</div>
                  <div className="justify-center flex mt-6 items-center ">
                    <div className="text-white " ><Image src={twitter} alt="icon" className='ms-2  icon-trainers' width={23} height={20}></Image></div>
                    <div className="text-white " ><Image src={pintrest} alt="icon" className='ms-2 icon-trainers ' width={23} height={20}></Image></div>
                    <div className="text-white " ><Image src={tiktok} alt="icon" className='ms-2  icon-trainers' width={23} height={20}></Image></div>
                  </div>
                </div>

                <div className="lg:mt-16 md:mt-16 mt-1">
                  <div className="text-yellow-300 font-bold" style={{ fontFamily: "monospace", fontSize: "18px" }}><Image src={t2} alt="icon" className='' width={150} height={100}></Image></div>
                  <div className="text-white text-1xl  mt-6 font-bold">Desert Antony</div>
                  <div className="text-white-100">Fitness Trainer</div>
                  <div className="justify-center flex mt-6 items-center ">
                    <div className="text-white " ><Image src={twitter} alt="icon" className='ms-2  icon-trainers' width={23} height={20}></Image></div>
                    <div className="text-white " ><Image src={pintrest} alt="icon" className='ms-2 icon-trainers ' width={23} height={20}></Image></div>
                    <div className="text-white " ><Image src={tiktok} alt="icon" className='ms-2  icon-trainers' width={23} height={20}></Image></div>
                  </div>
                </div>

                <div className="lg:mt-16 md:mt-16 mt-1">
                  <div className="text-yellow-300 font-bold" style={{ fontFamily: "monospace", fontSize: "18px" }}><Image src={t3} alt="icon" className='' width={150} height={100}></Image></div>
                  <div className="text-white text-1xl  mt-6 font-bold">Kate Johnson</div>
                  <div className="text-white-100">Fitness Trainer</div>
                  <div className="justify-center flex mt-6 items-center ">
                    <div className="text-white " ><Image src={twitter} alt="icon" className='ms-2  icon-trainers' width={23} height={20}></Image></div>
                    <div className="text-white " ><Image src={pintrest} alt="icon" className='ms-2 icon-trainers ' width={23} height={20}></Image></div>
                    <div className="text-white " ><Image src={tiktok} alt="icon" className='ms-2  icon-trainers' width={23} height={20}></Image></div>
                  </div>
                </div>

                <div className="lg:mt-16 md:mt-16 mt-1">
                  <div className="text-yellow-300 font-bold" style={{ fontFamily: "monospace", fontSize: "18px" }}><Image src={t4} alt="icon" className='' width={150} height={100}></Image></div>
                  <div className="text-white text-1xl  mt-6 font-bold">John Hard</div>
                  <div className="text-white-100">Fitness Trainer</div>
                  <div className="justify-center flex mt-6 items-center ">
                    <div className="text-white " ><Image src={twitter} alt="icon" className='ms-2  icon-trainers' width={23} height={20}></Image></div>
                    <div className="text-white " ><Image src={pintrest} alt="icon" className='ms-2 icon-trainers ' width={23} height={20}></Image></div>
                    <div className="text-white " ><Image src={tiktok} alt="icon" className='ms-2  icon-trainers' width={23} height={20}></Image></div>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainers;
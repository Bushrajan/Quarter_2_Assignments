
import React from 'react';
import Image from 'next/image';
import f1 from "@/app/asset/f1.png"
import f2 from "@/app/asset/f2.png"
import f3 from "@/app/asset/f3.png"
import f4 from "@/app/asset/f4.png"
import f5 from "@/app/asset/f5.png"
import f6 from "@/app/asset/f6.png"

function Facilities() {
    return (
        <div className='md:mt-40 mt-10 '>
            <h1 className="text-white text-2xl text-center title-font font-medium mb-4" style={{ textTransform: "capitalize" }}>Our <span className='text-yellow-300'>Facilities</span></h1>
            <div className='flex mx-auto gap-10 items-center justify-center lg:flex-row md:flex-row flex-wrap  '>

                <div className="justigy-center  items-center  ">
                    <div className='flex justify-center  items-center mt-10 md:flex lg:flex flex-wrap'>
                        <div className="text-white">
                            <Image src={f1} width={90} alt="img" className='img-facilities'></Image></div>
                        <div className="text-white ml-5" style={{ fontSize: "12px" }}>
                            <span><b>Lockers and towels </b></span><br /><br /> Clean, safe and <br />sanitary  environment <br />to keep your stuffs.</div>
                    </div>

                    <div className='flex justify-center  items-center mt-10 md:flex lg:flex flex-wrap'>
                        <div className="text-white">
                            <Image src={f4} width={90} alt="img" className='img-facilities'></Image></div>
                        <div className="text-white ml-5" style={{ fontSize: "12px" }}>
                            <span><b>Hightech Gym </b></span><br /><br /> Build yourself with the<br /> best  available <br />equipments in the market. </div>
                    </div>

                </div>

                <div className="justigy-center  items-center  ">
                    <div className='flex justify-center  items-center mt-10 md:flex lg:flex flex-wrap'>
                        <div className="text-white">
                            <Image src={f2} width={90} alt="img" className='img-facilities'></Image></div>
                        <div className="text-white ml-5" style={{ fontSize: "12px" }}>
                            <span><b>Free Wifi </b></span><br /><br /> Stay connected to the<br /> world while  you work<br /> yourself out. </div>
                    </div>

                    <div className='flex justify-center  items-center mt-10 md:flex lg:flex flex-wrap'>
                        <div className="text-white">
                            <Image src={f5} width={90} alt="img" className='img-facilities'></Image></div>
                        <div className="text-white ml-5" style={{ fontSize: "12px" }}>
                            <span><b>Changing Room </b></span><br /><br /> Sanitary changing room <br />with  proper privacy.</div>
                    </div>

                </div>

                <div className="justify-center  items-center  ">
                    <div className='flex justigy-center  items-center mt-10 md:flex lg:flex flex-wrap'>
                        <div className="text-white">
                            <Image src={f3} width={90} alt="img" className='img-facilities'></Image></div>
                        <div className="text-white ml-5" style={{ fontSize: "12px" }}>
                            <span><b>Complimentary Drinks</b></span>
                            <br /><br /> We make sure that you<br /> stay hydrated  so that you <br />can push yourself to the <br />limit.</div>
                    </div>

                    <div className='flex justify-center  items-center mt-10 md:flex lg:flex flex-wrap'>
                        <div className="text-white">
                            <Image src={f6} width={90} alt="img" className='img-facilities'></Image></div>
                        <div className="text-white ml-5" style={{ fontSize: "12px" }}>
                            <span><b>Personal Trainer</b></span> <br /><br /> You benefit from the  <br />monthly care of a <br />Personal Trainer.

                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Facilities;

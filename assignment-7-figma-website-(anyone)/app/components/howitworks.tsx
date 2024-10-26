import React from 'react';
import Image from 'next/image';
import tick from "@/app/asset/tick.png"
// import foot from "@/app/asset/foot.jpg"
import work from "@/app/asset/work.png"


function Howitworks() {
  return (
    <div className='md:mt-40 mt-10 '>
      <h1 className="text-white text-2xl text-center title-font font-medium mb-4" style={{ textTransform: "capitalize" }}>How It's <span className='text-yellow-300'>Work</span></h1>
      <div className='flex mx-auto md:gap-16 gap-2 items-center p-1  justify-center lg:flex-row md:flex-row  flex-wrap  '>


        <div className="justify-center items-center">

          <div className='flex justify-center  items-center mt-5 md:flex lg:flex flex-wrap'>
            <div className="text-white">
              <Image src={tick} width={80} alt="img" className='tick'></Image></div>
            <div className="text-white ml-5 text-center md:text-start sm:text-start lg:text-start mb-6 mt-3" style={{ fontSize: "12px" }}>
              <span><b>Body Training</b></span> <br /><br />Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry</div>
          </div>

          <div className='flex justify-center  items-center mt-5 md:flex lg:flex flex-wrap'>
            <div className="text-white">
              <Image src={tick} width={80} alt="img" className='tick'></Image></div>
            <div className="text-white ml-5 text-center md:text-start sm:text-start lg:text-start mb-6 mt-3" style={{ fontSize: "12px" }}>
              <span><b>Cardio Training</b></span> <br /><br />Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry</div>
          </div>

          <div className='flex justify-center  items-center mt-5 md:flex lg:flex flex-wrap'>
            <div className="text-white">
              <Image src={tick} width={80} alt="img" className='tick'></Image></div>
            <div className="text-white ml-5 text-center md:text-start sm:text-start lg:text-start mb-6 mt-3" style={{ fontSize: "12px" }}>
              <span><b>Endurance Training</b></span> <br /><br />Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry</div>
          </div>

          <div className='md:justify-start text-center justify-center  items-center mt-6 md:flex lg:flex flex-wrap'>
            <button className='bg-yellow-300 rounded-xl text-black  justify-center  text-center items-center' style={{ width: "150px", height: "50px" }}>
              Get started</button>
          </div>
        </div>

        <div className=' m-2 mb-10  '>

          {/* <Image src={foot} alt="heroimg" className='mt-5 logo-img-footer' width={500} height={370}></Image> */}
          <Image src={work} alt="heroimg" className='flex' width={400} height={370}></Image>
        </div>
      </div>
    </div >
  );
}

export default Howitworks;

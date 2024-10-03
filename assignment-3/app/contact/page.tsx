import React from 'react';
import Image from "next/image";
import Pic from "@/app/asset/pic.png"
import Pic1 from "@/app/asset/pic1.jpg"
import Pic2 from "@/app/asset/pic2.jpg"
import Pic3 from "@/app/asset/pic3.jpg"
import Pic4 from "@/app/asset/pic4.jpg"
import Pic5 from "@/app/asset/pic5.jpg"


export default function Contact() {
  return (
    <div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Accountant-Online-Contact</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Accounting has variously been defined as the keeping or preparation of the financial records of transactions of the firm, the analysis, verification and reporting of such records and "the principles and procedures of accounting"; it also refers to the job of being an accountant.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="img" className="w-full object-cover h-full object-center block" src={Pic} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="img" className="w-full object-cover h-full object-center block" src={Pic1} />
              </div>
              
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image alt="img" className="w-full h-full object-cover object-center block" src={Pic3} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="img" className="w-full object-cover h-full object-center block" src={Pic} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="img" className="w-full object-cover h-full object-center block" src={Pic5} />
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
}

"use client"; // <===== REQUIRED
import React from 'react'
import Image from 'next/image'
import line from "@/app/line.png"
import logo from "@/app/logo.png"
import Link from "next/link";
import { Icon } from '@iconify/react';
import charity from "@/app/charity.png"
import tamba from "@/app/tamba.png"
import github from "@/app/icons8-github-94.png"
import url from "@/app/link.png"
import linkedin from "@/app/linkedin.png"
import postivious from "@/app/postivious.png"
import veges from "@/app/veges.png"
import house from "@/app/house.png"
import embad from "@/app/embad.png"
import cloths from "@/app/cloths.png"
import birds from "@/app/birds.png"
import hotel from "@/app/hotel.png"
import sea from "@/app/sea.png"
import pet from "@/app/pet.png"
import electrica from "@/app/electrica.png"
export default function Projects() {

  return (
    <div>

      <nav className="bg-white rounded-xl mt-3 w-full border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-1">
          <div className="flex items-center">

            <Image src={logo} className="logo" alt="Logo" />

            <Link href={'/'} className=" font-bold hover:text-purple-500" >
              <span><strong className="" style={{ fontSize: "20px" }} ><i>Projects</i></strong></span>
            </Link>

            <Image src={line} className="line" alt="line" />
            <iframe src="https://free.timeanddate.com/clock/i9lj1amy/n757/fn7/fs20/tct/pct/ftb/th2" width="120" height="30" ></iframe>
          </div>
          <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden hover:bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only"></span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className="hidden  w-full md:block md:w-auto " id="navbar-multi-level">

            <ul className="flex flex-col items-center justify-center font-medium p-4 gap-0 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <div className="border1 ">
                  <Link href={'/'} className=" font-bold hover:text-purple-500" >
                    <Icon icon="fluent:home-32-filled" className="icon" /><span className="icon-heading">Home</span></Link>
                </div>
              </li>

              <li>
                <div className="border1 ">
                  <Link href={'/about'} className=" font-bold hover:text-purple-500" >
                    <Icon icon="mdi:about" className="icon" /><span className="icon-heading">About Me</span></Link>
                </div>
              </li>

              <li>
                <div className="border1 ">
                  <Link href={'/projects'} className=" font-bold hover:text-purple-500" >
                    <Icon icon="fluent:folder-link-28-filled" className="icon" /><span className="icon-heading">Projects</span></Link>
                </div>
              </li>

              <li>
                <div className="border1 ">
                  <Link href={'/contact'} className=" font-bold hover:text-purple-500" >
                    <Icon icon="mdi:phone" className="icon" /><span className="icon-heading">Contact</span></Link>
                </div>
              </li>


              <li>
                <div className="border1 ">
                  <Link href={'/certificates'} className=" font-bold hover:text-purple-500" >
                    <Icon icon="mdi:certificate-outline" className="icon" /><span className="icon-heading">Certificates</span></Link>
                </div>
              </li>

              <li>
                <div className="border1 ">
                  <Link href={'/Bushra_Resume.pdf'} className=" font-bold hover:text-purple-500" >
                    <Icon icon="tabler:file-cv" className="icon" /><span className="icon-heading">CV</span></Link>
                </div>
              </li>

            </ul>

          </div>

        </div>
      </nav>


      <div className="conatainer text-gray-600 mx-auto body-font">
        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-wrap m-4 mx-auto justify-center items-center">

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full  flex flex-col items-center text-center">
                <Image alt="img" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={charity} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Charity Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>

                  <span className="inline-flex">
                    <a href="https://charity-website-weld.vercel.app/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/Charity-Website.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="https://www.linkedin.com/posts/bushra-jan-50653427b_hashtags-activity-7247271922151964673-6dua?utm_source=share&utm_medium=member_desktop" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={tamba} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Tamba Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <span className="inline-flex">
                    <a href="https://tamba-ca.vercel.app/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/Tamba.ca.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="#" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={postivious} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Positivious Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://postivius-website.vercel.app/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/Postivius-Website.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="https://www.linkedin.com/posts/bushra-jan-50653427b_hashtags-activity-7236775532401442819-mX3W?utm_source=share&utm_medium=member_desktop" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={veges} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Veges  Store Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="veges-store.vercel.app/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/Veges-Store.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="https://www.linkedin.com/posts/bushra-jan-50653427b_hashtags-activity-7233387289383436288-as7l?utm_source=share&utm_medium=member_desktop" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={house} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Real State Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://real-state-website-ebon.vercel.app/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/Real-State-Website-.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="https://www.linkedin.com/posts/bushra-jan-50653427b_hashtags-activity-7230577082739695616-lVYt?utm_source=share&utm_medium=member_desktop" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={embad} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Embed Social Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://embed-social-website.vercel.app/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/EmbedSocial-Website.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="https://www.linkedin.com/posts/bushra-jan-50653427b_hashtags-activity-7230374665439895552-HdMt?utm_source=share&utm_medium=member_desktop" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={cloths} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">HexaShop Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://hexashop-amber.vercel.app/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="#" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={birds} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Free Birds Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://bushrajan.github.io/FreeBirds/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/FreeBirds.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="https://www.linkedin.com/posts/bushra-jan-50653427b_linkedin-family-tailwind-activity-7219670541983436800-wSRl?utm_source=share&utm_medium=member_desktop" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={hotel} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Paradise Hotel Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://paradise-hotel-kappa.vercel.app/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/Paradise-Hotel.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="#" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={sea} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Sea World Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://bushrajan.github.io/Sea-World-Website-/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/Sea-World-Website-.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a>&nbsp;
                    <a href="https://www.linkedin.com/posts/bushra-jan-50653427b_hashtags-activity-7230577082739695616-lVYt?utm_source=share&utm_medium=member_desktop" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={pet} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Pet Shop Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://github.com/Bushrajan/Pet-Shop.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://pet-shop-ashy-tau.vercel.app/" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a> &nbsp;
                    <a href="https://www.linkedin.com/posts/bushra-jan-50653427b_hashtags-activity-7233608307079299074-p8P5?utm_source=share&utm_medium=member_desktop" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={electrica} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Electrica Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://vercel.live/link/electrica-beta.vercel.app?via=project-dashboard-alias-list&p=1" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={url} />
                    </a>
                    <a href="https://github.com/Bushrajan/Electrica-website.git" className="ml-2 text-gray-500" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={github} />
                    </a> &nbsp;
                    <a href="https://www.linkedin.com/posts/bushra-jan-50653427b_hashtags-activity-7233928049287675904-P7Z8?utm_source=share&utm_medium=member_desktop" target='_blank'>
                      <Image alt="testimonial" className="w-6  g1 h-13 pt-5 mb-8 object-cover  object-center  inline-block " src={linkedin} />
                    </a>
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <br />

    </div>
  )
}

import React from 'react'
import Image from 'next/image'
// import github from "@/app/github.gif"
// import linkedin from "@/app/linkedin.gif"
// import { link } from 'fs'
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
import birds  from "@/app/birds.png"
import hotel from "@/app/hotel.png"
import sea from "@/app/sea.png"
import pet  from "@/app/pet.png"
import electrica  from "@/app/electrica.png"
// import { Link } from 'lucide-react'
export default function Projects() {
  return (
    <div>

      <div className='container mx-auto pt-0 p-5'>
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex  flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">PROJECTS</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"><strong><i>"As a freelance web designer, I always aim to deliver the best to my clients."</i></strong></p>
          </div>
        </div>
      </div>


      {/* <div className="pro-card grid justify-center items-center ">
          <Image alt="testimonial" className="w-50 g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={charity} />
          <h5>Project Name : Real Estate</h5><a target="_blank" className="flex justify-start items-center" href="https://bootstrap-landing-page-css.netlify.app">

            <h5 className=" mx-2">Live Demo ... </h5></a></div>

 */}

      <div className="conatainer text-gray-600 mx-auto body-font">
        <div className="container px-5 py-24 mx-auto">
          
          <div className="flex flex-wrap m-4 mx-auto justify-center items-center">
          
            <div className="p-4 lg:w-1/4 md:w-1/2 procards_back">
              <div className="h-full  flex flex-col items-center text-center">
                <Image alt="testimonial" className="w-50 procards g1 h-50 pt-5 mb-8 object-cover  object-center  inline-block " src={charity} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Charity Project</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                    <a href="https://charity-website-weld.vercel.app/" className="ml-2 text-gray-500"  target='_blank'>
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
                  {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                  <span className="inline-flex">
                  <a href="https://tamba-ca.vercel.app/" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="https://postivius-website.vercel.app/" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="veges-store.vercel.app/" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="https://real-state-website-ebon.vercel.app/" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="https://embed-social-website.vercel.app/" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="https://hexashop-amber.vercel.app/" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="https://bushrajan.github.io/FreeBirds/" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="https://paradise-hotel-kappa.vercel.app/" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="https://bushrajan.github.io/Sea-World-Website-/" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="https://github.com/Bushrajan/Pet-Shop.git" className="ml-2 text-gray-500"  target='_blank'>
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
                  <a href="https://vercel.live/link/electrica-beta.vercel.app?via=project-dashboard-alias-list&p=1" className="ml-2 text-gray-500"  target='_blank'>
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

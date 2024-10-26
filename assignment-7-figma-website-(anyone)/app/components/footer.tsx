"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footer from "@/app/asset/forfoorter.png"
import insta from "@/app/asset/Instagram.png"
import logo from "@/app/asset/favicon.png"
import facebook from "@/app/asset/Facebook.png"
import github from "@/app/asset/github.png"
import linkedin from "@/app/asset/linkedin.png"
import win from "@/app/asset/window.png"
import TypedComponent3 from './types3';

function Footer() {
    return (
        <div>
            <section className=" mt-10 bg-black   body-font overflow-hidden">
                <div className="text-yellow-300 text-center items-center" style={{ fontSize: "13px" }}><b>Track valuable metrics over time to measure your  Vyayamshala  performance</b> </div>
                <div className='flex justify-center  items-center mt-6 md:flex lg:flex flex-wrap'>
                    <button className='bg-yellow-300 button-component rounded-xl justify-center text-center items-center' style={{ width: "230px", height: "50px" }}>
                        <Link href="/">
                            <div className="text-white justify-center  items-center">
                                <Image src={win} width={25} className='text-center  ms-5 window' alt="img"></Image></div>
                            <div className=" font-bold items-center ms-5" style={{ fontSize: "12px", marginTop: "-20px", textShadow: "1px 1px 1px black" }}><span> Download Now  our App </span></div>
                        </Link>
                    </button>
                </div>

                <div className="container lg:pt-20 md:pt-20 pt-10 mx-auto">
                    <div className=" footer about md:px-8  px-5  mx-auto flex flex-wrap  ">
                        <div className="justify-center items-center mx-auto   lg:pr-10 lg:py-6 mb-6 lg:mb-0">

                            <div className='flex  mx-auto mt-10 gap-20 lg:flex md:flex  justify-center item-center flex-wrap text-center'>
                                <div className="justify-center items-center ">
                                    <Link href="/"><Image src={logo} alt="icon" className='justify-center item-center logo-img-footer' width={150} height={30}></Image></Link><br /><br />

                                    <div className="text-white" style={{ fontSize: "15px" }}><b>Monday-Friday</b> </div>
                                    <div className="text-white" style={{ fontSize: "12px" }}>
                                        <TypedComponent3 />
                                    </div>
                                    <div className="text-white mt-5" style={{ fontSize: "15px" }}><b>Saturday-Sunday</b> </div>
                                    <div className="text-white" style={{ fontSize: "12px" }}>
                                        <TypedComponent3 />
                                    </div>
                                </div>


                            </div>

                            <div className="justify-center flex mt-10 items-center ">
                                <div className="text-white " ><Link href="https://www.facebook.com/"><Image src={facebook} alt="icon" className=' img-icons' width={35} height={30}></Image></Link> </div>
                                <div className="text-white " ><Link href="https://www.instagram.com/"><Image src={insta} alt="icon" className='ms-5 img-icons' width={35} height={30}></Image></Link> </div>
                                <div className="text-white " ><Link href="https://github.com/Bushrajan"><Image src={github} alt="icon" className='ms-5 img-icons' width={35} height={30}></Image></Link> </div>
                                <div className="text-white " ><Link href="https://www.linkedin.com/in/bushra-jan-50653427b/"><Image src={linkedin} alt="icon" className='ms-5 img-icons' width={35} height={30}></Image></Link> </div>
                            </div>



                        </div>
                        <Image src={footer} alt="heroimg" className='mt-5 logo-img-footer' width={450} height={370}></Image>
                    </div>
                </div>

                <div className="justigy-center mt-10 items-center text-center ">
                    <div className="text-white" style={{ fontSize: "15px" }}>Privacy policy
                        &nbsp; Term of service
                        &nbsp; Language &nbsp; Created by :&nbsp;Bushra Jan ♥
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; © 2024</div>
                </div>

            </section>
        </div>
    );
}

export default Footer;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/app/asset/favicon.png"


export default function Navbar() {
    return (
        <div>
            <header className="text-white body-font bg-black ">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={logo} alt="logo" width={120} height={40}></Image>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center  justify-center">
                        <Link href="/"         className="ms-5 hover:bg-yellow-300  px-3  hover:text-black  hover:rounded-xl  mr-5 m-1  "  style={{ fontSize: "16px" }}>Home    </Link>
                        <Link href="/about"    className="ms-5 hover:bg-yellow-300  px-3  hover:text-black  hover:rounded-xl  mr-5 m-1  "  style={{ fontSize: "16px" }}>About   </Link>
                        <Link href="/services" className="ms-5 hover:bg-yellow-300  px-3  hover:text-black  hover:rounded-xl  mr-5 m-1  "  style={{ fontSize: "16px" }}>Services</Link>
                        <Link href="/reviews"  className="ms-5 hover:bg-yellow-300  px-3  hover:text-black  hover:rounded-xl  mr-5 m-1  "  style={{ fontSize: "16px" }}>Reviews </Link>
                        <Link href="/contact"  className="ms-5 hover:bg-yellow-300  px-3  hover:text-black  hover:rounded-xl  mr-5 m-1  "  style={{ fontSize: "16px" }}>Contact </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}

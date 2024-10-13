import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/app/logo.png"
import Girl from "@/app/g4.png"
import Resume from './resume';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (


    <>

      <header className=" body-font">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <div className='flex items-center'>
            <div>
              <Image className="img w-full object-cover logo object-center" width={50} height={40} src={Logo} alt="img" />
            </div>
            <div className='text-2xl head  font-bold hover:text-green-500' style={{textShadow:"1px 2px 1px black"}}>&nbsp;Bushra Jan</div>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={'/'} className="mr-5 font-bold hover:text-purple-500" style={{textShadow:"1px 2px 1px yellow"}}>Home</Link>
            <Link href={'/about'} className="mr-5 font-bold hover:text-purple-500" style={{textShadow:"1px 2px 1px yellow"}}>About</Link>
            <Link href={'/projects'} className="mr-5 font-bold hover:text-purple-500" style={{textShadow:"1px 2px 1px yellow"}}>Projects</Link>
            <Link href={'/client_reviews'} className="mr-5 font-bold hover:text-purple-500" style={{textShadow:"1px 2px 1px yellow"}}>Client Reviews</Link>
            <Link href={'/certificates'} className="mr-5 font-bold hover:text-purple-500" style={{textShadow:"1px 2px 1px yellow"}}>Certificates</Link>
          </nav>
          <div className='text-center btn-5'>
            <Button className="custom-btn btn-12">
              <span>
                <Link href="/Bushra_Resume.pdf" target='_blank'>Download CV</Link>
              </span>

              <span>
                Details
              </span>

            </Button>
          </div>

          <div>
            <Image className="img girl w-full object-cover object-center" width={40} height={50} src={Girl} alt="img" />
          </div>

        </div>
      </header >

    </>
  );
}

'use client'
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { StaticImageData } from 'next/image';
import IMG1 from "@/app/birds.png";
import IMG2 from "@/app/birds.png";
import IMG3 from "@/app/birds.png";
import IMG4 from "@/app/birds.png";
import IMG5 from "@/app/birds.png";
import logo from "@/app/logo.png";
import bj from "@/app/bj.png";
// import { useState, useEffect } from 'react';
import 'animate.css';
import 'flowbite';
import line from "@/app/line.png"
import Footer from "./components/footer";
import TypedComponent from "./components/typed";

export default function Home() {

  // const [active, setActive] = useState(false);

  // const toggle = () => {
  //   setActive(!active);
  // };

  // type Tsister = {
  //   image: StaticImageData;
  //   heading: string;
  //   text: string;
  // };

  // const sister: Tsister[] = [
  //   { image: IMG1, heading: 'Our SisterHood is look like this', text: 'May this year bring you endless happiness' },
  //   { image: IMG2, heading: 'Happy birthday, built-in bestie!', text: 'On this day, a very special person came into this world.' },
  //   { image: IMG3, heading: 'My sister is better than your sister.', text: 'On this day, a very special person came.' },
  //   { image: IMG4, heading: 'Our SisterHood is look like this', text: 'On this day, a very special person came into this world.' },
  //   { image: IMG5, heading: 'To my favorite sister, Happy birthday!', text: 'On this day, a very special person came into .' },
  // ];


  // type Ticon = {
  //   name: string
  //   link: string
  // }
  // const icon: Ticon[] = [
  //   { name: 'devicon:facebook', link: 'https://www.facebook.com/profile.php?id=61552824575623' },
  //   { name: 'logos:linkedin-icon', link: 'https://www.linkedin.com/in/bushra-jan-50653427b/' },
  //   { name: 'skill-icons:github-dark', link: 'https://github.com/Bushrajan' },
  //   { name: 'skill-icons:instagram', link: 'https://www.instagram.com/workplace2i/' }
  // ]



  // -----------------------------------------------------------




  return (

    <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">


      {/* <div className="flex  w-full container mx-auto flex-wrap flex-col justify-between md:flex-row items-center nav">

        <div className="flex  ms-2 logo-div">
          <Link href={'/'} className="font-bold hover:text-purple-500" >
            <Icon icon="simple-icons:codersrank" className="logo" style={{ color: "#fff" }} />
            <p style={{ color: "#fff" }}>Portfolio</p> </Link>
        </div>

        <div className="flex ms-lg-5 mr-2 mainicon m-2 bg-white">
        </div>

      </div>

      <div className="cards flex mt-20 flex-wrap  justify-center items-center ">
        {sister.map((cont) => (
          <div key={cont.heading} className="card rounded-xl">

            <div className="img">
              <Image
                src={cont.image}
                alt="profile"
                className="img rounded-xl" />
            </div>
            <p className="heading font-semibold py-2">{cont.heading}</p>
            <p className="text font-extralight py-2 text-justify">{cont.text}</p>
            <hr />

            <p className="icon flex justify-around p-4">
              {icon.map((element) => (
                <Link key={element.link} href={element.link}><Icon style={{ fontSize: '30px' }} icon={element.name} /></Link>
              ))}
            </p>

          </div>
        ))}

        <div className={`hide ${active ? 'active' : ""} card rounded-xl`}>
          <p className="text1 text-2xl font-semibold cursor-pointer flex justify-around items-center">
            <span >Click me</span>
            <Icon className="menu" icon="mi:menu" style={{ color: '#000' }} onClick={toggle} />
          </p>
          <p className={`text2 ${active ? 'show' : 'hide'}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quae consectetur architecto quisquam Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

      </div> */}



      <nav className="bg-white rounded-xl mt-3 w-full border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-1">
          <div className="flex items-center">

            <Image src={logo} className="logo" alt="Logo" />

            <Link href={'/'} className=" font-bold hover:text-purple-500" >
              <span><strong className="" style={{ fontSize: "20px" }} ><i>WDBJ</i></strong></span>
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



      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <Image alt="img" className="lg:w-1/3 w-full  object-cover object-center rounded" src={bj} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 mb-5">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">UI Developer</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                <TypedComponent />
              </h1>
              <p className="leading-relaxed py-3  myself ">Myself <strong><i>Bushra Jan</i></strong>. I am a <strong><i>Front End Developer</i></strong> and currently learning Next.js in  GIAIC . I'm also a student in <strong><i>SMIT (Saylani MASS IT Training)</i></strong> and experience of <strong><i>Interenship</i></strong> of <strong>
                <i>(6 months)</i></strong> I crafts <strong><i>responsive websites</i></strong> where technologies meet creativity.
                I'am  a passionate web
                developer with expertise in
                <strong> <i>HTML , CSS3 </i></strong>
                and
                <strong> <i>JavaScript</i></strong>.
              </p>
              <br /><br />
              <div className="flex">
                <div className='flex justify-center item-center'>
                  <span className="inline-flex  lg:ml-auto lg:mt-0 mt-6 w-full justify-center item-center md:justify-start md:w-auto">
                    <Link className="p-1" href='https://www.google.com/maps/place/Jeswani+St,+Seari+Quarters,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8516079,67.0005856,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e03ef14aa01:0xfae5d2926ca10456!8m2!3d24.8516031!4d67.0031659!16s%2Fg%2F1vy7f1h5?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
                      <Icon icon="line-md:my-location-loop" style={{ color: "black" }} width={50} height={35} />
                    </Link>

                    <Link href='https://www.linkedin.com/feed/' className="p-1">
                      <Icon icon="fa:linkedin-square" style={{ color: "black" }} width={50} height={32} />
                    </Link>

                    <Link href='https://www.facebook.com/' className="p-1">
                      <Icon icon="fa6-brands:square-facebook" style={{ color: "black" }} width={50} height={35} />
                    </Link>

                    <Link href='mailto:bushrajantubajan@gmail.com' className="p-1">
                      <Icon icon="bi:envelope-at-fill" style={{ color: "black" }} width={50} height={35} />
                    </Link>

                    <Link href='https://github.com/Bushrajan' className="p-1">
                      <Icon icon="jam:github" style={{ color: "black" }} width={50} height={36} />
                    </Link>

                  </span>
                </div >
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

'use client'
import Image from "next/image";
import Link from "next/link";

import { Icon } from '@iconify/react';
import { StaticImageData } from 'next/image';
import IMG1 from "@/app/assets/img(1).jpg";
import IMG2 from "@/app/assets/img(2).jpg";
import IMG3 from "@/app/assets/img(3).jpg";
import IMG4 from "@/app/assets/img(4).jpg";
import IMG5 from "@/app/assets/img(5).jpg";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  type Tsister = {
    image: StaticImageData;
    heading: string;
    text: string;
  };

  const sister: Tsister[] = [
    { image: IMG1, heading: 'Our SisterHood is look like this', text: 'May this year bring you endless happiness' },
    { image: IMG2, heading: 'Happy birthday, built-in bestie!', text: 'On this day, a very special person came into this world.' },
    { image: IMG3, heading: 'My sister is better than your sister.', text: 'On this day, a very special person came.' },
    { image: IMG4, heading: 'Our SisterHood is look like this', text: 'On this day, a very special person came into this world.' },
    { image: IMG5, heading: 'To my favorite sister, Happy birthday!', text: 'On this day, a very special person came into .' },
  ];


  type Ticon = {
    name: string
    link: string
  }
  const icon: Ticon[] = [
    { name: 'devicon:facebook', link: 'https://www.facebook.com/profile.php?id=61552824575623' },
    { name: 'logos:linkedin-icon', link: 'https://www.linkedin.com/in/bushra-jan-50653427b/' },
    { name: 'skill-icons:github-dark', link: 'https://github.com/Bushrajan' },
    { name: 'skill-icons:instagram', link: 'https://www.instagram.com/workplace2i/' }
  ]
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">




      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      {sister.map((cont) => (
        <div key={cont.heading} className="card rounded-xl">
          <div className="img">
            <Image
              src={cont.image}
              alt="profile"
              className="img rounded-xl"
            />
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
      <div className={hide ${active ? 'active' : ""} card rounded-xl}>
        <p className="text1 text-2xl font-semibold cursor-pointer flex justify-around items-center">
          <span onClick={toggle}>Click me</span>
          <Icon className="menu" icon="mi:menu" style={{ color: '#000' }} />
        </p>
        <p className={text2 ${active ? 'show' : 'hide'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quae consectetur architecto quisquam Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>

    </div>
  );
}

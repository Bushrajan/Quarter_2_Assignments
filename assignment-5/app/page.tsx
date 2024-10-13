'use client'
import Image from "next/image";
import G2 from "@/app/g4.png"
import About from "./about/page";
import Client_reviews from "./client_reviews/page";
import Projects from "./projects/page";
import Certificates from "./certificates/page";
import TypedComponent from "./components/typed";

export default function Home() {
  return (
    <>
      <section className="p-5 text-gray-600 body-font first justify-center items-center overflow-hidden ">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-3/3 container  mx-auto flex flex-wrap second">
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"><br /><br />
            


              <h1 className="mb-1"><span className="bj">  <TypedComponent />
              </span></h1>
              
              <br />
              <br />
              <p className="leading-relaxed py-3 text-2xl myself ">Myself <strong><i>Bushra Jan</i></strong>. I am a <strong><i>Front End Developer</i></strong> and currently learning Next.js in  GIAIC . I'm also a student in <strong><i>SMIT (Saylani MASS IT Training)</i></strong> and experience of <strong><i>Interenship</i></strong> of <strong>
                <i>(6 months)</i></strong> I crafts <strong><i>responsive websites</i></strong> where technologies meet creativity.
                I'am  a passionate web
                developer with expertise in
                <strong> <i>HTML , CSS3 </i></strong>
                and
                <strong> <i>JavaScript</i></strong>.
              </p>

            </div>
            <Image alt="ecommerce" className=" gold pyramid  glow lg:w-3/3 mt-5 w-full lg:h-auto Img1  mx-auto h-64 object-cover object-center rounded" height={400} width={400} src={G2} />
          </div>
        </div>
      </section>

      {/* about */}
      <About />

      {/* Projects */}
      <Projects />

      {/* client */}
      <Client_reviews />

      {/* client */}
      <Certificates />

    </>
  );
}




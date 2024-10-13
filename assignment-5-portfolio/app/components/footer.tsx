import React from 'react';

export default function Footer() {
  return (

    <>

      <hr />
      <footer className="text-gray-600 footer body-font">

        <div className="border-t border-gray-200">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap  items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label className="leading-7 email text-4xl text-black"><strong>Email</strong><br />
                  <strong>
                    <a href="mailto:Bushrajantubajan@gmail.com">Bushrajan@gmail.com</a>
                  </strong>
                </label>

              </div>
            </div>

            <div>
              <br />
              <p className='text-black  first font-bold gap py-20 text-2xl px-5' style={{textShadow:"1px 2px 1px yellow"}}>"I am the 😁 hero of the digital realm  😁. I weave the intricate fabric of the internet with my expertise in coding, design, and problem-solving. My creativity transforms abstract ideas into interactive experiences, making the web not only functional but also visually stunning. My dedication ensures that our online interactions are seamless, efficient, and engaging. My goal is to reach the peak of knowledge & create impactful solutions that shape the future.  " </p>
            
            <br />
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="ml-3 girl fa" href='https://www.google.com/maps/place/Jeswani+St,+Seari+Quarters,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8516079,67.0005856,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e03ef14aa01:0xfae5d2926ca10456!8m2!3d24.8516031!4d67.0031659!16s%2Fg%2F1vy7f1h5?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/map-marker--v1.png" alt="map-marker--v1" />
              </a>
              <a className="ml-3 girl fa">
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/facebook-circled.png" alt="facebook-circled" />
              </a>
              <a className="ml-3 girl fa">
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github" />
              </a>
              <a className="ml-3 girl fa">
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin" />
              </a>
              <a className="ml-3 girl fa">
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/email.png" alt="email" />
              </a>
            </span>

          </div>
        </div>

        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left"><strong>© 2024 Made by</strong>
              <a href="https://www.linkedin.com/in/bushra-jan-50653427b/" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer"><strong>@Bushrajan 😌 ✨</strong></a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm"><strong>“Opportunities don't happen, you create them.”</strong></span>
          </div>
        </div>

      </footer>














    </>

  );
}


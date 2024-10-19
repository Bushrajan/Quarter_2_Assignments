import React from 'react';
import Image from 'next/image';
import card from '@/app/bushra.png';
import line from '@/app/line.png';

function Card(props: { name: string, age: number, id: number, rollno: string, DOB: string, Class: string, email: string
}) {
    return (
        <>
            <div className="p-5  flex  ">
                <div className="p-4 md:w-1/1">
                    <div className="h-full w-full border-2  border-blue-900 rounded-lg overflow-hidden">
                        <div className="p-4 card text-center max-w-80">
                            <div className="  items-center ">
                                <Image className="img w-full object-cover object-center" src={card} alt="img" />
                            </div>
                            <br /><br />
                            <div className="  items-center ">
                                <a className="text-green-900  font-semibold  text-center mx-auto inline-flex items-center md:mb-2 lg:mb-0">Name : {props.name}
                                </a>
                            </div>
                            <div className="flex  items-center ">
                                <a className="text-green-900  font-semibold   text-center mx-auto inline-flex items-center md:mb-2 lg:mb-0">Age : {props.age}
                                </a>
                            </div>
                            <div className="flex  items-center ">
                                <a className="text-green-900  font-semibold  text-center mx-auto inline-flex items-center md:mb-2 lg:mb-0">ID : {props.id}
                                </a>
                            </div>
                            <div className="flex  items-center ">
                                <a className="text-green-900  font-semibold   text-center mx-auto inline-flex items-center md:mb-2 lg:mb-0">Roll-no : {props.rollno}
                                </a>
                            </div>
                            <div className="flex  items-center ">
                                <a className="text-green-900  font-semibold   text-center mx-auto inline-flex items-center md:mb-2 lg:mb-0">D.O.B : {props.DOB}
                                </a>
                            </div>
                            <div className="flex  items-center ">
                                <a className="text-green-900  font-semibold  text-center mx-auto inline-flex items-center md:mb-2 lg:mb-0">Class : {props.Class}
                                </a>
                            </div>
                            <div className="flex  items-center ">
                                <a className="text-green-900  font-semibold  text-center mx-auto inline-flex items-center md:mb-2 lg:mb-0">Email : {props.email}
                                </a>
                            </div>
                            <div className="  items-center "><br />
                                <Image className="img w-full object-cover object-center" src={line} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;

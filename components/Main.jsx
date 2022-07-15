import Link from "next/link";
import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/vincent.png";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div
        className="max-w-[1240px] w-full h-full mx-auto p-2 flex
       justify-start items-center xml:flex-col"
      >
        <div className="flex flex-col items-start justify-start ">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            HELLO
          </p>
          <h1 className="py-4 text-gray-700">
            i&#39;m <span className="text-[#5651e5]"> Vincent</span>
          </h1>
          <h4 className="py-2 text-gray-500">Front-End Web &</h4>
          <h4 className="py-2 text-gray-500">Mobile App Developer</h4>
          <Link href="/#contact">
            <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              HIRE ME
            </button>
          </Link>
        </div>
        <div
          style={{ width: "40rem" }}
          className="h-auto m-auto rounded-xl 
        flex items-center justify-center|"
        >
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Main;

import Image from "next/image";
import React from "react";
import Food from "../public/assets/projects/food1.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const foodAppFrontEnd = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Food}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Food Delivery App Front End</h2>
          <h3>React Native</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is to show the Front-End of a React Native Food Delivery
            Application
          </p>

          <a
            href="https://github.com/sarsahvincent/food_app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Source Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-50">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Native
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Expo
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <a>
            <div
              className="rounded-full flex flex-row items-center 
            justify-around shadow-lg shadow-gray-400 p-2 cursor-pointer
             hover:scale-110 ease-in duration-300 w-20"
            >
              <IoMdArrowRoundBack size="2em" title="Back" />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default foodAppFrontEnd;

import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/login.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Employee Management System</h2>
          <h3>NextJS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built with NextJS TypeScript. Firebase was used for the
            backend. There are two main uses on the platform: Staff and
            Administrator. Features which are accessible to the Administrator
            include Dashboard (The administration can have a summary of all
            activities on the platform), Manage Staff (The administration can
            see all the detials of a staff . And can edit as well as delete),
            Manage Department (The administration can see all the Departments on
            the system and can perform CRUD operations), Manage Salary (The
            administration see all salaris paied to employees), Manage Leave
            (The administration can see all aplied and can either approve , or
            reject), Add Department (The administration can add a department to
            the system), Add Staff (The administration can add a staff to the
            system), Add Salary (The administration can make payment of salary
            to employees), Salary History (The administration can see all the
            salary), and Leave History (The administration can see all applied
            leaves)
          </p>
          {/* <a
            href="https://github.com/sarsahvincent/employee_management_system"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a> */}
          <a
            href="https://employee-management-system-sooty.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material Design Ui
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
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

export default property;

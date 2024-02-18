import Image from "next/image";
import React from "react";
import cryptoImg from "../public/assets/projects/edu_dashboard.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const educationManagement = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Educational Management System</h2>
          <h3>NextJS / NodeJS / Express / Mongo DB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            <b>EDUCATIONAL MANAGEMENT SYSTEM</b> Modules: Dashboard, Teacher
            management, Parent management, Children management, Subject
            management, Blogs, Classroom management, Lesson management, and
            Finance.
            <br />
            <b>DASHBOARD</b> ::: This displays statistics of teachers, children
            subjects and finance. It shows revenue distribution chart, child sex
            distribution chart, and gender distribution in Classroom chart.
            <br />
            <b>REACHER</b> ::: Logged in teacher can manage his/her profile, and
            view profile details of other teacher and children.
            <br />
            <b>PARENT</b> ::: Logged in user can manage the profile a parent and
            send message to a single parent of all teh parent on the platform.
            <br />
            <b>SUBJECT</b> All subjects are presented in a table and be edited.
            Button is available to add new subject.
            <br />
            <b>BLOG</b> Lists all the event posted. Events are available for
            parent on the mobile platform.
            <br />
            <b>FINANCE</b>::: Lists all bills generated. Button is available to
            add new bill. Existing bill can be edited. Payment option is
            available to view all children who have made Payment.
            <br />
            <b>CLASSROOM</b> Lists all the classroom. New classroom can be
            added.
            <br />
            <b>LESSON</b> ::: Lists all the lessons available for a classroom.
            <br />
          </p>

          <a
            href="https://tessella-montessori-international-school.vercel.app/login"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-96">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongo DB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typscript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux Toolkit
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Alkessl
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

export default educationManagement;

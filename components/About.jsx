import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import AboutImg from "../public/assets/Vincent_Andoh_Sarsah.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="flex flex-col max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-3">
          <h2 className="uppercase  tracking-widest text-[#5651e5]">
            About me
          </h2>

          <p className="py-2 text-gray-600 text-xl">
            Vincent Andoh Sarsah is a front-end web and mobile application
            developer with about two years of experience. I have worked on
            multiple projects, including: Freelance platform, E-commerce
            platform,Church Management System, and Employee Management System
            (Web, Mobile: cross-platform).
          </p>

          <Link href="/#projects">
            <p className="py-2 text-blue-600 cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>

          <div>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/clint-briley-50056920a/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/fireclint"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <Link href="/#contact">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href="/resume">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

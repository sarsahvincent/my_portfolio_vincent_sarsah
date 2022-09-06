import Image from "next/image";
import React from "react";
import cryptoImg from "../public/assets/projects/Dashboard.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const crypto = () => {
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
          <h2 className="py-2">Youth Management System</h2>
          <h3>React JS / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            <b>DGM YOUTH MANAGEMENT SYSTEM</b> Modules: Dashboard, Profile, Add
            User, New Conver, Finance, Activities, Report, Settings, Program
            Contact, Events Banner Page Users Administrator, President (Youth
            President), Vice President, Financial Secretary, Treasurer,
            Executive (Youth Executives), Member (Members of the Youth), and
            Observer (Youth Pastor, Presiding elder).
            <br />
            <b>DASHBOARD</b> ::: This displays summary of Total number of Youth,
            Total number of Men, Total Number of Women, total number of New
            Convert, and keyword (First Name, Middle Name, Last Name, Email, and
            Phone Number). ::: Has button to reset all filters ::: Displays all
            users. ::: Displays all activities. ::: Users can be filtered by
            gender, department, and status (Member or New Conver) NB This module
            is available to any user with login credentials.
            <br />
            <b>PROFLE</b> ::: This displays the current logged in users’
            details: Full Name, Email, Date of joining the platform, Role (e.g.,
            Admin, president, etc.), Age, Phone, Status (involvement in church
            activities i.e., Very Active, Active, and Inactive), Monthly Dues
            paid/ 12 (e.g., 3/12 ::: has paid 3 out of the 12 months), Assigned
            Department, Number of souls won, Salutation, Gender, First Name,
            Last Name, Middle Name, Membership Status (i.e., Member or New
            Convert), Occupation, Address, City, Emergency Contact Name (E. C.
            Name), Emergency Contact, Baptize (yes or no), Occupation,
            <br />
            <b>NEW ACCOUNT</b> This Module is used to add new users onto the
            platform. ::: All Roles except Member will be required to complete
            all field. ::: All Roles except Member will have login credentials
            with a default password (123456789). ::: Email with a reset password
            link will is sent to New User with Login Credentials. ::: Logged in
            user is directed to profile page. ::: Profile can be edited based on
            assigned permission (Role).
            <br />
            <b>CONVERTS MANAGEMENT</b> This displays a summary of all converts:
            Total Convert, Men, Women. :::Table for listing all New Convert.
            :::Search field for searching for Converts by keyword
            <br />
            <b>EVENT</b> This displays a summary of all Activities/Event: Total
            Event, Approved Events, Pending Events, Executed Events ::: Can
            create Activities/Event: Takes Title ::: Can budget for an
            event/activity: Item name Quantity Unit Cost, ::: Total is
            automatically generated ::: Submitted event/activity has pending as
            status by default ::: Status can be changed to Approved or Executed
            based on permission of a logged in users. ::: Trash icon for
            deleting activity based on permission of a logged in users.
            <br />
            <b>FINANCE</b> Gives a summary of Finance: Current Balance, Monthly
            Dues, Donations and Contributions ::: Can Add and Request for Funds
            base on assigned permission of a logged in user When Adding Funds:
            Click on Add funds Select source of funds Enter amount Click Submit
            to add funds When requesting for funds: Enter amount State purpose
            Select source to request Click request to submit ::: Has history of
            funds ::: Has trash icon to delete record base on assigned
            permission of a logged in user
            <br />
            <b>REPORT</b> List all report ::: Writing of reports ::: Report can
            be deleted based on permission of a logged in user
            <br />
            <b>SYSTEM SETTINGS</b> ::: Crate or Add Department ::: Add program
            Image ::: Reset Password ::: List all departments ::: Trash and
            Pencil icon for deleting and editing of Department Creating
            Department: Name of Department Select Department Leader Select
            Assistant Leader Click related to add department Adding program
            image: Click on Add program image Select image Resetting of
            password: Enter email Press Reset Button ::: Email with reset
            password link is sent to the email
            <br />
            <b> PROGARAM CONTACT</b>
            List all enquiries from a program :::Details of form: Name Phone
            Location Date Sent Message ::: Trash icon for deleting of enquiry
            based on Logged in user permission
          </p>

          <a
            href="https://dgm-youth-essaman.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-60">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
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

export default crypto;
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact_photo.png";
import { ToastContainer, toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { BallTriangle } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { MdContactMail, MdLocalPhone } from "react-icons/md";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const date = new Date().toISOString().slice(0, 10);
const Contact = () => {
  const showAllToastsSuccess = (msg) => {
    toast.success(`${msg}`);
  };

  const showAllToastsError = (msg) => {
    toast.error(`${msg}`);
  };

  function create_UUID() {
    var dt = new Date().getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "") {
      showAllToastsError("Message can not be empty");
    } else {
      let data = {
        name,
        phone,
        email,
        subject,
        message,
      };
      setLoading(true);
      try {
        await setDoc(doc(db, "PORTFOLIO_MESSAGES", create_UUID()), data);

        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
        showAllToastsSuccess("Thank you for contacting me");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        showAllToastsError(error?.message);
      }
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <ToastContainer />
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className=" gap-8">
          {/* left */}
          <div className=" w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              {/* <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div> */}
              <div>
                <h2 className="py-2">Vincent Sarsah</h2>
                <p>Front-End Developer</p>
                <p>Mobile Application Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
                <div>
                  <div className="flex items-center justify-start">
                    <MdContactMail title="Back" />{" "}
                    <span className="ml-3">avioncent@yahoo.com</span>
                  </div>
                  <div className="flex items-center justify-start">
                    <MdLocalPhone title="Back" />{" "}
                    <span className="ml-3">(+233)-547-301-632 / 262756294</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/sarsahvincent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

       
         
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

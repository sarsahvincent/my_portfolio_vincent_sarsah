import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Vincent | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Vincent Andoh Sarsah</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/vincent-andoh-sarsah-a31102195/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/sarsahvincent"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Mobile Development <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Molecular Biology and Biotechnology graduate with background in
          medical and industrial biotechnology, biosafety, microbiology, and
          computing, now expanding my prospective as a software developer,
          interested in making a long-term commitment to my next position with a
          company where I can continue to grow and take on new challenges over
          time.
          <br />
          Kwiekuma Ridge, Sekondi, Ghana. | M.C. 2240, Takoradi | Email:
          avioncent@yahoo.com | Nationality: Ghanaian | Phone: (+233) 547 - 301
          - 632 / 262 - 756 – 294)
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> Mobile Application Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React{" "}
            <span className="px-2">|</span>React Native{" "}
            <span className="px-2">|</span> NextJs{" "}
            <span className="px-2">|</span>Redux <span className="px-2">|</span>
            Bootstrap <span className="px-2">|</span>Material Ui{" "}
            <span className="px-2">|</span>Adober Photoshop{" "}
            <span className="px-2">|</span>Adobe Illustrator{" "}
            <span className="px-2">|</span>Adobe Xd
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Software Developer</span>
            <span className="px-2">|</span>Amalitech Services, Ghana
          </p>
          <p className="py-1 italic">Front-End Developer(2019 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li> Develop new user-facing features.</li>
            <li> Build reusable code and libraries for future use.</li>
            <li> Ensure the technical feasibility of UI/UX designs</li>
            <li> Optimize application for maximum speed and scalability.</li>
            <li>
              Essure that all user input is validated before submitting to
              back-end.{" "}
            </li>
            <li> Collaborate with other team members and stakeholders.</li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Medical Laboratory Scientist</span>
            <span className="px-2">|</span>Apinto Government Hospital, Tarkwa,
            Ghana
          </p>
          <p className="py-1 italic">Laboratory Scientist (2017 - 2018)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Organizing work by matching computer orders with specimen
              labeling.
            </li>
            <li>
              Maintaining quality results by running standards and controls and
              verifying equipment functions.
            </li>
            <li>
              Providing test results for patient’s diagnosis and treatment by
              operating hematology machine and performing urinalysis.
            </li>
            <li>
              Ensuring that the patient of receiving compactible blood/blood
              components by completing blood typing, antibody screening,
              compatibility testing, and antibody identification procedures.
            </li>
            <li>
              Ensuring future retrieval of patient transfused information by
              preparing patient packet and maintaining blood bank database.
            </li>
            <li>
              Performing microscopic examination of sickling, malaria parasites,
              urine and stool.
            </li>
            <li>
              Maintaining patient confidence by keeping laboratory information
              confidential.
            </li>
            <li>Running Hemoglobin (Hb) electrophoresis.</li>
            <li>
              Performing rapid diagnostic test for Hepatitis B&C, HIV, Syphilis,
              H-Pylori and Pregnancy.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;

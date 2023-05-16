import React from "react";
import Image from "next/image";
// import img from "/public/newAssets/prof.png";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGitlab } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandDjango, TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiBootstrap } from "react-icons/si";
import { DiMongodb, DiGit } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { TfiHtml5 } from "react-icons/tfi";
import Link from "next/link";

export const About = () => {
  return (
    <>
      <div className="w-full h-full bg-white pt-[50px]">
        <div className="max-w-[1260px] w-full mx-auto p-2">
          <div className="pt-[10%]">
            <div>
              <div className="flex">
                <div className="pr-5 max-w-[780px]">
                  <h5 className="justify-center text-black py-2">
                    Adapting and improving for continuous growth
                  </h5>
                  <h1 className="text-black pb-8">Dynamic learner.</h1>
                  <p className="text-black lg:text-base md:text-sm text-xs">
                    A dedicated software engineer with a passion for technology,
                    exemplified not only in my professional pursuits but also in
                    personal interests such as drone technology. I approach life
                    with the same methodical precision that I apply to debugging
                    code, breaking down complex issues into manageable tasks. My
                    commitment to continuous learning is evident in my proactive
                    approach to staying updated with industry trends, which has
                    transformed me to a proficient full-stack software engineer.
                    The intensive training and fast-paced environment of the
                    bootcamp honed my adaptability and resilience, equipping me
                    with the skills to quickly grasp and apply new concepts. My
                    diverse project experience, both within the bootcamp and
                    beyond, has allowed me to demonstrate my versatility.
                    Serving in roles from team leader to cooperative teammate,
                    I&apos;ve developed an ability to effectively meet project
                    deadlines and foster a positive team dynamic. Thank you for
                    taking the time to explore my portfolio. It showcases my
                    dedication to my craft, my commitment to continuous
                    learning, and my readiness to make significant contributions
                    to impactful projects. I look forward to the opportunity of
                    connecting with you soon!
                  </p>
                  <h5 className="text-black pt-3 font-bold">Check me out!</h5>
                  <div className="flex justify-start pt-2 gap-3">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/jeffmchang23/"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin size={35} color="black" />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://gitlab.com/jeffmchang"
                      rel="noopener noreferrer"
                    >
                      <AiFillGitlab size={35} color="black" />
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={"/../public/newAssets/prof.png"}
                    alt="/"
                    height={500}
                    width={500}
                    className="hidden lg:block mt-12"
                  />
                </div>
              </div>
              <div className="mt-[5%]">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center justify-center card hover:scale-110 duration-100 shadow-xl">
                    <div>
                      <div className="flex justify-center">
                        <GrReactjs size={28} color="#259490" />
                      </div>
                      <div className="flex justify-center">
                        <SiBootstrap size={28} color="#259490" />
                        <SiTailwindcss size={28} color="#259490" />
                      </div>
                      <h4 className="text-center py-3">Front-End Dev</h4>
                      <p className="text-white text-xs text-center mx-5">
                        I have a comprehensive skill set that includes the use
                        of React, Redux, Tailwind, among other libraries. I can
                        create highly interactive and state-controlled user
                        interfaces.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center card hover:scale-110 duration-100 shadow-xl">
                    <div>
                      <div className="flex justify-center mt-3">
                        <SiPostgresql size={40} color="#259490" />
                        <DiMongodb size={40} color="#259490" />
                      </div>
                      <h4 className="text-center py-3">Back-End Dev</h4>
                      <p className="text-white text-xs text-center mx-5">
                        I am proficient in backend technologies like PostgreSQL
                        and MongoDB, among other tools. With these skills, I am
                        capable of designing robust and efficient databases.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center card hover:scale-110 duration-100 shadow-xl">
                    <div>
                      <div className="">
                        <div className="flex justify-center gap-1 mb-1">
                          <FaPython
                            size={25}
                            className="col-start-3"
                            color="#259490"
                          />
                          <FaCss3
                            size={25}
                            className="col-start-3"
                            color="#259490"
                          />
                        </div>
                        <div className="flex justify-center gap-1">
                          <TfiHtml5 size={25} className="" color="#259490" />
                          <IoLogoJavascript
                            size={25}
                            className=""
                            color="#259490"
                          />
                        </div>
                      </div>
                      <h4 className="py-3 text-center">Versatile Stack</h4>
                      <p className="text-white text-xs text-center mx-5">
                        Boasting an extensive skill set, I am proficient in
                        languages including Python3, HTML5, CSS, and JavaScript,
                        as well as applications like Docker, Insomnia, and
                        FastAPI.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center card hover:scale-110 duration-100 shadow-xl">
                    <div>
                      <div className="">
                        <div className="flex justify-center">
                          <TbBrandDjango size={28} color="#259490" />
                        </div>
                        <div className="flex justify-center">
                          <TbBrandNextjs size={28} color="#259490" />
                          <DiGit size={28} color="#259490" />
                        </div>
                      </div>
                      <h4 className="text-center py-3">Tech Skills</h4>
                      <p className="text-white text-xs text-center mx-5">
                        Git for version control, Next.js for server-rendered
                        React applications, and Django for creating secure
                        backend solutions, highlighting my versatility as a
                        software engineer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

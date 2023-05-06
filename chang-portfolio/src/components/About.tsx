import React from "react";
import Image from "next/image";
import img from "/./public/newAssets/prof.png";
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

export const About = () => {
  return (
    <>
      <div className="w-full h-full bg-white pt-[50px]">
        <div className="max-w-[1260px] w-full mx-auto p-2">
          <div className="pt-[10%]">
            <div>
              <div className="flex">
                <div className="pr-5">
                  <h5 className="justify-center text-black py-2">
                    Adapting and improving for continuous growth
                  </h5>
                  <h1 className="text-black pb-8">Dynamic learner.</h1>
                  <p className="text-black lg:text-base md:text-sm text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Alias asperiores quae esse veniam aperiam, totam placeat
                    tempore! Amet praesentium deserunt possimus aperiam optio
                    accusantium quod deleniti repellendus eum, quam labore.
                    Nesciunt, numquam quisquam. Amet iusto cum cumque rerum
                    doloribus suscipit sapiente perferendis necessitatibus quia
                    iste dolorum, dolores iure eveniet labore odit, impedit
                    recusandae ab earum modi magnam similique. Iusto, magni?
                    Rerum laboriosam pariatur repellat voluptatem, quas ab quae
                    consectetur ipsam, doloribus itaque tempore, modi commodi.
                    Odit, ipsum. Unde totam consequuntur fuga delectus sed? Iste
                    incidunt earum facere pariatur sequi natus. Dolor quo nam
                    culpa, ut voluptatibus quia. Nesciunt quam officia rem
                    laboriosam? Maxime pariatur fuga repudiandae. Harum sed
                    explicabo nostrum fugiat unde excepturi iusto. Doloribus
                    odit nisi optio et distinctio?
                  </p>
                  <h5 className="text-black pt-3 font-bold">Check me out!</h5>
                  <div className="flex justify-start pt-2 gap-3">
                    <BsLinkedin size={35} color="black" />
                    <AiFillGitlab size={35} color="black" />
                  </div>
                </div>
                <div>
                  <Image
                    src={img}
                    alt="/"
                    height={3000}
                    width={3000}
                    className="hidden lg:block"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati maxime, ducimus tempora illum dicta quidem
                        est, perspiciatis iusto, quas fuga nisi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center card hover:scale-110 duration-100 shadow-xl">
                    <div>
                      <div className="flex justify-center">
                        <SiPostgresql size={40} color="#259490" />
                        <DiMongodb size={40} color="#259490" />
                      </div>
                      <h4 className="text-center py-3">Back-End Dev</h4>
                      <p className="text-white text-xs text-center mx-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati maxime, ducimus tempora illum dicta quidem
                        est, perspiciatis iusto, quas fuga nisi.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati maxime, ducimus tempora illum dicta quidem
                        est, perspiciatis iusto, quas fuga nisi.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati maxime, ducimus tempora illum dicta quidem
                        est, perspiciatis iusto, quas fuga nisi.
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

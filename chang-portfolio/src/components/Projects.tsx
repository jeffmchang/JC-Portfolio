import React, { useState } from "react";
import Image from "next/image";
import autoImg from "/./public/newAssets/autostack.png";
import img from "/./public/newAssets/hookedhome.png";
import temp from "/./public/newAssets/temp.png";
import hookedGif from "/./public/newAssets/hookedgif.gif";
import autostack from "/./public/newAssets/autostack.gif";
import congo from "/./public/newAssets/congo.png";
import congoGif from "/./public/newAssets/congogif.gif";
import { FaReact, FaPython } from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";

import Link from "next/link";

export const Projects = () => {
  const [gif, setGif] = useState(img);
  const [carGif, setCarGif] = useState(autoImg);
  const [conGif, setCongoGif] = useState(congo);

  const handleSetSrc = (isGif: boolean) => {
    setGif(isGif ? hookedGif : img);
  };
  const handlesetCarGif = (isGif: boolean) => {
    setCarGif(isGif ? autostack : autoImg);
  };

  const handlesetCongoGif = (isGif: boolean) => {
    setCongoGif(isGif ? congoGif : congo);
  };

  return (
    <div className="w-full h-[100%] bg-white pb-[130px]">
      <div className="max-w-[1260px] w-full mx-auto p-2">
        <div className="flex flex-wrap gap-7 justify-between">
          <div className="blocks shadow-2xl hover:scale-105 duration-100">
            <div
              className="w-full pb-1"
              onMouseOver={() => {
                handleSetSrc(true);
              }}
              onMouseOut={() => {
                handleSetSrc(false);
              }}
            >
              <div>
                <Image
                  src={gif}
                  width={580}
                  alt="hookedhome"
                  className="rounded-t-md"
                />
              </div>
              <div className="m-6 mx-10">
                <div className="flex justify-between">
                  <h3 className=" mb-4 text-white">Hooked</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <FaReact size={27} />
                    <SiPostgresql size={27} />
                    <SiTailwindcss size={27} />
                    <FaPython size={27} />
                    <SiJavascript size={27} />
                  </div>
                </div>
                <p className="max-w-[500px] text-sm">
                  A high-performance fishing location finder app using FastAPI
                  and SQL, complete with a forum and a responsive, visually
                  appealing interface styled with Tailwind. Built on a Python
                  and PostgreSQL backend, and leverages JavaScript for dynamic
                  interactivity.
                </p>
                <Link
                  className="hover:text-[#b0d9e2]"
                  target="_blank"
                  href="https://gitlab.com/hooked2/module3-project-gamma"
                  rel="noopener noreferrer"
                >
                  <h5 className="mt-3 text-base">See code...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="blocks shadow-2xl hover:scale-105 duration-100">
            <div
              className="w-full pb-1"
              onMouseOver={() => {
                handlesetCarGif(true);
              }}
              onMouseOut={() => {
                handlesetCarGif(false);
              }}
            >
              <div>
                <Image
                  src={carGif}
                  width={580}
                  alt="hookedhome"
                  className="rounded-t-md"
                />
              </div>
              <div className="m-6 mx-10">
                <div className="flex justify-between">
                  <h3 className=" mb-4 text-white">AutoStack</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <FaReact size={27} />
                    <TbBrandDjango size={27} />
                    <SiBootstrap size={27} />
                    <FaPython size={27} />
                    <SiJavascript size={27} />
                  </div>
                </div>
                <p className="max-w-[500px] text-sm">
                  A car sales management application designed with Python and
                  Django, employs pub/sub and polling methods for efficient
                  information handling. Insomnia is utilized to optimize data
                  flow and performance.
                </p>
                <Link
                  className="hover:text-[#b0d9e2]"
                  target="_blank"
                  href="https://gitlab.com/sofiauribeportfolio/car-dealership"
                  rel="noopener noreferrer"
                >
                  <h5 className="mt-3 text-base">See code...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="blocks shadow-2xl hover:scale-105 duration-100">
            <div
              className="w-full pb-1"
              onMouseOver={() => {
                handlesetCongoGif(true);
              }}
              onMouseOut={() => {
                handlesetCongoGif(false);
              }}
            >
              <div>
                <Image
                  src={conGif}
                  width={580}
                  alt="hookedhome"
                  className="rounded-t-md"
                />
              </div>
              <div className="m-6 mx-10">
                <div className="flex justify-between">
                  <h3 className=" mb-4 text-white">ConGo</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <FaReact size={27} />
                    <TbBrandDjango size={27} />
                    <SiBootstrap size={27} />
                    <FaPython size={27} />
                    <SiJavascript size={27} />
                  </div>
                </div>
                <p className="max-w-[500px] text-sm">
                  A conference management application, employing Python and
                  Django, that seamlessly organizes and manages conferences.
                  Implements a combination of pub/sub mechanisms, queues, and
                  polling techniques.
                </p>
                <Link
                  className="hover:text-[#b0d9e2]"
                  target="_blank"
                  href="https://gitlab.com/jeffmchang/fearless-frontend"
                  rel="noopener noreferrer"
                >
                  <h5 className="mt-3 text-base">See code...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="blocks shadow-2xl hover:scale-105 duration-100">
            <div className="w-full pb-1">
              <div>
                <Image
                  src={temp}
                  width={580}
                  alt="hookedhome"
                  className="rounded-t-md"
                />
              </div>
              <div className="m-6 mx-10">
                <div className="flex justify-between">
                  <h3 className=" mb-4 text-white">MeetUp</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <FaReact size={27} />
                    <SiPostgresql size={27} />
                    <SiTailwindcss size={27} />
                    <FaPython size={27} />
                    <SiJavascript size={27} />
                  </div>
                </div>
                <p className="max-w-[500px] text-sm">
                  An intuitive scheduling app that streamlines planning
                  gatherings with friends and family. It offers features for
                  event creation, invite management, RSVP tracking, simplifying
                  the process of organizing meetups.
                </p>
                <Link
                  className="hover:text-[#b0d9e2]"
                  target="_blank"
                  href=""
                  rel="noopener noreferrer"
                >
                  <h5 className="mt-3 text-base">See code...</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

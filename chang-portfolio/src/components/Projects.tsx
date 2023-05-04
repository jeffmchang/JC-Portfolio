import React from "react";
import Image from "next/image";
import autoImg from "/./public/newAssets/autostack.png";
import img from "/./public/newAssets/hookedcard.png";
import temp from "/./public/newAssets/temp.png";
import { FaReact, FaPython } from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";

export const Projects = () => {
  return (
    <div className="w-full h-[100%] bg-white">
      <div className="max-w-[1260px] w-full mx-auto p-2">
        <div className="flex flex-wrap gap-7 justify-between">
          <div className="blocks shadow-2xl hover:scale-105 duration-100">
            <div className="w-full">
              <div>
                <Image
                  src={img}
                  width={580}
                  alt="hookedhome"
                  className="rounded-t-md "
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
                <p className="max-w-[500px]  text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat natus magni minus, similique molestiae ipsum nisi,
                  recusandae quam doloribus cumque ab iusto minima. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <h5 className="mt-3 text-base">Read more...</h5>
              </div>
            </div>
          </div>
          <div className="blocks shadow-2xl hover:scale-105 duration-100">
            <div className="w-full">
              <div>
                <Image
                  src={autoImg}
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
                <p className="max-w-[500px]  text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat natus magni minus, similique molestiae ipsum nisi,
                  recusandae quam doloribus cumque ab iusto minima. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <h5 className="mt-3 text-base">Read more...</h5>
              </div>
            </div>
          </div>
          <div className="blocks shadow-2xl hover:scale-105 duration-100">
            <div className="w-full">
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
                <p className="max-w-[500px]  text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat natus magni minus, similique molestiae ipsum nisi,
                  recusandae quam doloribus cumque ab iusto minima. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <h5 className="mt-3 text-base">Read more...</h5>
              </div>
            </div>
          </div>
          <div className="blocks shadow-2xl hover:scale-105 duration-100">
            <div className="w-full">
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
                  <h3 className=" mb-4 text-white">ConGo</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <FaReact size={27} />
                    <SiPostgresql size={27} />
                    <SiTailwindcss size={27} />
                    <FaPython size={27} />
                    <SiJavascript size={27} />
                  </div>
                </div>
                <p className="max-w-[500px]  text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat natus magni minus, similique molestiae ipsum nisi,
                  recusandae quam doloribus cumque ab iusto minima. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <h5 className="mt-3 text-base">Read more...</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

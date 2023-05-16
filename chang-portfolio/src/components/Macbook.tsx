import React from "react";
import Image from "next/image";
import img from "/./public/newAssets/macbook.png";
import { Projects } from "./Projects";

export const Macbook = () => {
  return (
    <div className="w-full h-full bg-white pt-[150px]">
      <div className="max-w-[1260px] w-full h-full mx-auto p-2">
        <div className="flex justify-center gap-10">
          <Image
            src={img}
            alt="/"
            height={650}
            width={650}
            className="ml-[-5%] hidden lg:block"
          />
          <div className="flex items-center mb-[5%]">
            <div>
              <h5 className=" text-black py-2">
                Showcasing skills and ability
              </h5>
              <h1 className="text-black pb-8">Visual portfolio.</h1>
              <p className="text-black lg:text-base md:text-sm text-xs">
                In this segment, you will discover a selection of projects that
                I&apos;ve successfully completed, along with a project that is
                presently under development. This curated visual showcase is
                intended to provide you with a firsthand glimpse into the work I
                deliver. My specialty lies in crafting aesthetically pleasing
                and user-friendly interfaces, a skill I take great pride in.
                Adding to the interactive nature of this section, I invite you
                to hover over each project image. This will trigger a live demo
                of the respective application, allowing you to experience its
                functionality and user-friendly interface firsthand.
              </p>
            </div>
          </div>
        </div>
        <Projects />
      </div>
    </div>
  );
};

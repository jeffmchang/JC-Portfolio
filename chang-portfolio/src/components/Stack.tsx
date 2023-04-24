import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiDjango,
  SiRedux,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandAmongUs } from "react-icons/tb";

export const Stack = () => {
  return (
    <div>
      <div className="container">
        <div>
          <p className="text-center text-7xl font-bold py-10 pt-[120px] text-black">
            Tech Stack
          </p>
          <div className="flex justify-center gap-3">
            <SiReact size={70} color="black" />
            <FaPython size={70} color="black" />
            <SiJavascript size={70} color="black" />
            <SiTailwindcss size={70} color="black" />
            <SiDjango size={70} color="black" />
            <SiRedux size={70} color="black" />
            <SiPostgresql size={70} color="black" />
            <SiMongodb size={70} color="black" />
            <TbBrandAmongUs size={70} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

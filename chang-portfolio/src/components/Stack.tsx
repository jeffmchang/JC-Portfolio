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
          <p className="text-center text-7xl font-bold py-10 pt-[120px] text-white">
            Tech Stack
          </p>
          <div className="flex justify-center gap-3">
            <SiReact size={70} color="white" />
            <FaPython size={70} color="white" />
            <SiJavascript size={70} color="white" />
            <SiTailwindcss size={70} color="white" />
            <SiDjango size={70} color="white" />
            <SiRedux size={70} color="white" />
            <SiPostgresql size={70} color="white" />
            <SiMongodb size={70} color="white" />
            <TbBrandAmongUs size={70} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

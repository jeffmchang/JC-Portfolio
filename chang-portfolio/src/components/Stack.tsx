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
    <div className="w-full h-full bg-white">
      <div className="max-w-[1260px] w-full h-full mx-auto p-2">
        <div className="max-w-[600px]">
          <h5 className="text-black">Languages that I utlize</h5>
          <h1 className="text-black">Diverse tech stack.</h1>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odio voluptatum magni voluptatibus, optio id atque tempore veniam,
            quam saepe quo nisi ea officiis cum natus perspiciatis dignissimos
            corrupti minus? Quasi magni aspernatur labore, accusantium
            repudiandae esse, eos rerum expedita vero ullam dolor beatae a quia
            incidunt commodi? Quasi minima laboriosam aperiam libero. Soluta
            voluptates odio fugit possimus temporibus eos. Nesciunt eveniet
            harum facere quam dolore illum officia nemo eum ducimus architecto
            adipisci eos tempora quia iure neque laudantium ipsa similique enim
            reiciendis nihil iusto, vitae eaque. Distinctio, tempore rerum?
          </p>
        </div>
        {/* <div className="flex justify-center gap-3">
          <SiReact size={70} color="black" />
          <FaPython size={70} color="black" />
          <SiJavascript size={70} color="black" />
          <SiTailwindcss size={70} color="black" />
          <SiDjango size={70} color="black" />
          <SiRedux size={70} color="black" />
          <SiPostgresql size={70} color="black" />
          <SiMongodb size={70} color="black" />
          <TbBrandAmongUs size={70} color="black" />
        </div> */}
      </div>
    </div>
  );
};

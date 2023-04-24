import React from "react";
import TypingEffect from "./Typing";
import { IoArrowDownCircleSharp } from "react-icons/io5";

const Main = () => {
  return (
    <>
      <div className="w-full h-screen text-center">
        <div className="max-w-[1260px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="text-[#7ae2fc] text-base p-2 tracking-widest font-semibold uppercase">
              LET'S EXPLORE NEW HORIZONS TOGETHER.
            </p>
            <h1>
              Hey there! I'm <span className="text-[#dd2a2a]">Jeff</span>
            </h1>
            <div className="flex justify-center items-center pt-3">
              <h3>Ask me about&nbsp;</h3>
              <TypingEffect />
            </div>
            <div className="max-w-[600px]">
              <p className="text-xl p-3 text-[#7ae2fc] font-semibold">
                An aspiring full-stack developer seeking opportunities to make
                an impact on the world through technology.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[-5%] flex justify-center"></div>
      </div>
    </>
  );
};

export default Main;

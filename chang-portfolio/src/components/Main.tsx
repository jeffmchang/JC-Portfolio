import React from "react";
import TypingEffect from "./Typing";
import { IoArrowDownCircleSharp } from "react-icons/io5";

const Main = () => {
  return (
    <>
      <div className="w-full h-screen text-center shadow-xl">
        <div className="max-w-[1260px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="text-[#7ae2fc] text-base p-2 tracking-widest font-semibold uppercase">
              LET&apos;S EXPLORE NEW HORIZONS TOGETHER.
            </p>
            <h1>
              Hey there! I&apos;m <span className="text-[#dd2a2a]">Jeff</span>
            </h1>
            <div className="flex justify-center items-center pt-3">
              <h3 className="text-2xl md:text-3xl">Ask me about&nbsp;</h3>
              <TypingEffect />
            </div>
            <div className="max-w-[600px]">
              <p className="text-xl p-3 text-[#7ae2fc] font-semibold">
                A full-stack developer seeking opportunities to make an impact
                on the world through technology.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[-150px] flex justify-center">
          <IoArrowDownCircleSharp className="animate-bounce" size={40} />
        </div>
      </div>
    </>
  );
};

export default Main;

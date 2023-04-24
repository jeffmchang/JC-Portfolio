import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={"fixed w-full h-20 z-[100] bg-[#002545] shadow-2xl"}>
      <div className="flex justify-between items-center w-full h-full px-16">
        <div className="flex items-center">
          <Image
            src="/../public/newAssets/logo.png"
            alt="/"
            width={40}
            height={40}
            className="m-[5px] pt-1"
          />
          <h4 className="code font-bold">
            {" "}
            [<span className="text-lg md:text-2xl lg:text-3xl">**</span>
            full-stack developer]
          </h4>
        </div>
        <div>
          <ul className="hidden md:flex mr-2 items-center">
            <Link href="/">
              <li className="code mr-6 font-semibold text-[#c5f4ff] text-base hover:text-[#34daff]">
                <span className="text-[#0a8754]">00.</span> about
              </li>
            </Link>
            <Link href="/about">
              <li className="code mr-6 font-semibold text-[#c5f4ff] text-base hover:text-[#34daff]">
                <span className="text-[#0a8754]">01.</span> stack
              </li>
            </Link>
            <Link href="/projects">
              <li className="code mr-6 font-semibold text-[#c5f4ff] text-base hover:text-[#34daff]">
                <span className="text-[#0a8754]">02.</span> projects
              </li>
            </Link>
            <Link href="/contact">
              <li className="code mr-6 font-semibold text-[#white] text-base hover:text-[#34daff]">
                <span className="text-[#0a8754]">03.</span> contact
              </li>
            </Link>
            <button className="code text-white font-bold rounded px-3 py-2 bg-[#1e7774] hover:bg-[#175c5a] hover:text-[#52b6d7] shadow-3xl">
              resume
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

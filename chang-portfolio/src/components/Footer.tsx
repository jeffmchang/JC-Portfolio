import React from "react";
import { RiCopyrightLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGitlab } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={"bottom-0 w-full h-20 z-[-100] bg-[#002545] shadow-inner"}>
      <div className="flex justify-center items-center w-full h-full">
        <RiCopyrightLine size={15} />
        &nbsp;
        <h5 className="text-sm">JC | Full-Stack Portfolio</h5>
        &nbsp; &nbsp;
        <BsLinkedin size={20} />
        &nbsp; &nbsp;
        <AiFillGitlab size={20} />
      </div>
    </div>
  );
};

export default Footer;

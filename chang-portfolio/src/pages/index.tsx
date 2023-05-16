import Head from "next/head";
import Main from "@/components/Main";
import Image from "next/image";
import Link from "next/link";
import { About } from "@/components/About";
import { Macbook } from "@/components/Macbook";
import { ContactUs } from "@/components/Contact";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

import { useState } from "react";

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Head>
        <title>JC | Full-Stack Developer</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"fixed w-full h-20 z-[100] bg-[#002545] shadow-2xl"}>
        <div className="flex justify-between items-center mx-auto max-w-[1260px] h-full">
          <Link href="#main" onClick={handleScroll}>
            <div className="flex items-center">
              <Image
                src={"/../public/newAssets/logo.png"}
                alt="/"
                width={30}
                height={30}
                className="m-[5px] pt-1"
              />
              <h5 className="code font-bold">
                {" "}
                [<span className="text-lg md:text-xl lg:text-2xl">**</span>
                full-stack developer]
              </h5>
            </div>
          </Link>
          <div>
            <ul className="hidden md:flex mr-2 items-center">
              <Link href="#about" onClick={handleScroll}>
                <li className="code mr-6 font-semibold text-[#c5f4ff] text-base hover:text-[#34daff]">
                  <span className="text-[#0a8754]">01.</span> about
                </li>
              </Link>
              <Link href="#projects" onClick={handleScroll}>
                <li className="code mr-6 font-semibold text-[#c5f4ff] text-base hover:text-[#34daff]">
                  <span className="text-[#0a8754]">02.</span> projects
                </li>
              </Link>
              <Link href="#contact" onClick={handleScroll}>
                <li className="code mr-6 font-semibold text-[#white] text-base hover:text-[#34daff]">
                  <span className="text-[#0a8754]">03.</span> contact
                </li>
              </Link>
              <button
                className="code text-white font-bold rounded px-3 py-2 bg-[#1e7774] hover:bg-[#175c5a] hover:text-[#8d8d8d] shadow-3xl"
                onClick={() => setShowModal(!showModal)}
              >
                resume
              </button>
            </ul>
          </div>
        </div>
      </div>
      <section id="main">
        <Main />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Macbook />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section>{showModal && <Modal changeModal={setShowModal} />}</section>
      <Footer />
    </div>
  );
}

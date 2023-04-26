import Navbar from "@/components/Navbar";
import Head from "next/head";
import Main from "@/components/Main";
import { useEffect, useState } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { About } from "@/components/About";
import { ArrowDown } from "@/components/ArrowDown";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { Macbook } from "@/components/Macbook";

export default function Home() {
  return (
    <div>
      <Head>
        <title>JC | Front-End Developer</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Parallax pages={4}>
        <ParallaxLayer speed={0.05}>
          <Main />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={0.5}
          className="w-full h-[30px] flex justify-center"
        >
          <ArrowDown />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.05}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={1.85} speed={0.15}>
          <Macbook />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={2} speed={0.15}>
          <Projects />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

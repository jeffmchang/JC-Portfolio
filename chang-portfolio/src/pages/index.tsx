import Navbar from "@/components/Navbar";
import Head from "next/head";
import Main from "@/components/Main";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { About } from "@/components/About";
import { ArrowDown } from "@/components/ArrowDown";
import { Projects } from "@/components/Projects";
import { Macbook } from "@/components/Macbook";
import { Projects2 } from "@/components/Projects2";

export default function Home() {
  return (
    <div>
      <Head>
        <title>JC | Front-End Developer</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Macbook />
    </div>
  );
}

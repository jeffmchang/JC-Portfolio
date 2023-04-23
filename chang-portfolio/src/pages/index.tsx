import Navbar from "@/components/Navbar";
import Head from "next/head";
import Main from "@/components/Main";

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
    </div>
  );
}

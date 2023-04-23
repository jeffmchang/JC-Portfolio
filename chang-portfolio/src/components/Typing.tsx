import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [`React`, "Python", "Javascript", "TailwindCSS"],
          autoStart: true,
          loop: true,
          wrapperClassName: "text-[#dd2a2a] text-3xl font-bold",
          pauseFor: 800,
          deleteSpeed: 80,
          delay: 70,
        }}
      />
    </div>
  );
}

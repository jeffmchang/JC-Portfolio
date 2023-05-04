import React from "react";
import Image from "next/image";
import img from "/./public/newAssets/macbook.png";
import { Projects } from "./Projects";

export const Macbook = () => {
  return (
    <div className="w-full h-full bg-white pt-[150px]">
      <div className="max-w-[1260px] w-full h-full mx-auto p-2">
        <div className="flex justify-center gap-10">
          <Image
            src={img}
            alt="/"
            height={650}
            width={650}
            className="ml-[-5%] hidden lg:block"
          />
          <div className="flex items-center mb-[5%]">
            <div>
              <h5 className=" text-black py-2">
                Showcasing skills and ability
              </h5>
              <h1 className="text-black pb-8">Visual portfolio.</h1>
              <p className="text-black lg:text-base md:text-sm text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                asperiores quae esse veniam aperiam, totam placeat tempore! Amet
                praesentium deserunt possimus aperiam optio accusantium quod
                deleniti repellendus eum, quam labore. Nesciunt, numquam
                quisquam. Amet iusto cum cumque rerum doloribus suscipit
                sapiente perferendis necessitatibus quia iste dolorum, dolores
                iure eveniet labore odit, impedit recusandae ab earum modi
                magnam similique. Iusto, magni? Rerum laboriosam pariatur
                repellat voluptatem, quas ab quae consectetur ipsam, doloribus
                itaque tempore, modi commodi. Odit, ipsum. Unde totam
                consequuntur fuga delectus sed? Iste incidunt earum facere
                pariatur sequi natus. Dolor quo nam culpa, ut voluptatibus quia.
                Nesciunt quam officia rem laboriosam? Maxime pariatur fuga
                repudiandae. Harum sed explicabo nostrum fugiat unde excepturi
                iusto. Doloribus odit nisi optio et distinctio?
              </p>
            </div>
          </div>
        </div>
        <Projects />
      </div>
    </div>
  );
};

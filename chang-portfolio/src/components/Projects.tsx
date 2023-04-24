import React from "react";
import Image from "next/image";
import img from "/./public/newAssets/programming.svg";

export const Projects = () => {
  return (
    <div className="w-full h-[70%] bg-white">
      <div className="max-w-[1260px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex justify-center gap-10">
          <Image src={img} alt="/" height={300} width={400} />
          <div>
            <h2 className="justify-center text-black py-5">Projects section</h2>
            <h1 className="text-black pb-8">
              I will put a nice video gif here
            </h1>
            <p className="text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              asperiores quae esse veniam aperiam, totam placeat tempore! Amet
              praesentium deserunt possimus aperiam optio accusantium quod
              deleniti repellendus eum, quam labore. Nesciunt, numquam quisquam.
              Amet iusto cum cumque rerum doloribus suscipit sapiente
              perferendis necessitatibus quia iste dolorum, dolores iure eveniet
              labore odit, impedit recusandae ab earum modi magnam similique.
              Iusto, magni? Rerum laboriosam pariatur repellat voluptatem, quas
              ab quae consectetur ipsam, doloribus itaque tempore, modi commodi.
              Odit, ipsum. Unde totam consequuntur fuga delectus sed? Iste
              incidunt earum facere pariatur sequi natus. Dolor quo nam culpa,
              ut voluptatibus quia. Nesciunt quam officia rem laboriosam? Maxime
              pariatur fuga repudiandae. Harum sed explicabo nostrum fugiat unde
              excepturi iusto. Doloribus odit nisi optio et distinctio?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

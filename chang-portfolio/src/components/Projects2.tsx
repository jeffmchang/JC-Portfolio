import React from "react";
import Image from "next/image";
import img from "/./public/newAssets/hookedhome.png";

export const Projects2 = () => {
  return (
    <div className="w-full h-[100%] bg-white">
      <div className="max-w-[1260px] w-full h-full mx-auto p-2">
        <div className="flex gap-16">
          <div className="block backdrop-blur-md shadow-2xl">
            <div className="flex h-[50%] ">
              <Image src={img} layout="responsive" alt="hookedhome" />
            </div>
            <div className=" m-4">
              <h2 className="text-center m-2">Hooked.</h2>
              <p className="max-w-[500px] text-center flex justify-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                natus magni minus, similique molestiae ipsum nisi, recusandae
                quam doloribus cumque ab iusto minima. Qui ratione reiciendis
                sequi et, aperiam ut? Laudantium impedit quasi suscipit omnis
                laboriosam quam ducimus nemo.
              </p>
            </div>
            <div className="flex justify-center m-4">
              <button className="bg-black rounded-md p-3 ">Click here</button>
            </div>
          </div>
          <div className="block backdrop-blur-md shadow-2xl">
            <div className="flex h-[50%] ">
              <Image src={img} layout="responsive" alt="hookedhome" />
            </div>
            <div className=" m-4">
              <h2 className="text-center m-2">AutoStack</h2>
              <p className="max-w-[500px] text-center flex justify-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                natus magni minus, similique molestiae ipsum nisi, recusandae
                quam doloribus cumque ab iusto minima. Qui ratione reiciendis
                sequi et, aperiam ut? Laudantium impedit quasi suscipit omnis
                laboriosam quam ducimus nemo.
              </p>
            </div>
            <div className="flex justify-center m-4">
              <button className="bg-black rounded-md p-3 ">Click here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

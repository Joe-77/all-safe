import React from "react";
import Animate from "./Animate";
import { FaArrowDownLong } from "react-icons/fa6";

export default function SideShow({ src }: any) {
  return (
    <div className="relative mt-5 w-full h-[600px]">
      <div className="flex gap-10 w-[4000px] overflow-hidden absolute z-50 top-1/2 -translate-y-1/2">
        <div className="flex items-center gap-2 side-show">
          <div className="relative">
            <Animate />
            <span className=" absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl rotate-[-45deg]">
              <FaArrowDownLong />
            </span>
          </div>
          <p className="text-9xl">side show</p>
        </div>
        <div className="flex items-center gap-2 side-show">
          <div className="relative">
            <Animate />
            <span className=" absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl rotate-[-45deg]">
              <FaArrowDownLong />
            </span>
          </div>
          <p className="text-9xl">side show</p>
        </div>
        <div className="flex items-center gap-2 side-show">
          <div className="relative">
            <Animate />
            <span className=" absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl rotate-[-45deg]">
              <FaArrowDownLong />
            </span>
          </div>
          <p className="text-9xl">side show</p>
        </div>
        <div className="flex items-center gap-2 side-show">
          <div className="relative">
            <Animate />
            <span className=" absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl rotate-[-45deg]">
              <FaArrowDownLong />
            </span>
          </div>
          <p className="text-9xl">side show</p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={`/${src}.mp4`} />
        </video>
      </div>
    </div>
  );
}

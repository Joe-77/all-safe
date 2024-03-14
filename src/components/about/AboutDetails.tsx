import { Context } from "@/context/context";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function AboutText() {
  const { initialWidth, initialPosition } = useContext(Context);

  return (
    <div className="pt-48 mx-10 md:mx-20 lg:mx-36 relative xl:h-[864px]">
      <div className="title">
        <div className=" h-full  ">
          <h2
            id="about-title"
            className="text-[45px] sm:text-8xl lg:text-[140px] xl:text-[160px] uppercase leading-[60px]"
          >
            we
            <span className="border-4 border-teal-600 text-teal-600 duration-500 hover:text-black hover:bg-teal-600 rounded-full px-5 mt-1 inline-block lg:px-20 py-2 cursor-pointer">
              create
            </span>
            <p className="pt-5">digital</p>
            <p className="xl:absolute z-10">
              <span className="animate-ping hidden md:inline">_</span>
              solutions
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}

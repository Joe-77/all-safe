import { Context } from "@/context/context";
import { useContext } from "react";
import star from "../../../public/star-shine-svgrepo-com.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Art() {
  const { artTranslate, artWidth } = useContext(Context);

  return (
    <section className="px-7 md:px-16 lg:px-20 xl:px-28 pb-40 overflow-hidden">
      <div className="title">
        <div className="name pt-14 md:pt-28 px-7 ">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase">
            art <br /> direction
          </h2>
        </div>
      </div>

      <div className=" relative w-full xl:h-[500px] z-[-2]">
        <div
          className={`video-container duration-300 bg-[#f1f1f1] mt-16 rounded-full hidden xl:flex  justify-center absolute`}
          style={{
            width: artWidth,
            transform: `translate(${artTranslate.x}px , ${artTranslate.y}px)`,
          }}
        >
          <video
            autoPlay
            muted
            loop
            width={500}
            height={500}
            className="rounded-full"
          >
            <source src="/33399711.mp4" />
          </video>
        </div>
      </div>

      <div className="video-container duration-300 bg-[#f1f1f1] mt-16 rounded-full flex  justify-center xl:hidden">
        <video
          autoPlay
          muted
          loop
          width={300}
          height={300}
          className="rounded-full"
        >
          <source src="/33399711.mp4" />
        </video>
      </div>

      <div className="line-circle py-14 mt-10 relative">
        <div className="absolute w-11/12 h-[1px] left-1/2 -translate-x-1/2 bg-black"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.25 }}
        className="px-7 select-none"
      >
        <h3 className="text-sm uppercase">art direction</h3>

        <div className="flex flex-col lg:flex-row gap-5 justify-between mt-10">
          <div>
            <p className="max-w-[420px] md:max-w-[500px] text-sm md:text-justify md:text-lg">
              Creating digital products from scratch is a team effort. Each of
              specialists can bring something new to the project, but they must
              all work as a single mechanism. Well-established processes and a
              well-coordinate team are the main keys to success.
            </p>
          </div>
          <ul className="flex gap-3 flex-wrap max-w-[500px] text-sm sm:text-xl">
            <li className="uppercase px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              visual
            </li>
            <li className="uppercase px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              identity
            </li>
            <li className="uppercase px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              web
            </li>
            <li className="uppercase px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              design
            </li>
            <li className="uppercase px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              ux
            </li>
            <li className="uppercase  px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              &
            </li>
            <li className="uppercase  px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              ui
            </li>
            <li className="uppercase  px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              design
            </li>
            <li className="uppercase  px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              motion
            </li>
            <li className="uppercase  px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              design
            </li>
            <li className="uppercase  px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              3d
            </li>
            <li className="uppercase px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              visuals
            </li>
            <li className="uppercase px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              development
            </li>
            <li className="uppercase px-3 py-1 rounded-full border-2 border-black duration-500 hover:bg-black hover:text-white cursor-pointer w-fit">
              quality
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <Image
            className="star"
            src={star}
            alt="star-logo"
            width={120}
            height={120}
          />
        </div>
      </motion.div>
    </section>
  );
}

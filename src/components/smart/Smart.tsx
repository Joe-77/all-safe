import { Context } from "@/context/context";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Smart() {
  const { translate, circleWidth } = useContext(Context);

  return (
    <section className=" bg-black text-white pt-28 px-7 md:px-16 xl:px-28 overflow-hidden ">
      <div className="relative xl:h-[400px]">
        <h2 className="text-[36px] sm:text-7xl lg:text-[140px] xl:text-[150px] uppercase leading-[60px] xl:absolute z-30">
          SMART
          <p>
            DEVELOPMENT
            <span className=" animate-ping hidden xl:inline">_</span>
          </p>
        </h2>
      </div>

      <div className=" relative w-full ">
        <div
          className={`video-container  duration-300 bg-[#b1b1] mt-16 rounded-full hidden xl:flex  justify-center`}
          style={{
            width: circleWidth,
            transform: `translate(${translate.x}px , ${translate.y}px)`,
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
            <source src="/circle.mp4" />
          </video>
        </div>
      </div>

      <div className="w-full rounded-full bg-[#b1b1] flex justify-center xl:hidden mt-20">
        <div>
          <video
            autoPlay
            muted
            loop
            width={300}
            height={300}
            className="rounded-full"
          >
            <source src="/circle.mp4" />
          </video>
        </div>
      </div>

      <div className="line-circle py-14 relative">
        <div className="absolute w-11/12  h-[1px] left-1/2 -translate-x-1/2 bg-white"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        <motion.div
          initial={{ x: -50, opacity: 0.3 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video width={50} height={50} autoPlay muted loop>
            <source src="/67496897.mp4" />
          </video>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0.3 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative xl:h-[400px]"
        >
          <div className="flex flex-col md:flex-row gap-7">
            <h3 className="text-sm uppercase font-bold">SMART DEVELOPMENT</h3>
            <div>
              <p className="max-w-[500px] text-xl">
                Combining unique design and rich technology, we build digital
                products exactly as they were designed, without shortcuts or
                simplification.
              </p>

              <div className="py-10 flex flex-col sm:flex-row gap-5">
                <h3 className="text-sm uppercase font-bold">AREAS</h3>
                <div>
                  <div>
                    <ul className="flex flex-wrap gap-4 max-w-[500px]">
                      <li className="border-2 border-white rounded-full px-3 py-1 cursor-pointer duration-700 hover:bg-white hover:text-black">
                        <p>e-commerce</p>
                      </li>
                      <li className="border-2 border-white rounded-full px-3 py-1 cursor-pointer duration-700 hover:bg-white hover:text-black">
                        finance
                      </li>
                      <li className="border-2 border-white rounded-full px-3 py-1 cursor-pointer duration-700 hover:bg-white hover:text-black">
                        education
                      </li>
                      <li className="border-2 border-white rounded-full px-3 py-1 cursor-pointer duration-700 hover:bg-white hover:text-black">
                        social
                      </li>
                      <li className="border-2 border-white rounded-full px-3 py-1 cursor-pointer duration-700 hover:bg-white hover:text-black">
                        entertainment
                      </li>
                      <li className="border-2 border-white rounded-full px-3 py-1 cursor-pointer duration-700 hover:bg-white hover:text-black">
                        medicine
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

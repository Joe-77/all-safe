import { motion } from "framer-motion";
import star from "../../../public/star-shine-svgrepo-com.svg";
import Image from "next/image";
interface CustomCSSProperties extends React.CSSProperties {
  "--i"?: number;
}
export default function Our() {
  return (
    <section className="mt-20 bg-[#8f8f8f] py-28 px-5 sm:px-16 lg:px-20 xl:px-28">
      
      <div className="text-3xl uppercase md:text-8xl">
        <p>our</p>
        <div className="flex">
          <span>philos</span>
          <div className="relative">
            <div className="parent bg-white w-20 h-20 sm:w-[100px] sm:h-[100px] text-black rotate-text rotation-effect relative text-5xl">
              <span style={{ "--i": 1 } as CustomCSSProperties}>W</span>
              <span style={{ "--i": 2 } as CustomCSSProperties}>E</span>
              <span style={{ "--i": 3 } as CustomCSSProperties}>P</span>
              <span style={{ "--i": 4 } as CustomCSSProperties}></span>
              <span style={{ "--i": 5 } as CustomCSSProperties}>M</span>
              <span style={{ "--i": 6 } as CustomCSSProperties}>O</span>
              <span style={{ "--i": 7 } as CustomCSSProperties}>B</span>
              <span style={{ "--i": 8 } as CustomCSSProperties}>I</span>
              <span style={{ "--i": 9 } as CustomCSSProperties}>L</span>
              <span style={{ "--i": 10 } as CustomCSSProperties}>E</span>
              <span style={{ "--i": 11 } as CustomCSSProperties}></span>
              <span style={{ "--i": 12 } as CustomCSSProperties}>B</span>
              <span style={{ "--i": 13 } as CustomCSSProperties}>R</span>
              <span style={{ "--i": 14 } as CustomCSSProperties}>A</span>
              <span style={{ "--i": 15 } as CustomCSSProperties}>N</span>
              <span style={{ "--i": 16 } as CustomCSSProperties}>D</span>
              <span style={{ "--i": 17 } as CustomCSSProperties}>I</span>
              <span style={{ "--i": 18 } as CustomCSSProperties}>N</span>
              <span style={{ "--i": 19 } as CustomCSSProperties}>G</span>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <video width={30} height={30} autoPlay loop muted>
                <source src="/89598465.mp4" />
              </video>
            </div>
          </div>
          <span>phy</span>
        </div>
      </div>
      
      
      <div className="line w-full mt-10">
        <span className="absolute w-11/12 h-[1px] bg-black"></span>
      </div>

      <div className="px-7 md:px-16 lg:px-28 pt-7 lg:pt-16 flex flex-col gap-4 md:flex-row justify-between">
        <motion.div
          initial={{ x: -20, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="star"
            src={star}
            alt="star"
            width={120}
            height={120}
          />
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row gap-5 items-start"
        >
          <h4 className="text-xs uppercase font-bold">our philosophy</h4>
          <p className="max-w-[420px] text-sm md:text-lg ">
            In our team, developers work alongside designers, strategies, and
            analysts. All Safe dose not offer cookie-cutter solutions and we
            build the products exactly as they were during the design phase, not
            short cuts or simplifications
          </p>
        </motion.div>
      </div>
    </section>
  );
}

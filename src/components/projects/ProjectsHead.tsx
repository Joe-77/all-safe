import "./project.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
interface CustomCSSProperties extends React.CSSProperties {
  "--i"?: number;
}
export default function ProjectsHead() {
  return (
    <motion.div
      className="text-4xl  sm:text-8xl px-5 md:px-16 lg:px-20 xl:px-28 pb-28"
      initial={{ y: -50, opacity: 0.3 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex gap-2  uppercase">
        <p className="font-modern">co</p>
        <div className="circle-container">
          <div className="relative">
            <div className="parent bg-white w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] text-black rotate-text rotation-effect relative">
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
            <div className="absolute text-xs text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
            </div>
          </div>
        </div>
        <p className=" font-modern">lets</p>
      </div>
      <div className="flex gap-3 items-center  font-modern">
        <video autoPlay loop muted className="rounded-full w-20 sm:w-32">
          <source src="/header.mp4" />
        </video>

        <p>projects</p>
      </div>
    </motion.div>
  );
}

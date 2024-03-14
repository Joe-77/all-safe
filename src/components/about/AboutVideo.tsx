import { Context } from "@/context/context";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function AboutVideo() {
  const { initialWidth, initialPosition, initialHeight, showScroll } =
    useContext(Context);
  const date = new Date().getFullYear();

  return (
    <>
      {/* Desktop */}
      <div className="video relative px-20 w-full hidden xl:block">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`items-center gap-20 relative bottom-28 ${
            showScroll ? "flex" : "hidden"
          }`}
        >
          <p>created : {date}</p>
          <p className="text-2xl">(scroll)</p>
        </motion.div>
        <div className="flex justify-end">
          <video
            style={{
              position: "absolute",
              top: initialPosition.y,
              right: initialPosition.x,
              width: initialWidth,
              borderRadius: "50%",
              transform: "translate(0%)",
            }}
            className={`duration-500 `}
            autoPlay
            muted
            loop
          >
            <source src="/91530472.mp4" />
          </video>
        </div>
        <motion.div
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="pb-20 pt-[500px] max-w-[420px] text-xl leading-6 pl-3 md:pl-7"
        >
          As a tight-knit team of experts, we create memorable and emotional
          websites, digital experiences, and native apps.
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="video relative px-7 w-full xl:hidden">
        <div className="flex justify-center py-5">
          <video
            id="mobile-video"
            className={`duration-500 max-w-[400px] rounded-full`}
            autoPlay
            muted
            loop
          >
            <source src="/91530472.mp4" />
          </video>
        </div>
        <motion.div
          initial={{ y: -30 }}
          whileInView={{ y: 20 }}
          transition={{ duration: 1 }}
          className="pb-20 max-w-[700px] text-sm sm:text-3xl md:text-4xl lg:text-4xl leading-7 pl-3 md:pl-7 mt-5"
        >
          As a tight-knit team of experts, we create memorable and emotional
          websites, digital experiences, and native apps.
        </motion.div>
      </div>
    </>
  );
}

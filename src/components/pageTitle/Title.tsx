import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Title() {
  const [move, setMove] = useState({ x: 0, y: 0 });
  const [showVideo, setShowVideo] = useState(false);
  const [showVideoTwo, setShowVideoTwo] = useState(true);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (e.pageY > 200 && e.pageY < 600 && e.pageX > 100 && e.pageX < 550) {
        setMove({ x: e.pageX, y: e.pageY });
        setShowVideo(true);
      } else if (
        e.pageY > 200 &&
        e.pageY < 600 &&
        e.pageX > 550 &&
        e.pageX < 1200
      ) {
        setMove({ x: e.pageX, y: e.pageY });
        setShowVideo(false);
        setShowVideoTwo(true);
      } else {
        setShowVideo(false);
        setShowVideoTwo(false);
      }
    });
  }, []);

  return (
    <section className=" pt-36 lg:pt-60 px-5 sm:px-10 lg:px-20 xl:px-28 relative">
      {/* Desktop */}

      <div className="hidden lg:block">
        <p className="text-lg">We make it happen</p>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          id="work-text"
          className="w-fit lg:text-7xl xl:text-9xl font-Oswald"
          data-text="Website App Branding"
        >
          Website App Branding
        </motion.p>
        <div
          style={{
            left: move.x,
            top: move.y,
          }}
          className={`work-vide absolute z-[-1] -translate-x-1/2 -translate-y-1/2 duration-200 ${
            showVideo ? "block" : "hidden"
          }`}
        >
          <video
            width={250}
            height={250}
            autoPlay
            loop
            muted
            className="rounded-full"
          >
            <source src="/w1.mp4" />
          </video>
        </div>
        <div
          style={{
            left: move.x,
            top: move.y,
          }}
          className={`work-vide absolute z-[-2] -translate-x-1/2 -translate-y-1/2 duration-200 ${
            showVideoTwo ? "block" : "hidden"
          }`}
        >
          <video
            width={250}
            height={250}
            autoPlay
            loop
            muted
            className="rounded-full"
          >
            <source src="/w2.mp4" />
          </video>
        </div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-[650px] mt-36 text-2xl  leading-10"
        >
          <p>
            All Safe is a large and leading company with strong experience in
            development and design. We build websites from scratch, mobile
            applications, develop online business services and much more
          </p>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex justify-center pb-10">
          <video autoPlay muted loop width={230} className="rounded-md">
            <source src="/w1.mp4" />
          </video>
        </div>
        <div>
          <p className="text-sm">We make it happen</p>
          <div
            id="work-text"
            className="w-fit text-5xl"
            data-text="Website App Branding"
          >
            <p className="mt-5 border-b-[1px] border-b-black pb-1">Website</p>
            <p className="mt-5 border-b-[1px] border-b-black pb-1">App</p>
            <p className="mt-5 border-b-[1px] border-b-black pb-1">Branding</p>
          </div>
        </div>

        <div className="max-w-[650px] mt-16 text-lg font-bold">
          <p>
            All Safe is a large and leading company with strong experience in
            development and design. We build websites from scratch, mobile
            applications, develop online business services and much more
          </p>
        </div>
      </div>
    </section>
  );
}

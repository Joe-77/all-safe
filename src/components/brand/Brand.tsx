import { motion } from "framer-motion";
export default function Brand() {
  return (
    <section className="relative brand-section w-full min-h-screen lg:pb-96">
      <div className="background absolute w-full h-full z-[-1]">
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          muted
          loop
        >
          <source src="/63691344.mp4" />
        </video>
      </div>
      <div className="title lg:pt-16">
        <div className="name pt-14 md:pt-28 px-7 md:px-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase">
            brand <br /> identities
          </h2>
        </div>
        <div className="line-container relative w-full pb-10 lg:pb-20">
          <div className="line absolute bottom-0 left-1/2 -translate-x-1/2 w-11/12 h-[1px] bg-black"></div>
        </div>

        <div className="px-7 md:px-16 lg:px-28 pt-7 lg:pt-16 flex flex-col gap-4 md:flex-row justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <video width={70} height={70} autoPlay muted loop>
              <source src="/react.webm" />
            </video>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-5 items-start"
          >
            <h4 className="text-xs uppercase font-bold">brand identities</h4>
            <p className="max-w-[420px] text-sm md:text-lg text-justify">
              The only thing that matters in a brand is what you feel when
              interacting with a product. We assist established and emerging
              brands in creating identities that reflect the brand's true
              identity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

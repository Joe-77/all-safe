import { motion } from "framer-motion";
export default function Work() {
  return (
    <section className="bg-[#688688] py-28 px-7 md:px-16 lg:px-20 xl:px-28">
      <div className="uppercase text-4xl sm:text-7xl xl:text-[140px]">
        we build <br /> a stable <br /> code using <br /> in-house <br />{" "}
        solutions
      </div>

      <div className="flex justify-end mt-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-[420px] text-lg md:text-xl"
        >
          Developing digital products since 2019. we help bring ideas to life
          and create digital products that work
        </motion.p>
      </div>
    </section>
  );
}

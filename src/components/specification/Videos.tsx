import { motion } from "framer-motion";
export default function Videos() {
  return (
    <div className="mt-10 px-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-[#dffd5f] flex flex-col md:flex-row items-center justify-around rounded-full py-5 pb-10"
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-8xl pb-2">$75M</h3>
          <p className="max-w-[320px] px-5 text-xs md:text-sm">
            We help companies test their hypotheses and help them complete the
            huge tasks and store the largest data correctly and protect it.
          </p>
        </div>
        <div>
          <video className="w-[150px] md:w-[200px]" autoPlay muted loop>
            <source src="/v1.mp4" />
          </video>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-[#f1f1f1] flex flex-col md:flex-row items-center justify-around rounded-full mt-7 py-5 pb-10"
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-8xl pb-2">300+</h3>
          <p className="max-w-[320px] px-5 text-xs md:text-sm">
            We have successfully completed more than 300 different attack
            projects. All control and access ports are secure and implemented
          </p>
        </div>
        <div>
          <video className="w-[150px] md:w-[200px]" autoPlay muted loop>
            <source src="/v2.mp4" />
          </video>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-black flex flex-col md:flex-row items-center gap justify-around rounded-full mt-7 py-5 text-white pb-10"
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-8xl pb-2">100K</h3>
          <p className="max-w-[320px] px-5 text-xs md:text-sm">
            We&apos;ve gathered dozens of positive reviews from the clients and
            more than 100k reviews from their users. trying to make this world a
            lit bit better
          </p>
        </div>
        <div>
          <video className="w-[150px] md:w-[200px]" autoPlay muted loop>
            <source src="/v3.mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
}

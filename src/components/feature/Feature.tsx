import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
export default function Feature() {
  useEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY + window.innerHeight / 3;
      let sections = document.querySelectorAll<HTMLDivElement>(".section");
      sections.forEach(function (section) {
        let sectionTop = section.offsetTop;
        let sectionBottom = sectionTop + section.offsetHeight;
        if (sectionTop <= scroll && sectionBottom > scroll) {
          document.body.className = document.body.className.replace(
            /\bcolor-\S+/g,
            ""
          );
          document
            .querySelectorAll<HTMLDivElement>(".section")
            .forEach(function (section) {
              section.classList.remove("active");
            });
          section.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger scroll event on page load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-20">
      <div className="h-screen bg-[#365486] flex flex-col sm:flex-row gap-5 justify-center md:justify-between md:items-center px-5 sm:px-16 lg:px-20 xl:px-28 mt-5 md:mt-0 py-5">
        <div>
          <p className="text-lg pb-2">Smart Trade platform</p>
          <h2 className="text-5xl font-Oswald">Smart Trade Bot</h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            className="w-full h-[400px]"
            src="https://www.allsafeeg.com/uploads/projects/source/17489433.jpg"
            alt=""
          />
        </motion.div>
      </div>
      <div className="h-screen bg-[#333] flex flex-col sm:flex-row gap-5 justify-center md:justify-between md:items-center px-5 sm:px-16 lg:px-20 xl:px-28 mt-5 md:mt-0 py-5">
        <div>
          <p className="text-lg pb-2">Town Team</p>
          <h2 className="text-5xl font-Oswald">Town Team</h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            className="w-full h-[400px]"
            src="https://www.allsafeeg.com/uploads/projects/source/69412502.jpeg"
            alt=""
          />
        </motion.div>
      </div>
      <div className="h-screen bg-[#f48383] flex flex-col sm:flex-row gap-5 justify-center md:justify-between md:items-center px-5 sm:px-16 lg:px-20 xl:px-28 mt-5 md:mt-0 py-5">
        <div>
          <p className="text-lg pb-2">Yalla Order</p>
          <h2 className="text-5xl font-Oswald">Yalla Order</h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            className="w-full h-[400px]"
            src="https://www.allsafeeg.com/uploads/projects/source/97613940.jpeg"
            alt=""
          />
        </motion.div>
      </div>
      <div className="h-screen bg-[#81a26a] flex flex-col sm:flex-row gap-5 justify-center md:justify-between md:items-center px-5 sm:px-16 lg:px-20 xl:px-28 mt-5 md:mt-0 py-5">
        <div>
          <p className="text-lg pb-2">The housing and Development Bank</p>
          <h2 className="text-5xl font-Oswald">
            The housing and Development Bank
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            className="w-full h-[400px]"
            src="https://www.allsafeeg.com/uploads/projects/source/26300152.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="min-h-screen bg-[#fff] flex flex-col sm:flex-row gap-5 justify-center md:justify-between md:items-center px-5 sm:px-16 lg:px-20 xl:px-28 mt-5 md:mt-0 py-5">
        <div>
          <p className="text-lg pb-2">Ascupa</p>
          <h2 className="text-5xl font-Oswald">Ascupa</h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            className="w-full h-[400px]"
            src="https://www.allsafeeg.com/uploads/projects/source/16656613.jpg"
            alt=""
          />
        </motion.div>
      </div>

      <div className="flex justify-center py-7 relative z-50">
        <button className="w-fit p-2 block rounded-lg border-[1px] border-black duration-500 hover:bg-black hover:text-white">
          <Link href={"https://www.allsafeeg.com/en/projects"}>
            View all projects
          </Link>
        </button>
      </div>
    </div>
  );
}

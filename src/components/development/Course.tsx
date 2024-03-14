import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Course() {
  const [defaultText, setDefaultText] = useState("View All Courses");

  return (
    <section className="py-10 px-5 sm:px-16 lg:px-20 xl:p-28">
      <div className="head">
        <h2 className="text-4xl sm:text-7xl max-w-[650px] font-bold">
          Development and design resources
        </h2>
        <p className="pt-10 text-sm sm:text-xl max-w-[700px]">
          We regularly release programing and cyber security ,graphic design
          courses, offered advice to newbie designers, walk you through creating
          awesome effects, and share source files.
        </p>
      </div>

      <div className="courses grid gap-5 grid-cols-1 sm:grid-cols-3 mt-20">
        <div>
          <div className="relative w-full h-60 duration-300 hover:scale-105">
            <Image
              src={
                "https://www.allsafeeg.com/uploads/courses/source/45072987.jpg"
              }
              alt=""
              objectFit="cover"
              fill
            />
          </div>
          <div className="pt-10 px-5">
            <p className="bg-[#eee] w-fit px-5 py-2 rounded-full">
              Cyber Security
            </p>
            <p className="pt-5">
              penetration testing {" >> "} information gathering {" >> "}
              red&blue teaming
            </p>
          </div>
        </div>
        <div>
          <div className="relative w-full h-60 duration-300 hover:scale-105">
            <Image
              src={
                "https://www.allsafeeg.com/uploads/courses/source/29644162.jpg"
              }
              alt=""
              objectFit="cover"
              fill
            />
          </div>
          <div className="pt-10 px-5">
            <p className="bg-[#eee] w-fit px-5 py-2 rounded-full">
              web & apps development
            </p>
            <p className="pt-5">
              Website // Frontend&backend developmentapps // mobile&desktop apps
              by flutter&(C#&C++)
            </p>
          </div>
        </div>
        <div>
          <div className="relative w-full h-60 duration-300 hover:scale-105">
            <Image
              src={
                "https://www.allsafeeg.com/uploads/courses/source/34885834.jpg"
              }
              alt=""
              objectFit="cover"
              fill
            />
          </div>
          <div className="pt-10 px-5">
            <p className="bg-[#eee] w-fit px-5 py-2 rounded-full">Graphics</p>
            <p className="pt-5">
              designsVideo montage and editingMotion Graphics
            </p>
          </div>
        </div>
      </div>

      <div
        onMouseOver={() => setDefaultText("View All")}
        onMouseLeave={() => setDefaultText("View All Courses")}
        className="button mt-16 flex justify-center w-fit m-auto border-[1px] border-black px-5 py-2 rounded-full duration-500 hover:bg-black hover:text-white"
      >
        <Link id="btn-courses" href={"https://www.allsafeeg.com/en/courses"}>
          {defaultText}
        </Link>
      </div>
    </section>
  );
}

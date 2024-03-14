import { Context } from "@/context/context";
import Link from "next/link";
import { useContext } from "react";

export default function Links() {
  const { showMenu, handleDisplay } = useContext(Context);

  return (
    <>
      <aside
        id="side"
        className={`bg-white absolute w-full sm:w-[550px] h-screen z-[100]  ${
          showMenu ? "right-0 " : "right-[-2000px]"
        } duration-500 top-0`}
      >
        <div className="pt-28 px-20 flex gap-20">
          <ul className="hidden sm:block w-fit">
            <h3 className="capitalize text-slate-400 text-lg tracking-wider">
              social
            </h3>
            <li
              data-text="Linkedin"
              className="fills mt-10 capitalize text-sm cursor-pointer hover:animate-bounce"
            >
              <Link href={"https://www.linkedin.com/in/all-safe-757725247/"}>
                Linkedin
              </Link>
            </li>
            <li
              data-text="Facebook"
              className="fills capitalize mt-4 text-sm cursor-pointer hover:animate-bounce"
            >
              <Link href={"https://web.facebook.com/AllSafeMHR?_rdc=1&_rdr"}>
                Facebook
              </Link>
            </li>
            <li
              data-text="Instagram"
              className="fills capitalize mt-4 text-sm cursor-pointer hover:animate-bounce"
            >
              <Link href={"https://www.instagram.com/alls_afe/"}>
                Instagram
              </Link>
            </li>
            <li
              data-text="Github"
              className="fill capitalize mt-4 text-sm cursor-pointer hover:animate-bounce"
            >
              <Link href={"https://github.com/MeshHassan"}>Github</Link>
            </li>
          </ul>
          <ul>
            <h3 className="capitalize text-slate-400 text-lg tracking-wider">
              menu
            </h3>
            <li className=" text-2xl sm:text-4xl pb-2 capitalize duration-300 hover:animate-bounce font-bold mt-10">
              <Link href={"/"}>home</Link>
            </li>
            <li className=" text-2xl sm:text-4xl pb-2 capitalize duration-300 hover:animate-bounce font-bold">
              <Link href={"/what-we-do"}>what we do</Link>
            </li>
            <li className=" text-2xl sm:text-4xl pb-2 capitalize duration-300 hover:animate-bounce font-bold">
              <Link href={"/about"}>about us</Link>
            </li>
            <li className=" text-2xl sm:text-4xl pb-2 capitalize duration-300 hover:animate-bounce font-bold">
              <Link href={"/projects"}>projects</Link>
            </li>
            <li className=" text-2xl sm:text-4xl pb-2 capitalize duration-300 hover:animate-bounce font-bold">
              <Link href={"/blog"}>blogs</Link>
            </li>
            <li className=" text-2xl sm:text-4xl pb-2 capitalize duration-300 hover:animate-bounce font-bold">
              <Link href={"/contact"}>contact us</Link>
            </li>
          </ul>
        </div>

        <div className="px-20 pt-36">
          <h4 className="text-gray-400 ">Get in touch</h4>
          <Link
            className="email block pt-2 w-fit relative h-28 overflow-hidden"
            href={
              "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNstzCdXCgFZBczCffgRNHmdNRMZPTgQrnfnmrmDKJCSqSDdqhFhPmGpbqzQXRQFcxpQRg"
            }
          >
            info@allsafe.com
            <div className="fil relative top-2 w-full h-[2px] bg-black"></div>
          </Link>
        </div>
      </aside>
      {showMenu && (
        <div
          onClick={handleDisplay}
          className="overlay w-full min-h-screen absolute top-0 left-0 bg-gray-900 opacity-5 cursor-pointer z-[99]"
        ></div>
      )}
    </>
  );
}

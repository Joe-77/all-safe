import { Context } from "@/context/context";
import Image from "next/image";
import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Links from "./Links";
import Link from "next/link";

export default function Nav(props: any) {
  const { showMenu, handleShowMenu } = useContext(Context);

  return (
    <nav className="h-fit">
      <header className="p-7 absolute z-[999] w-full flex justify-between  overflow-x-hidden h-screen">
        <Link
          href={"/"}
          className={`logo duration-200 ${
            showMenu ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image src={props.src} alt="logo" width={100} height={100} />
        </Link>
        <div
          onClick={handleShowMenu}
          className={`menu text-3xl cursor-pointer w-14 h-14 rounded-full ${
            props.default === "white"
              ? "hover:bg-white hover:text-black text-white"
              : "hover:bg-black hover:text-white text-black"
          } flex items-center justify-center duration-500 z-[999]`}
        >
          <span>{showMenu ? <IoCloseOutline /> : <MdMenu />}</span>
        </div>
        <Links />
      </header>
    </nav>
  );
}

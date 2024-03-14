import Link from "next/link";
import { useState } from "react";
import { IoArrowDownOutline } from "react-icons/io5";
export default function Media({
  name,
  socialLink,
}: {
  name: string;
  socialLink: string;
}) {
  const [showTextSocial, setShowTextSocial] = useState(false);

  const handleMouseOver = () => {
    setShowTextSocial(true);
  };

  const handleMouseLeave = () => {
    setShowTextSocial(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="py-5 uppercase text-2xl relative border-b-[2px] border-b-gray-500 cursor-pointer"
    >
      <p className="px-5 sm:px-16 lg:px-20 xl:px-28">{name}</p>
      <Link
        href={socialLink}
        className={`absolute top-0 left-1/2 -translate-x-1/2  bg-teal-700 ${
          showTextSocial ? "w-full h-full" : "w-0 h-0 "
        } flex gap-10 items-center px-5 duration-500 overflow-hidden`}
      >
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
        <span className="flex items-center gap-5 rotate-social">
          <span>{name}</span>
          <span className="rotate-[-45deg]">
            <IoArrowDownOutline />
          </span>
        </span>
      </Link>
    </div>
  );
}

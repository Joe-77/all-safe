import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";

export default function Msg() {
  return (
    <div className="fixed z-[99] right-3 bottom-3 text-2xl sm:text-5xl bg-black text-white rounded-full p-3 hidden sm:block">
      <Link href={"https://www.allsafeeg.com/en/contact-us"}>
        <AiFillMessage />
      </Link>
    </div>
  );
}

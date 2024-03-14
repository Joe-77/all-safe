import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white h-screen pt-28 px-5 sm:px-16 lg:px-20 xl:px-28">
      <div className="text-4xl sm:text-7xl w-fit">
        <p>Have an idea?</p>
        <p className="relative about-us cursor-pointer ">Tell us about it</p>
      </div>

      <div className="mt-28 px-10 flex gap-10 flex-col sm:flex-row justify-between sm:items-center">
        <div>
          <Link
            className="text-lg pb-2 border-b-[1px] border-gray-500 link-footer relative"
            href={
              "https://accounts.google.com/InteractiveLogin?continue=https://mail.google.com/mail/u/0/&emr=1&followup=https://mail.google.com/mail/u/0/&osid=1&passive=1209600&service=mail&ifkv=ATuJsjzpdrSjhLh2Sa2SSy5exGR-TkFnBgk9lJhVgtu6JLchvBdPvIWs9d-SgKTekWH6cmEMQEyl#inbox?compose=CllgCJNstzCdXCgFZBczCffgRNHmdNRMZPTgQrnfnmrmDKJCSqSDdqhFhPmGpbqzQXRQFcxpQRg"
            }
          >
            info@allsafeeg.com
          </Link>
          <div className="pt-8 text-gray-600">
            <p>15 Abdel Aziz Issa ,Ninth District,Nasr City</p>
            <p>New Beni Suef City - First District</p>
            <p>United Arab Emirates - Dubai</p>
            <p>Jeddah</p>
          </div>
          <div className="mt-10 pb-2 policy relative w-fit cursor-pointer">
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <div className="flex gap-10 text-2xl">
            <Link href={"https://www.linkedin.com/in/all-safe-757725247/"}>
              <span className="hidden sm:block duration-300 hover:scale-125">
                Linkedin
              </span>
              <span className="sm:hidden duration-300 hover:scale-125 text-3xl">
                <FaLinkedinIn />
              </span>
            </Link>
            <Link href={"https://web.facebook.com/AllSafeMHR?_rdc=1&_rdr"}>
              <span className="hidden sm:block duration-300 hover:scale-125">
                Facebook
              </span>
              <span className="sm:hidden duration-300 hover:scale-125 text-3xl">
                <FaFacebookF />
              </span>
            </Link>
          </div>
          <div className="flex gap-10 text-2xl mt-10">
            <Link href={"https://www.instagram.com/alls_afe/"}>
              <span className="hidden sm:block duration-300 hover:scale-125">
                Instagram
              </span>
              <span className="sm:hidden duration-300 hover:scale-125 text-3xl">
                <FaInstagram />
              </span>
            </Link>
            <Link href={"https://github.com/MeshHassan"}>
              <span className="hidden sm:block duration-300 hover:scale-125">
                Github
              </span>
              <span className="sm:hidden duration-300 hover:scale-125 text-3xl">
                <FaGithub />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function End() {
  return (
    <div className="mt-20 h-screen relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center z-[50]">
        <h3 className="uppercase font-modern text-5xl md:text-8xl text-center">
          have <br /> an idea?
        </h3>
        <Link
          className="uppercase text-4xl border-[2px] rounded-full px-4 py-2 mt-2 block duration-700 hover:bg-teal-600 hover:text-black hover:border-transparent"
          href={"https://www.allsafeeg.com/en/contact-us"}
        >
          tell us
        </Link>
      </div>
      <div className=" absolute bottom-5 left-5 flex flex-col sm:flex-row gap-6 text-sm z-[50]">
        <div className="uppercase mt-5 py-5 border-[2px] border-gray-500 w-fit px-3 rounded-full cursor-pointer hover:bg-white hover:text-black duration-700">
          <Link
            href={
              "https://accounts.google.com/InteractiveLogin?continue=https://mail.google.com/mail/u/0/&emr=1&followup=https://mail.google.com/mail/u/0/&osid=1&passive=1209600&service=mail&ifkv=ATuJsjzpdrSjhLh2Sa2SSy5exGR-TkFnBgk9lJhVgtu6JLchvBdPvIWs9d-SgKTekWH6cmEMQEyl#inbox?compose=CllgCJNstzCdXCgFZBczCffgRNHmdNRMZPTgQrnfnmrmDKJCSqSDdqhFhPmGpbqzQXRQFcxpQRg"
            }
          >
            info@allsafeeg.com
          </Link>
        </div>
        <div className="uppercase  mt-5 py-5 border-[2px] border-gray-500 w-fit px-5 rounded-full cursor-pointer hover:bg-white hover:text-black duration-700">
          <p>+201091886122</p>
        </div>
      </div>
    </div>
  );
}

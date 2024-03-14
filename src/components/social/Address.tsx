import Link from "next/link";

export default function Address() {
  return (
    <div className="px-5 sm:px-16 lg:px-20 xl:px-28 grid grid-col-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      <div>
        <span className="uppercase text-xs">egypt:</span>
        <span className="text-lg">
          {" "}
          15 Abdel Aziz Issa,Ninth District, Nasr City
        </span>
        <div className="uppercase text-lg mt-5 py-5 border-[2px] border-gray-500 w-fit px-3 rounded-full cursor-pointer hover:bg-white hover:text-black duration-700">
          <Link
            href={
              "https://accounts.google.com/InteractiveLogin?continue=https://mail.google.com/mail/u/0/&emr=1&followup=https://mail.google.com/mail/u/0/&osid=1&passive=1209600&service=mail&ifkv=ATuJsjzpdrSjhLh2Sa2SSy5exGR-TkFnBgk9lJhVgtu6JLchvBdPvIWs9d-SgKTekWH6cmEMQEyl#inbox?compose=CllgCJNstzCdXCgFZBczCffgRNHmdNRMZPTgQrnfnmrmDKJCSqSDdqhFhPmGpbqzQXRQFcxpQRg"
            }
          >
            info@allsafeeg.com
          </Link>
        </div>
        <div className="uppercase text-lg mt-5 py-5 border-[2px] border-gray-500 w-fit px-3 rounded-full cursor-pointer hover:bg-white hover:text-black duration-700">
          <p>+201091886122</p>
        </div>
      </div>
      <div>
        <span className="uppercase text-xs">egypt:</span>
        <span className="text-lg"> New Beni Suef City-First District</span>

        <div className="uppercase text-lg mt-5 py-5 border-[2px] border-gray-500 w-fit px-3 rounded-full cursor-pointer hover:bg-white hover:text-black duration-700">
          <p>+201067388079</p>
        </div>
      </div>
      <div>
        <span className="uppercase text-xs">dubai: </span>
        <span className="text-lg">
          United Arab <br /> Emirates-Dubai
        </span>

        <div className="uppercase text-lg mt-5 py-5 border-[2px] border-gray-500 w-fit px-3 rounded-full cursor-pointer hover:bg-white hover:text-black duration-700">
          <p>+971 50 887 3252</p>
        </div>
      </div>
      <div>
        <span className="uppercase text-xs">saudi arabia: </span>
        <span className="text-lg">Jeddah</span>

        <div className="uppercase text-lg mt-5 py-5 border-[2px] border-gray-500 w-fit px-3 rounded-full cursor-pointer hover:bg-white hover:text-black duration-700">
          <Link
            href={
              "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDTMCDFcxwtvckZCGqZFpxHVtwZBmjMcfgxjDqQcbwmRTrQbSlWJSKXXgZklrhWDbmXFg"
            }
          >
            enghassanra@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}

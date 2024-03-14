import Image from "next/image";
import star from "../../../public/star-shine-svgrepo-com.svg";
import "./design.css";
export default function design() {
  return (
    <section className="pt-20 pb-28 h-screen">
      <div className=" m-auto overflow-hidden py-5 slider-container w-full hidden sm:block">
        <div className="flex gap-10 md:gap-40 xl:gap-96 slides">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 slide-item">
            <video
              autoPlay
              muted
              loop
              width={400}
              height={400}
              className=" rounded-full"
            >
              <source src="/51865606.mp4" />
            </video>
            <h2 className=" text-4xl sm:text-7xl">
              DESIGN <br /> CREATIVE
            </h2>
          </div>
          <div className="flex flex-col md:flex-row lg:items-center gap-5 slide-item">
            <video
              autoPlay
              muted
              loop
              width={400}
              height={400}
              className=" rounded-full"
            >
              <source src="/51865606.mp4" />
            </video>
            <h2 className=" text-4xl sm:text-7xl">
              DESIGN <br /> CREATIVE
            </h2>
          </div>
          <div className="flex flex-col md:flex-row lg:items-center gap-5 slide-item">
            <video
              autoPlay
              muted
              loop
              width={400}
              height={400}
              className=" rounded-full"
            >
              <source src="/51865606.mp4" />
            </video>
            <h2 className=" text-4xl sm:text-7xl">
              DESIGN <br /> CREATIVE
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="mobile-overview overflow-hidden sm:hidden">
        <div className="px-5 flex justify-center">
          <video
            autoPlay
            muted
            loop
            width={400}
            height={400}
            className=" rounded-full"
          >
            <source src="/51865606.mp4" />
          </video>
        </div>
        <div className="flex gap-10 pt-5 ">
          <div className="mobile-slide">
            <h2 className=" text-4xl md:text-7xl">
              DESIGN <br /> CREATIVE
            </h2>
          </div>
          <div className="mobile-slide">
            <h2 className=" text-4xl md:text-7xl">
              DESIGN <br /> CREATIVE
            </h2>
          </div>
          <div className="mobile-slide">
            <h2 className=" text-4xl md:text-7xl">
              DESIGN <br /> CREATIVE
            </h2>
          </div>
        </div>
      </div>

      <div className="design-line w-full relative py-10">
        <div className="line absolute top-1/2 left-1/2 w-3/4 h-[1px] bg-black -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="px-5 md:px-16 lg:px-28 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <Image
            className="star"
            src={star}
            alt="star"
            width={120}
            height={120}
          />
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
          <h4 className="text-xs">CREATIVE DESIGN</h4>
          <div className="text-lg">
            <p>We don&apos;t do cookie-cutter solutions.</p>
            <p className="w-auto md:w-96">
              Our user-centered design encourages productivity and boosts
              revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

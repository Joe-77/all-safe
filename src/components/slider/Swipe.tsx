import "./slider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";

export default function Swipe() {
  return (
    <div className="pb-20 ml-5 md:ml-40">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide>
          <div id="swiper">
            <div className="img relative w-full h-52">
              <Image
                src={
                  "https://www.allsafeeg.com/uploads/inspiros/source/73910605.jpg"
                }
                alt=""
                objectFit="cover"
                fill
              />
            </div>
            <div>
              <div className="flex  items-center gap-2 pt-10 pb-3">
                <span className="text-lg">
                  <FaFacebookF />
                </span>
                <span>Create your own website</span>
              </div>
              <div>
                <p>
                  a website now with all <br /> professionalism and the bes...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="swiper">
            <div className="img relative w-full h-52">
              <Image
                src={
                  "https://www.allsafeeg.com/uploads/inspiros/source/75258504.jpg"
                }
                alt=""
                objectFit="cover"
                fill
              />
            </div>
            <div>
              <div className="flex  items-center gap-2 pt-10 pb-3">
                <span className="text-lg">
                  <FaFacebookF />
                </span>
                <span>Create your own application</span>
              </div>
              <div>
                <p>
                  a application now with all <br /> professionalism and the...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="swiper">
            <div className="img relative w-full h-52">
              <Image
                src={
                  "https://www.allsafeeg.com/uploads/inspiros/source/19221066.jpg"
                }
                alt=""
                objectFit="cover"
                fill
              />
            </div>
            <div>
              <div className="flex  items-center gap-2 pt-10 pb-3">
                <span className="text-lg">
                  <FaFacebookF />
                </span>
                <span>Cyber Security</span>
              </div>
              <div>
                <p>
                  a securing banks, discovering <br /> vulnerabilities, condu...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="swiper">
            <div className="img relative w-full h-52">
              <Image
                src={
                  "https://www.allsafeeg.com/uploads/inspiros/source/20526049.jpg"
                }
                alt=""
                objectFit="cover"
                fill
              />
            </div>
            <div>
              <div className="flex  items-center gap-2 pt-10 pb-3">
                <span className="text-lg">
                  <FaFacebookF />
                </span>
                <span>Robots penetration testing</span>
              </div>
              <div>
                <p>
                  discovering vulnerabilities, performing <br /> professionalism
                  a full sca...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="swiper">
            <div className="img relative w-full h-52">
              <Image
                src={
                  "https://www.allsafeeg.com/uploads/inspiros/source/68958389.jpg"
                }
                alt=""
                objectFit="cover"
                fill
              />
            </div>
            <div>
              <div className="flex  items-center gap-2 pt-10 pb-3">
                <span className="text-lg">
                  <FaFacebookF />
                </span>
                <span>Digital Marketing</span>
              </div>
              <div>
                <p>
                  its numerical types with All <br /> SafeAmong our plans i...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="swiper">
            <div className="img relative w-full h-52">
              <Image
                src={
                  "https://www.allsafeeg.com/uploads/inspiros/source/65844557.jpg"
                }
                alt=""
                objectFit="cover"
                fill
              />
            </div>
            <div>
              <div className="flex  items-center gap-2 pt-10 pb-3">
                <span className="text-lg">
                  <FaFacebookF />
                </span>
                <span>Securing Websites</span>
              </div>
              <div>
                <p>
                  discovering vulnerabilities, performing <br /> a full sca...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import Address from "./Address";
import End from "./End";
import Social from "./Social";

interface CustomCSSProperties extends React.CSSProperties {
  "--i"?: number;
}
export default function Page() {
  return (
    <section className="bg-black text-white pt-28 ">
      <div className="text-3xl uppercase md:text-8xl px-5 sm:px-16 lg:px-20 xl:px-28">
        <div className="flex">
          <p>foll</p>
          <div className="relative">
            <div className="parent bg-white w-20 h-20 sm:w-[100px] sm:h-[100px] text-black rotate-text rotation-effect relative text-5xl">
              <span style={{ "--i": 1 } as CustomCSSProperties}>W</span>
              <span style={{ "--i": 2 } as CustomCSSProperties}>E</span>
              <span style={{ "--i": 3 } as CustomCSSProperties}>P</span>
              <span style={{ "--i": 4 } as CustomCSSProperties}></span>
              <span style={{ "--i": 5 } as CustomCSSProperties}>M</span>
              <span style={{ "--i": 6 } as CustomCSSProperties}>O</span>
              <span style={{ "--i": 7 } as CustomCSSProperties}>B</span>
              <span style={{ "--i": 8 } as CustomCSSProperties}>I</span>
              <span style={{ "--i": 9 } as CustomCSSProperties}>L</span>
              <span style={{ "--i": 10 } as CustomCSSProperties}>E</span>
              <span style={{ "--i": 11 } as CustomCSSProperties}></span>
              <span style={{ "--i": 12 } as CustomCSSProperties}>B</span>
              <span style={{ "--i": 13 } as CustomCSSProperties}>R</span>
              <span style={{ "--i": 14 } as CustomCSSProperties}>A</span>
              <span style={{ "--i": 15 } as CustomCSSProperties}>N</span>
              <span style={{ "--i": 16 } as CustomCSSProperties}>D</span>
              <span style={{ "--i": 17 } as CustomCSSProperties}>I</span>
              <span style={{ "--i": 18 } as CustomCSSProperties}>N</span>
              <span style={{ "--i": 19 } as CustomCSSProperties}>G</span>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <video width={30} height={30} autoPlay loop muted>
                <source src="/89598465.mp4" />
              </video>
            </div>
          </div>
          <span>w</span>
        </div>
        <p>us</p>
      </div>
      <Social />
      <Address />
      <End />
    </section>
  );
}

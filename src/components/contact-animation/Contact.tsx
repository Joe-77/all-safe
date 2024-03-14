interface CustomCSSProperties extends React.CSSProperties {
  "--i"?: number;
}
export default function Contact() {
  return (
    <div className=" text-8xl uppercase hidden xl:block xl:fixed bottom-0 right-10 select-none z-[999]">
      <div className="circle-container contact-container">
        <div className="contact-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <video
            width={100}
            height={100}
            autoPlay
            muted
            loop
            className="rounded-full"
          >
            <source src="/1.mp4" />
          </video>
        </div>

        <div className="parent w-[150px] h-[150px] text-white text-rotate rotation-effect">
          <span style={{ "--i": 1 } as CustomCSSProperties}>C</span>
          <span style={{ "--i": 2 } as CustomCSSProperties}>O</span>
          <span style={{ "--i": 3 } as CustomCSSProperties}>N</span>
          <span style={{ "--i": 4 } as CustomCSSProperties}>T</span>
          <span style={{ "--i": 5 } as CustomCSSProperties}>A</span>
          <span style={{ "--i": 6 } as CustomCSSProperties}>C</span>
          <span style={{ "--i": 7 } as CustomCSSProperties}>T</span>
          <span style={{ "--i": 8 } as CustomCSSProperties}>-</span>
          <span style={{ "--i": 9 } as CustomCSSProperties}>C</span>
          <span style={{ "--i": 10 } as CustomCSSProperties}>O</span>
          <span style={{ "--i": 11 } as CustomCSSProperties}>N</span>
          <span style={{ "--i": 12 } as CustomCSSProperties}>T</span>
          <span style={{ "--i": 13 } as CustomCSSProperties}>A</span>
          <span style={{ "--i": 14 } as CustomCSSProperties}>C</span>
          <span style={{ "--i": 15 } as CustomCSSProperties}>T</span>
          <span style={{ "--i": 16 } as CustomCSSProperties}>-</span>
          <span style={{ "--i": 17 } as CustomCSSProperties}>C</span>
          <span style={{ "--i": 18 } as CustomCSSProperties}>O</span>
          <span style={{ "--i": 19 } as CustomCSSProperties}>N</span>
          <span style={{ "--i": 20 } as CustomCSSProperties}>T</span>
          <span style={{ "--i": 21 } as CustomCSSProperties}>A</span>
          <span style={{ "--i": 22 } as CustomCSSProperties}>C</span>
          <span style={{ "--i": 23 } as CustomCSSProperties}>T</span>
        </div>
      </div>
    </div>
  );
}

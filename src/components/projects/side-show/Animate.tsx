interface CustomCSSProperties extends React.CSSProperties {
  "--i"?: number;
}
export default function Animate() {
  return (
    <div className="circle-container side-container">
      <div className="parent bg-white w-20 h-20 sm:w-[100px] sm:h-[100px] text-black rotation-effect">
        <span style={{ "--i": 1 } as CustomCSSProperties}>D</span>
        <span style={{ "--i": 2 } as CustomCSSProperties}>E</span>
        <span style={{ "--i": 3 } as CustomCSSProperties}>S</span>
        <span style={{ "--i": 4 } as CustomCSSProperties}>I</span>
        <span style={{ "--i": 5 } as CustomCSSProperties}>N</span>
        <span style={{ "--i": 6 } as CustomCSSProperties}></span>
        <span style={{ "--i": 7 } as CustomCSSProperties}>P</span>
        <span style={{ "--i": 8 } as CustomCSSProperties}>R</span>
        <span style={{ "--i": 9 } as CustomCSSProperties}>D</span>
        <span style={{ "--i": 10 } as CustomCSSProperties}>U</span>
        <span style={{ "--i": 11 } as CustomCSSProperties}>C</span>
        <span style={{ "--i": 12 } as CustomCSSProperties}>T</span>
        <span style={{ "--i": 13 } as CustomCSSProperties}></span>
        <span style={{ "--i": 14 } as CustomCSSProperties}>I</span>
        <span style={{ "--i": 15 } as CustomCSSProperties}>D</span>
        <span style={{ "--i": 16 } as CustomCSSProperties}>E</span>
        <span style={{ "--i": 17 } as CustomCSSProperties}>N</span>
        <span style={{ "--i": 18 } as CustomCSSProperties}>T</span>
        <span style={{ "--i": 19 } as CustomCSSProperties}>I</span>
        <span style={{ "--i": 20 } as CustomCSSProperties}>F</span>
        <span style={{ "--i": 21 } as CustomCSSProperties}>Y</span>
        <span style={{ "--i": 22 } as CustomCSSProperties}></span>
      </div>
    </div>
  );
}

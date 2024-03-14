import { useEffect, useState } from "react";

export default function Ball() {
  const [move, setMove] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMove({ x: e.pageX, y: e.pageY });
    });
  });

  return (
    <div
      style={{
        top: move.y,
        left: move.x,
        zIndex: -9,
      }}
      className={`absolute top-0 text-white w-2  h-2 bg-teal-500 rounded-full -translate-x-1/2 -translate-y-1/2 duration-500 z-[-1] cursor-pointer hidden lg:block`}
    ></div>
  );
}

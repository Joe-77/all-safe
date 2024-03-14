import { useEffect, useState } from "react";
import Feature from "./Feature";

export default function Projects() {
  const [background, setBackGround] = useState("white");

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (scrollY > 400 && scrollY < 800) {
        setBackGround("#365486");
      } else {
        setBackGround("white");
      }
    });
  }, []);

  return (
    <section
      style={{
        background: background,
      }}
      className="mt-40  pt-10 min-h-screen"
    >
      <div className="px-5 sm:px-16 lg:px-20 xl:px-28">
        <p className="text-7xl">feature</p>
        <p id="project-text" className="w-fit text-5xl font-modern pt-2">
          Projects
        </p>
      </div>
      <Feature />
    </section>
  );
}

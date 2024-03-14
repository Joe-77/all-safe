// import { imageTop, skillBottom } from "@/data/data";
// import Image from "next/image";

import { imageTop, skillsWeb } from "@/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Skills() {
  const [data, setData]: any = useState([]);
  const [skills, setSkills]: any = useState([]);

  useEffect(() => {
    setData(imageTop);
    setSkills(skillsWeb);
  }, []);

  return (
    <section>
      <div
        style={{
          width: 4000,
        }}
        className="animate-skills flex"
      >
        {data?.map((e: any) => (
          <div className="img-container w-48 flex justify-center">
            <Image src={e.src} alt={e.name} width={50} height={50} />
          </div>
        ))}
      </div>
      <div
        style={{
          width: 4000,
        }}
        className="animate-skills flex mt-10"
      >
        {skills?.map((e: any) => (
          <div className="img-container w-48 flex justify-center">
            <Image src={e.src} alt={e.name} width={50} height={50} />
          </div>
        ))}
      </div>
    </section>
  );
}

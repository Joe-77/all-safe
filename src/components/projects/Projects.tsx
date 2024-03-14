import Apps from "./Apps";
import ProjectsHead from "./ProjectsHead";
import SideVideo from "./SideVideo";
import SideShow from "./side-show/SideShow";
import SideShowLeft from "./side-show/SideShowLeft";
import Skills from "./skills/Skills";

export default function Projects() {
  return (
    <section className="bg-black text-white py-28 overflow-hidden">
      <ProjectsHead />
      <SideShow src={"s1"} />
      <SideShowLeft src={"s2"} />
      <SideShow src={"s3"} />
      <SideShowLeft src={"s4"} />
      <SideVideo />
      <Skills />
      <Apps />
    </section>
  );
}

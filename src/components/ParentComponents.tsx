"use client";
import { ContextProvider } from "@/context/context";
import Nav from "./nav/Nav";
import About from "./about/About";
import Design from "./design/Design";
import Smart from "./smart/Smart";
import Brand from "./brand/Brand";
import Art from "./art/Art";
import Work from "./work/Work";
import Projects from "./projects/Projects";
import Contact from "./contact-animation/Contact";
import Specification from "./specification/Specification";
import Our from "./our/Our";
import Page from "./social/Page";
import Ball from "./Ball";
import WhatsApp from "./contact-animation/WhatsApp";

export default function ParentComponents() {
  return (
    <ContextProvider>
      <Nav
        src={"https://www.allsafeeg.com/uploads/settings/source/68377.png"}
        default={"white"}
      />
      <About />
      <Design />
      <Smart />
      <Brand />
      <Art />
      <Work />
      <Projects />
      <Specification />
      <Contact />
      <WhatsApp />
      <Our />
      <Page />
      <Ball />
    </ContextProvider>
  );
}

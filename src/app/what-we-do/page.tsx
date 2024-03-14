"use client";
import Ball from "@/components/Ball";
import Nav from "@/components/nav/Nav";
import Title from "@/components/pageTitle/Title";
import { ContextProvider } from "@/context/context";
import "./style.css";
import Msg from "@/components/Msg";
import WhatsApp from "@/components/contact-animation/WhatsApp";
import Projects from "@/components/feature/Projects";
import Course from "@/components/development/Course";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <ContextProvider>
      <Nav
        src={"https://www.allsafeeg.com/uploads/settings/source/18925.png"}
        default={"black"}
      />
      <Title />
      <Projects />
      <Course />
      <Footer />
      <Ball />
      <Msg />
      <WhatsApp />
    </ContextProvider>
  );
}

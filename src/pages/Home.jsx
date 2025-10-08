import Slide from "../components/Slide";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Brand from "./Brand";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);
  return (
    <div id="slide">
      <div className="min-h-screen">
        <Hero />
      </div>

      <div id="brand" className="min-h-[400px]">
        <Brand />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact" className="pt-20 h-[70vh]">
        <Contact />
      </div>
    </div>
  );
}

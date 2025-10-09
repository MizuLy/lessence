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
    <div id="slide" className="scroll-mt-28">
      <div className="max-w-[1920px] mx-auto min-h-[1000px]">
        <Hero />
      </div>

      <div
        id="brand"
        className="max-w-[1920px] mx-auto min-h-[400px] scroll-mt-24"
      >
        <Brand />
      </div>

      <div
        id="about"
        className="max-w-[1920px] mx-auto min-h-[400px] scroll-mt-24"
      >
        <About />
      </div>

      <div
        id="contact"
        className="max-w-[1920px] mx-auto py-20 min-h-[400px] scroll-mt-24"
      >
        <Contact />
      </div>
    </div>
  );
}

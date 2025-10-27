import Slide from "../components/Slide";
import Contact from "../pages/Contact";
import About from "../pages/About";
import New from "../pages/New";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Brand from "./Brand";
import Video from "./Video";
import Map from "./Map";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Home() {
  const { hash } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="slide" className="scroll-mt-28">
      <div
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 lg:bottom-12 lg:right-12 rounded-lg z-[99] bg-black text-white transition-opacity duration-300 cursor-pointer ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="hover:animate-pulse p-4 flex justify-center items-center">
          <FaAngleDoubleUp size={20} />
        </span>
      </div>
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
        id="new"
        className="max-w-[1920px] mx-auto min-h-[400px] scroll-mt-24"
      >
        <New />
      </div>

      <Video />

      {/* <div
        id="about"
        className="max-w-[1920px] mx-auto min-h-[400px] scroll-mt-24"
      >
        <About />
      </div> */}
      <div
        id="location"
        className="max-w-[1920px] flex justify-center items-center min-h-[800px] scroll-mt-24"
      >
        <Map />
      </div>

      <div
        id="contact"
        className="max-w-[1920px] mx-auto pb-20 min-h-[800px] scroll-mt-24"
      >
        <Contact />
      </div>
    </div>
  );
}

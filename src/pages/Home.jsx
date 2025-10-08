import Slide from "../components/Slide";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <div id="slide" className="min-h-screen px-10 sm:px-20 md:px-40">
      <Slide />
      <div id="about" className="min-h-screen py-20 px-10 sm:px-20 md:px-40">
        <About />
      </div>

      <div id="contact" className="min-h-screen py-20 px-10 sm:px-20 md:px-40">
        <Contact />
      </div>
    </div>
  );
}

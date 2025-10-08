import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound404 from "../error/NotFound404";
import Contact from "../pages/Contact";
import Beauty from "../pages/Beauty";
import About from "../pages/About";

export default function Mainrouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

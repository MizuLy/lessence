import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound404 from "../error/NotFound404";
import Contact from "../pages/Contact";
import Beauty from "../pages/Beauty";
import About from "../pages/About";
import Chanel from "../pages/Chanel";
import Dior from "../pages/Dior";
import Gucci from "../pages/Gucci";
import LV from "../pages/LV";
import YSL from "../pages/YSL";
import ScrollToTop from "../components/ScrollToTop";
import BrandDetails from "../pages/BrandDetails";

export default function Mainrouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic product info */}
        <Route path="/brand/:brand/:id" element={<BrandDetails />} />

        {/* Static brand */}
        <Route path="/brand/chanel" element={<Chanel />} />
        <Route path="/brand/dior" element={<Dior />} />
        <Route path="/brand/gucci" element={<Gucci />} />
        <Route path="/brand/lv" element={<LV />} />
        <Route path="/brand/ysl" element={<YSL />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

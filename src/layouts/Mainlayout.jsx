import Mainrouter from "../routes/Mainrouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Mainlayout() {
  return (
    <div className="flex flex-col max-w-full min-h-screen">
      <div className="fixed w-full top-0 left-0 z-[99]">
        <Nav />
      </div>

      <div className="flex-grow pt-[100px]">
        <Mainrouter />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

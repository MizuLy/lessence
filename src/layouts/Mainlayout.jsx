import Mainrouter from "../routes/Mainrouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Announcer from "../components/Announcer";

export default function Mainlayout() {
  return (
    <div className="flex flex-col max-w-full min-h-screen">
      <Announcer />
      <div className="fixed w-full top-0 left-0 z-[99]">
        <Nav />
      </div>

      <div className="flex-grow pt-[80px]">
        <Mainrouter />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

import Mainrouter from "../routes/Mainrouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Announcer from "../components/Announcer";

export default function Mainlayout() {
  return (
    <div className="flex flex-col m-auto min-h-screen  max-w-[2000px]">
      <div className="sticky w-full top-0 left-0 z-[99]">
        <Nav />
        <Announcer />
      </div>

      <div className="flex-grow">
        <Mainrouter />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

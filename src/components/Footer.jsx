import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-black text-white flex flex-wrap py-10">
      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6 mb-6 md:mb-0">
        <h1 data-aos="fade-left" className="text-3xl font-josefinsans mb-3">
          <Link to={"/#slide"}>
            <span className="font-bold">L’</span>Essence
          </Link>
        </h1>
        <p>
          Trust in good quality premium product, Trust in us and our services.
        </p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6 mb-6 md:mb-0">
        <h1 data-aos="fade-left" className="text-3xl font-josefinsans mb-3">
          Social
        </h1>
        <div className="flex flex-col space-y-2">
          <a href="#" className="cursor-pointer hover:text-blue-500">
            Facebook
          </a>
          <a
            href="#"
            className="cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]"
          >
            Instragram
          </a>
          <a href="#" className="cursor-pointer hover:text-blue-100/50">
            Twitter (X)
          </a>
          <a href="#" className="cursor-pointer hover:text-gray-500">
            TikTok
          </a>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6 mb-6 md:mb-0">
        <h1 data-aos="fade-left" className="text-3xl font-josefinsans mb-3">
          Price
        </h1>
        <p>Contact for more info</p>
        <p className="cursor-pointer mt-2">lessence@cambodia.com</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6">
        <h1 data-aos="fade-left" className="text-3xl font-josefinsans mb-3">
          About
        </h1>
        <p className="cursor-pointer">Terms & Conditions</p>
        <p className="cursor-pointer mt-2">Privacy Policy</p>
        <p className=" mt-2">
          &copy; {new Date().getFullYear()} L’Essence. All rights reserved.
        </p>
      </div>
    </div>
  );
}

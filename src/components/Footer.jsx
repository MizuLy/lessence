import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-black text-white flex flex-wrap py-10">
      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6 mb-6 md:mb-0">
        <h1 className="text-3xl font-josefinsans mb-3">
          <Link to={"/#slide"}>
            <span className="font-bold">App</span>Anh
          </Link>
        </h1>
        <p>Trust in good quality premium product, Trust in us and our services.</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6 mb-6 md:mb-0">
        <h1 className="text-3xl font-josefinsans mb-3">Social</h1>
        <div className="flex flex-col space-y-2">
          <p className="cursor-pointer hover:text-blue-500">Facebook</p>
          <p className="cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]">
            Instragram
          </p>
          <p className="cursor-pointer hover:text-blue-100/50">Twitter (X)</p>
          <p className="cursor-pointer hover:text-gray-500">TikTok</p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6 mb-6 md:mb-0">
        <h1 className="text-3xl font-josefinsans mb-3">Price</h1>
        <p>Contact for more info</p>
        <p className="cursor-pointer mt-2">senglysea12@gmail.com</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6">
        <h1 className="text-3xl font-josefinsans mb-3">About</h1>
        <p className="cursor-pointer">Terms & Conditions</p>
        <p className="cursor-pointer mt-2">Privacy Policy</p>
      </div>
    </div>
  );
}

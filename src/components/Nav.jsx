import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Nav() {
  const [menu, setMenu] = useState(true);
  return (
    <div>
      <div className="bg-black flex justify-center h-[20px]">
        <p className="text-white">Discover our amazing collection</p>
      </div>
      {/* Big */}
      <nav className="hover:bg-white max-w-full h-[80px] hidden lg:flex justify-center items-center shadow-xl">
        {/* Logo */}
        <div className="w-[25%] flex justify-center">
          <Link to={"/#slide"} className="flex items-center gap-2">
            <div className="w-[80px] h-[80px] overflow-hidden">
              <img
                src="/Logo/AppAnh.png"
                className="w-full h-full object-cover invert-0"
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold font-josefinsans pt-8">
              AppAnh
            </h1>
          </Link>
        </div>

        {/* Menu */}
        <div className="w-[25%] flex justify-center">
          <ul className="flex gap-10">
            <li className="text-xl font-semibold duration-150 cursor-pointer hover:text-purple-200">
              <Link to={"/#brand"}>Brand</Link>
            </li>

            <li className="text-xl font-semibold duration-150 cursor-pointer hover:text-purple-200">
              <Link to={"/#about"}>About</Link>
            </li>

            <li className="text-xl font-semibold duration-150 cursor-pointer hover:text-purple-200">
              <Link to={"/#contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        {/* Search */}
        <div className="w-[25%] flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-[500px] px-4 py-2 rounded-xl outline-none border"
          />
        </div>
        {/* Random */}
        <div className="w-[25%] flex justify-center gap-10">
          <div className="text-xl font-semibold hover:text-purple-200 duration-150 cursor-pointer flex gap-5 items-center justify-center">
            <IoCart size={30} />
            <p>Cart</p>
          </div>

          <div className="text-xl font-semibold hover:text-purple-200 duration-150 cursor-pointer flex gap-5 items-center justify-center">
            <FaUser size={25} />
            <p>Account</p>
          </div>
        </div>
      </nav>

      {/* Small */}
      <nav className="bg-white w-full h-[80px] shadow-xl lg:hidden flex justify-center items-center">
        {/* Logo */}
        <div className="w-[50%] h-full flex justify-start items-center px-4">
          <Link to={"/#slide"} className="flex items-center gap-2">
            <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] overflow-hidden">
              <img
                src="/Logo/AppAnh.png"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold font-josefinsans pt-5 lg:pt-8">
              AppAnh
            </h1>
          </Link>
        </div>
        <div className="w-[50%] h-full flex justify-end items-center px-4">
          <div onClick={() => setMenu(!menu)}>
            {menu ? <IoMenu size={30} /> : <IoClose size={30} />}
          </div>
        </div>

        {/* Open Slide */}
        <div
          className={`bg-white fixed top-0 left-0 z-[99] shadow-md w-[80%] md:w-[40%] h-[100vh] transition-all duration-150 ${
            menu ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {/* Logo */}
          <div className="w-full h-[90px]">
            <div className="w-full h-full flex justify-start items-center px-4">
              <Link to={"/#slide"} className="flex items-center gap-2">
                <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] overflow-hidden">
                  <img
                    src="/Logo/AppAnh.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold font-josefinsans pt-5 lg:pt-8">
                  AppAnh
                </h1>
              </Link>
            </div>
          </div>
          {/* Search */}
          <div className="flex justify-start">
            <input
              type="text"
              placeholder="Search..."
              className="w-full mx-4 mb-4 px-4 py-2 rounded-xl outline-none border"
            />
          </div>
          {/* Menu */}
          <div className="flex justify-start px-4 pb-2">
            <ul className="flex flex-col">
              <li className="text-2xl pb-2 font-semibold duration-150 cursor-pointer hover:text-purple-200">
                <Link to={"/#brand"}>Brand</Link>
              </li>
              <li className="text-2xl pb-2 font-semibold duration-150 cursor-pointer hover:text-purple-200">
                <Link to={"/#about"}>About</Link>
              </li>
              <li className="text-2xl pb-2 font-semibold duration-150 cursor-pointer hover:text-purple-200">
                <Link to={"/#contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          {/* Random */}
          <div className="flex justify-start gap-5 px-4">
            <div className="text-2xl font-semibold hover:text-purple-200 duration-150 cursor-pointer flex gap-5 items-center justify-center">
              <IoCart size={30} />
              <p>Cart</p>
            </div>

            <div className="text-2xl font-semibold hover:text-purple-200 duration-150 cursor-pointer flex gap-5 items-center justify-center">
              <FaUser size={24} />
              <p>Account</p>
            </div>
          </div>
        </div>

        {/* Close Slide */}
        <div
          onClick={() => setMenu(!menu)}
          className={`fixed top-0 right-0 z-[99] w-[20%] md:w-[60%] h-[100vh] ${
            menu ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </nav>
    </div>
  );
}

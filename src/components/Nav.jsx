import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { IoMenu, IoClose, IoCartOutline } from "react-icons/io5";

export default function Nav() {
  const [menu, setMenu] = useState(true);
  const [search, setSearch] = useState(true);
  return (
    <div>
      {/* Big */}
      <nav className="bg-white max-w-full h-[80px] hidden lg:flex justify-center items-center shadow-xl">
        {/* Logo */}
        <div className="w-[30%] flex justify-center">
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
        <div className="w-[40%] flex justify-center">
          <ul className="flex gap-10">
            <li className="text-xl duration-150 cursor-pointer hover:text-gray-500">
              <Link to={"/#brand"}>Brand</Link>
            </li>

            <li className="text-xl duration-150 cursor-pointer hover:text-gray-500">
              <Link to={"/#about"}>About</Link>
            </li>

            <li className="text-xl duration-150 cursor-pointer hover:text-gray-500">
              <Link to={"/#contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Random */}
        <div className="w-[30%] flex justify-center gap-10">
          <div
            onClick={() => setSearch(!search)}
            className="text-xl font-semibold hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center"
          >
            <IoIosSearch size={25} />
          </div>

          {/* Search Contain */}
          <div
            className={`bg-white flex flex-col justify-center items-center fixed top-0 left-0 z-[99] shadow-md w-[80%] md:w-[40%] h-[100vh] transition-all duration-150 ${
              search ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-3xl">Looking for something?</div>
            {/* Search */}
            <div className="w-full flex justify-center p-10">
              <input
                type="text"
                placeholder="Search..."
                className="w-[500px] px-4 py-2 outline-none shadow-xl border-b-2 border-black"
              />
            </div>
            <div className="flex flex-col justify-center">
              <ul>
                <li className="font-bold border-b-2 b">POPULAR NOW</li>
                <li className="hover:font-semibold pt-2">MEN</li>
                <li className="hover:font-semibold pt-2">WOMEN</li>
              </ul>
            </div>
          </div>

          <div className="text-xl font-semibold hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center">
            <IoCartOutline size={25} />
          </div>

          <div className="text-xl hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center">
            <CiUser size={25} />
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
          <div
            onClick={() => setSearch(!search)}
            className="text-xl pr-5 font-semibold hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center"
          >
            <IoIosSearch size={25} />
          </div>
          {/* Search Contain */}
          <div
            className={`bg-white flex flex-col justify-center items-center fixed top-0 left-0 z-[99] shadow-md w-[70%] md:w-[40%] h-[100vh] transition-all duration-150 ${
              search ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-3xl">Looking for something?</div>
            {/* Search */}
            <div className="w-full flex justify-center p-10">
              <input
                type="text"
                placeholder="Search..."
                className="w-[500px] px-4 py-2 outline-none shadow-xl border-b-2 border-black"
              />
            </div>
            <div className="flex flex-col justify-center">
              <ul>
                <li className="font-bold border-b-2 b">POPULAR NOW</li>
                <li className="hover:font-semibold pt-2">MEN</li>
                <li className="hover:font-semibold pt-2">WOMEN</li>
              </ul>
            </div>
          </div>
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
          <div className="w-full h-[80px]">
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
              <li className="text-2xl pb-2 duration-150 cursor-pointer hover:text-gray-500">
                <Link to={"/#brand"}>Brand</Link>
              </li>
              <li className="text-2xl pb-2 duration-150 cursor-pointer hover:text-gray-500">
                <Link to={"/#about"}>About</Link>
              </li>
              <li className="text-2xl pb-2 duration-150 cursor-pointer hover:text-gray-500">
                <Link to={"/#contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          {/* Random */}
          <div className="flex justify-start gap-5 px-4">
            <div className="text-2xl font-semibold hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center">
              <IoCartOutline size={25} />
            </div>

            <div className="text-2xl font-semibold hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center">
              <CiUser size={25} />
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

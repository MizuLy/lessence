import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { IoMenu, IoClose, IoCartOutline } from "react-icons/io5";

export default function Nav() {
  const [menu, setMenu] = useState(true);
  const [search, setSearch] = useState(true);
  const [cart, setCart] = useState(true);
  const [account, setAccount] = useState(true);
  const [count, setCount] = useState(1);
  return (
    <div>
      {/* Big */}
      <nav className="bg-white max-w-full h-[80px] hidden lg:flex justify-center items-center shadow-xl">
        {/* Logo */}
        <div className="w-[30%] flex justify-center">
          <HashLink smooth to="/#slide" className="flex items-center gap-2">
            <div className="w-[80px] h-[80px] overflow-hidden">
              <img
                src="/Logo/AppAnh.png"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold font-josefinsans pt-8">
              AppAnh
            </h1>
          </HashLink>
        </div>

        {/* Menu */}
        <div className="w-[40%] flex justify-center">
          <ul className="flex gap-10">
            <li className="text-xl duration-150 cursor-pointer hover:text-gray-500">
              <HashLink smooth to="/#brand">
                Brand
              </HashLink>
            </li>

            <li className="text-xl duration-150 cursor-pointer hover:text-gray-500">
              <HashLink smooth to="/#new">
                New
              </HashLink>
            </li>

            <li className="text-xl duration-150 cursor-pointer hover:text-gray-500">
              <HashLink smooth to="/about">
                About
              </HashLink>
            </li>

            <li className="text-xl duration-150 cursor-pointer hover:text-gray-500">
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
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

          {/* Search Open */}
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

                <li onClick={() => setSearch(!search)} className="pt-2">
                  <span className="hover:font-semibold cursor-pointer">
                    MEN
                  </span>
                </li>

                <li onClick={() => setSearch(!search)} className="pt-2">
                  <span className="hover:font-semibold cursor-pointer">
                    WOMEN
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Close Search */}
          <div
            onClick={() => setSearch(!search)}
            className={`fixed top-0 right-0 z-[99] w-[20%] md:w-[60%] h-[100vh] cursor-pointer ${
              search ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          <div
            onClick={() => setCart(!cart)}
            className="text-xl font-semibold hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center"
          >
            <IoCartOutline size={25} />
          </div>

          {/* Cart Open */}
          <div
            className={`bg-white flex flex-col px-20 justify-center items-center fixed top-0 left-0 z-[99] shadow-md w-[80%] md:w-[40%] h-[100vh] transition-all duration-150 ${
              cart ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <h1 className="text-3xl font-semibold pb-5">Your Cart</h1>

            {/* Item 1 */}
            <div className=" w-full min-h-[140px] p-4 flex space-x-4 shadow-lg rounded-xl">
              <div className="w-[20%] h-full overflow-hidden rounded-xl shadow-md">
                <img
                  src="/Model/modelinblack.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[80%] h-full flex flex-col items-start p-4">
                <div>
                  <h1 className="font-semibold text-xl">Black Dress</h1>
                  <p className="text-md">Quantity: {count}</p>
                </div>

                <div className="flex space-x-5 text-xl py-2">
                  <button
                    className="w-10 h-10 rounded-xl shadow-md"
                    onClick={() => count > 0 && setCount(count - 1)}
                  >
                    -
                  </button>
                  <p className="pt-2">{count}</p>
                  <button
                    className="w-10 h-10 rounded-xl shadow-md"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Close Cart */}
          <div
            onClick={() => setCart(!cart)}
            className={`fixed top-0 right-0 z-[99] w-[20%] md:w-[60%] h-[100vh] cursor-pointer ${
              cart ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          <div
            onClick={() => setAccount(!account)}
            className="text-xl hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center"
          >
            <CiUser size={25} />
          </div>

          {/* Account Open */}
          <div
            className={`bg-white rounded-tl-full rounded-br-full flex flex-col justify-center items-center fixed z-[100] shadow-md w-[8 font-josefinsans0%] md:w-[40%] h-[auto] p-8 transition-all duration-300 ${
              account
                ? "hidden"
                : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 scale-100"
            }`}
          >
            <h1 className="text-3xl lg:text-5xl font-semibold pb-4">Login</h1>
            <input
              type="text"
              placeholder="Username"
              className="sm:w-[80%] lg:w-[50%] mb-2 px-4 py-2 border font-josefinsans border-gray-300 rounded-md shadow-md outline-none placeholder-gray-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="sm:w-[80%] lg:w-[50%] mb-2 px-4 py-2 border font-josefinsans border-gray-300 rounded-md shadow-md outline-none placeholder-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="sm:w-[80%] lg:w-[50%] mb-2 px-4 py-2 border font-josefinsans border-gray-300 rounded-md shadow-md outline-none placeholder-gray-400"
            />

            <button className="px-4 py-2 bg-gray-600 text-white mt-2 rounded-full hover:bg-black duration-150">
              Login
            </button>
            <div className="flex items-center space-x-2 mt-2">
              <span>Don't have an account?</span>
              <Link
                className="hover:underline text-gray-500 hover:text-black"
                onClick={() => setAccount(!account)}
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Close Account */}
          <div
            onClick={() => setAccount(!account)}
            className={`fixed top-0 right-0 z-[99] w-full bg-black/50 h-[100vh] cursor-pointer ${
              account
                ? "translate-x-full"
                : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 scale-100"
            }`}
          ></div>
        </div>
      </nav>

      {/* Small */}
      <nav className="bg-white w-full h-[80px] shadow-xl lg:hidden flex justify-center items-center">
        {/* Logo */}
        <div className="w-[50%] h-full flex justify-start items-center px-4">
          <HashLink smooth to="/#slide" className="flex items-center gap-2">
            <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] overflow-hidden">
              <img
                src="/Logo/AppAnh.png"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold font-josefinsans pt-5 lg:pt-8">
              AppAnh
            </h1>
          </HashLink>
        </div>

        <div className="w-[50%] h-full flex justify-end items-center px-4">
          <div
            onClick={() => setSearch(!search)}
            className="text-xl pr-5 font-semibold hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center"
          >
            <IoIosSearch size={25} />
          </div>
          {/* Search Open */}
          <div
            className={`bg-white flex flex-col justify-center items-center fixed top-0 left-0 z-[99] shadow-md w-[70%] md:w-[40%] h-[100vh] transition-all duration-150 ${
              search ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-3xl text-center text-wrap">
              Looking for something?
            </div>
            {/* Search */}
            <div className="w-full flex justify-center p-10">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[300px] lg:w-[500px] px-4 py-2 outline-none shadow-xl border-b-2 border-black"
              />
            </div>
            <div className="flex flex-col justify-center">
              <ul>
                <li className="font-bold border-b-2 b">POPULAR NOW</li>
                <li className="pt-2">
                  <span className="hover:font-semibold cursor-pointer">
                    MEN
                  </span>
                </li>
                <li className="pt-2">
                  <span className="hover:font-semibold cursor-pointer">
                    WOMEN
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Close Search */}
          <div
            onClick={() => setSearch(!search)}
            className={`fixed top-0 right-0 z-[99] w-[30%] md:w-[60%] h-[100vh] cursor-pointer ${
              search ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          <div
            onClick={() => setCart(!cart)}
            className="text-2xl pr-5 font-semibold hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center"
          >
            <IoCartOutline size={25} />
          </div>

          {/* Cart Open */}
          <div
            className={`bg-white flex flex-col px-20 justify-center items-center fixed top-0 left-0 z-[99] shadow-md w-[80%] md:w-[40%] h-[100vh] transition-all duration-150 ${
              cart ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <h1 className="text-3xl font-semibold pb-5">Your Cart</h1>

            {/* Item 1 */}
            <div className="w-full h-auto p-3 sm:p-4 flex space-x-3 sm:space-x-4 shadow-lg rounded-xl">
              <div className="w-[30%] sm:w-[25%] md:w-[20%] h-[100px] sm:h-[120px] overflow-hidden rounded-xl shadow-md">
                <img
                  src="/Model/modelinblack.jpg"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-[70%] sm:w-[75%] md:w-[80%] flex flex-col items-start justify-between p-2 sm:p-4">
                <div>
                  <h1 className="font-semibold text-lg sm:text-xl">
                    Black Dress
                  </h1>
                  <p className="text-sm sm:text-md">Quantity: {count}</p>
                </div>

                <div className="flex space-x-3 sm:space-x-5 text-lg sm:text-xl pt-2">
                  <button
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl shadow-md"
                    onClick={() => count > 0 && setCount(count - 1)}
                  >
                    -
                  </button>
                  <p className="pt-1 sm:pt-2">{count}</p>
                  <button
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl shadow-md"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Close Cart */}
          <div
            onClick={() => setCart(!cart)}
            className={`fixed top-0 right-0 z-[99] w-[20%] md:w-[60%] h-[100vh] cursor-pointer ${
              cart ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          <div
            className="cursor-pointer hover:text-gray-400"
            onClick={() => setMenu(!menu)}
          >
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
          <div className="w-full h-[80px] border-b mb-2">
            <div
              onClick={() => setMenu(!menu)}
              className="w-full h-full flex justify-start items-center px-4"
            >
              <HashLink smooth to="/#slide" className="flex items-center gap-2">
                <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] overflow-hidden">
                  <img
                    src="/Logo/AppAnh.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold font-josefinsans pt-5 lg:pt-8">
                  AppAnh
                </h1>
              </HashLink>
            </div>
          </div>

          {/* Menu */}
          <div className="flex justify-start px-4 pb-2">
            <ul className="flex flex-col">
              <li
                onClick={() => setMenu(!menu)}
                className="text-2xl pb-2 duration-150 cursor-pointer hover:text-gray-500"
              >
                <HashLink smooth to="/#brand">
                  Brand
                </HashLink>
              </li>
              <li
                onClick={() => setMenu(!menu)}
                className="text-2xl pb-2 duration-150 cursor-pointer hover:text-gray-500"
              >
                <HashLink smooth to="/#new">
                  New
                </HashLink>
              </li>
              <li
                onClick={() => setMenu(!menu)}
                className="text-2xl pb-2 duration-150 cursor-pointer hover:text-gray-500"
              >
                <HashLink smooth to="/about">
                  About
                </HashLink>
              </li>
              <li
                onClick={() => setMenu(!menu)}
                className="text-2xl pb-2 duration-150 cursor-pointer hover:text-gray-500"
              >
                <HashLink smooth to="/#contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
          {/* Random */}
          <div className="flex justify-start gap-5 px-4">
            <div
              onClick={() => {
                setMenu(!menu);
                setAccount(!account);
              }}
              className="text-2xl font-semibold hover:text-gray-500 duration-150 cursor-pointer flex gap-5 items-center justify-center"
            >
              <CiUser size={25} />
            </div>
          </div>
        </div>
        {/* Close Slide */}
        <div
          onClick={() => setMenu(!menu)}
          className={`fixed top-0 right-0 z-[99] w-[20%] md:w-[60%] h-[100vh] cursor-pointer ${
            menu ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </nav>
    </div>
  );
}

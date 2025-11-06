import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CiUser, CiReceipt } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { IoMenu, IoClose, IoCartOutline } from "react-icons/io5";

export default function Nav() {
  const [menu, setMenu] = useState(true);
  const [search, setSearch] = useState(true);
  const [cart, setCart] = useState(true);
  const [account, setAccount] = useState(true);
  const [receipt, setReceipt] = useState(true);
  const [count, setCount] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    avatar: "",
  });
  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [preview, setPreview] = useState(null);

  // Disable scroll when account modal is open
  useEffect(() => {
    document.body.style.overflow = account ? "auto" : "hidden";
  }, [account]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProfile((prev) => ({ ...prev, avatar: url }));
    setPreview(url);
  };

  const handleLogin = () => {
    if (inputUser && inputPass) {
      setProfile((prev) => ({
        ...prev,
        username: inputUser,
        email: "",
      }));
      setIsLoggedIn(true);
      setAccount(true);
      setInputUser("");
      setInputPass("");
    }
  };

  const handleSignUp = () => {
    if (inputUser && inputEmail && inputPass) {
      setProfile((prev) => ({
        ...prev,
        username: inputUser,
        email: inputEmail,
      }));
      setIsLoggedIn(true);
      setAccount(true);
      setInputUser("");
      setInputEmail("");
      setInputPass("");
      setPreview(null);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfile({ username: "", email: "", avatar: "" });
    setAccount(true);
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    setProfile((prev) => ({
      ...prev,
      username: inputUser || prev.username,
      email: inputEmail || prev.email,
      avatar: preview || prev.avatar,
    }));
    setIsEditing(false);
    setInputUser("");
    setInputEmail("");
    setPreview(null);
  };

  return (
    <div>
      {/* Big screen nav */}
      <nav className="bg-white max-w-full h-[80px] hidden lg:flex justify-center items-center shadow-xl">
        {/* Logo */}
        <div className="w-[30%] flex justify-center">
          <HashLink smooth to="/#slide" className="flex items-center gap-2">
            <div className="w-[80px] h-[80px] overflow-hidden">
              <img
                src="/Logo/LESSENCE.png"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold font-josefinsans pt-4">
              L'ESSENCE
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
              <HashLink smooth to="/#location">
                Location
              </HashLink>
            </li>
            <li className="text-xl duration-150 cursor-pointer hover:text-gray-500">
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="w-[30%] flex justify-center gap-10 items-center">
          {/* Search icon */}
          <div
            onClick={() => setSearch(!search)}
            className="hover:text-gray-500 duration-150 cursor-pointer"
          >
            <IoIosSearch size={25} />
          </div>

          {/* Search panel */}
          <div
            className={`bg-white flex flex-col justify-center items-center fixed top-0 left-0 z-[99] shadow-md w-[80%] md:w-[40%] h-[100vh] transition-all duration-150 ${
              search ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-3xl">Looking for something?</div>
            <div className="w-full flex justify-center p-10">
              <input
                type="text"
                placeholder="Search..."
                className="w-[500px] px-4 py-2 outline-none shadow-xl border-b-2 border-black"
              />
            </div>
            <div className="flex flex-col justify-center">
              <ul>
                <li className="font-bold border-b-2">POPULAR NOW</li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <HashLink
                    to={"/#new"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    NEW
                  </HashLink>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/chanel"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    CHANEL
                  </Link>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/dior"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    DIOR
                  </Link>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/gucci"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    GUCCI
                  </Link>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/lv"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    LOUIS VUITTON
                  </Link>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/ysl"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    YVES SAINT LAURENT
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Close search overlay */}
          <div
            onClick={() => setSearch(!search)}
            className={`fixed top-0 right-0 z-[99] w-[20%] md:w-[60%] h-[100vh] cursor-pointer ${
              search ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          {/* Cart */}
          <Link to="/cart" className="hover:text-gray-500 duration-150">
            <IoCartOutline size={25} />
          </Link>

          {/* Receipt */}
          <div
            onClick={() => {
              setMenu(true);
              setReceipt(!receipt);
            }}
            className="text-2xl hover:text-gray-500 cursor-pointer flex items-center"
          >
            <Link to={"/order"}>
              <CiReceipt size={25} />
            </Link>
          </div>

          {/* Account */}
          <div
            onClick={() => setAccount(!account)}
            className="text-xl hover:text-gray-500 duration-150 cursor-pointer flex gap-2 items-center justify-center"
          >
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
            ) : (
              <CiUser size={25} />
            )}
            {isLoggedIn && (
              <span className="text-base font-semibold">
                {profile.username}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Account Modal */}
      <div
        className={`bg-white flex flex-col justify-center items-center fixed z-[100] shadow-2xl w-[90%] sm:w-[450px] max-h-[90vh] overflow-y-auto p-8 transition-all duration-300 ${
          account
            ? "hidden"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 scale-100"
        }`}
      >
        {!isLoggedIn ? (
          <>
            {isSignUp ? (
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Create Account
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      value={inputUser}
                      onChange={(e) => setInputUser(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={inputEmail}
                      onChange={(e) => setInputEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Create a password"
                      value={inputPass}
                      onChange={(e) => setInputPass(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Profile Picture (Optional)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="text-sm"
                      />
                      {preview && (
                        <img
                          src={preview}
                          alt="Preview"
                          className="w-12 h-12 rounded-full border-2 object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleSignUp}
                    className="w-full px-4 py-3 mt-2 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="mt-4 text-center text-gray-600">
                  Already have an account?{" "}
                  <span
                    className="text-black font-medium hover:underline cursor-pointer"
                    onClick={() => setIsSignUp(false)}
                  >
                    Login
                  </span>
                </p>
              </div>
            ) : (
              <div className="w-full">
                <h1 className="text-3xl font-bold mb-6 text-center">
                  Welcome Back
                </h1>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      value={inputUser}
                      onChange={(e) => setInputUser(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={inputPass}
                      onChange={(e) => setInputPass(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={handleLogin}
                    className="w-full px-4 py-3 mt-2 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                  >
                    Login
                  </button>
                </div>
                <p className="mt-4 text-center text-gray-600">
                  Don't have an account?{" "}
                  <span
                    className="text-black font-medium hover:underline cursor-pointer"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>
            {isEditing ? (
              <div className="space-y-4">
                <div className="flex justify-center mb-4">
                  <img
                    src={
                      preview ||
                      profile.avatar ||
                      "https://via.placeholder.com/100"
                    }
                    alt="Preview"
                    className="w-24 h-24 rounded-full border-2 object-cover"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={inputUser || profile.username}
                    onChange={(e) => setInputUser(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={inputEmail || profile.email}
                    onChange={(e) => setInputEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Change Profile Picture
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="text-sm"
                  />
                </div>
                <button
                  onClick={handleSaveEdit}
                  className="w-full px-4 py-3 mt-2 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <img
                  src={profile.avatar || "https://via.placeholder.com/100"}
                  alt="avatar"
                  className="w-24 h-24 rounded-full mb-4 border-2"
                />
                <p className="text-xl font-semibold mb-1">{profile.username}</p>
                <p className="text-gray-600 mb-6">{profile.email}</p>
                <div className="flex gap-3 w-full">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex-1 px-4 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 px-4 py-3 bg-gray-700 text-white font-medium hover:bg-gray-800 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Overlay */}
      <div
        onClick={() => setAccount(true)}
        className={`fixed top-0 left-0 z-[90] w-full h-[100vh] bg-black/50 ${
          account ? "hidden" : "block"
        }`}
      ></div>

      {/* Small screen nav */}
      <nav className="bg-white w-full h-[80px] shadow-xl lg:hidden flex justify-center items-center">
        <div className="w-[50%] h-full flex justify-start items-center px-4">
          <HashLink smooth to="/#slide" className="flex items-center gap-2">
            <div className="w-[60px] h-[60px] overflow-hidden">
              <img
                src="/Logo/LESSENCE.png"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold font-josefinsans pt-3">
              L'ESSENCE
            </h1>
          </HashLink>
        </div>

        <div className="w-[50%] h-full flex justify-end items-center px-4">
          <div
            onClick={() => setSearch(!search)}
            className="text-xl pr-5 hover:text-gray-500 duration-150 cursor-pointer"
          >
            <IoIosSearch size={25} />
          </div>

          {/* Search panel */}
          <div
            className={`bg-white flex flex-col justify-center items-center fixed top-0 left-0 z-[99] shadow-md w-[80%] md:w-[40%] h-[100vh] transition-all duration-150 ${
              search ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-3xl text-center px-4">
              Looking for something?
            </div>
            <div className="w-full flex justify-center p-10">
              <input
                type="text"
                placeholder="Search..."
                className="w-[500px] px-4 py-2 outline-none shadow-xl border-b-2 border-black"
              />
            </div>
            <div className="flex flex-col justify-center">
              <ul>
                <li className="font-bold border-b-2">POPULAR NOW</li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <HashLink
                    to={"/#new"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    NEW
                  </HashLink>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/chanel"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    CHANEL
                  </Link>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/dior"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    DIOR
                  </Link>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/gucci"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    GUCCI
                  </Link>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/lv"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    LOUIS VUITTON
                  </Link>
                </li>
                <li onClick={() => setSearch(!search)} className="pt-2">
                  <Link
                    to={"/brand/ysl"}
                    className="hover:font-semibold font-medium transiton-all cursor-pointer"
                  >
                    YVES SAINT LAURENT
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Close search overlay */}
          <div
            onClick={() => setSearch(!search)}
            className={`fixed top-0 right-0 z-[99] w-[20%] md:w-[60%] h-[100vh] cursor-pointer ${
              search ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          <Link to="/cart" className="pr-5 hover:text-gray-500">
            <IoCartOutline size={25} />
          </Link>

          <div
            className="cursor-pointer hover:text-gray-400"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoMenu size={30} /> : <IoClose size={30} />}
          </div>
        </div>

        {/* Slide menu */}
        <div
          className={`bg-white fixed top-0 left-0 z-[99] shadow-md w-[80%] md:w-[40%] h-[100vh] transition-all duration-150 ${
            menu ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="w-full h-[80px] border-b mb-2 flex items-center px-4">
            <HashLink
              smooth
              to="/#slide"
              className="flex items-center gap-2"
              onClick={() => setMenu(true)}
            >
              <div className="w-[60px] h-[60px] overflow-hidden">
                <img
                  src="/Logo/LESSENCE.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold font-josefinsans pt-3">
                L'ESSENCE
              </h1>
            </HashLink>
          </div>

          <ul className="flex flex-col px-4">
            <li
              onClick={() => setMenu(true)}
              className="text-2xl pb-2 hover:text-gray-500"
            >
              <HashLink smooth to="/#brand">
                Brand
              </HashLink>
            </li>
            <li
              onClick={() => setMenu(true)}
              className="text-2xl pb-2 hover:text-gray-500"
            >
              <HashLink smooth to="/#new">
                New
              </HashLink>
            </li>
            <li
              onClick={() => setMenu(true)}
              className="text-2xl pb-2 hover:text-gray-500"
            >
              <HashLink smooth to="/about">
                About
              </HashLink>
            </li>
            <li
              onClick={() => setMenu(true)}
              className="text-2xl pb-2 hover:text-gray-500"
            >
              <HashLink smooth to="/#location">
                Location
              </HashLink>
            </li>
            <li
              onClick={() => setMenu(true)}
              className="text-2xl pb-2 hover:text-gray-500"
            >
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>

          <div className="flex justify-start gap-5 px-4 pt-4">
            <div
              onClick={() => {
                setMenu(true);
                setAccount(!account);
              }}
              className="text-2xl hover:text-gray-500 cursor-pointer flex items-center"
            >
              <CiUser size={25} />
            </div>
            <div
              onClick={() => {
                setMenu(true);
                setReceipt(!receipt);
              }}
              className="text-2xl hover:text-gray-500 cursor-pointer flex items-center"
            >
              <Link to={"/order"}>
                <CiReceipt size={25} />
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay for slide */}
        <div
          onClick={() => setMenu(true)}
          className={`fixed top-0 right-0 z-[99] w-[20%] md:w-[60%] h-[100vh] cursor-pointer ${
            menu ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </nav>
    </div>
  );
}

import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <div className="max-w-screen pb-40">
      <div
        data-aos="zoom-out"
        className="w-full h-[900px] overflow-hidden relative"
      >
        <img
          src="/Model/modelinblack.jpg"
          alt=""
          className="object-cover w-full h-full"
        />

        <div
          data-aos="fade-up"
          className="absolute top-[35%] left-[50%] z-[10]"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Elevate Your Style. Embrace Your Beauty.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Discover the latest trends in fashion and beauty — all in one place.
            Shop exclusive collections and express your unique look.
          </p>
          <HashLink smooth to={"/#brand"}>
            <button className="px-4 py-2 bg-gray-300 rounded-full mt-6 hover:bg-gray-400 duration-150 text-lg transition">
              Shop Now
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

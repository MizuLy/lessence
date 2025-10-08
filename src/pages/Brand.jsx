export default function Brand() {
  const brandLogo = [
    "chanel.png",
    "dior.png",
    "gucci.png",
    "lv.png",
    "ysl.png",
  ];

  return (
    <div className="text-center flex flex-col justify-center items-center pb-20 pt-10 bg-gray-200">
      <h1 className="text-3xl lg:text-5xl font-bold font-josefinsans mb-10">
        Our Partnership
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {brandLogo.map((i) => (
          <div
            key={i}
            className="w-[120px] h-[120px] flex justify-center items-center overflow-hidden shadow-lg rounded-xl p-5 hover:scale-105 duration-150 bg-white"
          >
            <img
              src={`/Logo/${i}`}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

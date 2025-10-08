export default function Brand() {
  const brandLogo = [
    "chanel.png",
    "dior.png",
    "gucci.png",
    "lv.png",
    "ysl.png",
  ];
  return (
    <div className="text-center flex flex-col justify-center pb-10">
      <h1 className="text-3xl lg:text-5xl font-bold font-josefinsans mb-6">
        Our Partnership
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {brandLogo.map((i) => (
          <div
            key={i}
            className="w-[120px] h-[120px] flex justify-center items-center overflow-hidden shadow-xl rounded-xl p-5 hover:scale-105 duration-150"
          >
            <img src={`/Logo/${i}`} alt="" className="object-contain max-w-full max-h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

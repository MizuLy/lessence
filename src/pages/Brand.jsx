import { Link } from "react-router-dom";
export default function Brand() {
  const brands = [
    { name: "chanel", logo: "chanel.png" },
    { name: "dior", logo: "dior.png" },
    { name: "gucci", logo: "gucci.png" },
    { name: "lv", logo: "lv.png" },
    { name: "ysl", logo: "ysl.png" },
  ];
  return (
    <div className="text-center flex flex-col justify-center items-center pb-20 pt-10 bg-gray-200">
      <h1
        data-aos="fade-right"
        className="text-3xl lg:text-5xl font-bold font-josefinsans mb-10"
      >
        Our Partnership
      </h1>
      <div
        data-aos="fade-up"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
      >
        {brands.map((brand) => (
          <Link key={brand.name} to={`/brand/${brand.name}`}>
            <div className="w-[120px] h-[120px] flex justify-center items-center overflow-hidden p-5 hover:scale-150 duration-200">
              <img
                src={`/Logo/${brand.logo}`}
                className="object-contain max-w-full max-h-full"
                alt={`${brand.name} logo`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

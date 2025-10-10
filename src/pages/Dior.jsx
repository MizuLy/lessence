import { IoCartOutline, IoEyeOutline } from "react-icons/io5";

export default function Chanel() {
  const product = [
    {
      id: 1,
      name: "Pleated Tulle Midi Skirt with Pearl Trim",
      price: 4200,
      discount: 3550,
      image:
        "https://media.gettyimages.com/id/1952520010/photo/paris-france-rihanna-attends-the-christian-dior-haute-couture-spring-summer-2024-show-as-part.jpg?s=612x612&w=0&k=20&c=pkqEStoRHgZiqqU-sIk5sgHKqlED5zfuGWuaJgCBn6Q=",
      desc: "Romantic tulle midi skirt with delicate pearl trim and soft pleating.",
    },
    {
      id: 2,
      name: "Embroidered Silk Blazer with Structured Shoulders",
      price: 6800,
      discount: 5780,
      image:
        "https://media.gettyimages.com/id/1952614854/photo/paris-france-anya-taylor-joy-attends-the-christian-dior-haute-couture-spring-summer-2024-show.jpg?s=612x612&w=0&k=20&c=YVZlUVUCe5BNfstD3wvQgU2I_RiFJIfRgBDA1vyVCwE=",
      desc: "Luxurious silk blazer featuring intricate embroidery and strong shoulder lines.",
    },
    {
      id: 3,
      name: "Floral Jacquard A-Line Dress with V-Neck",
      price: 5400,
      discount: 4590,
      image:
        "https://media.gettyimages.com/id/1953444223/photo/paris-france-a-model-walks-the-runway-during-the-christian-dior-haute-couture-spring-summer.jpg?s=612x612&w=0&k=20&c=awgoCzkUflbeGrVlz5xskJM3eXPrIU8r1tfzYcR-B48=",
      desc: "Elegant floral jacquard dress with flattering A-line silhouette and V-neckline.",
    },
    {
      id: 4,
      name: "Black Satin Column Gown with Crystal Straps",
      price: 8900,
      discount: 7565,
      image:
        "https://media.gettyimages.com/id/1952401500/photo/paris-france-carla-bruni-attends-the-dior-haute-couture-show-during-paris-fashion-week-spring.jpg?s=612x612&w=0&k=20&c=PuZVVs0vSp4GnESW2dwZ_7f0lsdjN5MLn6aBbSl5j4E=",
      desc: "Sleek black satin gown with crystal-embellished shoulder straps.",
    },
    {
      id: 5,
      name: "Linen Shirt Dress with Contrasting Belt",
      price: 3700,
      discount: 3145,
      image:
        "https://media.gettyimages.com/id/2158486275/photo/jennifer-lopez-at-christian-dior-fall-2024-couture-show-at-christian-dior-haute-couture-fall.jpg?s=612x612&w=0&k=20&c=j0hciMqWOa6hHlGRS8bLkqeMlBRrgg58v1m4VGi5H1M=",
      desc: "Crisp linen shirt dress with contrasting waist belt and relaxed fit.",
    },
    {
      id: 6,
      name: "Beaded Chiffon Gown with Cape Overlay",
      price: 12500,
      discount: 10625,
      image:
        "https://media.gettyimages.com/id/1952384386/photo/paris-france-heart-evangelista-attends-the-christian-dior-haute-couture-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=949C4FaOhMCfV9RVgnpRTed8Hsmr0eWRwJTBXY932Po=",
      desc: "Ethereal beaded chiffon gown with dramatic cape overlay detail.",
    },
    {
      id: 7,
      name: "Tweed Two-Piece Set with Gold Buttons",
      price: 5900,
      discount: 5015,
      image:
        "https://media.gettyimages.com/id/2196360607/photo/paris-france-jennie-kim-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=66wt7PYfjnJ0cqSUWobg86IBJ5Mt78BlCOAKuRnpTxY=",
      desc: "Classic tweed set with cropped jacket and matching skirt with gold accents.",
    },
    {
      id: 8,
      name: "Velvet Halter Gown with Open Back",
      price: 7800,
      discount: 6630,
      image:
        "https://media.gettyimages.com/id/2159019445/photo/paris-france-deva-cassel-attends-the-christian-dior-haute-couture-fall-winter-2024-2025-show.jpg?s=612x612&w=0&k=20&c=rSEuWghJSPKy3bmgtbCfC7zOecEtzWf-T8vVkz96xzU=",
      desc: "Dramatic velvet halter gown with elegant open back design.",
    },
  ];
  return (
    <div className="w-full min-h-screen pt-10 flex flex-col items-center bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-semibold animate-pulse px-6 py-2 rounded-lg">
        dior
      </h1>

      {/* Product Grid */}
      <div className="w-full py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {/* Product Card */}
          {product.map((items, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4"
            >
              <div className="overflow-hidden rounded-xl relative">
                <img
                  src={items.image}
                  className="w-full h-[250px] object-contain hover:scale-125 transition-transform duration-500"
                />
              </div>

              <h2 className="mt-3 text-lg font-semibold">{items.name}</h2>
              <p className="text-sm text-gray-600 flex flex-wrap text-center">
                {items.desc}
              </p>
              <div className="flex space-x-4 justify-center items-center">
                <h2 className="text-xl mt-2">${items.price}</h2>
                <p className="line-through text-gray-400 text-xl mt-2">
                  ${items.discount}
                </p>
              </div>
              <div className="flex space-x-2 justify-center items-center mt-2">
                <button className="bg-amber-300 hover:bg-amber-500 duration-150 hover:text-white px-4 py-2 rounded-2xl">
                  Buy Now
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-400 rounded-lg">
                  <IoCartOutline size={20} />
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-400 rounded-lg">
                  <IoEyeOutline size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

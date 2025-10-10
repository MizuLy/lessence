import { IoCartOutline, IoEyeOutline } from "react-icons/io5";

export default function Chanel() {
  const product = [
    {
      id: 1,
      name: "Ivory Tweed A-Line Skirt",
      price: "2,850",
      discount: "2,400",
      image:
        "https://imgs.search.brave.com/OUUIGEoVzrmJZUE7liJWUn9o2z200bI68InKDZff2dU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zdHlsZS5jb20v/dGhtYi9za3pha19x/T3VRZDNGMTZqOW1y/b092LXBCams9LzE1/MDB4MC9maWx0ZXJz/Om5vX3Vwc2NhbGUo/KTptYXhfYnl0ZXMo/MTUwMDAwKTpzdHJp/cF9pY2MoKS9nZXR0/eWltYWdlcy05Njc2/NDM5NzYtMjAwMC1h/NDI2YzdhODZjMmU0/OGE2YWUzYTVmYjlm/YTViMDE0ZC5qcGc",
      desc: "Classic knee-length tweed skirt with metallic threads and signature button details.",
    },
    {
      id: 2,
      name: "Embellished Tweed Midi Dress with Pearl Details",
      price: "8,500",
      discount: "7,200",
      image:
        "https://media.gettyimages.com/id/2196371278/photo/paris-france-a-model-walks-the-runway-during-the-chanel-haute-couture-spring-summer-2025-show.jpg?s=612x612&w=0&k=20&c=sESjKv44-L8Y0wLSd1F0Pa-0LzmpvPNMEUNZeJZDC7s=",
      desc: "Spring 2025 runway piece with hand-sewn pearls and structured silhouette.",
    },
    {
      id: 3,
      name: "Black Sequined Halter Gown with Feather Trim",
      price: "12,900",
      discount: "10,800",
      image:
        "https://media.gettyimages.com/id/2196347212/photo/paris-france-kylie-jenner-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=hZ9dAXyDh9Cz26JA3Ef3vo_rEg50Xjoidi0n8fIfIg4=",
      desc: "Glamorous sequined gown with halter neckline and feather hem detailing.",
    },
    {
      id: 4,
      name: "Pale Pink Chiffon Cape Dress with Gold Accents",
      price: "9,750",
      discount: "8,100",
      image:
        "https://media.gettyimages.com/id/1954918496/photo/paris-france-a-model-walks-the-runway-during-the-chanel-haute-couture-spring-summer-2024-show.jpg?s=612x612&w=0&k=20&c=MfkKGhsK1tZ4pigonwV_jpCSEKx63OV7b2688ZlMXP0=",
      desc: "Ethereal chiffon dress with attached cape and gold embroidered accents.",
    },
    {
      id: 5,
      name: "White Linen Suit with Contrast Trim Blazer",
      price: "6,200",
      discount: "5,300",
      image:
        "https://media.gettyimages.com/id/1954663614/photo/paris-france-a-model-walks-the-runway-during-the-chanel-haute-couture-spring-summer-2024-show.jpg?s=612x612&w=0&k=20&c=z7WjNgtMq_axTrDgFkJ1Bh5zyaCtcxn38GS8hzH-lE0=",
      desc: "Crisp white linen suit with black contrast trim and tailored fit.",
    },
    {
      id: 6,
      name: "Navy Velvet Column Gown with Crystal Brooch",
      price: "11,400",
      discount: "9,600",
      image:
        "https://media.gettyimages.com/id/2224068261/photo/paris-france-marion-cotillard-attends-the-chanel-haute-couture-fall-winter-2025-2026-show-as.jpg?s=612x612&w=0&k=20&c=4zreWeb5jxAKXgE17MaEPJNAEuvyvv29gdyeOhECgQw=",
      desc: "Sleek velvet column gown with statement crystal-encrusted brooch.",
    },
    {
      id: 7,
      name: "Pastel Tweed Mini Dress with Chain Belt",
      price: "4,950",
      discount: "4,200",
      image:
        "https://media.gettyimages.com/id/2196360607/photo/paris-france-jennie-kim-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=66wt7PYfjnJ0cqSUWobg86IBJ5Mt78BlCOAKuRnpTxY=",
      desc: "Playful pastel tweed mini with signature CC chain belt.",
    },
    {
      id: 8,
      name: "Emerald Satin Slip Dress with Jeweled Straps",
      price: "7,800",
      discount: "6,500",
      image:
        "https://media.gettyimages.com/id/2196354754/photo/paris-france-dua-lipa-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=saBKYbsdEAa7e2kcKTOJ4OInx3DLKW6Yi1TEl2T7khY=",
      desc: "Bias-cut emerald satin slip with crystal-embellished straps.",
    },
  ];
  return (
    <div className="w-full min-h-screen pt-10 flex flex-col items-center bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-semibold animate-pulse px-6 py-2 rounded-lg">
        Chanel
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

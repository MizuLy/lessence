import { IoCartOutline, IoEyeOutline } from "react-icons/io5";

export default function Chanel() {
  const product = [
    {
      name: "White Skirt",
      price: "69",
      discount: "100",
      image:
        "https://imgs.search.brave.com/OUUIGEoVzrmJZUE7liJWUn9o2z200bI68InKDZff2dU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zdHlsZS5jb20v/dGhtYi9za3pha19x/T3VRZDNGMTZqOW1y/b092LXBCams9LzE1/MDB4MC9maWx0ZXJz/Om5vX3Vwc2NhbGUo/KTptYXhfYnl0ZXMo/MTUwMDAwKTpzdHJp/cF9pY2MoKS9nZXR0/eWltYWdlcy05Njc2/NDM5NzYtMjAwMC1h/NDI2YzdhODZjMmU0/OGE2YWUzYTVmYjlm/YTViMDE0ZC5qcGc",
      desc: "A classic white Chanel skirt with timeless elegance.",
    },
    {
      name: "Runway Look 2025",
      price: "69",
      discount: "100",
      image:
        "https://media.gettyimages.com/id/2196371278/photo/paris-france-a-model-walks-the-runway-during-the-chanel-haute-couture-spring-summer-2025-show.jpg?s=612x612&w=0&k=20&c=sESjKv44-L8Y0wLSd1F0Pa-0LzmpvPNMEUNZeJZDC7s=",
      desc: "Haute couture runway piece from Chanel’s 2025 collection.",
    },
    {
      name: "Kylie Jenner at Chanel",
      price: "69",
      discount: "100",
      image:
        "https://media.gettyimages.com/id/2196347212/photo/paris-france-kylie-jenner-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=hZ9dAXyDh9Cz26JA3Ef3vo_rEg50Xjoidi0n8fIfIg4=",
      desc: "Celebrity-inspired couture look from Chanel’s Paris show.",
    },
    {
      name: "Haute Couture 2024",
      price: "69",
      discount: "100",
      image:
        "https://media.gettyimages.com/id/1954918496/photo/paris-france-a-model-walks-the-runway-during-the-chanel-haute-couture-spring-summer-2024-show.jpg?s=612x612&w=0&k=20&c=MfkKGhsK1tZ4pigonwV_jpCSEKx63OV7b2688ZlMXP0=",
      desc: "Delicate craftsmanship from Chanel’s 2024 couture line.",
    },
    {
      name: "Chanel Summer 2024",
      price: "69",
      discount: "100",
      image:
        "https://media.gettyimages.com/id/1954663614/photo/paris-france-a-model-walks-the-runway-during-the-chanel-haute-couture-spring-summer-2024-show.jpg?s=612x612&w=0&k=20&c=z7WjNgtMq_axTrDgFkJ1Bh5zyaCtcxn38GS8hzH-lE0=",
      desc: "Light, sophisticated, and designed for summer elegance.",
    },
    {
      name: "Marion Cotillard at Chanel",
      price: "69",
      discount: "100",
      image:
        "https://media.gettyimages.com/id/2224068261/photo/paris-france-marion-cotillard-attends-the-chanel-haute-couture-fall-winter-2025-2026-show-as.jpg?s=612x612&w=0&k=20&c=4zreWeb5jxAKXgE17MaEPJNAEuvyvv29gdyeOhECgQw=",
      desc: "A red-carpet look showcasing Chanel’s modern refinement.",
    },
    {
      name: "Jennie Kim at Chanel",
      price: "69",
      discount: "100",
      image:
        "https://media.gettyimages.com/id/2196360607/photo/paris-france-jennie-kim-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=66wt7PYfjnJ0cqSUWobg86IBJ5Mt78BlCOAKuRnpTxY=",
      desc: "A chic blend of youth and luxury from the Chanel show.",
    },
    {
      name: "Dua Lipa at Chanel",
      price: "69",
      discount: "100",
      image:
        "https://media.gettyimages.com/id/2196354754/photo/paris-france-dua-lipa-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=saBKYbsdEAa7e2kcKTOJ4OInx3DLKW6Yi1TEl2T7khY=",
      desc: "Bold yet graceful — a signature Chanel runway moment.",
    },
  ];
  return (
    <div className="w-full min-h-screen pt-10 flex flex-col items-center bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-semibold animate-pulse px-6 py-2 rounded-lg">
        Gucci
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

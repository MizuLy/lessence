import { IoCartOutline, IoEyeOutline } from "react-icons/io5";

export default function Chanel() {
  const product = [
    {
      id: 1,
      name: "Monogram Canvas Mini Skirt with Chain Detail",
      price: "3,200",
      discount: "2,700",
      image:
        "https://media.gettyimages.com/id/2154349807/photo/barcelona-spain-a-model-walks-the-runway-during-louis-vuitton-womenswear-cruise-2025-at-park.jpg?s=612x612&w=0&k=20&c=lLuwMaHXhi2EbBnrj4IeZFDxC6aPvukU7fZm7Vs5grs=",
      desc: "Iconic monogram canvas mini with signature chain embellishment.",
    },
    {
      id: 2,
      name: "Structured Leather Jacket with Quilted Panels",
      price: "5,800",
      discount: "4,900",
      image:
        "https://media.gettyimages.com/id/1713411235/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=EdVmQ_AilhDM-vO7_jph0CbwOwZVUNdH3ug0hXPg208=",
      desc: "Bold leather jacket featuring quilted panels and architectural structure.",
    },
    {
      id: 3,
      name: "Brocade Evening Gown with Dramatic Sleeves",
      price: "7,400",
      discount: "6,300",
      image:
        "https://media.gettyimages.com/id/1713405228/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=mo_9OmpuCAyQHikfXqVRhfEPMWl3IX3qTjH62zJm4dQ=",
      desc: "Luxurious brocade gown with voluminous statement sleeves.",
    },
    {
      id: 4,
      name: "Tailored Wool Suit with Monogram Lining",
      price: "4,600",
      discount: "3,900",
      image:
        "https://media.gettyimages.com/id/2204599864/photo/paris-france-felix-walks-the-runway-during-the-louis-vuitton-womenswear-fall-winter-2025-2026.jpg?s=612x612&w=0&k=20&c=Js5R6bQOWT89BBxDyjoMhNYWwJF2frbkzDMagx2930c=",
      desc: "Impeccably tailored wool suit with hidden monogram lining detail.",
    },
    {
      id: 5,
      name: "Printed Silk Shirt Dress with Tie Waist",
      price: "3,900",
      discount: "3,300",
      image:
        "https://media.gettyimages.com/id/1713414169/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=f1jWckeYs4CMpXRaFXTWRZQn_YlIguW2O8m58YdvlRQ=",
      desc: "Flowing silk shirt dress with vibrant print and tie waist detail.",
    },
    {
      id: 6,
      name: "Beaded Tulle Gown with Illusion Neckline",
      price: "9,200",
      discount: "7,800",
      image:
        "https://media.gettyimages.com/id/2238280180/photo/paris-france-julia-saner-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer.jpg?s=612x612&w=0&k=20&c=MX5TXu1Jwyr5r8UI0pF1gx50kDBCxDx6dyZY8XoZPRc=",
      desc: "Ethereal beaded tulle gown with delicate illusion neckline.",
    },
    {
      id: 7,
      name: "Geometric Print Dress with Cut-Out Back",
      price: "4,100",
      discount: "3,500",
      image:
        "https://media.gettyimages.com/id/2204599557/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=zqICCaVWwEDTsiKkYW0eKqyOeiP_abNeAWinC5hbPFQ=",
      desc: "Contemporary dress with bold geometric print and unexpected back cutout.",
    },
    {
      id: 8,
      name: "Double-Breasted Trench Coat with Logo Hardware",
      price: "6,500",
      discount: "5,500",
      image:
        "https://media.gettyimages.com/id/2204599530/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=w9Rd6wR2Df6fLqUt_CewkwLaBLwe6qDxJMrbfXs75ag=",
      desc: "Classic trench reimagined with signature logo hardware and modern cut.",
    },
  ];

  return (
    <div className="w-full min-h-screen pt-10 flex flex-col items-center bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-semibold animate-pulse px-6 py-2 rounded-lg">
        Louis Vuitton
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

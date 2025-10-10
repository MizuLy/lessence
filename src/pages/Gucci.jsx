import { IoCartOutline, IoEyeOutline } from "react-icons/io5";

export default function Chanel() {
  const product = [
    {
      name: "Sequined Mini Dress with Fringe Details",
      price: "3,200",
      discount: "2,700",
      image:
        "https://media.gettyimages.com/id/2236966236/photo/milan-italy-alex-consani-attends-the-gucci-spring-summer-2026-red-carpet-during-the-milan.jpg?s=612x612&w=0&k=20&c=aUiILElJqO7sb2YtUTWUTVz07jhsj1gLhpyITBUZj5c=",
      desc: "Glamorous sequined mini with playful fringe detailing and modern silhouette.",
    },
    {
      name: "Oversized Leather Blazer with Peaked Lapels",
      price: "4,100",
      discount: "3,500",
      image:
        "https://media.gettyimages.com/id/2236511309/photo/demi-moore-at-the-gucci-fashion-show-as-part-of-spring-summer-2026-milan-fashion-week-held-at.jpg?s=612x612&w=0&k=20&c=4HfaiQZCAUgNO64BhUlAGeeRssWgxWJFvbrbDXri1qI=",
      desc: "Bold oversized blazer in supple leather with sharp peaked lapels.",
    },
    {
      name: "Floor-Length Satin Gown with Bow Accent",
      price: "6,500",
      discount: "5,500",
      image:
        "https://media.gettyimages.com/id/2236960430/photo/milan-italy-gwyneth-paltrow-attends-the-gucci-spring-summer-2026-red-carpet-during-the-milan.jpg?s=612x612&w=0&k=20&c=qes7grmTNv7AZQRU8lQmtFNgCJs9RumfqGlHG8_YpoU=",
      desc: "Luxurious floor-length gown in lustrous satin with dramatic bow detail.",
    },
    {
      name: "Beaded Cocktail Dress with Sheer Overlay",
      price: "4,800",
      discount: "4,100",
      image:
        "https://media.gettyimages.com/id/2173358336/photo/milan-italy-jessica-chastain-attends-the-gucci-womens-spring-summer-2025-fashion-show-during.jpg?s=612x612&w=0&k=20&c=hQekuCNpC65F4UcWTfsOL0e71SfqLG9d984ml3O6lAo=",
      desc: "Intricate beaded dress with delicate sheer overlay and vintage glamour.",
    },
    {
      name: "Pinstripe Tailored Suit Set",
      price: "3,750",
      discount: "3,200",
      image:
        "https://media.gettyimages.com/id/2201927872/photo/milan-italy-a-model-walks-the-runway-at-the-gucci-womens-fall-winter-2025-2026-fashion-show.jpg?s=612x612&w=0&k=20&c=pue9RfjdBvc_umlcvXgh8_YzycHUXOPeOKKjdXlNDbE=",
      desc: "Sharp pinstripe suit with tailored blazer and matching wide-leg trousers.",
    },
    {
      name: "Embroidered Wool Coat with Fur Sleeves",
      price: "7,200",
      discount: "6,100",
      image:
        "https://media.gettyimages.com/id/2236951066/photo/milan-italy-akolde-meen-attends-the-gucci-spring-summer-2026-event-during-the-milan-fashion.jpg?s=612x612&w=0&k=20&c=1EYPvc0-COY2znFC6lIWZMIpryycn10T8euAUmSKeR0=",
      desc: "Statement wool coat with intricate embroidery and luxe fur sleeve detailing.",
    },
    {
      name: "Tiered Organza Midi Dress with Ruffles",
      price: "4,400",
      discount: "3,750",
      image:
        "https://media.gettyimages.com/id/1683285629/photo/model-on-the-runway-at-the-gucci-spring-2024-ready-to-wear-fashion-show-on-september-22-2023.jpg?s=612x612&w=0&k=20&c=S6h7lY044CJcyphh2t7MYr_xINd7AKxD5uowgu5NrXU=",
      desc: "Romantic tiered dress in soft organza with cascading ruffle layers.",
    },
    {
      name: "Belted Suede Trench Coat with Wide Collar",
      price: "5,900",
      discount: "5,000",
      image:
        "https://media.gettyimages.com/id/2201325913/photo/model-on-the-runway-at-the-gucci-fall-rtw-2025-fashion-show-as-part-of-milan-fashion-week.jpg?s=612x612&w=0&k=20&c=mT95TefA6TPVWR7UmSB8CdOyuRjBnFQDltHZlX4XUWQ=",
      desc: "Classic trench reimagined in soft suede with wide collar and cinched waist.",
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

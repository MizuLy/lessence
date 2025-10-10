import { IoCartOutline, IoEyeOutline } from "react-icons/io5";

export default function Chanel() {
  const product = [
    {
      id: 1,
      name: "Black Leather Mini Skirt with Pleats",
      price: "2,400",
      discount: "2,050",
      image:
        "https://media.gettyimages.com/id/2204619892/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=zED7jpjcKDWVPpcTjl-nBgW1V_yi0gluWbEL0Qk48kY=",
      desc: "Edgy pleated mini skirt in supple black leather with modern edge.",
    },
    {
      id: 2,
      name: "Sheer Lace Bodysuit with Tailored Blazer",
      price: "5,200",
      discount: "4,400",
      image:
        "https://media.gettyimages.com/id/2238191764/photo/paris-france-bella-hadid-walks-the-runway-during-the-saint-laurent-womenswear-spring-summer.jpg?s=612x612&w=0&k=20&c=HH6LVCbtKedz3YTn0GtEGgs7PjLG5giWhTV2IAkKAtw=",
      desc: "Daring sheer lace bodysuit paired with sharp tailored blazer.",
    },
    {
      id: 3,
      name: "Velvet Tuxedo Dress with Satin Lapels",
      price: "4,900",
      discount: "4,150",
      image:
        "https://media.gettyimages.com/id/2204619826/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=Dmck2tjBf9O9J5CLFSsfWzZBSaKu8n_61JkeMFHUD00=",
      desc: "Sophisticated tuxedo dress in rich velvet with glossy satin lapels.",
    },
    {
      id: 4,
      name: "Metallic Midi Skirt with Asymmetric Hem",
      price: "3,600",
      discount: "3,050",
      image:
        "https://media.gettyimages.com/id/2204619855/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=mM9VO6tEM730AEo-TGvdPRAm5zPmBhHTlUz66MRtdcE=",
      desc: "Eye-catching metallic midi with dramatic asymmetric hemline.",
    },
    {
      id: 5,
      name: "Silk Slip Dress with Cowl Neckline",
      price: "3,100",
      discount: "2,650",
      image:
        "https://media.gettyimages.com/id/2204619778/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=q3exRen14vfduefbhNNDjHszUcRNZ_vaP7SQHEhEtBk=",
      desc: "Elegant silk slip with flowing cowl neckline and minimalist design.",
    },
    {
      id: 6,
      name: "Sequined Column Gown with Train",
      price: "8,200",
      discount: "6,950",
      image:
        "https://media.gettyimages.com/id/2204620085/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=HhM43urSq652Q8KnkPQAhOp0U1kFJe-ehuhcQNEsUmE=",
      desc: "Show-stopping sequined gown with dramatic floor-length train.",
    },
    {
      id: 7,
      name: "Striped Knit Co-ord Set with Cutouts",
      price: "2,850",
      discount: "2,400",
      image:
        "https://media.gettyimages.com/id/2204620023/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=zgUrFQR4RPUj2MfC9OObxqDQEbIByJdQ8UaaXDIIJus=",
      desc: "Contemporary striped knit set with strategic cutout detailing.",
    },
    {
      id: 8,
      name: "Patent Leather Trench with Wide Belt",
      price: "6,400",
      discount: "5,450",
      image:
        "https://media.gettyimages.com/id/2174268448/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-spring-summer-2025.jpg?s=612x612&w=0&k=20&c=l1xaqmphBCHET0gS3CJ0zNIyH9yaP6DFESox479emd0=",
      desc: "Striking patent leather trench with cinched waist and bold silhouette.",
    },
  ];

  return (
    <div className="w-full min-h-screen pt-10 flex flex-col items-center bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-semibold animate-pulse px-6 py-2 rounded-lg">
        Yves Saint Laurent
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

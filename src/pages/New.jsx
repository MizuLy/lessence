import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function NewCollection() {
  const prodImg = [
    {
      id: 1,
      name: "Snowy Blue",
      price: "10",
      image:
        "https://zandokh.com/image/cache/catalog/products/2025-08/22225061598/ZD__7327-Edit-cr-450x672.jpg",
    },
    {
      id: 2,
      name: "Pink Sun",
      price: "15",
      image:
        "https://zandokh.com/image/cache/catalog/products/2025-09/12225051345/SR__1696-cr-450x672.jpg",
    },
    {
      id: 3,
      name: "Firey Hell",
      price: "8",
      image:
        "https://zandokh.com/image/cache/catalog/products/2025-10/12225051348/SR__1621-cr-450x672.jpg",
    },
    {
      id: 4,
      name: "Princess White",
      price: "7.59",
      image:
        "https://zandokh.com/image/cache/catalog/products/2025-09/22225061615/ZD__6930-Edit-cr-450x672.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-center font-josefinsans mb-8">
        NEW COLLECTION
      </h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {prodImg.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              {/* Fixed aspect ratio box */}
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold font-instrumentsans text-lg">
                  {p.name}
                </h2>
                <p className="text-green-500 font-medium mt-1">${p.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

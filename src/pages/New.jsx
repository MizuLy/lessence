import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
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
    <>
      <h1 className="text-3xl lg:text-5xl font-bold text-center font-josefinsans my-10">
        NEW COLLECTION
      </h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {prodImg.map((p) => (
          <SwiperSlide key={p.id}>
            <img src={p.image} alt="" />
            <div className="bg-white text-start">
              <h2 className="font-semibold font-instrumentsans">{p.name}</h2>
              <p className="text-green-500">${p.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

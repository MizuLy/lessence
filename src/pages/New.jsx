import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function NewCollection() {
  const prodImg = [
    {
      id: 1,
      brand: "chanel",
      name: "Ivory Tweed A-Line Skirt",
      price: "2,850",
      discount: "2,400",
      image:
        "https://imgs.search.brave.com/OUUIGEoVzrmJZUE7liJWUn9o2z200bI68InKDZff2dU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zdHlsZS5jb20v/dGhtYi9za3pha19x/T3VRZDNGMTZqOW1y/b092LXBCams9LzE1/MDB4MC9maWx0ZXJz/Om5vX3Vwc2NhbGUo/KTptYXhfYnl0ZXMo/MTUwMDAwKTpzdHJp/cF9pY2MoKS9nZXR0/eWltYWdlcy05Njc2/NDM5NzYtMjAwMC1h/NDI2YzdhODZjMmU0/OGE2YWUzYTVmYjlm/YTViMDE0ZC5qcGc",
      desc: "Classic knee-length tweed skirt with metallic threads and signature button details.",
    },
    {
      id: 14,
      brand: "dior",
      name: "Beaded Chiffon Gown with Cape Overlay",
      price: "12,500",
      discount: 10625,
      image:
        "https://media.gettyimages.com/id/1952384386/photo/paris-france-heart-evangelista-attends-the-christian-dior-haute-couture-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=949C4FaOhMCfV9RVgnpRTed8Hsmr0eWRwJTBXY932Po=",
      desc: "Ethereal beaded chiffon gown with dramatic cape overlay detail.",
    },
    {
      id: 16,
      brand: "dior",
      name: "Velvet Halter Gown with Open Back",
      price: "7,800",
      discount: 6630,
      image:
        "https://media.gettyimages.com/id/2159019445/photo/paris-france-deva-cassel-attends-the-christian-dior-haute-couture-fall-winter-2024-2025-show.jpg?s=612x612&w=0&k=20&c=rSEuWghJSPKy3bmgtbCfC7zOecEtzWf-T8vVkz96xzU=",
      desc: "Dramatic velvet halter gown with elegant open back design.",
    },
    {
      id: 26,
      brand: "lv",
      name: "Structured Leather Jacket with Quilted Panels",
      price: "5,800",
      discount: "4,900",
      image:
        "https://media.gettyimages.com/id/1713411235/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=EdVmQ_AilhDM-vO7_jph0CbwOwZVUNdH3ug0hXPg208=",
      desc: "Bold leather jacket featuring quilted panels and architectural structure.",
    },
    {
      id: 27,
      brand: "lv",
      name: "Brocade Evening Gown with Dramatic Sleeves",
      price: "7,400",
      discount: "6,300",
      image:
        "https://media.gettyimages.com/id/1713405228/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=mo_9OmpuCAyQHikfXqVRhfEPMWl3IX3qTjH62zJm4dQ=",
      desc: "Luxurious brocade gown with voluminous statement sleeves.",
    },
    {
      id: 29,
      brand: "lv",
      name: "Printed Silk Shirt Dress with Tie Waist",
      price: "3,900",
      discount: "3,300",
      image:
        "https://media.gettyimages.com/id/1713414169/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=f1jWckeYs4CMpXRaFXTWRZQn_YlIguW2O8m58YdvlRQ=",
      desc: "Flowing silk shirt dress with vibrant print and tie waist detail.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-center font-josefinsans mb-8">
        NEW COLLECTION
      </h1>

      <Swiper
        slidesPerView={5}
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
            <div className="bg-white overflow-hidden hover:scale-105 transition">
              {/* Fixed aspect ratio box */}
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold font-instrumentsans text-lg text-ellipsis overflow-hidden whitespace-nowrap">
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

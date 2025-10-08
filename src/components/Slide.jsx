import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  const slideImg = [
    "https://wallpaperbat.com/img/39542510-black-and-white-fashion-wallpaper.jpg",
    "https://img.freepik.com/free-photo/beautiful-blonde-woman-blue-light_23-2149478931.jpg",
    "https://wallpaperbat.com/img/39542521-90s-fashion-photography.jpg",
    "https://wallpaperbat.com/img/39542569-fashion-photographer-takays-new-book.jpg",
    "https://wallpaperbat.com/img/39542569-fashion-photographer-takays-new-book.jpg",
  ];
  return (
    <>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-[400px] sm:h-[500px] md:h-[600px]"
      >
        {slideImg.map((i) => (
          <SwiperSlide key={i}>
            <img
              src={i}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

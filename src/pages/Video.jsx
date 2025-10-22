import { useState } from "react";

const slides = [
  { type: "video", src: "/Video/SAINT LAURENT - AN ORDINARY DAY.mp4" },
  {
    type: "video",
    src: "/Video/The Dior Spring-Summer 2024 Campaign Video.mp4",
  },
  {
    type: "video",
    src: "/Video/Womens Fashion Campaign_ The Iconic GO-14 and Capucines Bags  LOUIS VUITTON.mp4",
  },
];

export default function VideoSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      data-aos="fade-up"
      className="w-full h-[500px] md:h-[700px] lg:h-[900px] overflow-hidden relative"
    >
      {slides[current].type === "video" ? (
        <video
          key={current}
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          onEnded={nextSlide} // Move to next slide when video ends
        >
          <source src={slides[current].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={slides[current].src}
          alt={`Slide ${current}`}
          className="w-full h-full object-cover"
          onClick={nextSlide} // Optional: click to go to next
        />
      )}
    </div>
  );
}

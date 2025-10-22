// VideoSlider.jsx
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
    <div className="w-full h-[500px] md:h-[700px] lg:h-[900px] overflow-hidden relative">
      {slides[current].type === "video" ? (
        <video
          key={current}
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          onEnded={nextSlide}
        >
          <source src={slides[current].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          key={current}
          src={slides[current].src}
          alt={`Slide ${current}`}
          className="w-full h-full object-cover"
          onClick={nextSlide}
        />
      )}
      {/* Optional navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

// MapPing.jsx
import { MapContainer, TileLayer, Marker, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

export default function MapPing() {
  const [radius, setRadius] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((r) => (r >= 30 ? 10 : r + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4 my-6 lg:mx-auto flex flex-col lg:flex-row justify-center items-start bg-white shadow-lg overflow-hidden w-full max-w-[1000px] mb-6 text-sm md:text-lg">
      {/* Map Section */}
      <div
        data-aos="fade-up"
        className="w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-[550px]"
      >
        <MapContainer
          center={[11.5564, 104.9282]}
          zoom={13}
          className="w-full h-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[11.5564, 104.9282]} />
          <CircleMarker
            center={[11.5564, 104.9282]}
            radius={radius}
            pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.3 }}
          />
        </MapContainer>
      </div>

      {/* Text Info Section */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 py-4 text-base md:text-lg space-y-4">
        <h1
          data-aos="fade-left"
          className="font-josefinsans text-3xl md:text-5xl font-bold"
        >
          Our Location
        </h1>
        <span data-aos="fade-left" className="font-bold">
          Phnom Penh, Cambodia
        </span>
        <p data-aos="fade-left">
          Phnom Penh is the capital and largest city of Cambodia, with a
          population of around 2.2 million in 2023. The city is located at the
          confluence of the Mekong, Bassac, and Tonle Sap rivers and serves as
          Cambodia’s political, economic, and cultural center.
        </p>
        <span data-aos="fade-left" className="font-bold">
          Central Phnom Penh, Cambodia
        </span>
        <div data-aos="fade-left">
          <span className="font-bold">Coordinates: </span>
          <span className="font-instrumentsans">11.5564° N, 104.9282° E</span>
        </div>
        <div data-aos="fade-left">
          <span className="font-bold">Phone: </span>
          <span className="font-instrumentsans">+855 126 346 629</span>
        </div>
      </div>
    </div>
  );
}

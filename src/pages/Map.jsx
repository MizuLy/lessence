import { MapContainer, TileLayer, Marker, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function MapPing() {
  const [radius, setRadius] = useState(10);
  const [ctrlPressed, setCtrlPressed] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const mapRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((r) => (r >= 30 ? 10 : r + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey) {
        setCtrlPressed(true);
        setShowOverlay(false);
        mapRef.current?.leafletElement.scrollWheelZoom.enable();
      }
    };
    const handleKeyUp = (e) => {
      if (!e.ctrlKey) {
        setCtrlPressed(false);
        setShowOverlay(true);
        mapRef.current?.leafletElement.scrollWheelZoom.disable();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="mx-4 my-6 lg:mx-auto flex flex-col lg:flex-row justify-center items-start bg-white shadow-lg overflow-hidden w-full max-w-[1000px] mb-6 text-sm md:text-lg">
      {/* Map Section */}
      <div data-aos="fade-up" className="relative w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-[550px]">
        {/* Gray Overlay */}
        {showOverlay && (
          <div className="absolute inset-0 bg-gray-200 bg-opacity-70 z-[50] flex items-center justify-center text-gray-700 font-semibold text-center text-sm md:text-base select-none">
            Hold Ctrl + Scroll to zoom the map
          </div>
        )}

        <MapContainer
          center={[11.5564, 104.9282]}
          zoom={13}
          className="w-full h-full z-[40]"
          scrollWheelZoom={false} // disabled by default
          whenCreated={(mapInstance) => (mapRef.current = { leafletElement: mapInstance })}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[11.5564, 104.9282]} />
          <CircleMarker
            center={[11.5564, 104.9282]}
            radius={radius}
            pathOptions={{
              color: "green",
              fillColor: "green",
              fillOpacity: 0.3,
            }}
          />
        </MapContainer>
      </div>

      {/* Text Info Section */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 py-4 text-base md:text-lg space-y-4">
        <h1 data-aos="fade-left" className="font-josefinsans text-3xl md:text-5xl font-bold">
          Our Location
        </h1>
        <span data-aos="fade-left" className="font-bold">
          Phnom Penh, Cambodia
        </span>
        <p data-aos="fade-left">
          Phnom Penh is the capital and largest city of Cambodia, with a population of around 2.2 million in 2023. The city is located at the confluence of the Mekong, Bassac, and Tonle Sap rivers and serves as Cambodia’s political, economic, and cultural center.
        </p>
        <span data-aos="fade-left" className="font-bold">
          Central Phnom Penh, Cambodia
        </span>
        <div data-aos="fade-left">
          <span className="font-bold">Google Map Link: </span>
          <Link to="https://maps.app.goo.gl/J6DgZ4msqMwnUyG79">
            <span className="font-instrumentsans hover:underline">
              https://maps.app.goo.gl/J6DgZ4msqMwnUyG79
            </span>
          </Link>
        </div>
        <div data-aos="fade-left">
          <span className="font-bold">Phone: </span>
          <span className="font-instrumentsans">+855 126 345 629</span>
        </div>
      </div>
    </div>
  );
}

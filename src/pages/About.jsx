export default function About() {
  const gridImg = [
    "/Random/vogue.webp",
    "/Random/officer.webp",
    "/Random/lotofmodel.webp",
    "/Random/goldenRoom.webp",
  ];
  return (
    <div className="text-center py-10 px-16 lg:px-20">
      <h1
        data-aos="fade-right"
        className="text-3xl lg:text-5xl font-bold font-josefinsans mb-6"
      >
        About Us
      </h1>
      <p data-aos="fade-up" className="text-lg lg:text-xl font-medium">
        Welcome to <b>L’Essence</b>, where fashion and beauty converge at the
        highest level. We are redefining the shopping experience by bringing the
        latest trends in men’s and women’s clothing alongside luxury beauty
        products under one roof.
        <br />
        <br /> At <b>L’Essence</b>, we don’t just sell clothes and cosmetics —
        we set the standard. Every piece in our collection is carefully curated
        to reflect style, quality, and sophistication. From cutting-edge
        streetwear to timeless classics, and from premium skincare to must-have
        cosmetics, we provide everything you need to express your individuality
        with confidence.
        <br />
        <br /> Our mission is simple: to be the ultimate destination for
        fashion-forward individuals who demand excellence, style, and
        innovation. Join the <b>L’Essence</b> experience and discover a world
        where trendsetting meets timeless elegance, and shopping becomes an
        inspiring journey, not just a chore.
      </p>
      <br />
      <div
        data-aos="zoom-in"
        className="w-full my-8 flex justify-center items-center"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gridImg.map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 max-w-[400px]"
            >
              <img
                src={i}
                className="w-full h-72 md:h-80 lg:h-[22rem] object-cover max-w-[400px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

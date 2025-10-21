export default function About() {
  const gridImg = [
    "https://media.gettyimages.com/photos/couple-shopping-at-a-clothing-store-and-using-facemasks-during-the-picture-id1271626545?k=20&m=1271626545&s=612x612&w=0&h=XHXXGdD6za-dRt2thBEwNozY0GWq5P0HgBM7ui0xhGk=",
    "https://media.istockphoto.com/id/1835591115/photo/interior-of-modern-clothes-shop.jpg?s=612x612&w=0&k=20&c=Lwlc0ipxgzCOVyHmuY-_rx3_KFSWCJE6mfjwswf3JZE=",
    "https://media.istockphoto.com/id/882060132/photo/interior-of-modern-fashion-shop.jpg?s=612x612&w=0&k=20&c=GKrywt8nfPN3vIb4FPcbdS3Jvnzis1-3xkt6cbA7xgc=",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

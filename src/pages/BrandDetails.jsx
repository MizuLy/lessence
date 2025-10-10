import { useLocation, Link } from "react-router-dom";

export default function BrandDetails() {
  const { state } = useLocation();
  const product = state?.product;
  const brand = state?.brand;

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="text-center pt-20">
      <Link
        to={`/brand/${brand}`}
        className="text-blue-500 underline mb-5 block"
      >
        Back to {brand.charAt(0).toUpperCase() + brand.slice(1)}
      </Link>

      <img
        src={product.image}
        alt={product.name}
        className="mx-auto mb-5 w-[300px] h-[300px] object-contain"
      />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="mb-2">{product.desc}</p>
      <h3 className="text-xl">
        ${product.price} {product.discount && `(Discount: ${product.discount})`}
      </h3>
    </div>
  );
}

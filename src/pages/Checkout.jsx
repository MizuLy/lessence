import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCart(); // or get single order if using "Buy Now"
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", form, cart);
    // Here you can send the info to your backend or payment gateway
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="outline-none px-4 py-2 shadow-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="outline-none px-4 py-2 shadow-md"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
          className="outline-none px-4 py-2 shadow-md"
        />
        <button className="bg-black text-white px-4 py-2 rounded">
          Confirm Order
        </button>
        <Link to={"/cart"} className="text-center hover:underline">
          Back to Cart
        </Link>
      </form>

      <div className="mt-6">
        <h2 className="font-bold">Order Summary:</h2>
        {cart.map((item) => (
          <div key={item.id}>
            {item.name} ({item.size}) x {item.quantity} = $
            {Number(item.discount) * item.quantity}
          </div>
        ))}
      </div>
    </div>
  );
}

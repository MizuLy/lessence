import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Checkout() {
  const { cart, addOrder } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    addOrder(form); // Save the order in context
    setShowPopup(true);

    setTimeout(() => setShowPopup(false), 1000);
    setForm({ name: "", email: "", address: "" });
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.discount * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-xl mx-auto min-h-screen flex flex-col gap-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-center">Checkout</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="outline-none px-4 py-3 rounded-md border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="outline-none px-4 py-3 rounded-md border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
          className="outline-none px-4 py-3 rounded-md border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition"
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold">
          Confirm Order
        </button>

        <Link
          to="/order"
          className="bg-gray-800 text-white text-center px-6 py-3 rounded-lg hover:bg-gray-500 transition font-semibold"
        >
          View Orders
        </Link>

        <Link
          to="/cart"
          className="text-center text-gray-600 hover:underline mt-2"
        >
          Back to Cart
        </Link>
      </form>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-xl shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex justify-between mb-2 text-gray-700"
            >
              <span>
                {item.name} ({item.size}) x {item.quantity}
              </span>
              <span>${(item.discount * item.quantity).toLocaleString()}</span>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${totalPrice.toLocaleString()}</span>
          </div>
        )}
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white text-center p-8 rounded-2xl shadow-xl animate-fade-in max-w-sm mx-4">
            <CheckCircle
              className="mx-auto mb-3 text-green-500"
              size={50}
              strokeWidth={1.5}
            />
            <h2 className="text-2xl font-semibold text-green-600 mb-1">
              Order Successful!
            </h2>
            <p className="text-gray-600">
              Thank you for your purchase. You can view it in your orders.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

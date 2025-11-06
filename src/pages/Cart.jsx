import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.discount * item.quantity,
    0
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center mt-10">
          <p className="mb-4 text-gray-600 text-lg">Your cart is empty.</p>
          <HashLink
            to="/#brand"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </HashLink>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border p-4 rounded-lg shadow-md bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded"
              />

              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-600 text-sm">Size: {item.size}</p>
                <p className="text-gray-600 text-sm">
                  Price: ${item.discount.toLocaleString()}
                </p>
                <p className="text-gray-800 font-medium">
                  Total: ${(item.discount * item.quantity).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button
                  onClick={() => updateQuantity(item.id, item.size, -1)}
                  className="w-8 h-8 rounded shadow-md flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
                >
                  -
                </button>
                <span className="min-w-[24px] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.size, 1)}
                  className="w-8 h-8 rounded shadow-md flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id, item.size)}
                className="text-red-500 hover:text-red-600 transition mt-2 sm:mt-0"
              >
                <Trash2 size={24} />
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="border-t pt-4 flex flex-col sm:flex-row justify-between items-center text-lg sm:text-xl font-semibold">
            <span>Total:</span>
            <span>${totalPrice.toLocaleString()}</span>
          </div>

          {/* Checkout Button */}
          <Link
            to="/checkout"
            className="text-center mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="max-w-[1500px] w-full">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between mb-3 items-center border p-3 rounded"
            >
              <img src={item.image} alt="" className="w-[100px]" />
              <div className="flex flex-col p-5 flex-1">
                <span className="font-semibold">{item.name}</span>
                <span>Size: {item.size}</span>
                <span>Price: ${item.discount.toLocaleString()}</span>
                <span>Quantity: {item.quantity}</span>
                <span>
                  Total: ${(item.discount * item.quantity).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 shadow-md rounded"
                  onClick={() => updateQuantity(item.id, item.size, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="w-8 h-8 shadow-md text-black rounded"
                  onClick={() => updateQuantity(item.id, item.size, 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id, item.size)}
                className="w-10 h-10 p-2"
              >
                <Trash2 size={25} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to={"/checkout"} className="px-6 py-2 bg-black text-white">
        Check Out
      </Link>
    </div>
  );
}

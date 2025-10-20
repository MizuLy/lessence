import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const { orders = [] } = useCart(); // fallback to empty array

  const navigate = useNavigate();

  const Home = () => {
    navigate("/");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 mb-4 bg-white shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">
                Order #{order.id.toString().slice(-5)}
              </h2>
              <span className="text-gray-500 text-sm">{order.date}</span>
            </div>

            <div className="text-sm text-gray-700 mb-2">
              <strong>Name:</strong> {order.customer.name}
              <br />
              <strong>Email:</strong> {order.customer.email}
              <br />
              <strong>Address:</strong> {order.customer.address}
            </div>

            <div className="mt-2 border-t pt-2">
              {order.items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="text-gray-800 flex justify-between"
                >
                  <span>
                    {item.name} ({item.size}) × {item.quantity}
                  </span>
                  <span>
                    ${(item.discount * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-2 border-t pt-2 flex justify-between font-semibold">
              <span>Total:</span>
              <span>
                $
                {order.items
                  .reduce((sum, i) => sum + i.discount * i.quantity, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
        ))
      )}
      <button
        onClick={Home}
        className="bg-black text-white px-4 py-2 w-full rounded-md mt-4"
      >
        Back Home
      </button>
    </div>
  );
}

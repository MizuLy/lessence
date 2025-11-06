import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

export default function Orders() {
  const { orders = [], removeOrder } = useCart(); // fallback to empty array

  const navigate = useNavigate();

  const [paymentStates, setPaymentStates] = useState(() => {
    const saved = localStorage.getItem('paymentStates');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('paymentStates', JSON.stringify(paymentStates));
  }, [paymentStates]);

  const Home = () => {
    navigate("/");
  };

  const handlePay = async (order) => {
    const total = order.items.reduce((sum, i) => sum + i.discount * i.quantity, 0);
    try {
      const response = await fetch('http://127.0.0.1:5050/api/generate-qr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total, currency: 'USD', description: `Order #${order.id}` })
      });
      const data = await response.json();
      if (data.success) {
        setPaymentStates(prev => ({
          ...prev,
          [order.id]: {
            status: 'processing',
            qrImage: data.qr_image,
            md5: data.md5
          }
        }));
        // start polling
        const interval = setInterval(() => checkPayment(order.id, data.md5), 5000);
        // set timeout for 5 min
        const timeout = setTimeout(() => {
          clearInterval(interval);
          setPaymentStates(prev => ({
            ...prev,
            [order.id]: { status: 'cancelled' }
          }));
        }, 300000);
        setPaymentStates(prev => ({
          ...prev,
          [order.id]: {
            ...prev[order.id],
            interval,
            timeout
          }
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkPayment = async (orderId, md5) => {
    try {
      const response = await fetch(`http://127.0.0.1:5050/api/check-payment?md5=${md5}`);
      const data = await response.json();
      if (data.status === 'PAID') {
        setPaymentStates(prev => {
          const state = prev[orderId];
          clearInterval(state.interval);
          clearTimeout(state.timeout);
          return {
            ...prev,
            [orderId]: { status: 'paid' }
          };
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = (orderId) => {
    setPaymentStates(prev => {
      const state = prev[orderId];
      if (state.interval) clearInterval(state.interval);
      if (state.timeout) clearTimeout(state.timeout);
      return {
        ...prev,
        [orderId]: { status: 'cancelled' }
      };
    });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Receipts</h1>

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
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">{order.date}</span>
                {(!paymentStates[order.id] || paymentStates[order.id].status !== 'paid') && (
                  <button
                    onClick={() => removeOrder(order.id)}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
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

            <div className="mt-4">
              {paymentStates[order.id] ? (
                paymentStates[order.id].status === 'processing' ? (
                  <div className="text-center">
                    <img src={paymentStates[order.id].qrImage} alt="QR Code" className="mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Scan to pay</p>
                    <button
                      onClick={() => handleCancel(order.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                      Cancel
                    </button>
                    <p className="text-xs text-gray-500">Payment expires in 5 minutes</p>
                  </div>
                ) : paymentStates[order.id].status === 'paid' ? (
                  <div className="text-center">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-not-allowed">
                      Paid
                    </button>
                    <p className="text-sm text-gray-600 mt-2">Waiting for delivery</p>
                  </div>
                ) : (
                  <button
                    onClick={() => handlePay(order)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                  >
                    Pay
                  </button>
                )
              ) : (
                <button
                  onClick={() => handlePay(order)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                >
                  Pay
                </button>
              )}
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

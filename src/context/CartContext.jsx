import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product, size) => {
    const price = Number(product.discount.toString().replace(/,/g, ""));
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, size, quantity: 1, discount: price }];
      }
    });
  };

  const updateQuantity = (id, size, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const addOrder = (customer) => {
    if (cart.length === 0) return;
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      customer,
      items: cart,
    };
    setOrders((prev) => [...prev, newOrder]);
    setCart([]); // Clear cart after order
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        updateQuantity,
        removeFromCart,
        addOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

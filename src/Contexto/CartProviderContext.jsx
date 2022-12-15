import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProviderContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, cantidad) => {
    setCart([...cart, { ...item, cantidad }]);
  };
  return (
    <CartContext.Provider value={{ cart, addItem }}>{children}</CartContext.Provider>
  );
};

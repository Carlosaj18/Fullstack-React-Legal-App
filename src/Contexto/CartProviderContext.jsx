import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProviderContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getQuantityInCart = () => {
    return cart.length;
  };

  function totalItemsInCart() {
    let totalItems = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.cantidad,
      0
    );
    return totalItems;
  }

  const addToCart = (item, cantidad) => {
    let indexItemInCart = cart.findIndex(
      (itemInContext) => itemInContext.id === item.id
    );
    let isItemInCart = indexItemInCart !== -1;
    if (isItemInCart) {
      const newCart = [...cart];
      newCart[indexItemInCart].cantidad += cantidad;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, cantidad }]);
      /* 
      const newCart = [...cart];
      const newItem = item;
      newItem.count = count
      */
    }
  };

  const totalPrinceInCart = () => {
    let subtotal = cart.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.cantidad * parseFloat(currentValue.price)),
      0
    );
    console.log("Subtotal", subtotal)
    return subtotal;
  };

  ///const updatedItem = () => {}; // filter

  /// const removeItem = () => {}; // filter

  ///const clear = () => {}; // []

  return (
    <CartContext.Provider value={{ cart, addToCart, getQuantityInCart, totalItemsInCart, totalPrinceInCart }}>
      {children}
    </CartContext.Provider>
  );
};

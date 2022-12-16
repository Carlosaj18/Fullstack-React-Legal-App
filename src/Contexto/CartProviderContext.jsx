import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProviderContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getQuantityInCart = () => {
    return cart.length;
  };

  const getFormattedPrice = (price) => {
    price = parseFloat(price).toFixed(3);
    return price;
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

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const increaseQuantity = (item) => {
    if (isInCart(item.id)) {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
      });
      setCart(cartUpdated);
    }
  };

  const decreaseQuantity = (item) => {
    if (isInCart(item.id)) {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...item, cantidad: item.cantidad - 1 };
        }
      });
      setCart(cartUpdated);
    }
  };

  const totalPrinceInCart = () => {
    let subtotal = cart.reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue.cantidad * getFormattedPrice(currentValue.price),
      0
    );
    return subtotal;
  };

  ///const updatedItem = () => {}; // filter

  /// const removeItem = () => {}; // filter

  ///const clear = () => {}; // []

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getQuantityInCart,
        totalItemsInCart,
        totalPrinceInCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

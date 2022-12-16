import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProviderContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getFormattedPrice = (price) => {
    price = parseFloat(price).toFixed(3);
    return price;
  };

  function totalItemsInCart() {
    let totalItems = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.cantidad;
    }, 0);
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

  const decreaseQuantity2 = (item) => {
    if (isInCart(item.id)) {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...item, cantidad: item.cantidad - 1 };
        }
      });
      setCart(cartUpdated);
    }
  };

  const decreaseQuantity = (item, quantity) => {
    const newCart = cart.map((purchase) => {
      if (purchase.id === item.id) {
        return { ...purchase, cantidad: purchase.cantidad - quantity };
      } else {
        return purchase;
      }
    });
    setCart(newCart);
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

  const removeItem = (id) => {
    let updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalItemsInCart,
        totalPrinceInCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

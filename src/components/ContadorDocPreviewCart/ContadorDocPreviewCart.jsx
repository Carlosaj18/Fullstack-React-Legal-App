import React, { useContext, useEffect, useState } from "react";
import "./ContadorDocPreviewCart.css";
import { CartContext } from "../../Contexto/CartProviderContext";

function ContadorDocPreviewCart({ cantidad, item }) {
  const [cartCount, setCartCount] = useState(cantidad);
  const { cart, addToCart, decreaseQuantity, removeItem } =
    useContext(CartContext);

  useEffect(() => {
    setCartCount(item.cantidad);
  }, [cart, cantidad]);

  const decrease = () => {
    if (cartCount > 1) {
      decreaseQuantity(item, 1);
      setCartCount((count) => (count = cantidad));
    } else if (cartCount === 1) {
      removeItem(item.id);
    }
  };
  const increase = () => {
    if (cartCount < item.stock) {
      addToCart(item, 1);
      setCartCount((count) => (count = cantidad));
    }
  };

  return (
    <div className="contador"> 
      <button onClick={decrease} className="left">
        -
      </button>
      <button className="center">{item.cantidad}</button>
      <button onClick={increase} className="right">
        +
      </button>
    </div>
  );
}

export default ContadorDocPreviewCart;

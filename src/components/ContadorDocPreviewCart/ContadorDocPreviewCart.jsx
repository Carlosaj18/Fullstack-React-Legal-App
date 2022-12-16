import React, { useContext } from "react";
import "./ContadorDocPreviewCart.css";
import { CartContext } from "../../Contexto/CartProviderContext";

function ContadorDocPreviewCart({ cantidad, item }) {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  function handleClickRest() {
    if (item.cantidad > 1) {
      decreaseQuantity(item);
    }
  }
  function handleClickSum() {
    increaseQuantity(item);
  }

  return (
    <div className="contador">
      <button onClick={() => handleClickRest()} className="left">
        -
      </button>
      <button className="center">{item.cantidad}</button>
      <button onClick={() => handleClickSum()} className="right">
        +
      </button>
    </div>
  );
}

export default ContadorDocPreviewCart;

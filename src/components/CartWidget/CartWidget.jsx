import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
import { CartContext } from "../../Contexto/CartProviderContext";

function CartWidget({ setPreviewCartWidget, previewCartWidget }) {
  const { totalItemsInCart } = useContext(CartContext);
  let cantidadCarrito = totalItemsInCart();
  function onClickButtonPreviewCart() {
    return setPreviewCartWidget(!previewCartWidget);
  }

  return (
    <>
      <i>
        <FontAwesomeIcon
          icon={faCartShopping}
          onClick={() => onClickButtonPreviewCart()}
        />
      </i>
      <span>{cantidadCarrito}</span>
    </>
  );
}

export default CartWidget;

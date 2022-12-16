import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
import { CartContext } from "../../Contexto/CartProviderContext";

function CartWidget({ setPreviewCartWidget, previewCartWidget }) {
  const { totalItemsInCart } = useContext(CartContext);
  let cantidadCarrito = totalItemsInCart();
  console.log(cantidadCarrito);
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
      <span>{cantidadCarrito > 0 ? cantidadCarrito : null}</span>
    </>
  );
}

export default CartWidget;

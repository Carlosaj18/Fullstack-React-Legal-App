import React, { useContext } from "react";
import "./PreviewCart.css";
import docImage from "../../images/document.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ContadorDocPreviewCart from "../ContadorDocPreviewCart/ContadorDocPreviewCart";
import contexto from "../App";

function PreviewCart({ previewCartWidget, setPreviewCartWidget }) {
  const miContext = useContext(contexto);
  console.log(miContext);
  function handleStateChangePreviewCart() {
    if (previewCartWidget) {
      setPreviewCartWidget(!previewCartWidget);
    }
  }

  return (
    <>
      <div
        id={previewCartWidget ? "previewCarrito" : "previewCarrito-not-visible"}
        className="sidebar-carrito"
      >
        <div className="title">
          <div className="closebtn">
            <i>
              <FontAwesomeIcon
                icon={faTimesCircle}
                onClick={() => handleStateChangePreviewCart()}
              />
            </i>
          </div>
          <h4>Mi Carrito</h4>
        </div>
        <div className="details">
          <div className="detail-imagen">
            <img src={docImage} alt="Imagen" />
          </div>
          <div className="detail-info">
            <p>
              <strong>Nombre del paquete</strong>
            </p>
            <p className="precio">$Precio</p>
            <ContadorDocPreviewCart />
          </div>
          <div className="closebtn">
            <i>
              <FontAwesomeIcon icon={faTimesCircle} />
            </i>
          </div>
        </div>
        <div className="container-footer">
          <div className="details-subtotal">
            <div>Subtotal</div>
            <div>$$$</div>
          </div>
          <div className="container-button-ver-carrito">
            <button className="ver-carrito">Ver Carrito </button>
          </div>
        </div>
      </div>
      <div id="emptycart"></div>
    </>
  );
}

export default PreviewCart;

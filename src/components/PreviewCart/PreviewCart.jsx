import React, { useContext } from "react";
import "./PreviewCart.css";
import docImage from "../../images/document.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ContadorDocPreviewCart from "../ContadorDocPreviewCart/ContadorDocPreviewCart";
import { CartContext } from "../../Contexto/CartProviderContext";

function PreviewCart({ previewCartWidget, setPreviewCartWidget }) {
  const { cart, totalPrinceInCart } = useContext(CartContext);

  function handleStateChangePreviewCart() {
    if (previewCartWidget) {
      setPreviewCartWidget(!previewCartWidget);
    }
  }

  const getFormattedPrice = (price) => {
    price = parseFloat(price).toFixed(3);
    return price;
  };

  let itemCart = cart.map((item) => {
    return (
      <div className="details">
        <div className="detail-imagen">
          <img src={docImage} alt="Imagen" />
        </div>
        <div className="detail-info">
          <p>
            <strong>{item.title}</strong>
          </p>
          <p className="precio">${getFormattedPrice(item.price)}</p>
          <ContadorDocPreviewCart cantidad={item.cantidad} item={item}/>
        </div>
        <div className="closebtn">
          <i>
            <FontAwesomeIcon icon={faTimesCircle} />
          </i>
        </div>
      </div>
    );
  });

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
        {itemCart}
        <div className="container-footer">
          <div className="details-subtotal">
            {totalPrinceInCart() ? (
              <>
                <div>Subtotal</div>{" "}
                <div>${getFormattedPrice(totalPrinceInCart())}</div>
              </>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "182px",
                  position: "absolute",
                }}
              >
                El carrito está vacío
              </div>
            )}
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

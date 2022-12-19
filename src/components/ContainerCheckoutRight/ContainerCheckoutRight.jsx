import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Contexto/CartProviderContext";
import { Link } from "react-router-dom";
import docImage from "../../images/document.jpg";
import './ContainerCheckoutRight.css'

function ContainerCheckoutRight() {
  const { cart, totalItemsInCart, totalPrinceInCart, getIVA, finalPriceCart } =
    useContext(CartContext);
  const [isPromo, setIsPromo] = useState(false);

  function handlePromocion() {
    setIsPromo(!isPromo);
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
          <div className="info-header-checkout">
            <strong>{item.title}</strong>
            <p>${getFormattedPrice(item.price)}</p>
          </div>
          <p className="cantidad">Cant.: {item.cantidad}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="container-checkout-right">
      <h1 className="title-checkout-pago">
        Paso 2 - Revisa y realiza tu pedido
      </h1>
      <div className="container-resumen">
        <div className="resumen-title">
          <h2>Resumen del pedido ({totalItemsInCart()}) </h2>
          <Link to="/shoping-cart">Editar Carrito</Link>
        </div>
        <div className="item-container-checkout">{itemCart}</div>
        <div className="promo-container-checkout">
          <div className="codigo-promocional-checkout">
            <div className="codigo-label-checkout">
              <i>
                <FontAwesomeIcon icon={faTags} />
              </i>
              <button onClick={handlePromocion}>
                Ingresar código promocional
              </button>
            </div>
            <form
              className={
                isPromo ? "form-cart-checkout" : "promo-no-visible-checkout"
              }
            >
              <div className="form-cart-checkout">
                <input
                  type="text"
                  id="promo"
                  name="promo"
                  placeholder="Ingresa el Codigo de Promocion"
                />
                <button>Aplicar</button>
              </div>
            </form>
          </div>
        </div>
        <div className="subtotal-checkout-cart">
          <div className="subtotal-checkout-left">
            <strong>Subtotal</strong>
            <strong>${getFormattedPrice(totalPrinceInCart())}</strong>
          </div>
          <div className="subtotal-checkout-right">
            <strong>IVA - 19%</strong>
            <strong>
              {cart.length > 0 ? `$${getFormattedPrice(getIVA())}` : `$0`}
            </strong>
          </div>
        </div>
        <div className="total-checkout-cart">
          <div className="subtotal-checkout-left">
            <strong>Total</strong>
            <strong>${getFormattedPrice(finalPriceCart())}</strong>
          </div>
        </div>
      </div>
      <div className="pago-seguro">
        <FontAwesomeIcon icon={faLock} />
        <p>Pago seguro</p>
      </div>
    </div>
  );
}

export default ContainerCheckoutRight;

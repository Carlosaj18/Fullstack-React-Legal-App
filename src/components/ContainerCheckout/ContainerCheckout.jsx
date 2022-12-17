import React, { useContext, useState } from "react";
import "./ContainerCheckout.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import docImage from "../../images/document.jpg";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Contexto/CartProviderContext";

function ContainerCheckout() {
  const [isPromo, setIsPromo] = useState(false);
  const { cart, totalItemsInCart, totalPrinceInCart, getIVA, finalPriceCart } =
    useContext(CartContext);

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
    <>
      <div className="container-checkout">
        <div className="container-checkout-left">
          <div className="left-login">
            <div className="login-description">
              ¿Ya tienes una cuenta?{" "}
              <p>
                <Link> Inicia sesión </Link>{" "}
              </p>{" "}
              para finalizar la compra más rápido.
            </div>
          </div>
          <h1 className="title-checkout-pago">Paso 1 - Pago</h1>
          <div className="mercado-pago-info">
            <div className="mercado-text">Pagar con MercadoPago</div>
            <div className="mercado-text">
              Una vez que hagas clic en proceder, serás redireccionado a
              MercadoPago
            </div>
            <div className="icon-mercado-pago">
              <i>
                <FontAwesomeIcon icon={faCreditCard} />
              </i>
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
              <i>
                <FontAwesomeIcon icon={faCreditCard} />
              </i>
            </div>
          </div>
          <div className="container-form">
            <h2>Dirección de facturación</h2>
            <form className="form-info-pago" action="/">
              <label for="fname">* Email para confirmar el pedido </label>
              <input type="text" id="fname" name="fname" />
              <label for="lname">* Nombre</label>
              <input type="text" id="fname" name="fname" />
              <label for="lname">* Apellido</label>
              <input type="text" id="lname" name="lname" />
              <label for="address">* Dirección</label>
              <input type="text" id="address" name="address" />
              <label for="ciudad">* Ciudad</label>
              <input type="text" id="ciudad" name="ciudad" />
              <div className="form-container-additional">
                <div className="form-left">
                  <label for="pais">* País</label>
                  <input type="text" id="pais" name="pais" />
                  <label for="postal">Código postal</label>
                  <input type="text" id="postal" name="postal" />
                </div>
                <div className="form-right">
                  <label for="region">* Región</label>
                  <input type="text" id="region" name="region" />
                  <label for="telefono">*Teléfono</label>
                  <input type="text" id="telefono" name="telefono" />
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className="submit-mercado-pago"
              />
            </form>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default ContainerCheckout;

import React, { useContext, useState } from "react";
import "./ContainerShoppingCart.css";
import docImage from "../../images/document.jpg";
import ContadorDocPreviewCart from "../ContadorDocPreviewCart/ContadorDocPreviewCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Contexto/CartProviderContext";
import { Link } from "react-router-dom";

function ContainerShoppingCart() {
  const { cart, totalPrinceInCart, totalPriceItem, removeItem } =
    useContext(CartContext);
  const [isPromo, setIsPromo] = useState(false);
  const [isNota, setNota] = useState(false);

  function handlePromocion() {
    setIsPromo(!isPromo);
  }

  function handleNota() {
    setNota(!isNota);
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
            <strong className="title">{item.title}</strong>
          </p>
          <p className="precio">$ {getFormattedPrice(item.price)} </p>
        </div>
        <div className="detail-info-document">
          <div className="detail-info-contador">
            <ContadorDocPreviewCart
              style={{ margin: "0em auto !important" }}
              cantidad={item.cantidad}
              item={item}
            />
          </div>
          <span className="price-item">
            $ {getFormattedPrice(totalPriceItem(item))}
          </span>
          <button onClick={() => removeItem(item.id)} className="closebtn">
            <i>
              <FontAwesomeIcon icon={faTimesCircle} />
            </i>
          </button>
        </div>
      </div>
    );
  });

  console.log(itemCart);

  return (
    <>
      <div className="container-items-cart">
        <div className="left-items-cart">
          <div className="border">
            <h1>Mi Carrito</h1>
          </div>
          {itemCart.length > 0 ? (
            itemCart
          ) : (
            <h1 style={{ textAlign: "center" }}>
              {" "}
              No hay elementos en el carrito
            </h1>
          )}
        </div>
        <div className="right-items-cart">
          <div className="border">
            <h1>Resumen del pedido</h1>
          </div>
          <div className="container-info-right">
            <div classNmae="container-subtotal-cart">
              <div className="cart-subtotal">
                <div>Subtotal</div>
                <div>${getFormattedPrice(totalPrinceInCart())}</div>
              </div>
            </div>
            <Link to="/checkout"><button className="finalizar-compra">Finalizar la Compra </button></Link>
            <div className="pago-seguro">
              <FontAwesomeIcon icon={faLock} />
              <p>Pago seguro</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-additional-info">
        <div className="codigo-promocional">
          <div className="codigo-label">
            <i>
              <FontAwesomeIcon icon={faTags} />
            </i>
            <button onClick={handlePromocion}>
              Ingresar código promocional
            </button>
          </div>
          <form
            className={isPromo ? "form-cart" : "promo-no-visible"}
          >
            <div className="form-cart">
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
        <div className="codigo-promocional">
          <div className="codigo-label">
            <i>
              <FontAwesomeIcon icon={faComment} />
            </i>
            <button onClick={handleNota}>Agrega una nota</button>
          </div>
          <form
            className={isNota ? "form-cart-text" : "form-cart-textarea-no-visible"}
          >
            <div>
              <textarea
                type="text"
                id="promo"
                name="promo"
                placeholder="¿Instrucciones? ¿Requisitos especiales? Agrégalos aquí."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContainerShoppingCart;

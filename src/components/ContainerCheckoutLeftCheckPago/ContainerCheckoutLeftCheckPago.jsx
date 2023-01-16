import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./ContainerCheckoutLeftCheckPago.css";
import logoMercado from "../../images/mercadoPago.svg";
import ModalTerminosCondiciones from "../ModalTerminosCondiciones/ModalTerminoCondicionales";
import { CartContext } from "../../Contexto/CartProviderContext";
import { createBuyOrder_WithStockControl } from "../services/fireBase";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function ContainerCheckoutLeftCheckPago({ nombre, email, address, telefono }) {
  const [terms, setTerms] = useState(false);
  const { cart, finalPriceCart, clearCart } = useContext(CartContext);
  const navigateTo = useNavigate();

  function handleStateFormConditions() {
    setTerms(!terms);
  }

  function handleCheckOut() {
    const order = {
      buyer: {
        name: nombre,
        email: email,
        address: address,
        phone: telefono,
      },
      items: cart,
      total: finalPriceCart(),
      date: new Date(),
    };

    createBuyOrder_WithStockControl(order).then((id) =>
      /** swal(
          "Gracias por tu compra",
          `Se genero la orden correctamente, tu numero de ticket es: ${id}`,
          "success"
        ), */
      setTimeout(() => {
        clearCart();
        navigateTo(`/orderDetail/${id}`);
      }, 1000)
    );
  }

  return (
    <>
      <div className="container-checkout-revio-pago-left">
        <div className="left-login">
          <div className="login-description">
            ¿Ya tienes una cuenta?{" "}
            <p>
              <Link> Inicia sesión </Link>{" "}
            </p>{" "}
            para finalizar la compra más rápido.
          </div>
        </div>
        <div className="check-pago-edit">
          <h1 className="title-checkout-pago">
            <FontAwesomeIcon icon={faCheck} /> Pago
          </h1>
          <Link to="/shoping-cart">Editar </Link>
        </div>
        <div className="contianer-backgorund-pago">
          <div className="container-logomercado">
            <div className="container-image-mercado-pago">
              <img src={logoMercado} alt="logo" />
            </div>
            <p className="texto-mercado-pago">Pagando con MercadoPago</p>
          </div>
          <div className="container-info-user-pago">
            <div className="info-form-user">
              <FontAwesomeIcon icon={faCheck} />
              {nombre !== " " ? nombre : "Carlos Jaramillo"}
            </div>
            <div className="info-form-user">
              <FontAwesomeIcon icon={faCheck} />
              {email !== "" ? email : "cjaramilloportilla@gmail.com"}
            </div>
            <div className="info-form-user">
              <FontAwesomeIcon icon={faCheck} />
              {address !== " " ? address : "12980 vista isles dr apt 327"}
            </div>
            <div className="info-form-user">
              <FontAwesomeIcon icon={faCheck} />
              {telefono !== "" ? telefono : "7868017349"}
            </div>
          </div>
        </div>
        <div>
          <h1 className="title-checkout-pago">
            Paso 2 - Revisa y realiza tu pedido
          </h1>
          <div className="terms-background">
            <div className="revisar-detalle">
              Revisa los detalles del pedido y realiza tu pedido cuando estés
              listo.
            </div>
            <div>
              <label className="container-terms-conditions">
                Acepto los <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <div>
                <button
                  data-modal-target="#modal"
                  onClick={handleStateFormConditions}
                  className="btn-terms"
                >
                  Términos y Condiciones
                </button>
              </div>
              <label className="container-terms-conditions">
                Quiero recibir información de marketing por email y SMS.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleCheckOut()}
          className="btn-realizar-compra"
        >
          Realizar Compra{" "}
        </button>
      </div>
      {terms ? (
        <ModalTerminosCondiciones terms={terms} setTerms={setTerms} />
      ) : null}
    </>
  );
}

export default ContainerCheckoutLeftCheckPago;

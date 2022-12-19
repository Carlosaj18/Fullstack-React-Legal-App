import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./ContainerCheckoutLeftCheckPago.css";
import logoMercado from "../../images/mercadoPago.svg";
import ModalTerminosCondiciones from "../ModalTerminosCondiciones/ModalTerminoCondicionales";

function ContainerCheckoutLeftCheckPago(props) {
  const [terms, setTerms] = useState(false);

  function handleStateFormConditions() {
    setTerms(!terms);
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
              {props.nombre}
            </div>
            <div className="info-form-user">
              <FontAwesomeIcon icon={faCheck} />
              {props.email}
            </div>
            <div className="info-form-user">
              <FontAwesomeIcon icon={faCheck} />
              {props.address}
            </div>
            <div className="info-form-user">
              <FontAwesomeIcon icon={faCheck} />
              {props.telefono}
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
        <button className="btn-realizar-compra">Realizar Compra </button>
      </div>
      {terms ? (
        <ModalTerminosCondiciones terms={terms} setTerms={setTerms} />
      ) : null}
    </>
  );
}

export default ContainerCheckoutLeftCheckPago;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ContainerCheckoutLeftForm.css";
import fetchDatosComboBox from "../services/apiPaises.js";
import axios from "axios";

function ContainerCheckoutLeftForm({
  setIsActiveForm,
  isActiveForm,
  setUserInfo,
}) {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [region, setRegion] = useState("");
  const [phone, setPhone] = useState("");
  const [paises, setPaises] = useState([]);

  async function getUser() {
    try {
      const response = await fetch(
        "http://battuta.medunes.net/api/country/all/?key=dd0fe950948aebe004fe7f39ce43f3c5",
        {
          Accept: "*",
          "User-Agent": "http://localhost:3000/",
          method: "GET",
          mode: "no-cors",
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [paises]);

  console.log(paises);

  function onClickFormActive() {
    return setIsActiveForm(!isActiveForm);
  }

  function handleChange(event, setState) {
    setState(event.target.value);
  }

  function handleSubmit(event) {
    let userInfo = {
      email: email,
      nombre: nombre,
      apellido: lastName,
      address: address,
      ciudad: ciudad,
      pais: pais,
      codigoPostal: codigoPostal,
      region: region,
      phone: phone,
    };
    setUserInfo(userInfo);
    event.preventDefault();
  }

  return (
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
          Una vez que hagas clic en proceder, serás redireccionado a MercadoPago
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
        <form
          className="form-info-pago"
          action="/"
          onClick={(e) => handleSubmit(e)}
        >
          <label for="femail">* Email para confirmar el pedido </label>
          <input
            type="text"
            id="femail"
            name="femail"
            onChange={(e) => handleChange(e, setEmail)}
          />
          <label for="lname">* Nombre</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={(e) => handleChange(e, setNombre)}
          />
          <label for="lname">* Apellido</label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={(e) => handleChange(e, setLastName)}
          />
          <label for="address">* Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={(e) => handleChange(e, setAddress)}
          />
          <label for="ciudad">* Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={(e) => handleChange(e, setCiudad)}
          />
          <div className="form-container-additional">
            <div className="form-left">
              <label for="pais">* País</label>
              <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog" onChange={(e) => handleChange(e, setPais)}>
                  Dog
                </option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>

              <label for="postal">Código postal</label>
              <input
                type="text"
                id="postal"
                name="postal"
                onChange={(e) => handleChange(e, setCodigoPostal)}
              />
            </div>
            <div className="form-right">
              <label for="region">* Región</label>
              <input
                type="text"
                id="region"
                name="region"
                onChange={(e) => handleChange(e, setRegion)}
              />
              <label for="telefono">*Teléfono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                onChange={(e) => handleChange(e, setPhone)}
              />
            </div>
          </div>
          <input
            onClick={onClickFormActive}
            type="submit"
            value="Submit"
            className="submit-mercado-pago"
          />
        </form>
      </div>
    </div>
  );
}

export default ContainerCheckoutLeftForm;

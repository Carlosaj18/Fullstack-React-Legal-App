import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ContainerCheckoutLeftForm.css";
import fetchDatosComboBox, {
  fetchDatosComboBoxRegions,
  fetchDatosComboBoxCiudades,
} from "../services/apiPaises.js";
import InputForm from "../InputForm/InputForm";

function ContainerCheckoutLeftForm({
  setIsActiveForm,
  isActiveForm,
  setUserInfo,
}) {
  const [buyerData, setBuyerData] = useState({
    email: "",
    nombre: "",
    apellido: "",
    address: "",
    ciudad: "",
    pais: "",
    codigoPostal: "",
    region: "",
    phone: "",
  });

  const [selectPais, setSelectPais] = useState([]);
  const [selectRegion, setSelectRegion] = useState();
  const [selectCiudad, setSelectCiudad] = useState();

  useEffect(() => {
    fetchDatosComboBox()
      .then((response) => {
        setSelectPais(response);
      })
      .catch((error) => console.log(error));
  }, [selectRegion]);

  function onClickFormActive() {
    return setIsActiveForm(!isActiveForm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserInfo(buyerData);
  }

  function handleClickPaises() {
    fetchDatosComboBoxRegions(buyerData.pais)
      .then((response) => {
        setSelectRegion(response);
      })
      .catch((error) => console.log(error));
  }

  function handleClickRegiones() {
    if (
      (buyerData.pais !== undefined || buyerData.pais !== "") &&
      (buyerData.region !== undefined || buyerData.region !== "")
    ) {
      fetchDatosComboBoxCiudades(buyerData.pais, buyerData.region)
        .then((response) => {
          setSelectCiudad(response);
        })
        .catch((error) => console.log(error));
    }
  }

  function handleInputChange(event) {
    let nameInput = event.target.name;
    let value = event.target.value;
    //buyerData[nameInput] = value; // ASIGNAR DATA DINAMICA
    let newBuyerData = { ...buyerData };
    newBuyerData[nameInput] = value;
    setBuyerData(newBuyerData);
    console.log(buyerData);
  }

  // Validacion FROM

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
          <InputForm
            title="* Email para confirmar el pedido "
            typeInput="text"
            name="email"
            value={buyerData.email}
            onChange={handleInputChange}
          />
          <InputForm
            title="* Nombre "
            typeInput="text"
            name="nombre"
            value={buyerData.nombre}
            onChange={handleInputChange}
          />

          <InputForm
            title="* Apellido "
            typeInput="text"
            name="apellido"
            value={buyerData.apellido}
            onChange={handleInputChange}
          />

          <InputForm
            title="* Dirección "
            typeInput="text"
            name="address"
            value={buyerData.address}
            onChange={handleInputChange}
          />

          <label for="pais">* País</label>
          <select
            onChange={handleInputChange}
            onClick={() => handleClickPaises()}
            name="pais"
          >
            <option value={buyerData.pais}>--Please choose an option--</option>
            {selectPais !== undefined
              ? selectPais.map((item) => {
                  return (
                    <option name="pais" value={item.code} key={item.name}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          <div className="form-container-additional">
            <div className="form-left">
              <label for="region">* Región</label>
              <select
                onChange={handleInputChange}
                onClick={() => handleClickRegiones()}
                name="region"
              >
                <option value={buyerData.region}>
                  --Please choose an option--
                </option>
                {selectRegion !== undefined
                  ? selectRegion.map((item) => {
                      return (
                        <option name={item.region} value={item.region} key={item.region}>
                          {item.region}
                        </option>
                      );
                    })
                  : null}
              </select>

              <InputForm
                title="* Código postal "
                typeInput="text"
                name="codigoPostal"
                value={buyerData.codigoPostal}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-right">
              <label for="ciudad">* Ciudad</label>
              <select onChange={handleInputChange} name="ciudad">
                <option value={buyerData.ciudad}>
                  --Please choose an option--
                </option>
                {selectCiudad !== undefined
                  ? selectCiudad.map((item) => {
                      return (
                        <option name={item.city} value={item.city} key={item.city}>
                          {item.city}
                        </option>
                      );
                    })
                  : ""}
              </select>

              <InputForm
                title="* Teléfono "
                typeInput="text"
                name="phone"
                value={buyerData.phone}
                onChange={handleInputChange}
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

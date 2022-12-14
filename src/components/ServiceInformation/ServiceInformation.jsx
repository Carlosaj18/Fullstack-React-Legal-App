import React from "react";
import "./ServiceInformation.css";

function ServiceInformation(props) {
  const getFormattedPrice = (price) => {
    price = parseFloat(price);
  };

  return (
    <div className="container-information">
      <h1>{props.service.title}</h1>
      <strong>{() => getFormattedPrice(props.service.price)}</strong>
      <div>{props.service.description}</div>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ServiceInformation;

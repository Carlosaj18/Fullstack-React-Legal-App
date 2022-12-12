import React from "react";
import "./DocumentInformation.css";

function DocumentInformation(props) {
  return (
    <div className="container-information">
      <h1>{props.document.title}</h1>
      <strong>${props.document.price}</strong>
      <div>
        {props.document.description}
      </div>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default DocumentInformation;

import React, { useContext } from "react";
import "./DocumentInformation.css";
import { CartContext } from "../../Contexto/CartProviderContext";

function DocumentInformation(props) {
  const { addItem } = useContext(CartContext);

  const getFormattedPrice = (price) => {
    price = parseFloat(price);
    return `${price.toFixed(3)}`;
  };

  const listClausulas =
    props.document.clausulas !== undefined
      ? props.document.clausulas.map((item, i) => (
          <li
            key={i}
            style={{
              color: props.document.clausulas ? "#234F1E" : "darkgreen",
            }}
          >
            {item}
          </li>
        ))
      : null;
  return (
    <div className="container-information">
      <h1>{props.document.title}</h1>
      <div className="price">$ {getFormattedPrice(props.document.price)}</div>
      <div>{props.document.description}</div>
      <div className="clausulas">
        {props.document.clausulas !== undefined
          ? "En este contrato encontrarás las siguientes cláusulas:"
          : null}
      </div>
      <ul>{listClausulas}</ul>
      <div>Descárgalos y completa la información!</div>
      <div>
        Si tienes dudas sobre cómo usar este documento, por favor ponte en
        contacto con nuestro equipo de LegalApp.
      </div>
      <button onClick={()=>addItem({id:props.id, item: props.document}, 1)}>Agregar al carrito</button>
    </div>
  );
}

export default DocumentInformation;

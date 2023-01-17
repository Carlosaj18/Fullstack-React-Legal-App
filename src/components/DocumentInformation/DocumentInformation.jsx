import React, { useContext, useState } from "react";
import "./DocumentInformation.css";
import { CartContext } from "../../Contexto/CartProviderContext";
import { Link } from "react-router-dom";

function DocumentInformation(props) {
  const { document } = props;
  const { addToCart } = useContext(CartContext);
  const [showMore, setShowMore] = useState(false);

  const getFormattedPrice = (price) => {
    price = parseFloat(price);
    return `${price.toFixed(3)}`;
  };
  const onAdd = () => {
    // volver la cantidad global para acceder desde el preview
    addToCart(document, 1);
  };

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="container-information">
      <h1 className="title-vista-detallada">{props.document.title}</h1>
      <div className="price">$ {getFormattedPrice(props.document.price)}</div>
      <div className="description-vista-detallada">
        {props.document.description}
      </div>
      <div className="clausulas">
        {props.document.clausulas !== undefined
          ? "En este contrato encontrarás las siguientes cláusulas: "
          : null}
        {props.document.clausulas !== undefined ? (
          <button className="btn-ver-clausulas" onClick={handleMoreClick}>
            {" "}
            {showMore ? "Esconder" : "Ver"} clausulas{" "}
          </button>
        ) : null}
      </div>
      <ul>
        {showMore &&
          props.document.clausulas !== undefined &&
          props.document.clausulas.map((item, i) => (
            <li
              key={i}
              style={{
                color: props.document.clausulas ? "#234F1E" : "darkgreen",
              }}
            >
              {item}
            </li>
          ))}
      </ul>
      <div className="info-adicional-vista-detallada">
        Descárgalos y completa la información!
      </div>
      <div className="info-adicional-vista-detallada">
        Si tienes dudas sobre cómo usar este documento, por favor ponte en
        contacto con nuestro equipo de LegalApp. O usa el servicio de
        diligenciamiento <Link to="/service/my-services">acompañado por un abogado.</Link>
      </div>
      <button className="button-vista-detallada" onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}

export default DocumentInformation;

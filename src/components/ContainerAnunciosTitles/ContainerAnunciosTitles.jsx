import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ContainerAnunciosTitles.css";

function ContainerAnunciosTitles(props) {
  return (
    <>
      <div className="container-option-items anuncios">
        <h3 className="subtitle">{props.subtitle}</h3>
        <button
          className="btn-more"
          onClick={() => props.childToParentMoreElements(true)}
        >
          <h3>Ver Más </h3>
          <i>
            <FontAwesomeIcon icon={faChevronDown} />
          </i>
        </button>
      </div>
      {props.children}
    </>
  );
}

export default ContainerAnunciosTitles;

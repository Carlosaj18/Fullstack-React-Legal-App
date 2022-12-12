import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ContainerOptionsTitles.css";

function ContainerOptionsTitles(props) {
  return (
    <>
      <div className="container-option-items">
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

export default ContainerOptionsTitles;

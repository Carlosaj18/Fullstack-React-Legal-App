import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ContainerOptionsTitles.css";

function ContainerOptionsTitles(props) {
  const [document, setDocument] = useState([]);

  return (
    <>
      <div className="container-option-items">
        <h3 className="subtitle">{props.subtitle}</h3>
        <button
          className="btn-more"
          onClick={() =>
            props.childToParent(true)
          }
        >
          <h3>See More </h3>
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

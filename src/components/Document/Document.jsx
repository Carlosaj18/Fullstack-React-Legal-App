import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import "./Document.css";
import ToggleButton from "../ToggleButton/ToggleButton";

function Document(props) {
  return (
    <div className="card">
      <div className="card-background">
        <ToggleButton icon="♥" />
        <div className="logo-container-service">
          <img
            src={process.env.PUBLIC_URL + "assets/document.jpg"}
            alt="logo"
          />
        </div>
      </div>
      <div className="info-card">
        <i className="icon-document">
          <FontAwesomeIcon icon={faFileSignature} />
        </i>
        <div className="info-description">
          <h3>{props.title}</h3>
          <p>Creado el {props.date}</p>
          <p>Firma {props.signatures}</p>
        </div>
      </div>
    </div>
  );
}

export default Document;

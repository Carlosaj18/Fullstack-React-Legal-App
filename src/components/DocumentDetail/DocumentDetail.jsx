import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import '../Document/Document.css';
import ToggleButton from "../ToggleButton/ToggleButton";

function DocumentDetail(props) {
  return (
    <div className="card">
      <div className="card-background">
        <div className="logo-container-service">
          <ToggleButton icon="♥" />
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
          <h3>{props.document.title}</h3>
          <p>Creado el {props.date}</p>
          <p>Firma {props.document.signatures}</p>
        </div>
      </div>
      {/* Contador */}
    </div>
  );
}

export default DocumentDetail;

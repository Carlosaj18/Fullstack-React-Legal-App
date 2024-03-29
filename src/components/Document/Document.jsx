import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import "./Document.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Link, useParams } from "react-router-dom";

function Document(props) {
  let urlDetail = `/document/detail/${props.id}`;
  //let urlDetailCategory = `/document/category/1/detail/${props.id}`
  let urlMyDocumentDetail = `/my-document/detail/${props.id}`;

  return (
    <div className="card">
      <div className="card-background">
        <div className="logo-container-service">
          <ToggleButton icon="♥" />
          <img src={props.image} alt="logo" />
        </div>
      </div>
      <div className="info-card">
        <i className="icon-document">
          {props.template ? (
            <Link to={urlDetail}>
              <FontAwesomeIcon icon={faFileSignature} />
            </Link>
          ) : (
            <Link to={urlMyDocumentDetail}>
              <FontAwesomeIcon icon={faFileSignature} />
            </Link>
          )}
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

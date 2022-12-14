import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./DocumentDetail.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Button } from "@chakra-ui/react";

function DocumentDetail(props) {

  return (
    <>
      <div>hola</div>
      <div className="card">
        <div className="card-background">
          <div className="logo-container-service">
            <ToggleButton  icon="♥" />
            <img src={`${props.document.image}`} alt="logo" />
          </div>
        </div>
        <div className="info-card">
          <div className="icon-document">
            <Button>
              <FontAwesomeIcon icon={faDownload} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          </div>
          <div className="info-description">
            <h3>{props.document.title}</h3>
            <p>Categoria: {props.document.category}</p>
            <p>Creado el {props.date}</p>
            <p>Firma {props.document.signatures}</p>
          </div>
        </div>
        {/* Contador */}
      </div>
    </>
  );
}

export default DocumentDetail;

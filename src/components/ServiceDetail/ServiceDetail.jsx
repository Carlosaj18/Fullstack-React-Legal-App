import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./ServiceDetail.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Button } from "@chakra-ui/react";

function ServiceDetail(props) {
  return (
    <>
      <div className="card">
        <div className="card-background">
          <div className="logo-container-service">
            <ToggleButton icon="♥" />
            <img src={`${props.service.image}`} alt="logo" />
          </div>
        </div>
        <div className="info-card">
          <div className="icon-service">
            <Button>
              <FontAwesomeIcon icon={faDownload} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          </div>
          <div className="info-description">
            <h3>{props.service.title}</h3>
            <p>Categoria: {props.service.category}</p>
            <p>Creado el {props.date}</p>
            <p>Firma {props.service.signatures}</p>
          </div>
        </div>
        {/* Contador */}
      </div>
    </>
  );
}

export default ServiceDetail;

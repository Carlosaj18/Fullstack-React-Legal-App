import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./DocumentDetail.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Button } from "@chakra-ui/react";
import imageDoc from "../../images/document.jpg";
import data from "../data/documents";

function DocumentDetail(props) {
  function handleNextClick() {
    if(props.index < data.length) props.setIndex(props.index + 1);
  } 

  return (
    <div className="container-vertical-felx ">
      <div className="container-image-detail-document-flex">
        <div className="container-flex-colum">
          <div className="container-image-detail-document">
            <img alt="" src={imageDoc}></img>
          </div>
          <div className="container-image-detail-document">
            <img alt="" src={imageDoc}></img>
          </div>
          <div className="container-image-detail-document">
            <img alt="" src={imageDoc}></img>
          </div>
          <h3>
            ({props.index + 1} of {data.length})
          </h3>
        </div>
        <div className="card">
          <div className="card-background">
            <div className="logo-container-service">
              <ToggleButton icon="♥" />
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
      </div>
      <button className="btn-ver-next-document" onClick={handleNextClick}>
        Ver Siguiente
      </button>
    </div>
  );
}

export default DocumentDetail;

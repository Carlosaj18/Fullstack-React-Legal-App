import React from 'react'
import imageDocument from '../../images/document.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import './Card.css';

function Card(props) {
  return (
    <div className="card">
        <div className="card-background">
            <div className="logo-container-service">
                <img src={imageDocument} alt="logo" />
            </div>
        </div>
        <div className="info-card">
        <i className="icon-document"><FontAwesomeIcon icon={faFileSignature}/></i>
            <div className="info-description">
                <h3>{props.title}</h3>
                <p>Creado el {props.date}</p>
                <p>Firma {props.signatures}</p>
            </div>
        </div>
      </div>
  )
}

export default Card;
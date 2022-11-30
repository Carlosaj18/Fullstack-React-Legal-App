import React from 'react'
import imageDocument from '../../images/document.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import './Card.css';

let latestDocuments = [
    {
      id: 1, 
      title: "Archivo #1",
      date: "22/11/22",
      signatures: "1/3",
    }, 
    {
      id: 2, 
      title: "Archivo #2",
      date: "22/11/22",
      signatures: "2/3"
    }, 
    {
      id: 3, 
      title: "Archivo #3",
      date: "22/11/22",
      signatures: "3/3"
    }, 
  ];

function Card() {
  return (
    <>
        { latestDocuments.map((document, i) =>
        <div className="card" key={i}> 
            <div className="card-background">
                <div className="logo-container-service">
                    <img src={imageDocument} alt="logo" />
                </div>
            </div>
            <div className="info-card">
                <i className="icon-document"><FontAwesomeIcon icon={faFileSignature}/></i>
                <div className="info-description">
                    <h3>{document.title}</h3>
                    <p>Creado el {document.date}</p>
                    <p>Firma {document.signatures}</p>
                </div>
            </div> 
        </div>)}
    </>
  )
}

export default Card;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./Service.css";
import { Link } from "react-router-dom"; 

// style={{backgroundImage: `url(${service.image})`}}
// ¿Como se puede pasar imagenes al background de manera dinamica?

function Service(props) {

  //let urlDetail = `/document/detail/${props.id}`;

  return (
    <div className="service">
      <div className="card-background" style={{backgroundImage:`url('${props.image}')`}}></div>
      <div className="info-card">
        <h3>{props.title}</h3>
        <p>Creado el {props.description}</p>
        <button><Link>Let's go! <FontAwesomeIcon icon={faArrowRightLong} /></Link></button>
      </div>
    </div>
  );
}

export default Service;

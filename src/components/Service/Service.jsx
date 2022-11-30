import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import '../Service/Service.css';


// style={{backgroundImage: `url(../../images/${props.image})`}} 

function Service(props) {
  return (
    <div className="service">
        <div className="card-background"></div>
        <div className="info-card">
            <h3>{props.title}</h3>
            <p>Creado el {props.description}</p>
            <button> Let's go! <FontAwesomeIcon icon={ faArrowRightLong }/> </button>
        </div>
      </div>
  )
}

export default Service
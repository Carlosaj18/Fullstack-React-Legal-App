import React from 'react'
import "./ServiceInformation.css";

function ServiceInformation(props) {
  return (
    <div className="container-information">
      <h1>{props.service.title}</h1>
      <strong>${props.service.price}</strong>
      <div>
        {props.service.description}
      </div>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ServiceInformation
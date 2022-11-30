import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import '../Service/Service.css';


//style={{backgroundImage: `url(${service.image})`}}

let services = [
  {
    id: 1, 
    title: "Document Updated",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "../../images/update-document.jpg",
  }, 
  {
    id: 2, 
    title: "Document Creation",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "../../images/create-document.jpg"
  }, 
  {
    id: 3, 
    title: "Signing Documents",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "../../images/create-document.jpg"
  }
];

function Service() {
  return (
    <>
    {services.map((service, i) => 
      <div className="service" key={i}>
        <div className="card-background"></div>
        <div className="info-card">
            <h3>{service.title}</h3>
            <p>Creado el {service.description}</p>
            <button> Let's go! <FontAwesomeIcon icon={ faArrowRightLong }/> </button>
        </div>
      </div>
    )}
    </>
  )
}

export default Service
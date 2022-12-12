import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./Service.css";
import { Link } from "react-router-dom";

// style={{backgroundImage: `url(${service.image})`}}
// ¿Como se puede pasar imagenes al background de manera dinamica?

function Service(props) {
  let urlDetail = `/service/detail/${props.id}`;
  const [description, setDescription] = useState(props.description);

  /*useEffect(() => {
    let textLength = description.length; // 74
    let text = "";
    let contador = 0;
    if (textLength < 50) {
      text = description;
    } else {
      for (let i = 0; i < textLength; i++) {
        if (contador < 50) {
          text += props.description[i];
        }
        text += text + "...";
        contador++;
      }
      setDescription(text);
    }
  }, []);*/

  return (
    <div className="service">
      <div
        className="card-background"
        style={{ backgroundImage: `url('${props.image}')` }}
      ></div>
      <div className="info-card">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button>
          <Link to={urlDetail}>
            Let's go! <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Service;

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
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Cuando es un dato asincróno al render del componente se usa UseEfect
    hadleDataDescription();
  }, []);

  function hadleDataDescription() {
    let sliceString = description.slice(0, 40);
    let newString = sliceString + "...";
    setDescription(newString);
  }

  function handleMouseEnterCard() {
    setActive(!active);
    if (!active) {
      setDescription(props.description);
    }
  }

  function handleMouseLeaveCard() {
    setActive(!active);
    if (active) {
      hadleDataDescription();
    }
  }

  return (
    <div
      className="service"
      onMouseEnter={() => handleMouseEnterCard()}
      onMouseLeave={() => handleMouseLeaveCard()}
    >
      <div
        className="card-background"
        style={{ backgroundImage: `url('${props.image}')` }}
      ></div>
      <div className="info-card">
        <h3>{props.title}</h3>
        <p>{description}</p>
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

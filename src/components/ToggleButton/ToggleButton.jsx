import React, { useState, useEffect } from "react";
import './ToggleButton.css';

function ToggleButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  // [variableDeEstado, setterDeLaVariable]

  function handleFavorite() {
    setIsFavorite(!isFavorite); 
    console.log("click");
  }

  return (
    <button
      onClick={handleFavorite}
      className={isFavorite ? "card-favicon favorite" : "card-favicon"}
    >
      {props.icon}
    </button>
  );
}

export default ToggleButton;
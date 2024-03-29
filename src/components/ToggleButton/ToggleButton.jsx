import React, { useState } from "react";
import './ToggleButton.css'

function ToggleButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  // [variableDeEstado, setterDeLaVariable]

  function handleFavorite() {
    setIsFavorite(!isFavorite); 
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
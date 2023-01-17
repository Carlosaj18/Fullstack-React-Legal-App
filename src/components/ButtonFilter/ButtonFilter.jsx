import React from "react";
import "./ButtonFilter.css";

function ButtonFilter(props) {
  return (
    <button className="button-flex-filter">
      <i>{props.icon}</i>
      {props.name}
    </button>
  );
}

export default ButtonFilter;

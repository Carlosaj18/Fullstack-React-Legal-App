import React from "react";
import "../ContainerCheckoutLeftForm/ContainerCheckoutLeftForm.css";

function InputForm(props) {
  return (
    <>
      <label for={props.name}>{props.title} </label>
      <input
        type={props.typeInput}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default InputForm;

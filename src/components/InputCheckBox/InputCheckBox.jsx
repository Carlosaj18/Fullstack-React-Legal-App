import React from "react";

function InputCheckBox(props) {
  return (
    <>
      <div className="flex-total-input">
        <label className="container-checkbox" >
          {props.title}
          <input
            type="checkbox"
            id={props.name}
            name={props.name}
            value={props.name}
            checked={props.handleCheck}
            onChange={props.handleOnChange}
          />
          <span className="checkmark"></span>
        </label>
        <div>
          {/** <span className={props.onload > 0 ? "checkmark-total-number" : null}>{props.onload > 0 && props.onload  }</span> */}
          <span className="checkmark-total-number">{props.onload}</span>
        </div>
      </div>
      <br />
    </>
  );
}

export default InputCheckBox;

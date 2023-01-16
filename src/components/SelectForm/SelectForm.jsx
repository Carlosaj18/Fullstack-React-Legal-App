import React from "react";

function SelectForm(props) {
  return (
    <>
      <label for={props.name}>{props.title}</label>
      <select onChange={props.onChange} name={props.name}>
        <option value={props.value}>--Please choose an option--</option>
        {props.select !== undefined 
          ? props.select.map((item) => {
              return (
                <option name={item.city} value={item.city}>
                  {item.city}
                </option>
              );
            })
          : ""}
      </select>
    </>
  );
}

export default SelectForm;

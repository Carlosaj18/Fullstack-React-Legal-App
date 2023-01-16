import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <>
      <li className="selected">
        <i>
          {props.icon}
        </i>
        <button className="button" onClick={props.handleEvent}>
          <Link to={props.link}>{props.name}</Link>
        </button>
      </li>
    </>
  );
}

export default NavItem;

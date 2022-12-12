import React, { useState } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import userImg from "../../images/userimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function NavBar({childToParent}) {
  const [searchNav, setSearchNav] = useState({ value: "" });

  function handleChange(event) {
    setSearchNav({ value: event.target.value }); // Seteo el valor del search
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="header">
      <div className="search-container">
        <form action="/" onChange={() => childToParent(searchNav.value)}>
          <input
            className="input-search-category"
            type="text"
            placeholder="Search documents..."
            value={searchNav.value}
            onChange={(e) => handleChange(e)}
          />
          <button className="search-icon" type="submit" onClick={(e)=>handleSubmit(e)}>
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </button>
        </form>
        <button type="submit" className="filters">
          <i>
            <FontAwesomeIcon icon={faFilter} />
          </i>
          Filters
        </button>
      </div>
      <div className="user">
        <div className="icons">
          <CartWidget />
        </div>
        <div className="container-user">
          <div className="user-img">
            <img src={userImg} alt="user-profile" />
          </div>
          <p className="name">Hi, Carlos</p>
        </div>
      </div>
      <button className="button-notification">
        <i>
          <FontAwesomeIcon className="fa-bell" icon={faBell} />
        </i>{" "}
      </button>
    </div>
  );
}

export default NavBar;

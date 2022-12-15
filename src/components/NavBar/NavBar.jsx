import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import userImg from "../../images/userimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import SearchNabBar from "../SearchNabBar/SearchNabBar";

function NavBar({
  onFilterTextChange,
  filterText,
  setButtonFilter,
  buttonFilter,
  previewCart,
  setPreviewCart
}) {
  const user = {
    name: "Carlos Jaramillo",
    imageUrl: userImg,
    imageSize: 60,
  };

  return (
    <div className="header">
      <SearchNabBar
        onFilterTextChange={onFilterTextChange}
        filterText={filterText}
        setButtonFilter={setButtonFilter}
        buttonFilter={buttonFilter}
      />
      <div className="user">
        <div className="icons">
          <CartWidget
            previewCart={previewCart}
            setPreviewCart={setPreviewCart}
          />
        </div>
        <div className="container-user">
          <div className="user-img">
            <img
              src={user.imageUrl}
              alt="user-profile"
              style={{
                width: user.imageSize,
                height: user.imageSize,
              }}
            />
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

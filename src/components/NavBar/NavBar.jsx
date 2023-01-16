import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import SearchNabBar from "../SearchNabBar/SearchNabBar";
import NotificationWidget from "../NotificationWidget/NotificationWidget";
import "./NavBar.css";

function NavBar({
  filterText,
  setFilterText,
  buttonFilter,
  setButtonFilter,
  previewCartWidget,
  setPreviewCartWidget,
  notificationWidget,
  setNotificationWidget,
  user
}) {
  
  return (
    <div className="header">
      <SearchNabBar
        filterText={filterText}
        setFilterText={setFilterText}
        buttonFilter={buttonFilter}
        setButtonFilter={setButtonFilter}
      />
      <div className="user">
        <div className="icons">
          <CartWidget
            previewCartWidget={previewCartWidget}
            setPreviewCartWidget={setPreviewCartWidget}
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
          <p className="name">Hi, {user.name}</p>
        </div>
      </div>
      <NotificationWidget
        notificationWidget={notificationWidget}
        setNotificationWidget={setNotificationWidget}
      />
    </div>
  );
}

export default NavBar;

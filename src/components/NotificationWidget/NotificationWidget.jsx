import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function NotificationWidget({notificationWidget, setNotificationWidget}) {
  
    function onClickButtonPreviewNotification() {
        return setNotificationWidget(!notificationWidget);
    }

    return (
    <>
      <button className="button-notification" onClick={() => onClickButtonPreviewNotification()}>
        <i>
          <FontAwesomeIcon className="fa-bell" icon={faBell} />
        </i>
      </button>
    </>
  );
}

export default NotificationWidget;

import React from "react";
import './SideBar.css';
import imageLogo from '../../images/legalApp-logo.png';
import imageGuide from '../../images/imageGuide.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faChartLine} from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={imageLogo} alt="logo" />
        <i className="close-btn"><FontAwesomeIcon icon={faClose}/></i>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="selected">
            <i><FontAwesomeIcon icon={faHouse}/></i>
            <button className="button section">Home</button>
          </li>
          <li>
            <i><FontAwesomeIcon icon={faFile}/></i>
            <button className="button allUsers">My documents </button>
          </li>
          <li>
            <i><FontAwesomeIcon icon={faFileSignature}/></i>
            <button>
              My signatures
            </button>
          </li>
          <li>
            <i><FontAwesomeIcon icon={faFileContract} /></i>
            <button className="button findUser">Mt templates</button>
          </li>
          <li>
            <i><FontAwesomeIcon icon={faCloudArrowUp} /></i>
            <button className="button button-favoritos">Law upgrade</button>
          </li>
          <li>
            <i><FontAwesomeIcon icon={faChartLine} /></i>
            <button className="button button-dashboard">Dashboard</button>
          </li>
        </ul>
        <div className="image-container">
        <img src={imageGuide} alt="logo" />
        </div>
        <ul>
          <li className="logout">
          <i><FontAwesomeIcon icon={faRightFromBracket} /></i>
            <button>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div className="fill-bottom"></div>
    </div>
  );
}

export default SideBar;

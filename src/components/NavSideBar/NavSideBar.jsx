import React from "react";
import './NavSideBar.css';
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

let icons = [faHouse, faFile, faFileSignature, faFileContract, faCloudArrowUp, faChartLine];

function SideBar(props) {
  return (
    <div className="nav-side-bar">
      <div className="logo-container">
        <img src={imageLogo} alt="logo" />
        <i className="close-btn"><FontAwesomeIcon icon={faClose}/></i>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {props.items.map((item, i) => 
            <li key={item+i} className="selected">
              <i><FontAwesomeIcon icon={icons[i]}/></i>
              <button className="button">{item}</button>
            </li> 
          )}
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

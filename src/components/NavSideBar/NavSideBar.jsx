import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavSideBar.css";
import imageLogo from "../../images/legalApp-logo.png";
import imageGuide from "../../images/imageGuide.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

let icons = [
  faHouse,
  faFile,
  faFileSignature,
  faFileContract,
  faCloudArrowUp,
  faChartLine,
];

function SideBar(props) {
  const lanzarAlerta = () => {
    alert("Do you want to logout your account?");
  };

  return (
    <div className="nav-side-bar">
      <Link to="/">
        <div className="logo-container">
          <img src={imageLogo} alt="logo" />
          <i className="close-btn">
            <FontAwesomeIcon icon={faClose} />
          </i>
        </div>
      </Link>
      <nav className="sidebar-nav">
        <ul>
          <li className="selected">
            <i>
              <FontAwesomeIcon icon={faHouse} />
            </i>
            <button onClick={() => console.log("Home")} className="button">
              <Link to="/">Home</Link>
            </button>
          </li>
          <li className="selected">
            <i>
              <FontAwesomeIcon icon={faFile} />
            </i>
            <button
              onClick={() => console.log("My documents")}
              className="button"
            >
              <Link to="/document/my-documents">My documents</Link>
            </button>
          </li>
          <li className="selected">
            <i>
              <FontAwesomeIcon icon={faFileSignature} />
            </i>
            <button
              onClick={() => console.log("My signatures")}
              className="button"
            >
              <Link to="/service/my-services"> Services</Link>
            </button>
          </li>
          <li className="selected">
            <i>
              <FontAwesomeIcon icon={faFileContract} />
            </i>
            <button
              onClick={() => console.log("My templates")}
              className="button"
            >
              <Link>My templates </Link>
            </button>
          </li>
          <li className="selected">
            <i>
              <FontAwesomeIcon icon={faCloudArrowUp} />
            </i>
            <button
              onClick={() => console.log("Law upgrade")}
              className="button"
            >
              <Link>Law upgrade</Link>
            </button>
          </li>
          <li className="selected">
            <i>
              <FontAwesomeIcon icon={faChartLine} />
            </i>
            <button onClick={() => console.log("Dashboard")} className="button">
              <Link to="/">Dashboard</Link>
            </button>
          </li>
        </ul>
        <div className="image-container">
          <img src={imageGuide} alt="logo" />
        </div>
        <ul>
          <li className="logout">
            <i>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </i>
            <button onMouseOver={() => lanzarAlerta()}>Logout</button>
          </li>
        </ul>
      </nav>
      <div className="fill-bottom"></div>
    </div>
  );
}

export default SideBar;

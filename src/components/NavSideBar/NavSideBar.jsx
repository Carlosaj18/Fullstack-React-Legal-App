import React from "react";
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
import NavItem from "../NavItem/NavItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { createCollection } from "../services/fireBase";

function SideBar() {
  const lanzarAlerta = () => {
    toast.warning("Do you want to logout your account?", {
      position: toast.POSITION.TOP_RIGHT,
    });
    // Si true -> <LoginForm />
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
          <NavItem
            icon={<FontAwesomeIcon icon={faHouse} />}
            link="/"
            name="Home"
          />
          <NavItem
            icon={<FontAwesomeIcon icon={faFileContract} />}
            link="/my-templates"
            name="My templates"
          />
          <NavItem
            icon={<FontAwesomeIcon icon={faFile} />}
            link="/document/my-documents"
            name="My documents"
          />
          <NavItem
            icon={<FontAwesomeIcon icon={faFileSignature} />}
            link="/service/my-services"
            name="Services"
          />
          <NavItem
            icon={<FontAwesomeIcon icon={faCloudArrowUp} />}
            link="/"
            name="Crear Documento"
          />
          {/** 
           <NavItem
            icon={<FontAwesomeIcon icon={faCloudArrowUp} />}
            link="/document/scaner"
            name="Scanear"
          /> */}
          <NavItem
            icon={<FontAwesomeIcon icon={faChartLine} />}
            link="/"
            name="Dashboard"
          />
        </ul>
        <div className="image-container">
          <img src={imageGuide} alt="logo" />
        </div>
        <ul>
          <NavItem
            icon={<FontAwesomeIcon icon={faRightFromBracket} />}
            name="Logout"
            handleEvent={() => lanzarAlerta()}
          />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/** <NavItem
            icon={<FontAwesomeIcon icon={faCloudArrowUp} />}
            name="Export Data"
            handleEvent={createCollection}
          /> */}
        </ul>
      </nav>
      <div className="fill-bottom"></div>
    </div>
  );
}

export default SideBar;

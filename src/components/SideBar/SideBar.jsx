import React, { useState } from "react";
import "./SideBar.css";
import ContainerAnunciosTitles from "../ContainerAnunciosTitles/ContainerAnunciosTitles";
import "../ContainerOptionsTitles/ContainerOptionsTitles.css";
import ContainerBlog from "../ContainerBlog/ContainerBlog";
import imageGuide from "../../images/guide-sign.jpg";

function SideBar() {
  const [moreBlog, setMoreBlog] = useState("");

  const childToParentMoreElements = (childdata) => {
    setMoreBlog(childdata);
  };

  return (
    <div className="sidebar">
      <ContainerAnunciosTitles
        childToParentMoreElements={childToParentMoreElements}
        subtitle="Recomendaciones"
      >
        <ContainerBlog moreBlog={moreBlog} />
      </ContainerAnunciosTitles>
      <div className="image-container">
        <img src={imageGuide} alt="logo" />
      </div>
    </div>
  );
}

export default SideBar;

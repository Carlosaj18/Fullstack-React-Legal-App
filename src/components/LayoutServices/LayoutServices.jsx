import React from "react";
import ServiceListContainer from "../ServiceListContainer/ServiceListContainer";
import SideBar from "../SideBar/SideBar";
function LayoutServices(props) {

  let style = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "3em",
    padding: "10px",
    height: "fit-content",
    justifyContent: "center",
  };

  return (
    <>
      <ServiceListContainer documentTitle={props.documentTitle} styleCSS={style} />
      <SideBar />
    </>
  );
}

export default LayoutServices;

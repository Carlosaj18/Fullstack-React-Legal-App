import React from "react";
import ServiceListContainer from "../ServiceListContainer/ServiceListContainer";
import SideBar from "../SideBar/SideBar";

function LayoutServices(props) {
  return (
    <>
      <ServiceListContainer documentTitle={props.documentTitle} />
      <SideBar />
    </>
  );
}

export default LayoutServices;

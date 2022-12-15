import React from "react";
import ServiceListContainer from "../ServiceListContainer/ServiceListContainer";

function LayoutServices(props) {
  return (
    <>
      <ServiceListContainer documentTitle={props.documentTitle} />
    </>
  );
}

export default LayoutServices;

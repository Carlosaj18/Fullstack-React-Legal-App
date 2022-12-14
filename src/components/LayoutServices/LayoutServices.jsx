import React from "react";
import ServiceListContainer from "../ServiceListContainer/ServiceListContainer";
import PreviewCart from "../PreviewCart/PreviewCart";

function LayoutServices(props) {
  return (
    <>
      <ServiceListContainer documentTitle={props.documentTitle} />
      <PreviewCart />
    </>
  );
}

export default LayoutServices;

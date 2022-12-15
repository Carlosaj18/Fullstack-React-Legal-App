import React from "react";
import SideBar from "../SideBar/SideBar";
import DocumentListContainer from "../DocumentListContainer/DocumentListContainer";
import ServiceListContainer from "../ServiceListContainer/ServiceListContainer";

function LayoutHome(props) {
  return (
    <>
      <DocumentListContainer
        buttonFilter={props.buttonFilter}
        documentTitle={props.documentTitle}
        subtitle="Últimos Documentos"
      />
      <ServiceListContainer documentTitle={props.documentTitle} />
      <SideBar />
    </>
  );
}

export default LayoutHome;

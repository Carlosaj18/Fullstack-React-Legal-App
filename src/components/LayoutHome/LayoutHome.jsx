import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import DocumentListContainer from "../DocumentListContainer/DocumentListContainer";
import ServiceListContainer from "../ServiceListContainer/ServiceListContainer";
import ContainerDocuments from "../ContainerDocuments/ContainerDocuments";

function LayoutHome(props) {
  let style = {
    display: "flex",
    flexDirection: "row",
    gap: "3em",
    padding: "10px",
    height: "fit-content",
    justifyContent: "center",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    paddingBottom: "15px",
  };

  const [moreDocuments, setMoreDocuments] = useState('');

  return (
    <>
      <DocumentListContainer
        buttonFilter={props.buttonFilter}
        documentTitle={props.documentTitle}
        subtitle="Últimos Documentos"
        moreDocuments={moreDocuments}
        setMoreDocuments={setMoreDocuments}
        containerDocument={
          <ContainerDocuments
            searchCheckBox={props.searchCheckBox}
            documentTitle={props.documentTitle}
            styleCSS={style}
            moreDocuments={moreDocuments}
            setMoreDocuments={setMoreDocuments}
            template={true}
          />
        }
      />
      <ServiceListContainer documentTitle={props.documentTitle} />
      <SideBar />
    </>
  );
}

export default LayoutHome;

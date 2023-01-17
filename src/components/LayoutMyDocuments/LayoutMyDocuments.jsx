import React, { useState } from "react";
import DocumentListContainer from "../DocumentListContainer/DocumentListContainer";
import FilterListContainer from "../FilterListContainer/FilterListContainer";
import ContainerMyDocuments from "../ContainerMyDocuments/ContainerMyDocuments";

function LayoutMyDocuments(props) {
  let style = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "3em",
    padding: "10px",
    height: "fit-content",
    justifyContent: "center",
  };

  const [searchCheckBox, setSearchCheckBox] = useState("");

  const childToParentCheckBox = (childdata) => {
    setSearchCheckBox(childdata);
  };

  const [moreDocuments, setMoreDocuments] = useState("");

  const childToParentMoreElements = (childdata) => {
    setMoreDocuments(childdata);
  };

  return (
    <>
      <DocumentListContainer
        buttonFilter={props.buttonFilter}
        searchCheckBox={searchCheckBox}
        heading={
          <h3 style={{ textAlign: "center" }} className="heading">
            Estos son tus documentos legales, almacenados en tu repositorio
            juridico personal. Construidos y revisados bajo los mayores
            estándares de calidad, y a precios inigualables.
          </h3>
        }
        documentTitle={props.documentTitle}
        subtitle="Mis Documentos"
        childToParentMoreElements={childToParentMoreElements}
        containerMyDocument={
          <ContainerMyDocuments
            searchCheckBox={searchCheckBox}
            documentTitle={props.documentTitle}
            styleCSS={style}
            moreDocuments={moreDocuments}
            setMoreDocuments={setMoreDocuments}
          />
        }
      />
      <FilterListContainer childToParentCheckBox={childToParentCheckBox} />
    </>
  );
}

export default LayoutMyDocuments;

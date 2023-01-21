import React, { useState } from "react";
import DocumentListContainer from "../DocumentListContainer/DocumentListContainer";
import FilterListContainer from "../FilterListContainer/FilterListContainer";
import ContainerDocuments from "../ContainerDocuments/ContainerDocuments";

function LayoutTemplates(props) {
  let style = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "3em",
    padding: "10px",
    height: "fit-content",
    justifyContent: "center",
  };

  const [searchCheckBox, setSearchCheckBox] = useState();
  const [moreDocuments, setMoreDocuments] = useState(false);

  const childToParentCheckBox = (childdata) => {
    setSearchCheckBox(childdata);
  };

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
            Estos son nuestros templates legales listos para usar, construidos y
            revisados bajo los mayores estándares de calidad, y a precios
            inigualables. Solo debes descargarlo para poder usarlo.
          </h3>
        }
        documentTitle={props.documentTitle}
        subtitle="Mis Documentos"
        moreDocuments={moreDocuments}
        setMoreDocuments={setMoreDocuments}
        childToParentMoreElements={childToParentMoreElements}
        containerDocument={
          <ContainerDocuments
            searchCheckBox={searchCheckBox}
            documentTitle={props.documentTitle}
            styleCSS={style}
            moreDocuments={moreDocuments}
            setMoreDocuments={setMoreDocuments}
            template={true} // Manejar vista detallada para home y templates vs. documents
          />
        }
      />
      <FilterListContainer childToParentCheckBox={childToParentCheckBox} />
    </>
  );
}

export default LayoutTemplates;

import React from "react";
import "../DocumentListContainer/DocumentListContainer.css";
import CategoriaLabels from "../CategoriaLabels/CategoriaLabels";
import DocumentListContainer from "../DocumentListContainer/DocumentListContainer";

function ItemCategoryContainer(props) {
  return (
    <>
      <div className="container-items">
        <DocumentListContainer
          subtitle="Últimos Documentos"
          buttonFilter={props.buttonFilter}
          documentTitle={props.documentTitle}
        />
      </div>
      <CategoriaLabels />
    </>
  );
}

export default ItemCategoryContainer;

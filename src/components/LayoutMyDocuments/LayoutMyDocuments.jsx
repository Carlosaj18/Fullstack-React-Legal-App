import React, {useState} from "react";
import DocumentListContainer from "../DocumentListContainer/DocumentListContainer";
import FilterListContainer from '../FilterListContainer/FilterListContainer'

function LayoutMyDocuments(props) {

  let style = {
    textAlign: "center"
  }

  const [searchCheckBox, setSearchCheckBox] = useState("");

  const childToParentCheckBox = (childdata) => {
    setSearchCheckBox(childdata);
  };

  return (
    <>
      <DocumentListContainer searchCheckBox={searchCheckBox} heading={<h3 style={style} className="heading">Estos son nuestros contratos y documentos legales listos para usar, construidos y revisados bajo los mayores estándares de calidad, y a precios inigualables.</h3>} documentTitle={props.documentTitle} subtitle="Mis Documentos"/>   
      <FilterListContainer childToParentCheckBox={childToParentCheckBox}/>
    </>
  );
}

export default LayoutMyDocuments;

import React, { useState } from "react";
import ContainerOptionsTitles from "../ContainerOptionsTitles/ContainerOptionsTitles";
import ContainerDocuments from "../ContainerDocuments/ContainerDocuments";
import "./DocumentListContainer.css";

function DocumentListContainer(props) {
  const [moreDocuments, setMoreDocuments] = useState("");

  const childToParentMoreElements = (childdata) => {
    setMoreDocuments(childdata);
  };

  return (
    <div className="container-items">
      <div className="container-latest">
        <>{props.heading}</>
        <ContainerOptionsTitles
          childToParentMoreElements={childToParentMoreElements}
          subtitle={props.subtitle}
        >
          <ContainerDocuments
            searchCheckBox={props.searchCheckBox}
            documentTitle={props.documentTitle}
            moreDocuments={moreDocuments}
          />
        </ContainerOptionsTitles>
      </div>
    </div>
  );
}

export default DocumentListContainer;

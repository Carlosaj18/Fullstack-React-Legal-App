import React from "react";
import ContainerOptionsTitles from "../ContainerOptionsTitles/ContainerOptionsTitles";
import "./DocumentListContainer.css";
import ContainerButtonFiltersDocuments from "../ContainerButtonFiltersDocuments/ContainerButtonFiltersDocuments";

function DocumentListContainer(props) {
  
  return (
    <div className="container-items">
      <div className="container-latest">
        <>{props.heading}</>
        <ContainerOptionsTitles
          subtitle={props.subtitle}
          moreDocuments={props.moreDocuments}
          setMoreDocuments={props.setMoreDocuments}
        >
          <ContainerButtonFiltersDocuments buttonFilter={props.buttonFilter} />
          {props.containerDocument || props.containerMyDocument}
        </ContainerOptionsTitles>
      </div>
    </div>
  );
}

export default DocumentListContainer;

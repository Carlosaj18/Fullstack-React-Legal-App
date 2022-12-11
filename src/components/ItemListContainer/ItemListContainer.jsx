import React from "react";
import ContainerOptionsTitles from "../ContainerOptionsTitles/ContainerOptionsTitles";
import ContainerDocuments from "../ContainerDocuments/ContainerDocuments";
import ContainerServices from "../ContainerServices/ContainerServices";
import "../ItemListContainer/ItemListContainer.css";

// { /* Comando - rfce */ }
function ItemListContainer(props) {
  return (
    <div className="container-items">
      <div className="container-latest">
        <ContainerOptionsTitles subtitle="Latest documents">
          <ContainerDocuments documentTitle={props.data}/>
        </ContainerOptionsTitles>
        <ContainerOptionsTitles subtitle="Our services">
          <ContainerServices />
        </ContainerOptionsTitles>
      </div>

    </div>
  );
}

export default ItemListContainer;

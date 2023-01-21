import React, { useState } from "react";
import ContainerOptionsTitles from "../ContainerOptionsTitles/ContainerOptionsTitles";
import ContainerServices from "../ContainerServices/ContainerServices";

function ServiceListContainer(props) {
  const [moreServices, setMoreServices] = useState("");

  const childToParentMoreElements = (childdata) => {
    setMoreServices(childdata);
  };

  return (
    <div className="container-items-service">
      <div className="container-latest-service">
        <ContainerOptionsTitles
          childToParentMoreElements={childToParentMoreElements}
          subtitle="Nuestros Servicios"
          moreServices={moreServices}
          setMoreServices={setMoreServices}
        >
          <ContainerServices
            documentTitle={props.documentTitle}
            moreServices={moreServices}
            styleCSS={props.styleCSS}
          />
        </ContainerOptionsTitles>
      </div>
    </div>
  );
}

export default ServiceListContainer;

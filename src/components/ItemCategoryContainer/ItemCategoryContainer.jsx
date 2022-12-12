import React from "react";
import ContainerOptionsTitles from "../ContainerOptionsTitles/ContainerOptionsTitles";
import "../DocumentListContainer/DocumentListContainer.css";
import SearchBarCategory from "../SearchBarCategory/SearchBarCategory";

function ItemCategoryContainer() {
  return (
    <div className="container-items">
      <div className="container-latest">
        <ContainerOptionsTitles subtitle="Documents">
          <SearchBarCategory />
        </ContainerOptionsTitles>
      </div>
    </div>
  );
}

export default ItemCategoryContainer;

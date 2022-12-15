import React from "react";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import "./ContainerButtonFiltersDocuments.css";

function ContainerButtonFiltersDocuments({ buttonFilter }) {
  return (
    <div
      className={buttonFilter ? "button-filters" : "button-filters-not-display"}
    >
      <ButtonFilter name="Ordenar por Precio"/>
      <ButtonFilter name="Ordenar A-Z"/>
      <ButtonFilter name="Filtrar Favoritos"/>
    </div>
  );
}

export default ContainerButtonFiltersDocuments;

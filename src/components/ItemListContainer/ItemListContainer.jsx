import React from "react";
import ContainerOptionsTitles from '../ContainerOptionsTitles/ContainerOptionsTitles';
import ContainerCards from '../ContainerCards/ContainerCards';
import ContainerServices from '../ContainerServices/ContainerServices';
import '../ItemListContainer/ItemListContainer.css';

// { /* Comando - rfce */ }
function ItemListContainer() {
  return (
    <div className="container-items">
      <div className="container-latest">
        <ContainerOptionsTitles subtitle="Latest documents" />
        < ContainerCards />
        <ContainerOptionsTitles subtitle="Our services" />
        < ContainerServices />
      </div>
    </div>
  );
}

export default ItemListContainer;

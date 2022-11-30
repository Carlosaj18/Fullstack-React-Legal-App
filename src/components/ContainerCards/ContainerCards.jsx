import React from "react";
import Card from '../../components/Card/Card';
import '../Card/Card.css';


function ContainerCards() {
  return (
    <div className="container-cards">
      <Card title="Archivo #1" date="22/11/22" signatures="1/3"/>
      <Card title="Archivo #2" date="22/11/22" signatures="2/3"/>
      <Card title="Archivo #3" date="22/11/22" signatures="3/3"/>
    </div>
  );
}

export default ContainerCards;

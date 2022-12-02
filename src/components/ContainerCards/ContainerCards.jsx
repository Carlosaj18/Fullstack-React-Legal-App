import React from "react";
import Card from '../../components/Card/Card';
import '../Card/Card.css';
import latestDocuments from '../data/latestDocuments';

function ContainerCards() {
  return (
    <div className="container-cards">
      {latestDocuments.map((item, i) => {
        return (
          <Card 
            title={item.title}
            date={item.date}
            signatures={item.signatures}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default ContainerCards;

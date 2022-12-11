import React from "react";
import Document from "../Document/Document";

function DocumentList(props) {

  console.log(props.latestDocuments)
  return (
    <div className="container-cards">
      {props.latestDocuments.map((item) => {
        return (
          <Document
            id={item.id}
            title={item.title}
            date={props.date}
            signatures={item.signatures}
            image={item.image}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default DocumentList;

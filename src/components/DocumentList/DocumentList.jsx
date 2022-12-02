import React from "react";
import Document from "../Document/Document";

function DocumentList(props) {
  return (
    <div className="container-cards">
      {props.latestDocuments.map((item) => {
        return (
          <Document
            title={item.title}
            date={item.date}
            signatures={item.signatures}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default DocumentList;

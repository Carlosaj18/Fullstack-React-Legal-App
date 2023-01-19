import React from "react";
import Document from "../Document/Document";

function DocumentList(props) {
  return (
    <div className="container-cards" style={props.styleCSS}>
      {props.latestDocuments.map((item) => {
        return (
          <Document
            id={item.id}
            title={item.title}
            date={props.date}
            signatures={item.signatures}
            image={item.image}
            key={item.id}
            template={props.template}
          />
        );
      })}
    </div>
  );
}

export default DocumentList;

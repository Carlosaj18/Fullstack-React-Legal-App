import React, { useState, useEffect } from "react";
import "../Document/Document.css";
import APICallDocuments from "../services/mockDocuments";
import DocumentList from "../DocumentList/DocumentList";

function ContainerCards() {
  const [document, setDocument] = useState([]);

  useEffect(() => {
    APICallDocuments().then((response) => {
      setDocument(response);
    });
  }, []);

  return <DocumentList latestDocuments={document} />;
}

export default ContainerCards;

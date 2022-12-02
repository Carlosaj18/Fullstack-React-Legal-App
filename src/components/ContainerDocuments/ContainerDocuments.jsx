import React, { useState, useEffect } from "react";
import "../Document/Document.css";
import APICallDocuments from "../services/mockDocuments";
import DocumentList from "../DocumentList/DocumentList";

function ContainerCards() {
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    APICallDocuments().then((response) => {
      setDocument(response);
    });

    let hora = new Date().toLocaleTimeString();
    setDate(hora);
  }, []);


  

  return <DocumentList latestDocuments={document} date={date}/>;
}

export default ContainerCards;

import React, { useState, useEffect } from "react";
import "../Document/Document.css";
import { APICallSingleDocuments } from "../services/mockDocuments";
import DocumentDetail from '../DocumentDetail/DocumentDetail';

function DocumentDetailContainer() {
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    APICallSingleDocuments().then((response) => {
      console.log(response);
      setDocument(response);
    });

    let hora = new Date().toLocaleTimeString();
    setDate(hora);
  }, []);

  return <div className="container-documents">
          <DocumentDetail document={document} date={date}/>;
        </div>
}

export default DocumentDetailContainer;

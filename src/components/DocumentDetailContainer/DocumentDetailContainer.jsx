import React, { useState, useEffect } from "react";
import { APICallSingleDocuments } from "../services/mockDocuments";
import DocumentDetail from "../DocumentDetail/DocumentDetail";
import { useParams } from "react-router-dom";
import './DocumentDetailContainer.css';
import DocumentInformation from '../DocumentInformation/DocumentInformation'

function DocumentDetailContainer() {
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();
  let { id } = useParams();

  useEffect(() => {
    APICallSingleDocuments(id)
      .then((response) => {
        setDocument(response);
      })
      .catch((error) => alert("Documento not found"));

    let hora = new Date().toLocaleTimeString();
    setDate(hora);
  }, [id]);

  return (
    <div className="container-detail-document">
      <DocumentDetail document={document} date={date} />
      <DocumentInformation document={document}/>

    </div>
  );
}

export default DocumentDetailContainer;

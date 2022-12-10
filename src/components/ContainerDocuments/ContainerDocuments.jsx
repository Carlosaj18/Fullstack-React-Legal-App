import React, { useState, useEffect } from "react";
import "../Document/Document.css";
import APICallDocuments from "../services/mockDocuments";
import { APICallDocumentsCategory } from "../services/mockDocuments";
import DocumentList from "../DocumentList/DocumentList";
import { useParams } from "react-router-dom";

function ContainerDocuments(props) {

  console.log(props.categoryId);
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();

  // Como se añade ese parametro a la URL
  let categoryId = useParams().categoryId;

  useEffect(() => {
    if (categoryId === undefined) {
      APICallDocuments()
        .then((response) => {
          setDocument(response);
        })
        .catch((error) => alert(error));

      let hora = new Date().toLocaleTimeString();
      setDate(hora);
    } else {
      APICallDocumentsCategory(categoryId)
        .then((response) => {
          setDocument(response);
        })
        .catch((error) => alert(error));
    }
  }, []);

  return <DocumentList latestDocuments={document} date={date} />;
}

export default ContainerDocuments;

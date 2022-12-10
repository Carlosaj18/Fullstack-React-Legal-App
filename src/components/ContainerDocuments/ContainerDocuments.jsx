import React, { useState, useEffect } from "react";
import "../Document/Document.css";
import APICallDocuments from "../services/mockDocuments";
import { APICallDocumentsCategory } from "../services/mockDocuments";
import DocumentList from "../DocumentList/DocumentList";
import { useParams } from "react-router-dom";

function ContainerDocuments(props) {
  const [category, setCategory] = useState("");
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();

  function categoryId(value) {
    if (value === "Contract") {
      setCategory(1);
    } else if (value === "Agreement") {
      setCategory(2);
    } else {
      setCategory(undefined);
    }
  }

  // Como se añade ese parametro a la URL
  //let categoryId = useParams().categoryId;

  useEffect(() => {
    console.log("Category ", category);
    if (category === undefined || category === null) {
      APICallDocuments()
        .then((response) => {
          setDocument(response);
        })
        .catch((error) => alert(error));
      let hora = new Date().toLocaleTimeString();
      setDate(hora);
    } else {
      APICallDocumentsCategory(categoryId(props.categoryId))
        .then((response) => {
          console.log(response);
          setDocument(response);
        })
        .catch((error) => console.error(error));
    }
  }, [category] || [document]);
  return <DocumentList latestDocuments={document} date={date} />;
}

export default ContainerDocuments;

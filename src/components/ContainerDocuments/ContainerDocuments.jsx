import React, { useState, useEffect } from "react";
import "../Document/Document.css";
import APICallDocuments from "../services/mockDocuments";
import {
  APICallDocumentsCategory,
  APICallDocumentsCategoryId,
  APICallDocumentsTitle,
  APICallDocumentsMore
} from "../services/mockDocuments";
import DocumentList from "../DocumentList/DocumentList";
import { useParams } from "react-router-dom";

function ContainerDocuments(props) {
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();
  let categoryId = useParams().categoryId;

  useEffect(() => {
    {/** console.log("App Mount"); */}

    let hora = new Date().toLocaleTimeString();
    setDate(hora);

    if (props.categoryId) {
      APICallDocumentsCategory(props.categoryId)
        .then((response) => {
          setDocument(response);
        })
        .catch((error) => console.error(error));
    } else if (categoryId) {
      APICallDocumentsCategoryId(categoryId)
        .then((response) => {
          setDocument(response);
        })
        .catch((error) => console.error(error));
    } else if (props.documentTitle) {
      APICallDocumentsTitle(props.documentTitle)
        .then((response) => {
          setDocument(response);
        })
        .catch((error) => console.error(error));
    } else if (props.moreDocuments) {
      APICallDocumentsMore()
        .then((response) => {
          setDocument(response);
        })
        .catch((error) => console.error(error));
    } else {
      APICallDocuments()
        .then((response) => {
          setDocument(response);
        })
        .catch((error) => console.error(error));
    }

    {/** return () => {console.log("Will Unmounted")} */}
  }, [props.categoryId, props.documentTitle, props.moreDocuments, categoryId]);

  {/** console.log("Will Render"); */}

  return <DocumentList latestDocuments={document} date={date} />;
}

export default ContainerDocuments;

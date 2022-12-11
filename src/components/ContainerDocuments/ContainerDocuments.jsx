import React, { useState, useEffect } from "react";
import "../Document/Document.css";
import APICallDocuments from "../services/mockDocuments";
import { APICallDocumentsCategory,  APICallDocumentsTitle } from "../services/mockDocuments";
import DocumentList from "../DocumentList/DocumentList";

function ContainerDocuments(props) {

  const [category, setCategory] = useState({ value: props.categoryId });
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();

  // Como se añade ese parametro a la URL
  //let categoryId = useParams().categoryId;

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
    } else if (props.documentTitle){
      APICallDocumentsTitle(props.documentTitle)
        .then((response) => {
          console.log(response);
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

    {/** return () => {
      console.log("Will Unmounted")
    } */}
  }, [props.categoryId, props.documentTitle]);

  {/** console.log("Will Render"); */}

  return <DocumentList latestDocuments={document} date={date} />;
}

export default ContainerDocuments;

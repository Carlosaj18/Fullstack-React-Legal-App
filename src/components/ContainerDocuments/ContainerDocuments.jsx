import React, { useState, useEffect } from "react";
import "../Document/Document.css";
import APICallDocuments from "../services/mockDocuments";
import {
  APICallDocumentsCategory,
  APICallDocumentsCategoryId,
  APICallDocumentsTitle,
  APICallDocumentsMore,
  APICallDocumentsCheckBox,
} from "../services/mockDocuments";
import DocumentList from "../DocumentList/DocumentList";
import { useParams } from "react-router-dom";
import DocumentCategoryRow from "../DocumentCategory/DocumentCategoryRow";

function ContainerDocuments(props) {
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();
  let categoryId = useParams().categoryId;
  let headingContratos = false;
  let headingAcuerdos = false;
  let headingTemplates = false;
  let lastCategory = null;
  let contratos;
  let acuerdos;
  let templates;

  useEffect(() => {
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
    } else if (props.searchCheckBox) {
      APICallDocumentsCheckBox(props.searchCheckBox)
        .then((response) => {
          setDocument(response);
        })
        .catch((error) => console.error(error));
    } else if (props.searchCheckBox && props.documentTitle) {
      APICallDocumentsCheckBox(props.searchCheckBox)
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
  }, [
    props.categoryId,
    props.documentTitle,
    props.moreDocuments,
    props.searchCheckBox,
    categoryId,
  ]);

  document.forEach((doc) => {
    if (doc.category !== lastCategory && doc.category === "contratos") {
      headingContratos = true;
    }
    lastCategory = doc.category;
  });

  document.forEach((doc) => {
    if (doc.category !== lastCategory && doc.category === "acuerdos") {
      headingAcuerdos = true;
    }
    lastCategory = doc.category;
  });

  document.forEach((doc) => {
    if (doc.category !== lastCategory && doc.category === "templates") {
      headingTemplates = true;
    }
    lastCategory = doc.category;
  });

  contratos = document.filter((contrato) => {
    return contrato.category === "contratos";
  });
  acuerdos = document.filter((acuerdo) => {
    return acuerdo.category === "acuerdos";
  });
  templates = document.filter((template) => {
    return template.category === "templates";
  });

  return (
    <>
      {" "}
      {headingContratos === true ? (
        <DocumentCategoryRow category="Contratos" />
      ) : null}
      {contratos.length > 0 ? (
        <DocumentList latestDocuments={contratos} date={date} />
      ) : null}
      {headingAcuerdos === true ? (
        <DocumentCategoryRow category="Acuerdos" />
      ) : null}
      {acuerdos.length > 0 ? (
        <DocumentList latestDocuments={acuerdos} date={date} />
      ) : null}
      {headingTemplates === true ? (
        <DocumentCategoryRow category="Templates" />
      ) : null}
      {templates.length > 0 ? (
        <DocumentList latestDocuments={templates} date={date} />
      ) : null}
      {document <= 0 ? (
        <div>
          <h1 style={{ textAlign: "center", color: "#234F1E " }}>
            {" "}
            No hay documentos con esos criterios{" "}
          </h1>
        </div>
      ) : (
        null
      )}
    </>
  );
}

export default ContainerDocuments;

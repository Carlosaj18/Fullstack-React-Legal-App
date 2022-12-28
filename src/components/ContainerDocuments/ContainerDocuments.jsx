import React, { useState, useEffect } from "react";
import "../Document/Document.css";
import {
  APICallDocumentsCategoryId,
  APICallDocumentsCheckBox,
} from "../services/mockDocuments";
import {
  APICallDocuments,
  APICallDocumentsCategory,
  APICallDocumentsTitle,
  APICallDocumentsMore,
} from "../services/fireBase";
import DocumentList from "../DocumentList/DocumentList";
import { useParams } from "react-router-dom";
import DocumentCategoryRow from "../DocumentCategory/DocumentCategoryRow";
import Loader from "../Loader/Loader";

function ContainerDocuments(props) {
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);
  const [ultimo, setUltimo] = React.useState(null);
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
      setLoading(true);
      APICallDocumentsCategory(props.categoryId)
        .then((response) => {
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } else if (categoryId) {
      setLoading(true);
      APICallDocumentsCategoryId(categoryId)
        .then((response) => {
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } else if (props.documentTitle) {
      setLoading(true);
      APICallDocumentsTitle(props.documentTitle)
        .then((response) => {
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } else if (props.moreDocuments) {
      // setarlo en false
      setLoading(true);
      APICallDocumentsMore(ultimo, setUltimo)
        .then((response) => {
          console.log(response)
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } else if (props.searchCheckBox) {
      setLoading(true);
      APICallDocumentsCheckBox(props.searchCheckBox)
        .then((response) => {
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } else if (props.searchCheckBox && props.documentTitle) {
      setLoading(true);
      APICallDocumentsCheckBox(props.searchCheckBox)
        .then((response) => {
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } else {
      setLoading(true);
      APICallDocuments(setUltimo)
        .then((response) => {
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [props, categoryId]);

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
      {loading ? (
        <Loader />
      ) : contratos.length > 0 ? (
        <DocumentList latestDocuments={contratos} date={date} />
      ) : null}
      {headingAcuerdos === true ? (
        <DocumentCategoryRow category="Acuerdos" />
      ) : null}
      {loading ? (
        <Loader />
      ) : acuerdos.length > 0 ? (
        <DocumentList latestDocuments={acuerdos} date={date} />
      ) : null}
      {headingTemplates === true ? (
        <DocumentCategoryRow category="Templates" />
      ) : null}
      {loading ? (
        <Loader />
      ) : templates.length > 0 ? (
        <DocumentList latestDocuments={templates} date={date} />
      ) : null}
      {loading ? (
        <Loader />
      ) : document <= 0 ? (
        <div>
          <h1 style={{ textAlign: "center", color: "#234F1E " }}>
            {" "}
            No hay documentos con esos criterios{" "}
          </h1>
        </div>
      ) : null}
    </>
  );
}

export default ContainerDocuments;

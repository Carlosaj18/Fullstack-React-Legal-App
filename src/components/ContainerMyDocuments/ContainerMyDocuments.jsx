import React, { useContext, useState, useEffect } from "react";
import "../Document/Document.css";
import {
  APICallMyDocuments,
  APICallDocumentsCategoryId,
  APICallDocumentsCategory,
  APICallDocumentsMore,
} from "../services/fireBase";
import DocumentList from "../DocumentList/DocumentList";
import { useParams } from "react-router-dom";
import DocumentCategoryRow from "../DocumentCategory/DocumentCategoryRow";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { ArrayDataContext } from "../../Contexto/ArrayDataProviderContext";

function ContainerMyDocuments(props) {
  const { arrayAPI, APICallContextFireBase } = useContext(ArrayDataContext);
  const [arrayAPIMyDouments, setArrayAPIMyDouments] = useState([]);
  const [document, setDocument] = useState([]);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);
  const [ultimo, setUltimo] = useState(null);
  let categoryId = useParams().categoryId;
  let headingContratos = false;
  let headingAcuerdos = false;
  let headingTemplates = false;
  let lastCategory = null;
  let contratos;
  let acuerdos;
  let templates;
  let searchTerm = useSelector((state) => state.searhStoreTerm);

  useEffect(() => {
    if (arrayAPIMyDouments.length > 0) {
      let hora = new Date().toLocaleTimeString();
      setDate(hora);
      if (props.categoryName !== undefined) {
        console.log("props.categoryName");
        setLoading(true);
        APICallDocumentsCategory(props.categoryName)
          .then((response) => {
            setDocument(response);
            setLoading(false);
          })
          .catch((error) => console.error("Error categoryName", error));
      } else if (categoryId !== undefined) {
        console.log("categoryId");
        setLoading(true);
        APICallDocumentsCategoryId(parseInt(categoryId))
          .then((response) => {
            setDocument(response);
            setLoading(false);
          })
          .catch((error) => console.error("Error categoryId", error));
      } else if (searchTerm.length > 0) {
        setLoading(true);
        let element = [...searchTerm];
        let lastElement = element[element.length - 1];
        const documentFound =
          lastElement === ""
            ? arrayAPIMyDouments
            : arrayAPIMyDouments.filter((document) =>
                document.title.toLowerCase().includes(lastElement.toLowerCase())
              );
        if (documentFound.length > 0) {
          setLoading(false);
          setDocument(documentFound);
        }
      } else if (props.documentTitle !== "") {
        console.log("props.documentTitle");
        setLoading(true);
        const documentFound =
          props.documentTitle === ""
            ? arrayAPIMyDouments.slice(0, 3)
            : arrayAPIMyDouments.filter((document) =>
                document.title
                  .toLowerCase()
                  .includes(props.documentTitle.toLowerCase())
              );
        if (documentFound.length > 0) {
          setLoading(false);
          setDocument(documentFound);
        }
      } else if (props.documentTitle !== undefined && searchTerm.length > 0) {
        console.log("props.documentTitle && searchTerm");
        setLoading(true);
        const documentFound =
          props.documentTitle === ""
            ? arrayAPIMyDouments
            : arrayAPIMyDouments.filter((document) =>
                document.title
                  .toLowerCase()
                  .includes(props.documentTitle.toLowerCase())
              );
        if (documentFound.length > 0) {
          setLoading(false);
          setDocument(documentFound);
        }
      } else if (props.moreDocuments !== "") {
        console.log("props.moreDocuments");
        props.setMoreDocuments(false);
        setLoading(true);
        APICallDocumentsMore(ultimo, setUltimo)
          .then((response) => {
            setDocument(response);
            setLoading(false);
          })
          .catch((error) => console.error("Error more docs", error));
      } else if (
        props.searchCheckBox !== "" &&
        props.searchCheckBox !== undefined
      ) {
        console.log("props.searchCheckBox");
        setLoading(true);
        setTimeout(() => {
          let arrayOptions = [];
          let filterCombo = props.searchCheckBox.filter((checkBox) => {
            return checkBox !== undefined;
          });
          if (filterCombo.length > 0) {
            filterCombo.forEach((element) => {
              let array = arrayAPIMyDouments.filter((document) => {
                return (
                  document.signed === element ||
                  document.category === element ||
                  document.state === element ||
                  document.area === element
                );
              });
              if (array.length > 0) arrayOptions.push(...array);
            });
            if (arrayOptions) {
              let tem = [];
              arrayOptions.forEach((option) => {
                if (!tem.includes(option)) {
                  tem.push(option);
                }
              });
              setDocument(tem);
              setLoading(false);
            } else console.log("No document found");
          } else {
            setLoading(true);
            APICallMyDocuments(setUltimo)
              .then((response) => {
                setDocument(response);
                setLoading(false);
              })
              .catch((error) => console.error("Else error", error));
          }
        }, 1000);
      } else {
        console.log("Else My Documents");
        setLoading(true);
        APICallMyDocuments(setUltimo)
          .then((response) => {
            setDocument(response);
            setLoading(false);
          })
          .catch((error) => console.error("Else error", error));
      }
    } else {
      console.log("Entro y carga DB en My Documents");
      setLoading(true);
      APICallContextFireBase();
      let myDocument = arrayAPI.filter((item) => item.myDocument === true);
      setArrayAPIMyDouments(myDocument);
      setLoading(false);
    }
  }, [props, props.documentTitle, categoryId, searchTerm, arrayAPI, setUltimo]);

  if (document !== undefined) {
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
  }

  return (
    <>
      {headingContratos ? <DocumentCategoryRow category="Contratos" /> : null}
      {loading ? (
        <Loader />
      ) : (
        contratos.length > 0 && (
          <DocumentList
            latestDocuments={contratos}
            date={date}
            styleCSS={props.styleCSS}
          />
        )
      )}
      {headingAcuerdos ? <DocumentCategoryRow category="Acuerdos" /> : null}
      {loading ? (
        <Loader />
      ) : (
        acuerdos.length > 0 && (
          <DocumentList
            latestDocuments={acuerdos}
            date={date}
            styleCSS={props.styleCSS}
          />
        )
      )}
      {headingTemplates ? <DocumentCategoryRow category="Templates" /> : null}
      {loading ? (
        <Loader />
      ) : (
        templates.length > 0 && (
          <DocumentList
            latestDocuments={templates}
            date={date}
            styleCSS={props.styleCSS}
          />
        )
      )}
      {loading ? (
        <Loader />
      ) : document === 0 ? (
        <div>
          <h1 style={{ textAlign: "center", color: "#234F1E " }}>
            No hay documentos con esos criterio
          </h1>
        </div>
      ) : null}
    </>
  );
}

export default ContainerMyDocuments;

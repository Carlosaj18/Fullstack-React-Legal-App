import React, { useState, useEffect } from "react";
import { APICallSingleDocumentsIndex } from "../services/mockDocuments";
import {
  APICallSingleDocuments,
  APICallSingleDocumentsNext,
  APICallDocumentsFireBase,
} from "../services/fireBase";
import DocumentDetail from "../DocumentDetail/DocumentDetail";
import { useParams } from "react-router-dom";
import DocumentInformation from "../DocumentInformation/DocumentInformation";
import Loader from "../Loader/Loader";
import "./DocumentDetailContainer.css";

function DocumentDetailContainer() {
  const [document, setDocument] = useState([]);
  const [arrayAPI, setArrayAPI] = useState([]);
  const [index, setIndex] = useState(0);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  let idDocument = index;

  useEffect(() => {
    if (id !== undefined && idDocument !== 0) {
      if (arrayAPI.length > 0) {
        setLoading(true);
        let temArray = [...arrayAPI];
        if (index === 0) {
          let indexArray = temArray.findIndex(
            (documentArray) => documentArray.id === id
          );
          setIndex(indexArray);
        } else {
          setDocument(temArray[index]);
          setLoading(false);
        }
      } else {
        APICallDocumentsFireBase(setArrayAPI);
      }
    } else {
      APICallSingleDocuments(id)
        .then((response) => {
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error("Documento not found"));
    }

    let hora = new Date().toLocaleTimeString();
    setDate(hora);
  }, [id, idDocument, document]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-detail-document">
          <div className="container-detail-document-flex">
            <DocumentDetail
              document={document}
              date={date}
              setIndex={setIndex}
              index={index}
            />
            <DocumentInformation document={document} />
          </div>
        </div>
      )}
    </>
  );
}

export default DocumentDetailContainer;

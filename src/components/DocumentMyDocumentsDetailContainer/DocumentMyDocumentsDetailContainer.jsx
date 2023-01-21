import React, { useContext, useState, useEffect } from "react";
import { APICallSingleDocuments } from "../services/fireBase";
import DocumentDetail from "../DocumentDetail/DocumentDetail";
import { useParams } from "react-router-dom";
import DocumentInformationMyDocs from "../DocumentInformationMyDocs/DocumentInformationMyDocs";
import Loader from "../Loader/Loader";
import { ArrayDataContext } from "../../Contexto/ArrayDataProviderContext";
import "./DocumentMyDocumentsDetailContainer.css";

function DocumentMyDocumentsDetailContainer() {
  const { arrayAPI, APICallContextFireBase } = useContext(ArrayDataContext);
  const [document, setDocument] = useState([]);
  const [index, setIndex] = useState(-1);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  let idDocument = index;

  useEffect(() => {
    if (id !== undefined && idDocument !== -1) {
      if (arrayAPI.length > 0) {
        setLoading(true);
        let temArray = [...arrayAPI];
        if (index === -1) {
          let indexArray = temArray.findIndex(
            (documentArray) => documentArray.id === id
          );
          setIndex(indexArray);
        } else if (index === temArray.length) {
          setIndex(-1);
        } else {
          setDocument(temArray[index]);
          setLoading(false);
        }
      } else {
        APICallContextFireBase();
        setLoading(false);
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
  }, [id, idDocument, document, index]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-detail-document">
          <div className="container-detail-document-flex-my-doc">
            <DocumentDetail
              document={document}
              date={date}
              setIndex={setIndex}
              index={index}
            />
            <DocumentInformationMyDocs document={document} />
          </div>
        </div>
      )}
    </>
  );
}

export default DocumentMyDocumentsDetailContainer;

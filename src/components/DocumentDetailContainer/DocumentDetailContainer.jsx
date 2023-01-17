import React, { useContext, useState, useEffect } from "react";
import {
  APICallSingleDocuments,
} from "../services/fireBase";
import DocumentDetail from "../DocumentDetail/DocumentDetail";
import { useParams } from "react-router-dom";
import DocumentInformation from "../DocumentInformation/DocumentInformation";
import Loader from "../Loader/Loader";
import { ArrayDataContext } from "../../Contexto/ArrayDataProviderContext";
import "./DocumentDetailContainer.css";

function DocumentDetailContainer() {
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

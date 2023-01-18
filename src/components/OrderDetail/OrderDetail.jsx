import React, {useState} from "react";
import { useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./OrderDetail.css";
import { Link } from "react-router-dom";
import DocumentListContainer from "../DocumentListContainer/DocumentListContainer";
import ContainerDocuments from "../ContainerDocuments/ContainerDocuments";

function OrderDetail(props) {
  let { orderId } = useParams();

  let style = {
    display: "flex",
    flexDirection: "row",
    gap: "3em",
    padding: "10px",
    height: "fit-content",
    justifyContent: "center",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    paddingBottom: "15px",
  };

  const [moreDocuments, setMoreDocuments] = useState("");

  const childToParentMoreElements = (childdata) => {
    setMoreDocuments(childdata);
  };

  return (
    <>
      <div className="order-detail-container">
        <div className="order-detail-flex">
          <h1>Gracias por tu compra</h1>
          <div className="order-detail-flex-bk">
            Se genero la orden correctamente, tu numero de ticket es:
            <Link>{orderId}</Link>
          </div>
        </div>
      </div>
      <div className="documents-related-orden-view">
        <DocumentListContainer
          buttonFilter={props.buttonFilter}
          documentTitle={props.documentTitle}
          subtitle="Últimos Documentos"
          childToParentMoreElements={childToParentMoreElements}
          containerDocument={
            <ContainerDocuments
              searchCheckBox={props.searchCheckBox}
              documentTitle={props.documentTitle}
              styleCSS={style}
              moreDocuments={moreDocuments}
              setMoreDocuments={setMoreDocuments}
            />
          }
        />
      </div>
      <SideBar />
    </>
  );
}

export default OrderDetail;

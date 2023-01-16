import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./OrderDetail.css";

function OrderDetail() {
  let { orderId } = useParams();
  return (
    <>
      <div className="order-detail-container">
        <div className="order-detail-flex">
          <h1>Gracias por tu compra</h1>
          <p>
            Se genero la orden correctamente, tu numero de ticket es:{" "}
            <stron>{orderId}</stron>
          </p>
        </div>
      </div>
      <SideBar />
    </>
  );
}

export default OrderDetail;

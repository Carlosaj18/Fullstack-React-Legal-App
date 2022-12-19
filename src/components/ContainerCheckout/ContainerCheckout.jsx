import React, { useState } from "react";
import "./ContainerCheckout.css";
import ContainerCheckoutRight from "../ContainerCheckoutRight/ContainerCheckoutRight";
import ContainerCheckoutLeftForm from "../ContainerCheckoutLeftForm/ContainerCheckoutLeftForm";
import ContainerCheckoutLeftCheckPago from "../ContainerCheckoutLeftCheckPago/ContainerCheckoutLeftCheckPago";

function ContainerCheckout() {
  const [isActiveForm, setIsActiveForm] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  return (
    <>
      <div className="container-checkout">
        {isActiveForm ? (
          <ContainerCheckoutLeftForm
            setUserInfo={setUserInfo}
            setIsActiveForm={setIsActiveForm}
            isActiveForm={isActiveForm}
          />
        ) : (
          <ContainerCheckoutLeftCheckPago
            nombre={`${userInfo.nombre} ${userInfo.apellido}`}
            email={userInfo.email}
            address={`${userInfo.address}, ${userInfo.ciudad}, ${userInfo.pais}: ${userInfo.codigoPostal}`}
            telefono={userInfo.phone}
          />
        )}
        <ContainerCheckoutRight />
      </div>
    </>
  );
}

export default ContainerCheckout;

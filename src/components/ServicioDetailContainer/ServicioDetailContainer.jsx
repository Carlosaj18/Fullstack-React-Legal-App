import React, { useState, useEffect } from "react";
import { APICallSingleService } from "../services/mockServices";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { useParams } from "react-router-dom";
import './ServicioDetailContainer.css';
import ServiceInformation from "../ServiceInformation/ServiceInformation";

function ServicioDetailContainer() {
  const [service, setService] = useState([]);
  const [date, setDate] = useState();
  let { id } = useParams();

  useEffect(() => {
    APICallSingleService(id)
      .then((response) => {
        setService(response);
      })
      .catch((error) => alert("Service not found"));

    let hora = new Date().toLocaleTimeString();
    setDate(hora);
  }, [id]);

  return (
    <div className="container-detail-service">
      <ServiceDetail service={service} date={date} />
      <ServiceInformation service={service} />
    </div>
  );
}

export default ServicioDetailContainer;

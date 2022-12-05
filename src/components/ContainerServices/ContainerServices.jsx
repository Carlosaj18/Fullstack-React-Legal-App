import React, { useState, useEffect } from "react";
import "../ContainerServices/ContainerServices.css";
import APICallServices from "../services/mockServices";
import ServiceList from '../ServiceList/ServiceList'

function ContainerServices() {

  //console.log("%cRender/Updated", "color:green");
  // 2. Creamos un estado para los servicios
  const [service, setService] = useState([]);

  // 3. Creamos un efecto de montaje
  useEffect(() => {
    // 4. Llamo a la Promesa y guardo el resultado en un estado
    APICallServices().then((response) => {
      setService(response);
    });
  }, []);

  return (
    <ServiceList service={service} />
  );
}

export default ContainerServices;

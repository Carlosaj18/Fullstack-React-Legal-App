import React, { useState, useEffect } from "react";
import "../ContainerServices/ContainerServices.css";
import APICallServices, {
  APICallServicesMore,
  APICallServiceCategoryId,
  APICallServicesTitle
} from "../services/mockServices";
import ServiceList from "../ServiceList/ServiceList";
import { useParams } from "react-router-dom";

function ContainerServices(props) {
  const [service, setService] = useState([]);
  let serviceId = useParams().serviceId;

  useEffect(() => {
    if (props.moreServices) {
      APICallServicesMore()
        .then((response) => {
          setService(response);
        })
        .catch((error) => console.error(error));
    } else if (serviceId) {
      APICallServiceCategoryId(serviceId)
        .then((response) => {
          setService(response);
        })
        .catch((error) => console.error(error));
    } else if (props.documentTitle) {
      APICallServicesTitle(props.documentTitle)
        .then((response) => {
          setService(response);
        })
        .catch((error) => console.error(error));
    } else {
      APICallServices().then((response) => {
        setService(response);
      });
    }
  }, [props.moreServices, props.documentTitle, serviceId]);

  return <ServiceList service={service} />;
}

export default ContainerServices;

import React, { useState, useEffect } from "react";
import "../ContainerServices/ContainerServices.css";
import APICallServices, {
  APICallServicesMore,
  APICallServiceCategoryId,
  APICallServicesTitle,
} from "../services/mockServices";
import ServiceList from "../ServiceList/ServiceList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ContainerServices(props) {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  let serviceId = useParams().serviceId;

  useEffect(() => {
    if (props.moreServices) {
      setLoading(true);
      APICallServicesMore()
        .then((response) => {
          setService(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } else if (serviceId) {
      setLoading(true);
      APICallServiceCategoryId(serviceId)
        .then((response) => {
          setService(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } /** else if (props.documentTitle !== undefined) {
      setLoading(true);
      APICallServicesTitle(props.documentTitle)
        .then((response) => {
          setService(response);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } */ else {
      setLoading(true);
      APICallServices().then((response) => {
        setService(response);
        setLoading(false);
      });
    }
  }, [props.moreServices, props.documentTitle, serviceId]);

  //console.log("Loading Container Service", loading);

  return <>{loading ? <Loader /> : <ServiceList service={service} />}</>;
}

export default ContainerServices;

import { createContext, useState } from "react";
import { APICallDocumentsFireBase } from "../components/services/fireBase";

export const ArrayDataContext = createContext();

export const ArrayDataProviderContext = ({ children }) => {
  const [arrayAPI, setArrayAPI] = useState([]);

  const APICallContextFireBase = () => {
    APICallDocumentsFireBase().then((response) => {
      setArrayAPI(response);
    });
  };

  return (
    <ArrayDataContext.Provider value={{arrayAPI, APICallContextFireBase}}>
      {children}
    </ArrayDataContext.Provider>
  );
};

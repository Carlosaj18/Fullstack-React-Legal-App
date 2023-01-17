import React, { useContext, useState } from "react";
import "./FilterListContainer.css";
import InputCheckBox from "../InputCheckBox/InputCheckBox";
import { ArrayDataContext } from "../../Contexto/ArrayDataProviderContext";

function FilterListContainer({ childToParentCheckBox }) {
  let optionCheckBox = [
    "firmado",
    "sinFirma",
    "contratos",
    "acuerdos",
    "due-diligence",
    "minutas",
    "templates",
    "pre-contractual",
    "contractual",
    "post-contractual",
    "derecho-laboral",
    "derecho-comercial",
    "derecho-constitucional",
    "derecho-administrativo",
    "derecho-procesal",
    "derecho-tributario",
    "derecho-internacional-publico",
    "derecho-civil",
    "derecho-mercantil",
    "derecho-internacional-privado",
  ];
  const { arrayAPI } = useContext(ArrayDataContext);
  const [checkedState, setCheckedState] = useState(new Array(19).fill(false));
  const [valueCheck, setValueCheck] = useState([]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map(
      (item, index) => (index === position ? !item : item)
      // Así, si el valor es true entonces será convertido a false usando !item y viceversa.
      // i el index no es igual al proveído por el parámetro position, entonces no estamos invirtiendo su valor y devolveremos su valor tal cual se encuentre:
    );

    setCheckedState(updatedCheckedState);

    const valueArray = updatedCheckedState.map((currentState, index) => {
      if (currentState === true) {
        return optionCheckBox[index];
      }
    });
    setValueCheck((valueArray) => valueArray);
    childToParentCheckBox(valueArray);
  };

  return (
    <div className="filter-section">
      <div>
        <div className="firma">
          <h3>Documento Firmado</h3>
          <InputCheckBox
            title="Firmado"
            name="firmado"
            handleCheck={checkedState[0]}
            handleOnChange={() => handleOnChange(0)}
            onload={arrayAPI.filter((item) => item.signed === "firmado").length}
          />
          <InputCheckBox
            title="Sin Firma"
            name="sinFirma"
            handleCheck={checkedState[1]}
            handleOnChange={() => handleOnChange(1)}
            onload={
              arrayAPI.filter((item) => item.signed === "sinFirma").length
            }
          />
        </div>
        <div className="category">
          <h3>Categorias de Documentos</h3>
          <InputCheckBox
            title="Contratos"
            name="contratos"
            handleCheck={checkedState[2]}
            handleOnChange={() => handleOnChange(2)}
            onload={
              arrayAPI.filter((item) => item.category === "contratos").length
            }
          />
          <InputCheckBox
            title="Acuerdos"
            name="acuerdos"
            handleCheck={checkedState[3]}
            handleOnChange={() => handleOnChange(3)}
            onload={
              arrayAPI.filter((item) => item.category === "acuerdos").length
            }
          />
          <InputCheckBox
            title="Due Diligence"
            name="due-diligence"
            handleCheck={checkedState[4]}
            handleOnChange={() => handleOnChange(4)}
            onload={
              arrayAPI.filter((item) => item.category === "due-diligence")
                .length
            }
          />
          <InputCheckBox
            title="Minutas"
            name="minutas"
            handleCheck={checkedState[5]}
            handleOnChange={() => handleOnChange(5)}
            onload={
              arrayAPI.filter((item) => item.category === "minutas").length
            }
          />
          <InputCheckBox
            title="Templates"
            name="templates"
            handleCheck={checkedState[6]}
            handleOnChange={() => handleOnChange(6)}
            onload={
              arrayAPI.filter((item) => item.category === "templates").length
            }
          />
        </div>
        <div className="etapas-contractuales">
          <h3>Etapas Contractuales</h3>
          <InputCheckBox
            title="Pre Contractual"
            name="pre-contractual"
            handleCheck={checkedState[7]}
            handleOnChange={() => handleOnChange(7)}
            onload={
              arrayAPI.filter((item) => item.state === "pre-contractual").length
            }
          />
          <InputCheckBox
            title="Contractual"
            name="contractual"
            handleCheck={checkedState[8]}
            handleOnChange={() => handleOnChange(8)}
            onload={
              arrayAPI.filter((item) => item.state === "contractual").length
            }
          />
          <InputCheckBox
            title="Post Contractual"
            name="post-contractual"
            handleCheck={checkedState[9]}
            handleOnChange={() => handleOnChange(9)}
            onload={
              arrayAPI.filter((item) => item.state === "post-contractual")
                .length
            }
          />
        </div>
        <div className="areas-juridicas">
          <h3>Especialidades dentro del derecho</h3>{" "}
          <InputCheckBox
            title="Derecho Laboral"
            name="derecho-laboral"
            handleCheck={checkedState[10]}
            handleOnChange={() => handleOnChange(10)}
            onload={
              arrayAPI.filter((item) => item.area === "derecho-laboral").length
            }
          />
          <InputCheckBox
            title="Derecho Comercial"
            name="derecho-comercial"
            handleCheck={checkedState[11]}
            handleOnChange={() => handleOnChange(11)}
            onload={
              arrayAPI.filter((item) => item.area === "derecho-comercial")
                .length
            }
          />
          <InputCheckBox
            title="Derecho Constitucional"
            name="derecho-constitucional"
            handleCheck={checkedState[12]}
            handleOnChange={() => handleOnChange(12)}
            onload={
              arrayAPI.filter((item) => item.area === "derecho-constitucional")
                .length
            }
          />
          <InputCheckBox
            title="Derecho Administrativo"
            name="derecho-administrativo"
            handleCheck={checkedState[13]}
            handleOnChange={() => handleOnChange(13)}
            onload={
              arrayAPI.filter((item) => item.area === "derecho-administrativo")
                .length
            }
          />
          <InputCheckBox
            title="Derecho Procesal"
            name="derecho-procesal"
            handleCheck={checkedState[14]}
            handleOnChange={() => handleOnChange(14)}
            onload={
              arrayAPI.filter((item) => item.area === "derecho-procesal").length
            }
          />
          <InputCheckBox
            title="Derecho Tributario"
            name="derecho-tributario"
            handleCheck={checkedState[15]}
            handleOnChange={() => handleOnChange(15)}
            onload={
              arrayAPI.filter((item) => item.area === "derecho-tributario")
                .length
            }
          />
          <InputCheckBox
            title="Derecho Internacional Publico"
            name="derecho-internacional-publico"
            handleCheck={checkedState[16]}
            handleOnChange={() => handleOnChange(16)}
            onload={
              arrayAPI.filter(
                (item) => item.area === "derecho-internacional-publico"
              ).length
            }
          />
          <InputCheckBox
            title="Derecho Civil"
            name="derecho-civil"
            handleCheck={checkedState[17]}
            handleOnChange={() => handleOnChange(17)}
            onload={
              arrayAPI.filter((item) => item.area === "derecho-civil").length
            }
          />
          <InputCheckBox
            title="Derecho Digital"
            name="derecho-digital"
            handleCheck={checkedState[18]}
            handleOnChange={() => handleOnChange(18)}
            onload={
              arrayAPI.filter((item) => item.area === "derecho-digital").length
            }
          />
          <InputCheckBox
            title="Derecho Internacional Privado"
            name="derecho-internacional-privado"
            handleCheck={checkedState[19]}
            handleOnChange={() => handleOnChange(19)}
            onload={
              arrayAPI.filter(
                (item) => item.area === "derecho-internacional-privado"
              ).length
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FilterListContainer;

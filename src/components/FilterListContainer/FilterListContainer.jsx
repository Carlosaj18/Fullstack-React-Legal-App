import React, { useState } from "react";
import "./FilterListContainer.css";

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
          <label className="container-checkbox" for="firmado">
            {" "}
            Firmado
            <input
              type="checkbox"
              id="firmado"
              name="firmado"
              value="firmado"
              checked={checkedState[0]}
              onChange={() => handleOnChange(0)}
            />
            <span className="checkmark"></span>
          </label>
          <br />

          <label className="container-checkbox" for="sinFirma">
            {" "}
            Sin Firma{" "}
            <input
              type="checkbox"
              id="sinFirma"
              name="sinFirma"
              value="sinFirma"
              checked={checkedState[1]}
              onChange={() => handleOnChange(1)}
            />
            <span className="checkmark"></span>{" "}
          </label>
          <br />
        </div>
        <div className="category">
          <h3>Categorias de Documentos</h3>
          <label className="container-checkbox" for="contratos">
            {" "}
            Contratos
            <input
              type="checkbox"
              id="contratos"
              name="contratos"
              value="contratos"
              checked={checkedState[2]}
              onChange={() => handleOnChange(2)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label className="container-checkbox" for="acuerdos">
            {" "}
            Acuerdos
            <input
              type="checkbox"
              id="acuerdos"
              name="acuerdos"
              value="acuerdos"
              checked={checkedState[3]}
              onChange={() => handleOnChange(3)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label className="container-checkbox" for="due-diligence">
            {" "}
            Due Diligence
            <input
              type="checkbox"
              id="due-diligence"
              name="due-diligence"
              value="due-diligence"
              checked={checkedState[4]}
              onChange={() => handleOnChange(4)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label className="container-checkbox" for="minutas">
            {" "}
            Minutas
            <input
              type="checkbox"
              id="minutas"
              name="minutas"
              value="minutas"
              checked={checkedState[5]}
              onChange={() => handleOnChange(5)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label className="container-checkbox" for="templates">
            {" "}
            Templates
            <input
              type="checkbox"
              id="templates"
              name="templates"
              value="templates"
              checked={checkedState[6]}
              onChange={() => handleOnChange(6)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
        </div>
        <div className="etapas-contractuales">
          <h3>Etapas Contractuales</h3>{" "}
          <label className="container-checkbox" for="pre-contractual">
            {" "}
            Pre Contractual
            <input
              type="checkbox"
              id="pre-contractual"
              name="pre-contractual"
              value="pre-contractual"
              checked={checkedState[7]}
              onChange={() => handleOnChange(7)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label className="container-checkbox" for="contractual">
            {" "}
            Contractual
            <input
              type="checkbox"
              id="contractual"
              name="contractual"
              value="contractual"
              checked={checkedState[8]}
              onChange={() => handleOnChange(8)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label className="container-checkbox" for="post-contractual">
            {" "}
            Post Contractual
            <input
              type="checkbox"
              id="post-contractual"
              name="post-contractual"
              value="post-contractual"
              checked={checkedState[9]}
              onChange={() => handleOnChange(9)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
        </div>
        <div className="areas-juridicas">
          <h3>Especialidades dentro del derecho</h3>{" "}
          <label className="container-checkbox" for="derecho-laboral">
            {" "}
            Derecho Laboral
            <input
              type="checkbox"
              id="derecho-laboral"
              name="derecho-laboral"
              value="derecho-laboral"
              checked={checkedState[10]}
              onChange={() => handleOnChange(10)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label className="container-checkbox" for="derecho-comercial">
            {" "}
            Derecho Comercial
            <input
              type="checkbox"
              id="derecho-comercial"
              name="derecho-comercial"
              value="derecho-comercial"
              checked={checkedState[11]}
              onChange={() => handleOnChange(11)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label className="container-checkbox" for="derecho-constitucional">
            {" "}
            Derecho Constitucional
            <input
              type="checkbox"
              id="derecho-constitucional"
              name="derecho-constitucional"
              value="derecho-constitucional"
              checked={checkedState[12]}
              onChange={() => handleOnChange(12)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label className="container-checkbox" for="derecho-administrativo">
            {" "}
            Derecho Administrativo
            <input
              type="checkbox"
              id="derecho-administrativo"
              name="derecho-administrativo"
              value="derecho-administrativo"
              checked={checkedState[13]}
              onChange={() => handleOnChange(13)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label className="container-checkbox" for="derecho-procesal">
            {" "}
            Derecho Procesal
            <input
              type="checkbox"
              id="derecho-procesal"
              name="derecho-procesal"
              value="derecho-procesal"
              checked={checkedState[14]}
              onChange={() => handleOnChange(14)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label className="container-checkbox" for="derecho-tributario">
            {" "}
            Derecho Tributario o Fiscal
            <input
              type="checkbox"
              id="derecho-tributario"
              name="derecho-tributario"
              value="derecho-tributario"
              checked={checkedState[15]}
              onChange={() => handleOnChange(15)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label
            className="container-checkbox"
            for="derecho-internacional-publico"
          >
            {" "}
            Derecho Internacional Público
            <input
              type="checkbox"
              id="derecho-internacional-publico"
              name="derecho-internacional-publico"
              value="derecho-internacional-publico"
              checked={checkedState[16]}
              onChange={() => handleOnChange(16)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label className="container-checkbox" for="derecho-civil">
            {" "}
            Derecho Civil
            <input
              type="checkbox"
              id="derecho-civil"
              name="derecho-civil"
              value="derecho-civil"
              checked={checkedState[17]}
              onChange={() => handleOnChange(17)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label className="container-checkbox" for="derecho-digital">
            {" "}
            Derecho Digital
            <input
              type="checkbox"
              id="derecho-digital"
              name="derecho-digital"
              value="derecho-digital"
              checked={checkedState[18]}
              onChange={() => handleOnChange(18)}
            />
            <span className="checkmark"></span>
          </label>
          <br />{" "}
          <label
            className="container-checkbox"
            for="derecho-internacional-privado"
          >
            {" "}
            Derecho Internacional Privado
            <input
              type="checkbox"
              id="derecho-internacional-privado"
              name="derecho-internacional-privado"
              value="derecho-internacional-privado"
              checked={checkedState[19]}
              onChange={() => handleOnChange(19)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
        </div>
      </div>
    </div>
  );
}

export default FilterListContainer;

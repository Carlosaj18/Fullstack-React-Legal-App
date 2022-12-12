import React, {useState, useRef}  from "react";
import "./FilterListContainer.css";

function FilterListContainer() {

    const [isSignd, setIsSignd] = useState(false);
    const ref = useRef(null);

    const handleChange = event => {
      if (event.target.checked) {
        console.log('✅ Checkbox is checked');
      } else {
        console.log('⛔️ Checkbox is NOT checked');
      }
      setIsSignd(current => !current);
    };

    console.log(ref.current.value);

  return (
    <div className="filter-section">
      <div className="firma">
        <h3>Documento Firmado</h3>
        <label className="container-checkbox" for="firmado">
          {" "}
          Firmado
          <input ref={ref} type="checkbox" id="firmado" name="firmado" value="firmado" onChange={(e)=> handleChange(e) } />
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
          />
          <span className="checkmark"></span>
        </label>
        <br />
        <label className="container-checkbox" for="minutas">
          {" "}
          Minutas
          <input type="checkbox" id="minutas" name="minutas" value="minutas" />
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
          />
          <span className="checkmark"></span>
        </label>
        <br />{" "}
        <label className="container-checkbox" for="Unsolved">
          {" "}
          Contractual
          <input
            type="checkbox"
            id="contractuasl"
            name="contractuasl"
            value="contractuasl"
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
          />
          <span className="checkmark"></span>
        </label>
        <br />
      </div>
      <div className="areas-juridicas">
        <h3>Especialidades dentro del derecho</h3>{" "}
        <label className="container-checkbox" for="solved">
          {" "}
          Derecho Laboral
          <input type="checkbox" id="solved" name="solved" value="solved" />
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
          />
          <span className="checkmark"></span>
        </label>
        <br />{" "}
        <label className="container-checkbox" for="derecho-constitucional">
          {" "}
          Derecho Constitucional
          <input type="checkbox" id="derecho-constitucional" name="derecho-constitucional" value="derecho-constitucional" />
          <span className="checkmark"></span>
        </label>
        <br />{" "}
        <label className="container-checkbox" for="derecho-administrativo">
          {" "}
          Derecho Administrativo
          <input type="checkbox" id="derecho-administrativo" name="derecho-administrativo" value="derecho-administrativo" />
          <span className="checkmark"></span>
        </label>
        <br />{" "}
        <label className="container-checkbox" for="derecho-procesal">
          {" "}
          Derecho Procesal
          <input type="checkbox" id="derecho-procesal" name="derecho-procesal" value="derecho-procesal" />
          <span className="checkmark"></span>
        </label>
        <br />{" "}
        <label className="container-checkbox" for="derecho-tributario">
          {" "}
          Derecho Tributario o Fiscal
          <input type="checkbox" id="derecho-tributario" name="derecho-tributario" value="derecho-tributario" />
          <span className="checkmark"></span>
        </label>
        <br />{" "}
        <label className="container-checkbox" for="derecho-internacional-publico">
          {" "}
          Derecho Internacional Público
          <input type="checkbox" id="derecho-internacional-publico" name="derecho-internacional-publico" value="derecho-internacional-publico" />
          <span className="checkmark"></span>
        </label>
        <br />{" "}
        <label className="container-checkbox" for="derecho-civil">
          {" "}
          Derecho Civil
          <input type="checkbox" id="derecho-civil" name="derecho-civil" value="derecho-civil" />
          <span className="checkmark"></span>
        </label>
        <br />{" "}
        <label className="container-checkbox" for="derecho-mercantil">
          {" "}
          Derecho Mercantil
          <input type="checkbox" id="derecho-mercantil" name="derecho-mercantil" value="derecho-mercantil" />
          <span className="checkmark"></span>
        </label>
        <br />{" "}
        <label className="container-checkbox" for="derecho-internacional-privado">
          {" "}
          Derecho Internacional Privado
          <input type="checkbox" id="derecho-internacional-privado" name="derecho-internacional-privado" value="derecho-internacional-privado" />
          <span className="checkmark"></span>
        </label>
        <br />
      </div>
    </div>
  );
}

export default FilterListContainer;

import React from "react";
import { Link } from "react-router-dom";
import './CategoriaLabels.css'

function CategoriaLabels() {
  return (
    <div className="container-categoria-labels">
      <div className="container-flex-categoria-label">
        <Link to='/document/category/1'><button>Contratos</button></Link>
        <Link to='/document/category/2'><button>Acuerdos</button></Link>
        <Link to='/document/category/3'><button>Templates</button></Link>
      </div>
    </div>
  );
}

export default CategoriaLabels;

import React from "react";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import "./ContainerButtonFiltersDocuments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpAZ } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownZA } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {faFilter } from "@fortawesome/free-solid-svg-icons";
import {faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";


function ContainerButtonFiltersDocuments({ buttonFilter }) {
  return (
    <div
      className={buttonFilter ? "button-filters" : "button-filters-not-display"}
    >
      <div className="button-filters-flex-scroll">
        <ButtonFilter className="scroll-y" icon={<FontAwesomeIcon icon={faFilter} />}/>
        <ButtonFilter className="scroll-y" icon={<FontAwesomeIcon icon={faArrowUpAZ} />} name="A-Z" />
        <ButtonFilter className="scroll-y" icon={<FontAwesomeIcon icon={faArrowDownZA} />} name="Z-A" />
        <ButtonFilter className="scroll-y" icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />} name="Precio" />
        <ButtonFilter className="scroll-y" icon={<FontAwesomeIcon icon={faStar} />} name="Favoritos" />
        <ButtonFilter className="scroll-y" icon={<FontAwesomeIcon icon={faCloudArrowUp} />} name="Descargados" />
        {/** <ButtonFilter className="scroll-y" icon={<FontAwesomeIcon icon={faFileWord} />} name="Contratos" />
        <ButtonFilter className="scroll-y" icon={<FontAwesomeIcon icon={faFileWord} />} name="Acuerdos" />
        <ButtonFilter className="scroll-y" icon={<FontAwesomeIcon icon={faFileWord} />} name="Templates" /> */}
      </div>
    </div>
  );
}

export default ContainerButtonFiltersDocuments;

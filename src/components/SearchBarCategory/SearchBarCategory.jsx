import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBarCategory.css";
import { useParams } from "react-router-dom";

function SearchBarCategory() {
  let style = {
    marginButtom: "1em",
  };

  const [querry, setQuerry] = useState([{categoryId: ''}]);

  const handleChange = (event) => {
    setQuerry({ value: event.target.value });
  };
  const handleSubmit = () => {
    let value = document.querySelector(".input-search-category").value
    if(value == "Contract"){
        
    } else if (value == "Agreements"){

    }
  };

 

  let categoryId = useParams().categoryId;

  return (
    <div className="search-container" style={style}>
      <div action="/document/category/" onClick={()=> handleSubmit()}>
        <input className="input-search-category" type="text" placeholder="Search category..."/>
        <button className="search-icon" type="submit">
          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </button>
      </div>
    </div>
  );
}

export default SearchBarCategory;

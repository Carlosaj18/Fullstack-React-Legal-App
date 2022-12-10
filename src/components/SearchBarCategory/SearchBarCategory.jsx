import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBarCategory.css";
import ContainerDocuments from "../ContainerDocuments/ContainerDocuments";
import { Link } from "react-router-dom";

function SearchBarCategory() {
  let categoryId;
  let urlCategory;
  let style = {
    marginButtom: "1em",
  };

  const [querry, setQuerry] = useState([{ value: "" }]);

  const handleChange = (event) => {
    setQuerry({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    // How to handle change in input before sumbit 
    /*let value = document.querySelector(".input-search-category").value;
    console.log(value);
    if (value == "Contract") {
      categoryId = 1;
    } else if (value == "Agreements") {
      categoryId = 2;
    } else {
      categoryId = undefined;
    }*/
    alert('A name was submitted: ' + querry.value);
    event.preventDefault();
  };

  urlCategory = `/document/category/${categoryId}`

  ///let categoryId = useParams().categoryId;

  return (
    <>
      <div className="search-container" style={style}>
        <form action="/document/category/" onSubmit={() => handleSubmit()}>
          <input
            className="input-search-category"
            type="text"
            placeholder="Search category..."
          />
          <button className="search-icon" type="submit">
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </button>
        </form>
      </div>
      <ContainerDocuments categoryId={urlCategory}/>
    </>
  );
}

export default SearchBarCategory;

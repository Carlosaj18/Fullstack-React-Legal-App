import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBarCategory.css";
import ContainerDocuments from "../ContainerDocuments/ContainerDocuments";
import { Link } from "react-router-dom";

function SearchBarCategory() {
  const [search, setSearch] = useState({ value: "" });
  let categoryId;
  function handleChange(event) {
    setSearch({ value: event.target.value });
    console.log(search);
  }

  function categoryNumber(value) {
    let categoryId;
    if (value === "Contract") {
      categoryId = 1;
    } else if (value === "Agreements") {
      categoryId = 2;
    } else {
      categoryId = undefined;
    }
    return categoryId;
  }

  function handleSubmit(event) {
    alert("A name was submitted: " + search.value);
    categoryId = categoryNumber(search.value);
    let urlCategory = `/document/category/${categoryId}`;
    event.preventDefault();
  }

  return (
    <>
      <div className="search-container">
        <form action="/document/category/" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="input-search-category"
            type="text"
            placeholder="Search category..."
            value={search.value}
            onChange={(e) => handleChange(e)}
          />
          <button className="search-icon" type="submit">
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </button>
        </form>
      </div>
      <ContainerDocuments categoryId={categoryId}/>
    </>
  );
}

export default SearchBarCategory;

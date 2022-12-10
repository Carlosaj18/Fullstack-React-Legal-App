import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBarCategory.css";
import ContainerDocuments from "../ContainerDocuments/ContainerDocuments";

function SearchBarCategory() {
  const [search, setSearch] = useState({ value: "" });

  function handleChange(event) {
    setSearch({ value: event.target.value }); // Seteo el valor del search
  }

  function handleSubmit(event) {
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
      <ContainerDocuments categoryId={search.value} />
    </>
  );
}

export default SearchBarCategory;

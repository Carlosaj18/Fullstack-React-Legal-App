import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function SearchNabBar({
  onFilterTextChange,
  filterText,
  setButtonFilter,
  buttonFilter,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function onClickButtonFilter(){
    return setButtonFilter(!buttonFilter)
  }

  return (
    <>
      <div className="search-container">
        <form action="/" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="input-search-category"
            type="text"
            placeholder="Search documents..."
            value={filterText}
            onChange={(e) => onFilterTextChange(e.target.value)}
          />
          <button className="search-icon" type="submit">
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </button>
        </form>
        <button
          onClick={() => onClickButtonFilter()}
          type="submit"
          className="filters"
        >
          <i>
            <FontAwesomeIcon icon={faFilter} />
          </i>
          Filters
        </button>
      </div>
    </>
  );
}

export default SearchNabBar;

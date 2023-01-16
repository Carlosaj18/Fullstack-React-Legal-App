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
      <ContainerDocuments />
    </>
  );
}

export default SearchBarCategory;

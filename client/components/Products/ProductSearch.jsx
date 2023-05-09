import React, { useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import { useSearch } from "../../context/SearchContextProvider";
import { useNavigate } from "react-router-dom";

export default function ProductSearch() {
  const {
    showingSearch,
    toggleSearchContainer,
    searchValue,
    setIsSearchBarEmpty,
    setSearchValue,
  } = useSearch();

  const navigate = useNavigate();

  useEffect(() => {
    setIsSearchBarEmpty(searchValue.trim() === "" ? true : false);
  }, [searchValue]);

  function onSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      toggleSearchContainer();
      navigate("/display");
    }
  }

  return (
    <div className={(showingSearch ? "showing " : "") + "search-container"}>
      <input
        type="text"
        onChange={(e) => onSearch(e)}
        value={searchValue}
        onKeyDown={handleKeyDown}
      />
      <a href="#" onClick={() => toggleSearchContainer()}>
        <i className="material-icons close">close</i>
      </a>
      {searchValue && <ProductDisplay searchTerms={searchValue} />}
    </div>
  );
}

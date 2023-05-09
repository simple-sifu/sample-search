import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchContextProvider = ({ children }) => {
  const [showingSearch, setShowingSearch] = useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearchBarEmpty, setIsSearchBarEmpty] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function toggleSearchContainer() {
    setSearchValue("");
    setShowingSearch(() => !showingSearch);
  }

  return (
    <SearchContext.Provider
      value={{
        showingSearch,
        setShowingSearch,
        searchValue,
        toggleSearchContainer,
        isSearchBarEmpty,
        setIsSearchBarEmpty,
        setSearchValue,
        data,
        setData,
        error,
        setError,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

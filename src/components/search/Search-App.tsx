import React, { useState } from "react";
import SearchComponent from "./Search";
type IProps = {};

const SearchAppComponent = (props: IProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: any) => {
    setSearchTerm(e.currentTarget.value);
  };
  return (
    <div>
      <h1>Search for users:</h1>
      <SearchComponent value={searchTerm} onChange={handleChange}>
        Enter your term:
      </SearchComponent>
      <p>Searches for {searchTerm ? searchTerm : "..."}</p>
    </div>
  );
};

export default SearchAppComponent;

import React, { useState } from "react";

function SearchContacts(props) {
  const [searchResult, searchContact] = useState("");
  const handleSearch = (event) => {
    searchContact((prevState) => {
      return { ...prevState, searchResult: event.target.value };
    });
  };
  return (
    <>
      <input type="text" value={searchResult} onChange={() => handleSearch()} />
    </>
  );
}

export default SearchContacts;
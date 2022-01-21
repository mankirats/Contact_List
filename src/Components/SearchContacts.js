import React, { useState } from "react";

function SearchContacts(props) {
  let [searchResult, setSearchResult] = useState("");

  const handleSearch = (event) => {
    setSearchResult((searchResult = event.target.value));
  };

  return (
    <>
      <input type="text" value={searchResult} onChange={handleSearch} />
    </>
  );
}

export default SearchContacts;

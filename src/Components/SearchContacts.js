import React, { useState } from "react";

function SearchContacts(props) {
  let [searchInput, setSearchInput] = useState("");
  handleInputChange = (event) => {
    setSearchInput((searchInput = event.target.value));
    console.log(searchInput);
  };
  return (
    <>
      <input
        type="text"
        value={searchInput}
        onChange={(event) => handleInputChange(event)}
      />
    </>
  );
}

export default SearchContacts;

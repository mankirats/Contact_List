import React, { useState } from "react";

function SearchContacts(props) {
  let [searchInput, setSearchInput] = useState("");
  const handleInputChange = (event) => {
    setSearchInput((searchInput = event.target.value));
    props.liftingSearchInput(searchInput);
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

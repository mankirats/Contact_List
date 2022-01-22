import React, { useState } from "react";

function SearchContacts(props) {
  let [searchInput, setSearchInput] = useState("");
  return (
    <>
      <input
        type="text"
        value={searchInput}
        onChange={(event) => setSearchInput((searchInput = event.target.value))}
      />
    </>
  );
}

export default SearchContacts;

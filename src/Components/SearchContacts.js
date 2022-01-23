import React, { useState } from "react";
import styled from "styled-components";

const SearchField = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: #474747;
`;

function SearchContacts(props) {
  let [searchInput, setSearchInput] = useState("");
  const handleInputChange = (event) => {
    setSearchInput((searchInput = event.target.value));
    props.liftingSearchInput(searchInput);
  };

  return (
    <>
      <SearchField
        type="text"
        value={searchInput}
        onChange={(event) => handleInputChange(event)}
        placeholder="Search Contacts"
      />
    </>
  );
}

export default SearchContacts;

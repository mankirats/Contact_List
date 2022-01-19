import React, { useState } from "react";

function SearchContacts(props) {
  let [searchResult, setSearchResult] = useState("");

  const handleSearch = (event) => {
    setSearchResult((searchResult = event.target.value));
    searchedContacts();
  };
  const searchedContacts = () => {
    let re = new RegExp(searchResult, "gi");
    let result = props.contacts
      .map((c) => re.exec(c.name))
      .filter((result) => result != null && result["input"] != null)
      .map((r) => r["input"]);
    console.log(result);
    return result;
  };
  return (
    <>
      <input type="text" value={searchResult} onChange={handleSearch} />
    </>
  );
}

export default SearchContacts;

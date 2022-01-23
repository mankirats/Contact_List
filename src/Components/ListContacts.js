import React, { useState } from "react";
import propTypes from "prop-types";
import SearchContacts from "./SearchContacts";
import escapeStringRegexp from "escape-string-regexp";

function ListContacts(props) {
  let [contactSearch, setContactSearch] = useState("");

  const handlingSearch = (searchKey) => {
    setContactSearch((contactSearch = searchKey));
    console.log(contactSearch);
  };
  let showingContacts;
  if (contactSearch) {
    const match = new RegExp(escapeStringRegexp(contactSearch), "i");
    showingContacts = props.contacts.filter((c) => match.test(c.name));
  } else {
    showingContacts = props.contacts;
  }

  return (
    <>
      <SearchContacts
        liftingSearchInput={(val) => handlingSearch(val)}
      ></SearchContacts>
      <ul>
        {showingContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}
            <button onClick={() => props.remove(contact)}>REMove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

ListContacts.propTypes = {
  contacts: propTypes.array.isRequired,
  remove: propTypes.func.isRequired,
};

export default ListContacts;

import React, { useState } from "react";
import propTypes from "prop-types";
import SearchContacts from "./SearchContacts";
import escapeStringRegexp from "escape-string-regexp";

function ListContacts(props) {
  let [contactSearchResults, setContactSearchResults] = useState([]);
  const contactResults = (searchKey) => {
    const match = new RegExp(escapeStringRegexp(searchKey), "i");
    setContactSearchResults(
      (contactSearchResults = props.contacts.filter((c) => match.test(c.name)))
    );
    console.log(contactSearchResults);
  };

  return (
    <>
      <SearchContacts
        triggerSearch={(val) => contactResults(val)}
      ></SearchContacts>
      <ul>
        {contactSearchResults.map((contact) => (
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

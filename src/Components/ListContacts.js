import React, { useState } from "react";
import propTypes from "prop-types";
import SearchContacts from "./SearchContacts";
import escapeStringRegexp from "escape-string-regexp";

function ListContacts(props) {
  return (
    <>
      <SearchContacts></SearchContacts>
      <ul>
        {props.contacts.map((contact) => (
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
